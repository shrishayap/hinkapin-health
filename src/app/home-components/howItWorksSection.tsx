import InfoCard from "./infoCard";
import Divider from '@mui/joy/Divider';


export const HowItWorkSection = () => {
    return (

        <div className='flex flex-col space-y-3'>
            <h1 className='text-2xl font-bold font-serif'>How it Works</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 gap-overflow-auto'>
                <InfoCard number={1} title="Upload Medical Data" content="Fill out your medical data for the last time. We keep your data to on file so you never have to answer the same question twice" image='https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?q=80&w=2940&auto=format&fit=crop' />
                <InfoCard number={2} title="Case Manager Assigned" content="A personal case manager is assigned and works with a physician to review your medical needs and a one-on-one session will be booked. Diagnosis fee is paid upfront before one-on-one session." image='https://images.unsplash.com/photo-1435527173128-983b87201f4d?q=80&w=2967&auto=format&fit=crop' />
                <InfoCard number={3} title="Diagnosis Session with Physician" content="All options are discussed and end to end care coordination will be set up. Case manager will create a detailed plan including the bundled fee and the schedule. If you decide to go through with the bundled procedure, the diagnosis fee will be deducted from the final bundled fee" image='https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2940&auto=format&fit=crop' />
                <InfoCard number={4} title="Treatment" content="Once you make the upfront bundled payment, the care coordinator will walk you through all the steps and book all your appointments for you. All aspects including pre and post-surgery care is coordinated and no additional payments need to be made! No more dealing with confusing insurance lingo and chasing down medicine from dozens of locations." image='https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2947&auto=format&fit=crop' />
            </div>
            <Divider> Or, watch the following explanation by Dr. Nagaraj Kikkeri </Divider>

            <div className='flex justify-center'>
                <iframe
                    className='w-full aspect-video rounded-xl'
                    src="https://www.youtube.com/embed/fGnDiZoANxE?si=irqkmTPtWSyxbDzO"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default HowItWorkSection;