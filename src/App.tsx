import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FamilyCareSection from "./components/FamilyCareSection";
import CommunityFeedbackSection from "./components/CommunityFeedbackSection";
import CTASection from "./components/CTASection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingLayer from "./components/LoadingLayer";
import ScrollModelSection from "./components/ScrollModelSection";

const EXTRA_IMAGES_TO_PRELOAD = [
  "/logo_transparent.png",
  "/hero_image.png",

  // Nếu modal của bạn có ảnh riêng mà lúc đầu chưa render,
  // thêm link ảnh đó vào đây.
  // "/modal-image.png",
];

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const img = new Image();

    img.onload = () => resolve();
    img.onerror = () => resolve();

    img.src = src;
  });
}

function waitForPageImages() {
  const images = Array.from(document.images);

  if (images.length === 0) {
    return Promise.resolve();
  }

  return Promise.all(
    images.map((img) => {
      if (img.complete) {
        return Promise.resolve();
      }

      return new Promise<void>((resolve) => {
        img.addEventListener("load", () => resolve(), { once: true });
        img.addEventListener("error", () => resolve(), { once: true });
      });
    }),
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadPage = async () => {
      try {
        await Promise.all([
          waitForPageImages(),
          Promise.all(EXTRA_IMAGES_TO_PRELOAD.map(preloadImage)),
          document.fonts?.ready ?? Promise.resolve(),
        ]);

        // Cho loading hiện tối thiểu một chút để không bị nháy màn hình
        await new Promise((resolve) => setTimeout(resolve, 500));
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    // Chờ React render xong DOM rồi mới quét document.images
    const timer = setTimeout(loadPage, 100);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Header />

      <main className="pt-[72px]">
        <HeroSection />
        <ScrollModelSection modelSrc="/models/nutelyt-model.glb" />
        <FeatureSection />
        <HowItWorksSection />
        <FamilyCareSection />
        <CommunityFeedbackSection />
        <CTASection />
      </main>

      <Footer />

      {isLoading && <LoadingLayer />}
    </>
  );
}

export default App;
