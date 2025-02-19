'use client'
import Header from "@/components/header";
import SpecialProcedureCard from "./specialProcedureCard";
import { useTranslations } from 'next-intl';

export function Page() {
    const t = useTranslations('SpecialtyProcedures');

    return (
        <div className='flex flex-col space-y-4'>
            <Header />
            <div className='flex flex-col space-y-2 px-2 max-w-[1200px] w-full self-center pb-4'>
                <p className='text-xl font-bold'>{t('title')}</p>
                <p>{t('subtitle')}</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3'>
                    <SpecialProcedureCard name={t('procedures.bariatric')} />
                    <SpecialProcedureCard name={t('procedures.dermatology')} />
                    <SpecialProcedureCard name={t('procedures.pediatrics')} />
                    <SpecialProcedureCard name={t('procedures.dental')} />
                    <SpecialProcedureCard name={t('procedures.hand')} />
                    <SpecialProcedureCard name={t('procedures.occuloplastic')} />
                    <SpecialProcedureCard name={t('procedures.plastic')} />
                </div>
            </div>
        </div>
    )
}

export default Page;
