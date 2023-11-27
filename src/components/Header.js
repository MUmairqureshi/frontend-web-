import { useCallback } from "react";

const Header = () => {
  const onSearchTextClick = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  const onHotelsTextClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <header className="self-stretch bg-primary-contrast h-[77px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] text-left text-sm text-darkslategray-200 font-components-input-label lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[174px] h-[33px] overflow-hidden shrink-0">
          <img
            className="absolute h-[96.97%] w-[99.83%] top-[1.52%] right-[0.17%] bottom-[1.52%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/undefined.png"
          />
        </button>
        <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
          <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-components-input-label text-cornflowerblue-100 text-left inline-block">
              Explore
            </button>
            <div
              className="relative cursor-pointer"
              onClick={onSearchTextClick}
            >
              Search
            </div>
            <div
              className="relative cursor-pointer"
              onClick={onHotelsTextClick}
            >
              Hotels
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-components-input-label text-darkslategray-200 text-left inline-block">
              Offers
            </button>
          </div>
          <div className="flex flex-row items-center justify-center gap-[12px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 object-cover hidden md:flex"
              alt=""
              src="/undefined1.png"
            />
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/undefined2.png"
            />
            <img
              className="rounded-19xl w-9 h-9 object-cover"
              alt=""
              src="/undefined3.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
