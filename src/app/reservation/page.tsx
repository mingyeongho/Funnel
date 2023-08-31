"use client";

import useFunnel from "@/headless/Funnel/useFunnel";

const ReservationFunnel = () => {
  const funnelTitle = "reservation-funnel-step";
  const { Funnel, setStep } = useFunnel({ qs: funnelTitle });

  return (
    <>
      <Funnel>
        <Funnel.Step name="병원선택">
          <병원선택 onNext={() => setStep({ step: "일정선택" })} />
        </Funnel.Step>
        <Funnel.Step name="일정선택">
          <일정선택 onNext={() => setStep({ step: "정보확인" })} />
        </Funnel.Step>
        <Funnel.Step name="정보확인">
          <정보확인 onNext={() => setStep({ step: "예약성공" })} />
        </Funnel.Step>
        <Funnel.Step name="예약성공">
          <예약성공 />
        </Funnel.Step>
      </Funnel>
    </>
  );
};

export default ReservationFunnel;

const 병원선택 = ({ onNext }: { onNext: () => void }) => {
  return (
    <div>
      병원선택
      <button onClick={onNext}>다음</button>
    </div>
  );
};

const 일정선택 = ({ onNext }: { onNext: () => void }) => {
  return (
    <div>
      일정선택
      <button onClick={onNext}>다음</button>
    </div>
  );
};

const 정보확인 = ({ onNext }: { onNext: () => void }) => {
  return (
    <div>
      정보확인
      <button onClick={onNext}>다음</button>
    </div>
  );
};

const 예약성공 = () => {
  return <div>예약성공</div>;
};
