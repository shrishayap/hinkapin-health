'use client'
import colonIcon from '@/../public/category-icons/colon.png'
import entIcon from '@/../public/category-icons/ent.png'
import stomachIcon from '@/../public/category-icons/stomach.png'
import surgeryIcon from '@/../public/category-icons/surgery.png'
import gynecologyIcon from '@/../public/category-icons/gynecology.png'
import orthopedicIcon from '@/../public/category-icons/orthopedic.png'
import painIcon from '@/../public/category-icons/pain.png'
import podiatryIcon from '@/../public/category-icons/podiatry.png'
import spineIcon from '@/../public/category-icons/spine.png'
import kidneyIcon from '@/../public/category-icons/kidney.png'
import heartIcon from '@/../public/category-icons/heart.png'
import viewIcon from '@/../public/category-icons/view.png'
import Link from "next/link";
import CategoryCard from './categoryCard';
import { useTranslations } from 'next-intl';

export const SurgeryCategorySection = () => {
    const t = useTranslations('SurgeryCategorySection');

    return (
        <div className='flex flex-col space-y-3'>
            <h3 className='text-xl font-bold'>{t('title')}</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-3 overflow-auto'>
                <CategoryCard name={t('categories.cardio')} icon={heartIcon} href='/categories/cardiovascular' />
                <CategoryCard name={t('categories.colorectal')} icon={colonIcon} href='/categories/colorectal' />
                <CategoryCard name={t('categories.ent')} icon={entIcon} href='/categories/ent' />
                <CategoryCard name={t('categories.gastro')} icon={stomachIcon} href='/categories/gastro' />
                <CategoryCard name={t('categories.general')} icon={surgeryIcon} href='/categories/general' />
                <CategoryCard name={t('categories.gynecology')} icon={gynecologyIcon} href='/categories/gynecology' />
                <CategoryCard name={t('categories.orthopedic')} icon={orthopedicIcon} href='/categories/orthopedic' />
                <CategoryCard name={t('categories.pain')} icon={painIcon} href='/categories/pain-management' />
                <CategoryCard name={t('categories.opthamology')} icon={viewIcon} href='/categories/eyes' />
                <CategoryCard name={t('categories.podiatry')} icon={podiatryIcon} href='/categories/podiatry' />
                <CategoryCard name={t('categories.spine')} icon={spineIcon} href='/categories/spine' />
                <CategoryCard name={t('categories.urology')} icon={kidneyIcon} href='/categories/urology' />
            </div>

            <Link href="/byContact">
                <div className='bg-white border-2 text-center rounded-lg p-4'>
                    {t('miscLink')}
                </div>
            </Link>
        </div>
    )
}

export default SurgeryCategorySection;