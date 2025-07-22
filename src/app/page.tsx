import { AboutSection } from "@/components/AboutSection"
import { Commitments } from "@/components/Commitments"
import { Differentials } from "@/components/Differentials"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { Navbar } from "@/components/Navbar"
import WppButton from "@/components/WppButton"

export default function Home() {
    return (
        // <div className="min-h-screen w-full flex flex-col items-center px-4 sm:px-8 lg:px-16 gap-12 overflow-hidden">
        <div className="w-full">
            <Navbar/>
            <HeroSection/>
            <Differentials/>
            <WppButton
                title="Fale conosco agora"
            />
            <AboutSection/>
            <Commitments/>
            <Footer/>
        </div>
    )
}