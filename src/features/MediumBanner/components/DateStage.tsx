import classNames from "classnames";
import EdgeFade from "./EdgeFade";

interface DateStageProps {
  isCollapsed: boolean;
  bgColor: string;
}

const DateStage: React.FC<DateStageProps> = ({ isCollapsed, bgColor }) => {
  return (
    <div
      className={classNames("mt-1 flex-row", isCollapsed ? "hidden" : "flex")}
    >
      <div className={classNames("w-fit flex-none py-0.5", `bg-[${bgColor}]`)}>
        <div className="flex pl-2">
          <span className="overflow-hidden text-[12px] font-normal tracking-[0.32px] text-ellipsis whitespace-nowrap uppercase">
            17 ago, 21:45
          </span>
        </div>
      </div>
      <EdgeFade bgColor={bgColor} />
    </div>
  );
};

export default DateStage;
