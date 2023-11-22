import React, { FC, useState } from "react";

interface Props {}

const OTPinput: FC<Props> = (props): JSX.Element => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  return (
    <div className="flex justify-center items-center space-x-2">
      {otp.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <input
              type="number"
              className="w-8 h-8 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition"
            />
            {index === otp.length - 1 ? null : (
              <span className="w-2 py-0.5 bg-gray-400" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default OTPinput;
