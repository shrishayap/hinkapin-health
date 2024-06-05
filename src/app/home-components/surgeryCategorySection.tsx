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

export const SurgeryCategorySection = () => {

    return (
        <div className='flex flex-col space-y-3'>
            <h3 className='text-xl font-bold'>Search Procedures by Category</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-3 overflow-auto'>
                <CategoryCard name='Cardio / Vascular' icon={heartIcon} href='/categories/cardiovascular' />
                <CategoryCard name='Colorectal' icon={colonIcon} href='/categories/colorectal' />
                <CategoryCard name='Ear, Nose & Throat' icon={entIcon} href='/categories/ent' />
                <CategoryCard name='Gastroenterology' icon={stomachIcon} href='/categories/gastro' />
                <CategoryCard name='General Surgery' icon={surgeryIcon} href='/categories/general' />
                <CategoryCard name='Gynecology' icon={gynecologyIcon} href='/categories/gynecology' />
                <CategoryCard name='Orthopedic' icon={orthopedicIcon} href='/categories/orthopedic' />
                <CategoryCard name='Pain Management' icon={painIcon} href='/categories/pain-management' />
                <CategoryCard name='Opthamology' icon={viewIcon} href='/categories/eyes' />
                <CategoryCard name='Podiatry' icon={podiatryIcon} href='/categories/podiatry' />
                <CategoryCard name='Spine' icon={spineIcon} href='/categories/spine' />
                <CategoryCard name='Urology' icon={kidneyIcon} href='/categories/urology' />
            </div>

            <Link href="/byContact">
                <div className='bg-white border-2 text-center rounded-lg p-4'>
                    Click here to learn about miscellaneous procedures and specialties
                </div>
            </Link>
        </div>

    )
}

export default SurgeryCategorySection;