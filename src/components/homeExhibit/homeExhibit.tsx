import { getArtList } from "@/actions/getArtList";

export default async function HomeExhibit() {
  const getExhibit = await getArtList("ListExhibitionOfSeoulMOAInfo/1/20/");
  console.log(getExhibit);

  return (
    <div>
      <h1>전시</h1>
    </div>
  );
}
