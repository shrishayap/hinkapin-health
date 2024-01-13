import Header from "@/components/header"
import ContactInfo from "./components/contactInfo"
import GeneralContactForm from "./components/generalContactForm"
import HowItWorkSection from "../home-components/howItWorksSection"


export function Page() {
    return (
        <div className='flex flex-col space-y-4'>


            <Header />


            <div className='max-w-[1200px] self-center px-2 flex flex-col space-y-4 pb-4'>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4'>
                    <ContactInfo />
                    <GeneralContactForm />
                </div>
                <HowItWorkSection />

            </div>


        </div>
    )
}

export default Page

