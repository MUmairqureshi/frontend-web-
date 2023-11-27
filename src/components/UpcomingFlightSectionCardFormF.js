import { useCallback } from "react";
import FlightMainContainer from "./FlightMainContainer";
import FlightMainContainer1 from "./FlightMainContainer1";

const UpcomingFlightSectionCardFormF = () => {
  const onHotelClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <div className="self-stretch flex flex-col items-start justify-start text-left text-lg text-darkslategray-300 font-components-input-label md:block">
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <b className="self-stretch relative tracking-[0.04em] uppercase">
          Recent Searches
        </b>
        <div className="self-stretch flex flex-col items-start justify-center gap-[36px] text-5xl text-cornflowerblue-200 md:flex-col">
          <div className="self-stretch flex flex-row items-center justify-center gap-[15px] md:flex-col sm:flex-row">
            <FlightMainContainer departOn="Depart on: " />
            <FlightMainContainer1 />
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[20px] text-lg text-lightgray md:w-full">
            <div className="self-stretch relative tracking-[0.04em] uppercase">
              Prepare for your trip
            </div>
            <div className="self-stretch flex flex-row items-start justify-between sm:flex-row sm:text-center sm:flex-wrap sm:justify-between sm:ml-[-28px] sm:mr-[-28px]">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center"
                onClick={onHotelClick}
              >
                <img
                  className="relative w-[65.4px] h-[65.4px] object-cover"
                  alt=""
                  src="/undefined6.png"
                />
                <div className="relative text-mini tracking-[0.04em] font-components-input-label text-gray-100 text-left">
                  Hotel
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                <img
                  className="relative rounded-2xl w-[65.4px] h-[65.4px] object-cover"
                  alt=""
                  src="/undefined7.png"
                />
                <div className="relative text-mini tracking-[0.04em] font-components-input-label text-gray-100 text-center">
                  Attractions
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                <img
                  className="relative w-[65.4px] h-[65.4px] object-cover"
                  alt=""
                  src="/undefined8.png"
                />
                <div className="relative text-mini tracking-[0.04em] font-components-input-label text-gray-100 text-center">
                  Eats
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                <img
                  className="relative rounded-2xl w-[65.4px] h-[65.4px] object-cover"
                  alt=""
                  src="/undefined9.png"
                />
                <div className="relative text-mini tracking-[0.04em] font-components-input-label text-gray-100 text-center">
                  Commute
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                <img
                  className="relative rounded-2xl w-[70px] h-[65.4px] object-cover"
                  alt=""
                  src="/undefined10.png"
                />
                <div className="relative text-mini tracking-[0.04em] font-components-input-label text-gray-100 text-center inline-block w-[32.1px]">
                  Taxi
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                <img
                  className="relative rounded-2xl w-[65.4px] h-[65.4px] object-cover"
                  alt=""
                  src="/undefined11.png"
                />
                <div className="relative text-mini tracking-[0.04em] font-components-input-label text-gray-100 text-center">
                  Movies
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingFlightSectionCardFormF;
