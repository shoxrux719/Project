import React from "react";
import { ArrowUpRight } from "lucide-react";

const Card: React.FC = () => {
  return (
    <div className=" w-[411px] h-[498px] rounded-[40px] bg-[#EEF2F9] px-5 pt-5 ">
    <div className='@apply w-[371px] h-[460px] rounded-[10px]  bg-[#C4C4C4] '>
      <div className=' @apply w-72 h-[307px] mb-16'>
      </div>
      <div className="flex align-center justify-between px-8">
        <div>
          <h2 className=" text-[#1E1E1E] text-xl font-semibold leading-[30px] text-left">DJDNF FHFNFJS</h2>
          <p className=" text-[#1E1E1E] text-base font-normal leading-6 text-left">FRONT EDN</p>
        </div>
        <div className='relative w-[42px] h-[42px] rounded-full mt-3 bg-[#ADFF0038] border-[1px] border-[#ADFF00] flex items-center justify-center'>
          <div className="absolute bottom-[4px] w-8 h-8 rounded-full mt-3 bg-[#ADFF00] flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5 text-[#0039C7]" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Card;
