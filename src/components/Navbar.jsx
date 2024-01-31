import Link from "next/link";
import { Icons } from "./Icons";

const Navbar = async () => {
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b bprder-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl mx-auto flex justify-between items-center gap-2">
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6"></Icons.logo>
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Bredit
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;