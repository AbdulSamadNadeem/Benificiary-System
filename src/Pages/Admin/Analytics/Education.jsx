import React from "react";
import TotalAids from "../../../Components/Charts/Bar/TotalAids";
import Finance from "../../../Components/Charts/Finance/Finance";

const Education = () => {
  return (
    <div>
      <h1 className="text-4xl font-light text-[#262626] text-center mt-6">
        Departement Of <span className="text-[#8DC63F]">Education</span>
      </h1>
      <Finance type={'edu'}/>
      <TotalAids/>
      
    </div>
  );
};

export default Education;
