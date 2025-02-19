'use client'

import { useTranslations } from 'next-intl';

export default function WorkWithNav() {
    const t = useTranslations('WorkWithNav');

    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{t('title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 border border-gray-300 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">{t('tpa.title')}</h3>
                    <p>{t('tpa.description')}</p>
                </div>
                <div className="bg-white p-6 border border-gray-300 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">{t('brokers.title')}</h3>
                    <p>{t('brokers.description')}</p>
                </div>
                <div className="bg-white p-6 border border-gray-300 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">{t('patients.title')}</h3>
                    <p>{t('patients.description')}</p>
                </div>
            </div>
        </section>
    )
}