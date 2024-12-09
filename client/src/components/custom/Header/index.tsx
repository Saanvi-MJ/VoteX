import Link from "next/link";
import { Kode_Mono } from "next/font/google";

import Navigator from "./Navigator";
import Hamburger from "./Hamburger";
import ConnectButton from "./ConnectButton";

import { cn } from "@/utils/cn";

const kode = Kode_Mono({ weight: "400", subsets: ["latin"] });

export default async function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="flex h-[10vh] items-center justify-between rounded-b-md px-4 py-2 backdrop-blur-sm sm:px-8">
        <div className="flex items-center justify-start gap-x-6 sm:gap-x-8">
          <Hamburger className="block lg:hidden" />
          <Link
            href="/"
            className={cn(
              kode.className,
              "text-nowrap text-3xl hidden sm:flex"
            )}
          >
            DemocraChain
          </Link>
          <Navigator className="hidden lg:flex" />
        </div>
        <div className="ml-8 flex">
          <ConnectButton />
        </div>
      </nav>
    </header>
  );
}