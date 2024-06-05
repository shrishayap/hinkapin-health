import Header from "@/components/header";
import SpecialProcedureCard from "./specialProcedureCard";

export function Page() {
    return (

        <div className='flex flex-col space-y-4'>


            <Header />

            <div className='flex flex-col space-y-2 px-2 max-w-[1200px] w-full self-center pb-4'>

                <p className='text-xl font-bold' >Specialty Procedures</p>
                <p >The following procedures and specialties may be offered. Please contact us to learn more about availabilty and pricing</p>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3'>

                    <SpecialProcedureCard name='Bariatric' />
                    <SpecialProcedureCard name='Brachytherapy' />
                    <SpecialProcedureCard name='Chiropractor' />
                    <SpecialProcedureCard name='Dermatology' />
                    <SpecialProcedureCard name='Dental/ Oral/ Maxofacial' />
                    <SpecialProcedureCard name='Dialysis Access' />
                    <SpecialProcedureCard name='Hand Surgery' />
                    <SpecialProcedureCard name='Neurology' />
                    <SpecialProcedureCard name='Occuloplastic' />
                    <SpecialProcedureCard name='Wound Care' />
                    <SpecialProcedureCard name='Plastic Surgery - Gynocomastia' />
                </div>

            </div>


        </div>
    )
}

export default Page;
