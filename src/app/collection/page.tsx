import { ICollection, getArtList } from "@/actions/getArtList";
import styles from "./collection.module.css";
import Input from "@/components/Input/Input";
import CollectionBox from "@/components/CollectionBox/CollectionBox";

export default async function CollectionPage() {
  const collection = await getArtList("SemaPsgudInfoKorInfo/101/150");
  console.log("collection: ", collection?.data.SemaPsgudInfoKorInfo.row);

  const data: ICollection[] = collection?.data.SemaPsgudInfoKorInfo.row;

  return (
    <div className={styles.container} id="collection">
      <p className={styles.cTitle}>미술관 소장품</p>
      <p className={styles.cSubTitle}>
        서울시립미술관이 소장한 작품을 살펴보세요
      </p>
      <div className={styles.searchBar}>
        <input type="text" placeholder="미술관 소장품을 검색해보세요!" />
        <button className={styles.searchBtn}>검색</button>
      </div>
      <div className={styles.collectionList}>
        {data.map((item) => {
          return <CollectionBox data={item} key={item.manage_no_year} />;
        })}
      </div>
      <div className={styles.pageBtn}>
        <span>{`< 이전`}</span>
        <span>{`다음 >`}</span>
      </div>
    </div>
  );
}
