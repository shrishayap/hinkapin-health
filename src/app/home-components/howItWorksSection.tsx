'use client'
import { useTranslations } from 'next-intl';

export const HowItWorkSection = () => {
    const t = useTranslations('HowItWorks');

    return (
        <div className='flex flex-col space-y-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 gap-overflow-auto'>
                <div className='rounded-lg border bg-white p-6 flex flex-col space-y-4'>
                    <h3 className='text-xl font-bold'>{t('title')}</h3>
                    
                    <div className='flex flex-col space-y-6'>
                        <div className='flex items-start space-x-4'>
                            <div className='bg-indigo-100 rounded-full p-2 mt-1'>
                                <span className='text-indigo-600 font-semibold'>1</span>
                            </div>
                            <p className='text-gray-700'>{t('step1')}</p>
                        </div>

                        <div className='flex items-start space-x-4'>
                            <div className='bg-indigo-100 rounded-full p-2 mt-1'>
                                <span className='text-indigo-600 font-semibold'>2</span>
                            </div>
                            <p className='text-gray-700'>{t('step2')}</p>
                        </div>

                        <div className='flex items-start space-x-4'>
                            <div className='bg-indigo-100 rounded-full p-2 mt-1'>
                                <span className='text-indigo-600 font-semibold'>3</span>
                            </div>
                            <p className='text-gray-700'>{t('step3')}</p>
                        </div>
                    </div>
                </div>

                <div className='rounded-lg border bg-white p-4 flex-col space-y-2'>
                    <div className='flex justify-center'>
                        <iframe
                            className='w-full aspect-video rounded-xl'
                            src="https://www.youtube.com/embed/0wC9DJ6NSgk?si=mo1AtOZNZiN8avaY"
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