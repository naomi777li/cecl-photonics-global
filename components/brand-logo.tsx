import Image from "next/image";
import Link from "next/link";

export function BrandLogo({ href, className = "" }: { href: string; className?: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return <Link className={`brand-logo ${className}`.trim()} href={href} aria-label="CECL Photonics · 中能芯光">
    <Image src={`${basePath}/brand/cecl-logo-primary.webp`} alt="CECL Photonics · 中能芯光" width={1086} height={362} priority sizes="(max-width: 560px) 142px, 190px" />
  </Link>;
}
