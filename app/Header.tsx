import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            THE{" "}
            <span className="underline decoration-6 decoration-yellow-500">
              {" "}
              DAILY
            </span>{" "}
            VIBE
          </h1>
        </Link>
        <div className="flex items-center justify-end spax-x-2"></div>
      </div>

      <NavLinks />

      <SearchBox />
    </header>
  );
}

export default Header;
