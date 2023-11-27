import RecommendedHolidaysCard from "./RecommendedHolidaysCard";

const RecommendedHolidaysContainer = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-center gap-[24px] text-left text-11xl text-darkslategray-300 font-components-input-label">
      <div className="self-stretch flex flex-row items-center justify-start">
        <b className="flex-1 relative tracking-[0.04em] capitalize sm:text-3xl">
          Recommended Holidays
        </b>
        <button className="cursor-pointer [border:none] p-0 bg-primary-contrast rounded-12xl w-[199.9px] flex flex-row items-start justify-start gap-[10px] md:hidden">
          <div className="relative text-lg tracking-[0.04em] font-medium font-components-input-label text-cornflowerblue-200 text-right inline-block w-[165.9px] shrink-0">
            View all holidays
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/undefined13.png"
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap">
        <RecommendedHolidaysCard
          imageSizeUrl="/undefined14.png"
          destinationName="Bali"
          packageDuration="4D3N"
          price="$899"
        />
        <RecommendedHolidaysCard
          imageSizeUrl="/undefined15.png"
          destinationName="Swiss"
          packageDuration="6D5N"
          price="$900"
        />
        <RecommendedHolidaysCard
          imageSizeUrl="/undefined16.png"
          destinationName="Boracay"
          packageDuration="5D4N"
          price="$699"
        />
        <RecommendedHolidaysCard
          imageSizeUrl="/undefined17.png"
          destinationName="Palawan"
          packageDuration="4D3N"
          price="$789"
        />
      </div>
      <div className="rounded-12xl bg-primary-contrast w-[199.9px] hidden flex-row items-start justify-start gap-[10px] text-right text-lg text-cornflowerblue-200 md:flex md:[mrgin-top:16px]">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[165.9px] shrink-0 md:w-auto">
          View all holidays
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/undefined13.png"
        />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
