import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { styles } from "../utils/styles";

const VerifyEmail = ({setAuth}) => {
  const [invalidError, setInvalidError] = useState(false);
  const [isVerified, setIsVerified] = useState(false)
  const [disabled, setDisabled] = useState(true);
  const [pin_01, setPin_01] = useState("");
  const [pin_02, setPin_02] = useState("");
  const [pin_03, setPin_03] = useState("");
  const [pin_04, setPin_04] = useState("");

  const enteredOtp = pin_01 + pin_02 + pin_03 + pin_04;

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();

  const sentOtp = 8976

  const handleOtp = () =>{

    const enteredOtp = pin_01 + pin_02 + pin_03 + pin_04;
    const otp = parseInt(enteredOtp)
    
    if (sentOtp === otp) {
      setIsVerified(true)
    } else {
      setInvalidError(true)
      setPin_01('')
      setPin_02('')
      setPin_03('')
      setPin_04('')
      firstInput.current.focus()
    }

  }

  // const inputRefs = [
  //   useRef < HTMLInputElement > (null),
  //   useRef < HTMLInputElement > (null),
  //   useRef < HTMLInputElement > (null),
  //   useRef < HTMLInputElement > (null),
  // ];
  // const [otp, setOtp] = useState({
  //   0: "",
  //   1: "",
  //   2: "",
  //   3: "",
  // });

  return (
    <div className="flex flex-col gap-5">
      <h1 className={`${styles.title}`}>Verify Your Account</h1>
      <div className="flex ic justify-center">
        <VscWorkspaceTrusted size={60} className=" text-[#2190ff]" />
      </div>
      <div className="flex gap-2 w-full items-center justify-center">
        {/* {Object.keys(otp).map((pin, index) => (
          <input
            type="number"
            onWheel='false'
            key={index}
            ref={inputRefs[index]}
            className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins text-center focus:border-pink-700
                ${
                  invalidError
                    ? "shake border-red-500"
                    : "dark:border-white border-[#0000004a]"
                }`}
                placeholder=""
                maxLength={1}
                value={otp}
                // onFocus={()=>inputFocus(index).current.focus()}
                onChange={(e)=> handleInputChange(index, e.target.value)}
          />
        ))} */}

        <input
          type="number"
          ref={firstInput}
          className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins text-center focus:border-pink-700
                ${
                  invalidError
                    ? "shake border-red-500" : isVerified ? 'border-green-500'
                    : "dark:border-white border-[#0000004a]"
                }`}
          placeholder=""
          maxLength={1}
          value={pin_01}
          // onFocus={()=>firstInput.current.focus()}
          onChange={(e) => {
            setPin_01(e.target.value);
            e.target.value.length >= 1 && secondInput.current.focus();
          }}
        />
        <input
          type="number"
          ref={secondInput}
          className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins text-center focus:border-pink-700
                ${
                  invalidError
                    ? "shake border-red-500" : isVerified ? 'border-green-500'
                    : "dark:border-white border-[#0000004a]"
                }`}
          placeholder=""
          maxLength={1}
          value={pin_02}
          // onFocus={()=>secondInput.current.focus()}
          onChange={(e) => {
            setPin_02(e.target.value);
            e.target.value.length >= 1
              ? thirdInput.current.focus()
              : firstInput.current.focus();
          }}
        />
        <input
          type="number"
          ref={thirdInput}
          className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins text-center focus:border-pink-700
                ${
                  invalidError
                    ? "shake border-red-500" : isVerified ? 'border-green-500'
                    : "dark:border-white border-[#0000004a]"
                }`}
          placeholder=""
          maxLength={1}
          value={pin_03}
          // onFocus={()=>thirdInput.current.focus()}
          onChange={(e) => {
            setPin_03(e.target.value);
            e.target.value.length >= 1
              ? fourthInput.current.focus()
              : secondInput.current.focus();
          }}
        />
        <input
          type="number"
          ref={fourthInput}
          className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins text-center focus:border-pink-700
                ${
                  invalidError
                    ? "shake border-red-500" : isVerified ? 'border-green-500'
                    : "dark:border-white border-[#0000004a]"
                }`}
          placeholder=""
          maxLength={1}
          value={pin_04}
          // onFocus={()=>fourthInput.current.focus()}
          onChange={(e) => {
            setPin_04(e.target.value);
            e.target.value.length >= 1
              ? setDisabled(false)
              : thirdInput.current.focus();
          }}
        />
      </div>
      <button className="block bg-[#2190ff] font-Poppins font-medium py-2 rounded-md"
      onClick={handleOtp}>
        Verify OTP
      </button>
      <h5 className='text-center font-Poppins dark:text-white text-black text-[12px]'>Go back to sign in?
            <span className='text-[#2190ff] cursor-pointer ml-2'
            onClick={()=> setAuth('login')}>Sign in</span>
            </h5>
    </div>
  );
};

export default VerifyEmail;
