'use client'

import { FaArrowCircleRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function SurgicalNavCTA() {
    const t = useTranslations('SurgicalNavCTA');

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4">{t('title')}</h2>
            <div className='w-full rounded-xl border p-3 md:p-8 bg-gradient-to-r from-indigo-700 to-blue-700 flex flex-col md:flex-row justify-between items-center'>
                <div className='w-full md:w-1/5 mb-4 md:mb-0'>
                    <Image
                        src="/QRCode.png"
                        alt={t('qrCodeAlt')}
                        width={150}
                        height={150}
                        className='mx-auto'
                    />
                </div>
                <div className='w-full md:w-3/5 text-center md:text-left mb-4 md:mb-0'>
                    <p className='text-white font-bold text-lg'>
                        {t('pricing')}
                    </p>
                    <p className='text-white'>
                        {t('consultation')}
                    </p>
                    <p className='text-white'>
                        {t('contact')} <a href="tel:+18888500711" className='underline'>+1 (888) 850-0711</a>
                    </p>
                </div>
                <div className='w-full md:w-1/5 flex justify-center'>
                    <Link href="/contact">
                        <FaArrowCircleRight className='w-8 h-8 lg:w-10 lg:h-10 text-white' />
                    </Link>
                </div>
            </div>
        </section>
    )
}