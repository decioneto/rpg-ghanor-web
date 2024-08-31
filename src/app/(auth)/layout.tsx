import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
}

export default function AuthLayout({children}: AuthLayoutProps) {
  return (
    <div className="bg-ghanor-neutral-200 w-screen min-h-screen relative flex">
      <div className="bg-scale-bg-l w-[300px] h-screen bg-no-repeat bg-cover bg-right" />
      <div className="text-white flex-1">{ children }</div>
      <div className="bg-scale-bg-r w-[300px] h-screen bg-no-repeat bg-cover" />
    </div>
  )
}