import classNames from "classnames";
import TextContent from "./TextContent";
import OddsField from "./OddsField";

interface MediumBannerItemProps {}

const MediumBannerItem: React.FC<MediumBannerItemProps> = ({}) => {
  return (
    <div
      className={classNames(
        "flex h-[256px] w-full overflow-hidden rounded-2xl text-white",
        // "bg-orange-900",
        "bg-[url('/bg/001.jpg')] bg-cover bg-center bg-no-repeat",
      )}
    >
      <div className="flex w-full flex-col justify-between">
        <div
          className={classNames(
            "flex h-full flex-col",
            // "bg-white"
          )}
        >
          <TextContent />
        </div>

        <div className="flex-roww-full flex items-center justify-center gap-2 p-2">
          <OddsField odd={2.23} market="1" />
          <OddsField odd={3.03} market="x" />
          <OddsField odd={3.93} market="2" />
        </div>
      </div>
    </div>
  );
};

export default MediumBannerItem;
