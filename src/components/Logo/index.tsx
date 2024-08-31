import Image from "next/image";
import { logo } from './logos';

type LogoProps = {
  size: 'sm' | 'md' | 'lg' | 'xl';
};

export function Logo({size}: LogoProps) {
  return (
    <Image src={logo[size]} alt="Logo" />
  )
}