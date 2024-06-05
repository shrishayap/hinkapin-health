export const HowItWorkSection = () => {
    return (

        <div className='flex flex-col space-y-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 gap-overflow-auto'>

                <div className='rounded-lg border bg-white p-4 flex-col space-y-2'>
                <h3 className='text-xl font-bold'>How it Works</h3>

                    <ul className="list-inside list-disc">
                        <li>Hinkapin Health care coordinators will communicate with all parties to orchestrate the planning of surgical procedures for individuals, members, and organizations.</li>
                        <li>Our care coordination team will collaborate with members and organizations throughout the surgical process, saving time and money while ensuring individuals receive the highest quality care.</li>
                        <li>Hinkapin Health strives to provide cost-efficient and transparent pricing while supporting each surgical journey and delivering custom surgical bundles to meet individual needs.</li>
                    </ul>
                </div>

                <div className='rounded-lg border bg-white p-4 flex-col space-y-2'>
                    <div className='flex justify-center'>
                        <iframe
                            className='w-full aspect-video rounded-xl'
                            src="https://www.youtube.com/embed/t-KgilFUktY?si=tSINJBD71osRPhQF"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorkSection;