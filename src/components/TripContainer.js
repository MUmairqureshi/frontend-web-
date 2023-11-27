import { useMemo } from "react";

const TripContainer = ({
  destinationPrice,
  destinationPriceRange,
  propBackgroundImage,
  propWidth,
  propDisplay,
  propWidth1,
  propLeft,
}) => {
  const parisCardStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const detailsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle = useMemo(() => {
    return {
      display: propDisplay,
      width: propWidth1,
    };
  }, [propDisplay, propWidth1]);

  const fromStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] w-3/12 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
      <div
        className="self-stretch relative h-[182px] overflow-hidden shrink-0 bg-[url(/public/pariscard@3x.png)] bg-cover bg-no-repeat bg-[top]"
        style={parisCardStyle}
      >
        <div className="absolute w-[calc(100%_-_0.6px)] top-[0px] right-[0.3px] left-[0.3px] flex flex-row py-2 px-3 box-border items-start justify-start">
          <b className="flex-1 relative text-xl tracking-[0.02em] font-components-input-label text-primary-contrast text-left">
            {destinationPrice}
          </b>
          <div className="relative w-[90.9px] h-[59px]" style={detailsStyle}>
            <div
              className="absolute top-[21px] left-[0px] text-19xl leading-[38px] font-baloo-bhai text-primary-contrast text-right inline-block w-[90.9px]"
              style={divStyle}
            >
              {destinationPriceRange}
            </div>
            <div
              className="absolute top-[0px] left-[38.4px] text-base tracking-[0.04em] uppercase font-components-input-label text-primary-contrast text-right inline-block w-[52.5px]"
              style={fromStyle}
            >
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default TripContainer;
