import Image from "next/image";
import styles from "./collectionSec.module.css";
import { ICollection, getArtList } from "@/actions/getArtList";

export default async function CollectionSec() {
  // 소장품가져오기
  const collection = await getArtList("SemaPsgudInfoKorInfo/1/20/");
  const collectionItem: ICollection[] = await collection?.data
    .SemaPsgudInfoKorInfo.row;

  // 소장품 랜덤값
  const randomCol =
    collectionItem[Math.floor(Math.random() * collectionItem.length)];

  return (
    <div className={styles.container}>
      <h1 className={styles.collectionTitle}>
        미술관 소장품을 중심으로 한국현대미술사의
        <hr /> 중요한 맥락을 밝히는 연구물을 생산하고 출판합니다.
      </h1>
      <div className={styles.colWrapper}>
        <div className={styles.randomImg}>
          <Image
            src={randomCol.main_image}
            alt={randomCol.prdct_nm_korean}
            width={600}
            height={500}
          />
        </div>
        <div className={styles.imgInfo}>
          <h2>{randomCol.prdct_nm_korean}</h2>
          <p> - {randomCol.writr_nm}</p>
        </div>
        <div className={styles.imgYear}>{randomCol.mnfct_year}년 제작</div>
      </div>
    </div>
  );
}
