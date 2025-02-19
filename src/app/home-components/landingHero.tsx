import Image from 'next/image';
import React from 'react';
import howItWorks from "@/../public/heroGraphic.png"
import ProcedureSearchBar from '@/components/procedureSearchBar';
import Link from 'next/link';
import {useTranslations} from 'next-intl';


export const LandingHero = () => {
    const t = useTranslations('LandingHero');

    return (
        <div className='rounded-xl border p-3 md:p-8 bg-black'>
            <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:justify-between">
                <div className="flex flex-col space-y-4 w-full lg:w-1/2">
                    <h1 className="text-4xl font-medium font-serif text-[#f9da5c]">{t('title')}</h1>
                    <p className="text-white">{t('subtitle')}</p>
                    <ProcedureSearchBar />
                    <Link href="/contact">
                        <button className="text-white rounded-md p-2 font-semibold w-full border-2">{t('contactButton')}</button>
                    </Link>
                </div>
                <Image className="hidden lg:block w-1/3" src={howItWorks} alt="Hinkapin Health" />
            </div>
        </div>
    );
}

export default LandingHero;