const FlightMainContainer1 = () => {
  return (
    <div className="flex-1 rounded-lg flex flex-col p-5 items-center justify-center gap-[21px] text-left text-5xl text-cornflowerblue-200 font-components-input-label border-[1px] border-solid border-whitesmoke lg:w-[520px] md:w-full md:block md:mb-[30px] md:flex-[unset] md:self-stretch">
      <div className="self-stretch flex flex-row items-center justify-between">
        <b className="relative tracking-[0.04em] capitalize inline-block w-[44.7px] shrink-0">
          MY
        </b>
        <img
          className="relative w-[117.4px] h-6 object-cover"
          alt=""
          src="/undefined5.png"
        />
        <b className="relative tracking-[0.04em] capitalize inline-block text-right w-[51.3px] shrink-0">
          DUB
        </b>
      </div>
      <div className="relative text-xl tracking-[0.04em] capitalize text-black">
        <b>Depart on:</b>
        <span> 9 Sep 2021</span>
      </div>
    </div>
  );
};

export default FlightMainContainer1;
