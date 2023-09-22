import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { styles } from "../utils/styles";

const VerifyEmail = () => {
  const [invalidError, setInvalidError] = useState(false);

  const inputRefs = [
    useRef < HTMLInputElement > null,
    useRef < HTMLInputElement > null,
    useRef < HTMLInputElement > null,
    useRef < HTMLInputElement > null,
  ];
  const [otp, setOtp] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
  });
  return (
    <div>
      <h1 className={`${styles.title}`}>Verify Your Account</h1>
      <div className="flex ic justify-center">
        <VscWorkspaceTrusted size={40} className=" text-[#2190ff]" />
      </div>
      <div className="">
        {Object.keys(otp).map((pin, index) => (
          <input
            type="number"
            key={index}
            ref={inputRefs[index]}
            className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins text-center 
                ${
                  invalidError
                    ? "shake border-red-500"
                    : "dark:border-white border-[#0000004a]"
                }`}
                placeholder=""
                maxLength={1}
                value={otp}
                onChange={(e)=> handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default VerifyEmail;
