import heroPatternDesktop from "@/assets/pattern-bg-desktop.png";
import heroPatternMobile from "@/assets/pattern-bg-mobile.png";
import SearchInput from "../SearchInput";

export default function Hero() {
  return (
    <header className="relative flex min-h-[300px] w-screen items-center">
      <div className="relative z-10 w-full">
        <h1 className="text-center text-lg font-bold text-white">IP Address</h1>
        <SearchInput />
      </div>
      <div className="absolute inset-0">
        <img src={heroPatternDesktop} className="hidden h-full w-full object-cover sm:block" />
        <img src={heroPatternMobile} className="block h-full w-full object-cover sm:hidden" />
      </div>
    </header>
  );
}
