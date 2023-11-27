import { useMemo } from "react";

const ContentTypeTextOnlyState = ({
  option1,
  contentTypeTextOnlyStateAlignSelf,
}) => {
  const contentTypeTextOnlyStateStyle = useMemo(() => {
    return {
      alignSelf: contentTypeTextOnlyStateAlignSelf,
    };
  }, [contentTypeTextOnlyStateAlignSelf]);

  return (
    <div
      className="relative bg-action-hover flex flex-col py-1.5 px-4 items-start justify-start text-left text-base text-text-primary font-components-input-label"
      style={contentTypeTextOnlyStateStyle}
    >
      <div className="relative tracking-[0.15px] leading-[150%]">{option1}</div>
    </div>
  );
};

export default ContentTypeTextOnlyState;
