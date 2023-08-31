"use client";

import useFunnel from "@/headless/Funnel/useFunnel";
import React from "react";

const SignUpFunnel = () => {
  const { Funnel, setStep } = useFunnel({ qs: "signup-funnel-step" });

  return (
    <Funnel>
      <Funnel.Step name="전화번호">
        <div>
          전화번호
          <button onClick={() => setStep({ step: "집주소" })}>다음</button>
        </div>
      </Funnel.Step>
      <Funnel.Step name="집주소">
        <div>
          집주소
          <button onClick={() => setStep({ step: "회사주소" })}>다음</button>
        </div>
      </Funnel.Step>
    </Funnel>
  );
};

export default SignUpFunnel;
