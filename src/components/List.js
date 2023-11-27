import IconFalseHoverFalseDisab from "./IconFalseHoverFalseDisab";
import ContentTypeTextOnlyState from "./ContentTypeTextOnlyState";

const List = () => {
  return (
    <div className="relative w-[347px] flex flex-col py-2 px-0 box-border items-start justify-start">
      <IconFalseHoverFalseDisab
        option="Singapore - Changi (LAX)"
        iconFalseHoverFalseDisabWidth="347px"
        iconFalseHoverFalseDisabHeight="36px"
        iconFalseHoverFalseDisabAlignSelf="unset"
      />
      <ContentTypeTextOnlyState
        option1="Ninoy Aquiono International Airport (NAIA"
        contentTypeTextOnlyStateAlignSelf="stretch"
      />
      <IconFalseHoverFalseDisab
        option="Mactan International Airport (MIA)"
        iconFalseHoverFalseDisabWidth="unset"
        iconFalseHoverFalseDisabHeight="unset"
        iconFalseHoverFalseDisabAlignSelf="stretch"
      />
      <IconFalseHoverFalseDisab
        option="Clark International Airport (CIA)"
        iconFalseHoverFalseDisabWidth="unset"
        iconFalseHoverFalseDisabHeight="unset"
        iconFalseHoverFalseDisabAlignSelf="stretch"
      />
      <IconFalseHoverFalseDisab
        option="Charles de Gaulle Airport (CGA)"
        iconFalseHoverFalseDisabWidth="347px"
        iconFalseHoverFalseDisabHeight="unset"
        iconFalseHoverFalseDisabAlignSelf="unset"
      />
    </div>
  );
};

export default List;
