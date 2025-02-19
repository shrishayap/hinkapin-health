'use client'
import InfoCard from "@/app/home-components/infoCard";
import { useTranslations } from 'next-intl';

export default function SurgicalNavSteps() {
    const t = useTranslations('SurgicalNavSteps');

    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{t('title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <InfoCard
                    title={t('steps.initialContact.title')}
                    content={t('steps.initialContact.content')}
                    image="/navigation-photos/phone.jpeg"
                    number={1}
                />
                <InfoCard
                    title={t('steps.careCoordination.title')}
                    content={t('steps.careCoordination.content')}
                    image="/navigation-photos/coordinate.jpeg"
                    number={2}
                />
                <InfoCard
                    title={t('steps.insurance.title')}
                    content={t('steps.insurance.content')}
                    image="/navigation-photos/verify.jpeg"
                    number={3}
                />
                <InfoCard
                    title={t('steps.costEffective.title')}
                    content={t('steps.costEffective.content')}
                    image="/navigation-photos/cost.jpeg"
                    number={4}
                />
                <InfoCard
                    title={t('steps.secondOpinion.title')}
                    content={t('steps.secondOpinion.content')}
                    image="/navigation-photos/opinion.jpeg"
                    number={5}
                />
                <InfoCard
                    title={t('steps.postOp.title')}
                    content={t('steps.postOp.content')}
                    image="/navigation-photos/support.jpeg"
                    number={6}
                />
            </div>
        </section>
    )
}