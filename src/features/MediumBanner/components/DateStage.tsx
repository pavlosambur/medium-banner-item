import classNames from "classnames";
import EdgeFade from "./EdgeFade";
import { useMediumBanner } from "../context/MediumBannerContext";

interface DateStageProps {
  isCollapsed: boolean;
  bgColor: string;
}

const DateStage: React.FC<DateStageProps> = ({ isCollapsed, bgColor }) => {
  const { isPlaying, dateStageLabel } = useMediumBanner();

  if (isPlaying) {
    bgColor = "var(--background-content-live-transparent)";
    if (!isCollapsed) {
      bgColor = "var(--background-content-live)";
    }
  }

  console.log("bgColor", bgColor);

  return (
    <div
      className={classNames(
        "mt-1 flex-row",
        isCollapsed && !isPlaying ? "hidden" : "flex",
      )}
    >
      <div
        className={classNames("w-fit flex-none py-0.5")}
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex pl-2">
          <span className="overflow-hidden text-[12px] font-normal tracking-[0.32px] text-ellipsis whitespace-nowrap uppercase">
            {/* 17 ago, 21:45 */}
            {dateStageLabel}
          </span>
        </div>
      </div>
      <EdgeFade bgColor={bgColor} />
    </div>
  );
};

export default DateStage;
