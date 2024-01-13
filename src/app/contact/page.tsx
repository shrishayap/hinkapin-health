import Header from "@/components/header"
import Divider from "@mui/joy/Divider"
import ContactInfo from "./components/contactInfo"
import ContactForm from "./components/contactForm"
import HowItWorkSection from "../home-components/howItWorksSection"


export function Page() {
    return (
        <div className='flex flex-col space-y-4'>

            <div className='p-2 md:p-3 lg:p-4 border-b-2 bg-white'>
                <Header />
            </div>


            <div className='max-w-[1200px] self-center px-2 flex flex-col space-y-4 pb-4'>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5'>
                    <ContactInfo />
                    <ContactForm />
                </div>
                <HowItWorkSection />

            </div>


        </div>
    )
}

export default Page

