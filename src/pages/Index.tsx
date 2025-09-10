import { useEffect } from "react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Experience from "@/components/experience";

const Index = () => {
  useEffect(() => {
    // Add animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const fadeElements = document.querySelectorAll(".fade-up");
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Stats />
      <Stats />
      <Experience />

    </div>
  );
};

export default Index;
