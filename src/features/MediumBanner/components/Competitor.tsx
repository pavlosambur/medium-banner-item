import { forwardRef } from "react";

interface CompetitorProps {
  text: string;
}

const Competitor = forwardRef<HTMLSpanElement, CompetitorProps>(
  ({ text }, ref) => {
    return (
      <div className="flex pl-2">
        <span
          ref={ref}
          className="overflow-hidden text-[12px] font-normal tracking-[0.32px] text-ellipsis whitespace-nowrap"
        >
          {text}
        </span>
      </div>
    );
  },
);

Competitor.displayName = "Competitor";

export default Competitor;
