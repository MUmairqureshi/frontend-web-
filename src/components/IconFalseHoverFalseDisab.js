import { useMemo } from "react";

const IconFalseHoverFalseDisab = ({
  option,
  iconFalseHoverFalseDisabWidth,
  iconFalseHoverFalseDisabHeight,
  iconFalseHoverFalseDisabAlignSelf,
}) => {
  const iconFalseHoverFalseDisabStyle = useMemo(() => {
    return {
      width: iconFalseHoverFalseDisabWidth,
      height: iconFalseHoverFalseDisabHeight,
      alignSelf: iconFalseHoverFalseDisabAlignSelf,
    };
  }, [
    iconFalseHoverFalseDisabWidth,
    iconFalseHoverFalseDisabHeight,
    iconFalseHoverFalseDisabAlignSelf,
  ]);

  return (
    <div
      className="relative bg-primary-contrast flex flex-col py-1.5 px-4 items-start justify-center text-left text-base text-text-primary font-components-input-label"
      style={iconFalseHoverFalseDisabStyle}
    >
      <div className="relative tracking-[0.15px] leading-[150%]">{option}</div>
    </div>
  );
};

export default IconFalseHoverFalseDisab;
