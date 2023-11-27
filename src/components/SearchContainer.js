import { useCallback } from "react";

const SearchContainer = () => {
  const onSearchFlightsButtonClick = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  return (
    <div className="self-stretch relative h-[639.9px] bg-[url(/public/search-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-42xl text-primary-contrast font-baloo-bhai">
      <div className="absolute top-[0px] left-[0px] w-full h-[640px] flex flex-col py-0 px-[140px] box-border items-center justify-center gap-[43px] md:pl-[30px] md:pr-[30px] md:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-[5px]">
          <div className="self-stretch relative leading-[67px] sm:text-23xl sm:leading-[48px]">{`Let’s explore & travel the world`}</div>
          <div className="self-stretch relative text-5xl leading-[32px] font-components-input-label">
            Find the best destinations and the most popular stays!
          </div>
        </div>
        <div className="self-stretch rounded-3xs bg-primary-contrast flex flex-col p-5 items-start justify-start gap-[4px] text-left text-xl text-darkslategray-300 font-components-input-label md:flex-col sm:mt-5">
          <div className="self-stretch overflow-hidden flex flex-row p-[5px] items-center justify-start gap-[5px] sm:flex-col sm:items-start">
            <b className="flex-1 relative tracking-[0.04em] uppercase sm:w-full sm:pb-2.5 sm:mb-1.5 sm:[border-bottom:1px] sm:[border-bottom-style:solid] sm:border-b-whitesmoke sm:flex-[unset] sm:self-stretch">
              Search flights
            </b>
            <div className="flex flex-row items-center justify-start sm:w-full">
              <div className="relative w-[216.5px] h-[38px] sm:w-[100%!important]">
                <input
                  className="cursor-pointer absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-center justify-start"
                  type="radio"
                />
                <input
                  className="cursor-pointer absolute top-[0px] left-[106px] overflow-hidden flex flex-row items-center justify-start"
                  type="radio"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start text-xs text-gray-200 md:flex-col">
            <div className="flex-1 flex flex-row p-[5px] items-start justify-start gap-[10px] md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch rounded box-border h-14 flex flex-col py-0 px-3 items-start justify-start border-[1px] border-solid border-other-outlined-border">
                  <div className="bg-primary-contrast h-0.5 flex flex-row py-0 px-1 box-border items-center justify-start">
                    <div className="relative tracking-[0.15px] leading-[12px]">
                      Departure
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row py-[15px] px-0 items-center justify-start gap-[8px] text-center text-dimgray">
                    <div className="hidden flex-row items-start justify-start gap-[8px]">
                      <div className="flex flex-col items-start justify-start">
                        <div className="rounded-2xl bg-gainsboro-100 flex flex-row p-1 items-center justify-start">
                          <div className="rounded-45xl bg-silver w-6 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                            <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                              F
                            </div>
                          </div>
                          <div className="flex flex-col py-[3px] px-1.5 items-start justify-start text-left text-smi text-text-primary">
                            <div className="relative tracking-[0.16px] leading-[18px]">
                              Chip
                            </div>
                          </div>
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <div className="rounded-2xl bg-gainsboro-100 flex flex-row p-1 items-center justify-start">
                          <div className="rounded-45xl bg-silver w-6 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                            <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                              F
                            </div>
                          </div>
                          <div className="flex flex-col py-[3px] px-1.5 items-start justify-start text-left text-smi text-text-primary">
                            <div className="relative tracking-[0.16px] leading-[18px]">
                              Chip
                            </div>
                          </div>
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] text-text-primary text-left">
                      Singapore (SIN)
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch rounded box-border h-14 flex flex-col py-0 px-3 items-start justify-start border-[1px] border-solid border-other-outlined-border">
                  <div className="bg-primary-contrast h-0.5 flex flex-row py-0 px-1 box-border items-center justify-start">
                    <div className="relative tracking-[0.15px] leading-[12px]">
                      Arrival
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row py-[15px] px-0 items-center justify-start gap-[8px] text-center text-dimgray">
                    <div className="hidden flex-row items-start justify-start gap-[8px]">
                      <div className="flex flex-col items-start justify-start">
                        <div className="rounded-2xl bg-gainsboro-100 flex flex-row p-1 items-center justify-start">
                          <div className="rounded-45xl bg-silver w-6 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                            <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                              F
                            </div>
                          </div>
                          <div className="flex flex-col py-[3px] px-1.5 items-start justify-start text-left text-smi text-text-primary">
                            <div className="relative tracking-[0.16px] leading-[18px]">
                              Chip
                            </div>
                          </div>
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/undefined4.png"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <div className="rounded-2xl bg-gainsboro-100 flex flex-row p-1 items-center justify-start">
                          <div className="rounded-45xl bg-silver w-6 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                            <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                              F
                            </div>
                          </div>
                          <div className="flex flex-col py-[3px] px-1.5 items-start justify-start text-left text-smi text-text-primary">
                            <div className="relative tracking-[0.16px] leading-[18px]">
                              Chip
                            </div>
                          </div>
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/undefined4.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] text-text-primary text-left">
                      Los Angeles (LA)
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch rounded box-border h-14 flex flex-col py-0 px-3 items-start justify-start border-[1px] border-solid border-other-outlined-border">
                  <div className="bg-primary-contrast h-0.5 flex flex-row py-0 px-1 box-border items-center justify-start">
                    <div className="relative tracking-[0.15px] leading-[12px]">
                      Date
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row py-[15px] px-0 items-center justify-start gap-[8px] text-center text-dimgray">
                    <div className="hidden flex-row items-start justify-start gap-[8px]">
                      <div className="flex flex-col items-start justify-start">
                        <div className="rounded-2xl bg-gainsboro-100 flex flex-row p-1 items-center justify-start">
                          <div className="rounded-45xl bg-silver w-6 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                            <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                              F
                            </div>
                          </div>
                          <div className="flex flex-col py-[3px] px-1.5 items-start justify-start text-left text-smi text-text-primary">
                            <div className="relative tracking-[0.16px] leading-[18px]">
                              Chip
                            </div>
                          </div>
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <div className="rounded-2xl bg-gainsboro-100 flex flex-row p-1 items-center justify-start">
                          <div className="rounded-45xl bg-silver w-6 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                            <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                              F
                            </div>
                          </div>
                          <div className="flex flex-col py-[3px] px-1.5 items-start justify-start text-left text-smi text-text-primary">
                            <div className="relative tracking-[0.16px] leading-[18px]">
                              Chip
                            </div>
                          </div>
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] text-text-primary text-left">
                      01/05/2022
                    </div>
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0 object-cover opacity-[0.5]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-[5px] items-center justify-center md:w-full md:text-left">
              <div
                className="rounded bg-orange w-[164px] h-14 overflow-hidden shrink-0 flex flex-col items-center justify-center [transition:0.3s] cursor-pointer hover:bg-darkorange md:mr-[auto] sm:w-[100%!important]"
                onClick={onSearchFlightsButtonClick}
              >
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-input-label text-primary-contrast text-center inline-block w-[147px]">
                  Search flights
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
