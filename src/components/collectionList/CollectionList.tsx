"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./collectionList.module.css";
import { ICollection, getArtList } from "@/actions/getArtList";
import CollectionBox from "../CollectionBox/CollectionBox";
import Pagination from "../pagination/Pagination";

const CollectionList = () => {
  let firstPage = 1;
  let lastPage = 1000;

  // 페이지네이션
  const [limitData, setLimitData] = useState<number>(40);
  const [page, setPage] = useState<number>(1);
  const offset = (page - 1) * limitData;

  const [inputValue, setInputValue] = useState<string | number>();
  const [data, setData] = useState<ICollection[]>([]);
  const [plholder, setPlHolder] = useState("소장품을 검색해보세요!");
  const selectRef = useRef<HTMLSelectElement>(null);

  const getData = async () => {
    const collection = await getArtList(
      `SemaPsgudInfoKorInfo/${firstPage}/${lastPage}`
    );
    console.log("collection: ", collection);
    const data: ICollection[] = await collection?.data.SemaPsgudInfoKorInfo.row;
    if (data) {
      setData(data);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (inputValue === "") {
      return;
    }
    e.preventDefault();

    const value: string = selectRef.current?.value!;

    const option: any = {
      nm_kor: ` / /${inputValue}/ /`,
      nm_eng: ` / / /${inputValue}/`,
      cl_nm: `${inputValue}/ / / /`,
      year: ` /${inputValue}/ / /`,
    };

    try {
      if (value && option[value]) {
        const response = await getArtList(
          `SemaPsgudInfoKorInfo/1/50/${option[value]}`
        );
        const searchData = response?.data.SemaPsgudInfoKorInfo.row;
        setData(searchData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const selectChange = () => {
    const value = selectRef.current?.value!;
    if (value === "nm_kor" || value === "nm_eng") {
      setPlHolder("소장품을 검색해보세요!");
    } else if (value === "cl_nm") {
      setPlHolder("소장품의 부문을 검색해보세요!");
    } else if (value === "year") {
      setPlHolder("원하는 소장품의 수집년도를 숫자로만 검색하세요!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <form className={styles.searchBar} onSubmit={handleSumbit}>
        <select
          ref={selectRef}
          name="category"
          id="category"
          className={styles.searchOption}
          onChange={selectChange}
        >
          <option value="nm_kor">{"작품명(국문)"}</option>
          <option value="nm_eng">{"작품명(영문)"}</option>
          <option value="year">수집연도</option>
          <option value="cl_nm">부문</option>
        </select>
        <input
          type="text"
          placeholder={plholder}
          className={styles.searchInput}
          onChange={handleChange}
          required
        />
        <button className={styles.searchBtn}>검색</button>
      </form>
      <div className={styles.collectionList}>
        {data.slice(offset, offset + limitData).map((item, i) => {
          return <CollectionBox data={item} key={i} />;
        })}
      </div>
      {/* pagination */}
      <Pagination
        page={page}
        setPage={setPage}
        limit={limitData}
        total={data.length}
      />
    </div>
  );
};

export default CollectionList;
