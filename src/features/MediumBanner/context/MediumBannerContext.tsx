import { createContext, useContext } from "react";

// Типи даних у контексті
export interface MediumBannerContextValue {
  isPlaying: boolean;
  categoryTournamentTitle: string;
  dateStageLabel: string;
}

// Створюємо контекст з дефолтним значенням (null)
export const MediumBannerContext =
  createContext<MediumBannerContextValue | null>(null);

// Кастомний хук для зручності
export const useMediumBanner = () => {
  const ctx = useContext(MediumBannerContext);
  if (!ctx) {
    throw new Error(
      "useMediumBanner must be used within MediumBannerContext.Provider",
    );
  }
  return ctx;
};
