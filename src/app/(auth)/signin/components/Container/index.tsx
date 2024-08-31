import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="border border-ghanor-yellow-100 p-8 relative">
      <div className="border border-ghanor-yellow-100 w-4 h-4 absolute -top-4 -left-4" />
      <div className="border border-ghanor-yellow-100 w-4 h-4 absolute -top-4 -right-4" />
      <div className="border border-ghanor-yellow-100 w-4 h-4 absolute -bottom-4 -left-4" />
      <div className="border border-ghanor-yellow-100 w-4 h-4 absolute -bottom-4 -right-4" />
      { children }
    </div>
  );
}