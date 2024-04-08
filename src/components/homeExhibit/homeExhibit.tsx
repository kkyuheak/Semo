import { IExhibit, getArtList } from "@/actions/getArtList";
import styles from "./homeExhibit.module.css";
import ExhibitSwiper from "../homeExhibitSwiper/ExhibitSwiper";

export default async function HomeExhibit() {
  const getExhibit = await getArtList("ListExhibitionOfSeoulMOAInfo/1/10/");

  const exhibit: IExhibit[] = getExhibit?.data.ListExhibitionOfSeoulMOAInfo.row;

  // console.log(exhibit);
  return (
    <div className={styles.container}>
      <h1>전시</h1>
      <ExhibitSwiper exhibit={exhibit} />
    </div>
  );
}
