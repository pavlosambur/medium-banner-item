import MediumBannerItem from "./components/MediumBannerItem";
import { MediumBannerContext } from "./context/MediumBannerContext";

const MediumBanner = () => {
  return (
    <>
      <MediumBannerContext.Provider
        value={{
          isPlaying: true,
          categoryTournamentTitle: "Clubes. Amistosos de equipos punteros",
          dateStageLabel: "1ª parte 26'",
        }}
      >
        <MediumBannerItem />
      </MediumBannerContext.Provider>
    </>
  );
};

export default MediumBanner;
