import doctorsIcon from '@/../public/category-icons/doctors.png'
import colonIcon from '@/../public/category-icons/colon.png'
import entIcon from '@/../public/category-icons/ent.png'
import stomachIcon from '@/../public/category-icons/stomach.png'
import surgeryIcon from '@/../public/category-icons/surgery.png'
import gynecologyIcon from '@/../public/category-icons/gynecology.png'
import orthopedicIcon from '@/../public/category-icons/orthopedic.png'
import painIcon from '@/../public/category-icons/pain.png'
import plasticSurgeryIcon from '@/../public/category-icons/plasticSurgery.png'
import podiatryIcon from '@/../public/category-icons/podiatry.png'
import spineIcon from '@/../public/category-icons/spine.png'
import kidneyIcon from '@/../public/category-icons/kidney.png'


import CategoryCard from './categoryCard';

export const SurgeryCategorySection = () => {

    return (
        <div className='flex flex-col space-y-3'>
            <h3 className='text-xl font-bold'>Search Procedures by Category</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-3 overflow-auto'>
                <CategoryCard name='All specialists' icon={doctorsIcon} href='/categories/all' />
                <CategoryCard name='Colorectal' icon={colonIcon} href='/categories/colorectal' />
                <CategoryCard name='Ear, Nose & Throat' icon={entIcon} href='/categories/ent' />
                <CategoryCard name='Gastroenterology' icon={stomachIcon} href='/categories/gastro' />
                <CategoryCard name='General Surgery' icon={surgeryIcon} href='/categories/general-surgery' />
                <CategoryCard name='Gynecology' icon={gynecologyIcon} href='/categories/gynecology' />
                <CategoryCard name='Orthopedic' icon={orthopedicIcon} href='/categories/orthopedic' />
                <CategoryCard name='Pain Management' icon={painIcon} href='/categories/pain-management' />
                <CategoryCard name='Plastic Surgery' icon={plasticSurgeryIcon} href='/categories/plastic-surgery' />
                <CategoryCard name='Podiatry' icon={podiatryIcon} href='/categories/podiatry' />
                <CategoryCard name='Spine' icon={spineIcon} href='/categories/spine' />
                <CategoryCard name='Urology' icon={kidneyIcon} href='/categories/urology' />
            </div>
        </div>

    )
}

export default SurgeryCategorySection;