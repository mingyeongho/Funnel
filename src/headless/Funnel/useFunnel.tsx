import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { PropsWithChildren } from "react";

export type useFunnelProps = {
  qs: string;
};

const useFunnel = ({ qs }: useFunnelProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const step = params.get(qs) ?? undefined;

  const setStep = ({ step }: { step: string }) => {
    const nextUrl = `${pathname}?${qs}=${step}`;
    router.push(nextUrl, undefined);
  };

  const Funnel = ({ children }: PropsWithChildren<{}>) => {
    return <div>{children}</div>;
  };

  const Step = ({ name, children }: PropsWithChildren<{ name: string }>) => {
    return step === name && <div>{children}</div>;
  };

  Funnel.Step = Step;

  return { Funnel, setStep };
};

export default useFunnel;
