import React from "react";
import UpcomingTornament from "./UpcomingTornament";
import Ranking from "./Ranking";
import RegisterChoose from "../Common/RegisterChoose";


const Body = () => {
  return (
    <div className="my-4 space-y-6">
      <RegisterChoose />

      <UpcomingTornament />
      <Ranking />
    </div>
  );
};

export default Body;
