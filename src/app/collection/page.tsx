import { ICollection, getArtList } from "@/actions/getArtList";
import styles from "./collection.module.css";
import Input from "@/components/Input/Input";
import CollectionBox from "@/components/CollectionBox/CollectionBox";
import CollectionList from "@/components/collectionList/CollectionList";

export default async function CollectionPage() {
  const collec = await getArtList("SemaPsgudInfoKorInfo/1/40");
  console.log(collec?.data.SemaPsgudInfoKorInfo.row);

  return (
    <div className={styles.container} id="collection">
      <p className={styles.cTitle}>미술관 소장품</p>
      <p className={styles.cSubTitle}>
        서울시립미술관이 소장한 작품을 살펴보세요
      </p>

      <CollectionList />
    </div>
  );
}
