import styles from "./collection.module.css";
import CollectionList from "@/components/collectionList/CollectionList";

export default async function CollectionPage() {
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
