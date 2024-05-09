import getCurrentUser from "@/actions/getCurrentUser";
import React from "react";

const Reservation = async () => {
  const currentUser = await getCurrentUser();
  console.log("currentUser:", currentUser);
  return <div>Reservation</div>;
};

export default Reservation;
