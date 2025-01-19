export const HowItWorkSection = () => {
    return (

        <div className='flex flex-col space-y-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 gap-overflow-auto'>

                <div className='rounded-lg border bg-white p-6 flex flex-col space-y-4'>
                    <h3 className='text-xl font-bold'>View Popular Surgeries</h3>
                    
                    <div className='flex flex-col space-y-6'>
                        <div className='flex items-start space-x-4'>
                            <div className='bg-indigo-100 rounded-full p-2 mt-1'>
                                <span className='text-indigo-600 font-semibold'>1</span>
                            </div>
                            <p className='text-gray-700'>Our care coordinators communicate with all parties to orchestrate your surgical procedure planning, making the process seamless.</p>
                        </div>

                        <div className='flex items-start space-x-4'>
                            <div className='bg-indigo-100 rounded-full p-2 mt-1'>
                                <span className='text-indigo-600 font-semibold'>2</span>
                            </div>
                            <p className='text-gray-700'>We collaborate throughout your surgical journey, saving you time and money while ensuring the highest quality care.</p>
                        </div>

                        <div className='flex items-start space-x-4'>
                            <div className='bg-indigo-100 rounded-full p-2 mt-1'>
                                <span className='text-indigo-600 font-semibold'>3</span>
                            </div>
                            <p className='text-gray-700'>Get transparent, cost-efficient pricing with custom surgical bundles tailored to your specific needs.</p>
                        </div>
                    </div>
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