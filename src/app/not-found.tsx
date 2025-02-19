'use client'
import Header from "@/components/header"
import { useTranslations } from 'next-intl';

function NotFoundPage() {
    const t = useTranslations('NotFound');

    return (
        <div className='flex flex-col space-y-4'>
            <Header />
            <div className='flex flex-col space-y-2 px-2 max-w-[1200px] w-full self-center pb-4 pt-20'>
                <p className='text-xl font-bold'>{t('title')}</p>
                <p>{t('message')}</p>
                <a href='/' className='hover:underline'>{t('homeLink')}</a>
            </div>
        </div>
    )
}

export default NotFoundPage