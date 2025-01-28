"use client";
import React, { useState } from "react";
import CreateTournament from "../../../components/Dashboard/CreateTournament";
import SoloRegisterCount from "../../../components/Dashboard/SoloRegisterCount";
import SoloRegisterCountPerTournament from "../../../components/Dashboard/SoloRegisterCountPerTournament";
import UpcomingTornament from "../../../components/Home/UpcomingTornament";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4 mx-4 space-y-4">
      <h1 className="font-bold text-2xl flex justify-center">Dashboard</h1>
      <SoloRegisterCount />
      <SoloRegisterCountPerTournament />
      <div className="">
        <UpcomingTornament isOpen={isOpen} isAdmin={true} />
        <CreateTournament isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Dashboard;
