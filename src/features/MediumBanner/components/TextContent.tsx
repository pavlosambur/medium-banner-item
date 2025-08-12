import classNames from "classnames";
import { useState, useRef, useEffect } from "react";

import EdgeFade from "./EdgeFade";
import CategoryTournament from "./CategoruTournament";
import DateStage from "./DateStage";
import Competitor from "./Competitor";

const TextContent = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const [isTruncated, setIsTruncated] = useState(false);

  const tournamentRef = useRef<HTMLSpanElement>(null);
  const competitor1Ref = useRef<HTMLSpanElement>(null);
  const competitor2Ref = useRef<HTMLSpanElement>(null);

  // Функція перевірки обрізання
  const checkTruncate = () => {
    const elTournament = tournamentRef.current;
    const elcompetitor1 = competitor1Ref.current;
    const elcompetitor2 = competitor2Ref.current;
    if (!elTournament || !elcompetitor1 || !elcompetitor2) return;
    const truncated =
      elTournament.scrollWidth > elTournament.clientWidth ||
      elcompetitor1.scrollWidth > elcompetitor1.clientWidth ||
      elcompetitor2.scrollWidth > elcompetitor2.clientWidth;
    setIsTruncated(truncated);
  };

  // Міряємо на mount і при ресайзі вікна
  useEffect(() => {
    checkTruncate();
    window.addEventListener("resize", checkTruncate);
    return () => window.removeEventListener("resize", checkTruncate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleCollapsed = () => {
    if (isTruncated) setIsCollapsed((prev) => !prev);
  };

  const bgColor = isCollapsed
    ? "var(--background-content-transparent)"
    : "var(--background-content)";

  // const bgColor = "blue";
  console.log("bgColor", bgColor);
  return (
    <>
      <div className="flex flex-col select-none" onClick={toggleCollapsed}>
        <CategoryTournament
          ref={tournamentRef}
          bgColor={bgColor}
          text="Equipos nacionales. Campeonato Africano de Naciones"
          // text="Equipos nacionales"
          isCollapsed={isCollapsed}
        />
        <DateStage isCollapsed={isCollapsed} bgColor={bgColor} />

        <div className="mt-1 flex flex-row">
          <div
            className={classNames(
              "w-fit flex-none py-0.5",
              isCollapsed ? "max-w-2/10" : "max-w-8/10",
            )}
            style={{ backgroundColor: bgColor }}
          >
            <Competitor text="Arizona Diamondbacks" ref={competitor1Ref} />
            <Competitor text="San Francisco Giants" ref={competitor2Ref} />
          </div>
          <EdgeFade bgColor={bgColor} />
        </div>
      </div>
    </>
  );
};

export default TextContent;
