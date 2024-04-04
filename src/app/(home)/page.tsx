import Image from "next/image";
import styles from "../page.module.css";
import { FaAnglesDown } from "react-icons/fa6";
import VisitCard from "@/components/visitCard/VisitCard";
import CollectionSec from "@/components/homeCollectionSec/CollectionSec";
import Intro from "@/components/homeIntro/Intro";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image
          src={"https://sema.seoul.go.kr/resources/assets/svg/o_symbol_b_v.svg"}
          alt="Logo"
          width={500}
          height={500}
        />
        <div className={styles.angleIcon}>
          <FaAnglesDown size={40} />
        </div>
      </main>

      {/* 도서관 소개 */}
      <section className={styles.intro} id="intro">
        <Intro />
      </section>

      {/* VisitCard */}
      <section className={styles.visitSection} id="visit">
        <div className={styles.cardWrapper}>
          <VisitCard
            title="서울시립 북서울미술관"
            description=""
            imageSrc="https://sema.seoul.go.kr/common/imgFileView?FILE_ID=906535"
            number={1}
          />
          <VisitCard
            title="서울시립 남서울미술관"
            description=""
            imageSrc="https://sema.seoul.go.kr/common/imgFileView?FILE_ID=906542"
            number={2}
          />
          <VisitCard
            title="서울시립 미술아카이브"
            description=""
            imageSrc="https://sema.seoul.go.kr/common/imgFileView?FILE_ID=906549"
            number={3}
          />
          <VisitCard
            title="서울시립 SeMO 벙커"
            description=""
            imageSrc="https://sema.seoul.go.kr/common/imgFileView?FILE_ID=906535"
            number={4}
          />
        </div>
      </section>

      {/* 소장품 소개 */}
      <section>
        <CollectionSec />
      </section>

      {/*  */}
    </div>
  );
}
