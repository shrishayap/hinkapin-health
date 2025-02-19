'use client'
import { useTranslations } from 'next-intl';

export default function CompareNav() {
    const t = useTranslations('CompareNav');

    const withNavPoints = [
        t('withNav.points.0'),
        t('withNav.points.1'),
        t('withNav.points.2'),
        t('withNav.points.3'),
        t('withNav.points.4')
    ];

    const withoutNavPoints = [
        t('withoutNav.points.0'),
        t('withoutNav.points.1'),
        t('withoutNav.points.2'),
        t('withoutNav.points.3'),
        t('withoutNav.points.4')
    ];

    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{t('title')}</h2>
            <div className="flex flex-col md:flex-row">
                <div className="bg-white p-6 border border-gray-300 rounded-lg md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <h3 className="text-xl font-semibold mb-4 text-green-700">{t('withNav.title')}</h3>
                    <ul className="space-y-2">
                        {withNavPoints.map((point, index) => (
                            <li key={index} className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white p-6 border border-gray-300 rounded-lg md:w-1/2">
                    <h3 className="text-xl font-semibold mb-4 text-red-700">{t('withoutNav.title')}</h3>
                    <ul className="space-y-2">
                        {withoutNavPoints.map((point, index) => (
                            <li key={index} className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}