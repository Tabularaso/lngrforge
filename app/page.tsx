import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import MusicForge from "@/components/sections/MusicForge";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return <><Navbar /><main id="main" tabIndex={-1}><Hero /><Services /><MusicForge /><Projects /><About /><Contact /></main><Footer /></>;
}
