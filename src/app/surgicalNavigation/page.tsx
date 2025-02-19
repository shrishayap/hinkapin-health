'use client'
import React from 'react';
import SurgicalNavSteps from './components/surgicalNavSteps';
import WorkWithNav from './components/workWithNav';
import CompareNav from './components/compareNav';
import Header from '@/components/header';
import SurgicalNavCTA from './components/surgicalNavCTA';
import { useTranslations } from 'next-intl';

export default function Page() {
    const t = useTranslations('SurgicalNavigation');

    return (
        <div className='flex flex-col'>
            <Header />
            <div className='flex justify-center bg-stone-50 py-6'>
                <div className='flex flex-col max-w-[1200px] mx-2 md:mx-4 lg:mx-10 space-y-6 md:space-y-10 lg:space-y-12'>
                    {/* Explanation Section */}
                    <section>
                        <h1 className="text-4xl font-bold mb-6">{t('title')}</h1>
                        <h2 className="text-2xl font-semibold mb-4">{t('subtitle')}</h2>
                        <p className="mb-4">
                            {t('description1')}
                        </p>
                        <p>
                            {t('description2')}
                        </p>
                    </section>

                    <SurgicalNavSteps />
                    <WorkWithNav />
                    <CompareNav />
                    <SurgicalNavCTA />
                </div>
            </div>
        </div>
    );
};

