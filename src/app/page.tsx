import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import TestimonialCard from "./components/TestimonialCard";
import UpcomingWebinars from "./components/UpcomingWebinars";
import Instructure from "./components/Instructure";
import Footer from "./components/Footer";


export default function Home() {
  return (
<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
<HeroSection/>
<FeaturedCourses/>
<WhyChooseUs/>
<TestimonialCard/>
<UpcomingWebinars/>
<Instructure/>
<Footer/>
</main>
  );
  
}
