import React from "react";
import TotalAids from "../../../Components/Charts/Bar/TotalAids";
import Finance from "../../../Components/Charts/Finance/Finance";

const Health = () => {
  
  return (
    <div>
      <h1 className="text-4xl font-light text-[#262626] text-center mt-6">
        Departement Of <span className="text-[#8DC63F]">Health</span>
      </h1>
      <Finance type={'health'}/>
      <TotalAids/>
      
    </div>
  );
};

export default Health;
