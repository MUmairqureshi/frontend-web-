const MatterhornPopup = ({ onClose }) => {
  return (
    <div className="relative rounded-lg bg-primary-contrast w-[900px] flex flex-col p-5 box-border items-start justify-start max-w-full max-h-full overflow-auto sm:p-2.5 sm:box-border">
      <iframe
        className="self-stretch relative h-[560px] sm:h-[50.625vw!important]"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default MatterhornPopup;
