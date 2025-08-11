import { forwardRef } from "react";
import classNames from "classnames";
import EdgeFade from "./EdgeFade";

interface CategoryTournamentProps {
  bgColor: string;
  text: string;
  isCollapsed: boolean;
}

const CategoryTournament = forwardRef<HTMLSpanElement, CategoryTournamentProps>(
  ({ bgColor, text, isCollapsed }, ref) => {
    return (
      <div className="mt-2 flex flex-row">
        <div
          className={classNames(
            "w-fit flex-none py-0.5",
            `bg-[${bgColor}]`,
            isCollapsed ? "max-w-4/10" : "max-w-8/10",
          )}
        >
          <div className="flex pl-2">
            <span
              ref={ref}
              className={classNames(
                "overflow-hidden text-[12px] font-normal tracking-[0.32px] text-ellipsis",
                isCollapsed ? "whitespace-nowrap" : "",
              )}
              title="Equipos nacionales. Campeonato Africano de Naciones"
            >
              {text}
            </span>
          </div>
        </div>
        <EdgeFade bgColor={bgColor} />
      </div>
    );
  },
);

CategoryTournament.displayName = "CategoryTournament";

export default CategoryTournament;
