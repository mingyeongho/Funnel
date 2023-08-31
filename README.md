# Funnel

Funnel 기능을 사용할 곳에 useFunnel을 가져온 후

```
const { Funnel, setStep } = useFunnel({ qs: funnelTitle });

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
```

위 처럼 사용
(useFunnel은 Funnel 컴포넌트와 step 이동 함수인 setStep을 리턴으로 한다.)
