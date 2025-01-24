import React from "react";
import CreateTournament from "../../../components/Dashboard/CreateTournament";

const Dashboard = () => {
  return (
    <div className="my-4 mx-4 space-y-4">
      <h1 className="font-bold text-2xl flex justify-center">Dashboard</h1>
      <CreateTournament />
    </div>
  );
};

export default Dashboard;