"use client";

import { useEffect, useState } from "react";
import styles from "./collectionList.module.css";
import { ICollection, getArtList } from "@/actions/getArtList";
import CollectionBox from "../CollectionBox/CollectionBox";

const CollectionList = () => {
  const [inputValue, setInputValue] = useState<string | number>();
  const [data, setData] = useState<ICollection[]>([]);

  const getData = async () => {
    const collection = await getArtList("SemaPsgudInfoKorInfo/1/40");
    console.log("collection: ", collection);
    // const data: ICollection[] = await collection?.data.SemaPsgudInfoKorInfo.row;
    // if (data) {
    //   setData(data);
    // }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };

  return (
    <div>
      <form className={styles.searchBar}>
        <input
          type="text"
          placeholder="미술관 소장품을 검색해보세요!"
          className={styles.searchInput}
          onChange={handleChange}
          value={inputValue}
        />
        <button className={styles.searchBtn}>검색</button>
      </form>
      <div className={styles.collectionList}>
        {data.map((item) => {
          return <CollectionBox data={item} key={item.manage_no_year} />;
        })}
      </div>
      <div className={styles.pageBtn}>
        <span className={styles.prevBtn}>{`< 이전`}</span>
        <span className={styles.nextBtn}>{`다음 >`}</span>
      </div>
    </div>
  );
};

export default CollectionList;
