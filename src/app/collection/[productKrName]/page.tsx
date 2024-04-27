import { useParams } from "next/navigation";
import React from "react";

const CollectionDtPage = ({
  params,
}: {
  params: { productKrName: string };
}) => {
  console.log("params: ", params.productKrName);
  console.log(decodeURI(params.productKrName));
  return <div>collectionDtPage</div>;
};

export default CollectionDtPage;
