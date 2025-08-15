import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import AboutBanner from "@/components/about/Aboutbanner"
import Vissionmission from "@/components/about/Visionmission"
import Managementmessage from "@/components/about/Managementmessage"
import TimelineSwiper from "@/components/about/Timeline"

export default function Aboutus(){

    return(
        <>
        <Header />
        <AboutBanner />
        <Vissionmission />

        <Managementmessage />
        <TimelineSwiper />

        
        <Footer />
</>


    )
}