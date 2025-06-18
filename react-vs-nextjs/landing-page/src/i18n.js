import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { getCountryLanguage } from "./components/utils/getCountryLanguage";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Our Landing Page",
      description:
        "This is a simple multilingual landing page built with React.",
      footer: "© 2025 All rights reserved.",
      language: "Language",
    },
  },
  bn: {
    translation: {
      welcome: "আমাদের ল্যান্ডিং পেজে স্বাগতম",
      description:
        "এটি একটি সিম্পল মাল্টিল্যাঙ্গুয়াল রিয়্যাক্ট ল্যান্ডিং পেজ।",
      footer: "© ২০২৫ সর্বস্বত্ব সংরক্ষিত।",
      language: "ভাষা",
    },
  },
};

async function initI18n() {
  const countryLang = await getCountryLanguage();

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "en",
      lng: countryLang,
      interpolation: {
        escapeValue: false,
      },
    });
}

export default initI18n;
