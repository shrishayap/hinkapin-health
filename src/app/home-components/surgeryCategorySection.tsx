import doctorsIcon from '@/../public/category-icons/doctors.png'
//<a href="https://www.flaticon.com/free-icons/medical-doctor" title="medical doctor icons">Medical doctor icons created by Freepik - Flaticon</a>
import colonIcon from '@/../public/category-icons/colon.png'
//<a href="https://www.flaticon.com/free-icons/colon" title="colon icons">Colon icons created by surang - Flaticon</a>
import entIcon from '@/../public/category-icons/ent.png'
//<a href="https://www.flaticon.com/free-icons/ent" title="ent icons">Ent icons created by Flat Icons - Flaticon</a>
import stomachIcon from '@/../public/category-icons/stomach.png'
//<a href="https://www.flaticon.com/free-icons/stomach" title="stomach icons">Stomach icons created by Freepik - Flaticon</a>
import surgeryIcon from '@/../public/category-icons/surgery.png'
//<a href="https://www.flaticon.com/free-icons/patient" title="patient icons">Patient icons created by Freepik - Flaticon</a>
import gynecologyIcon from '@/../public/category-icons/gynecology.png'
//<a href="https://www.flaticon.com/free-icons/gynecology" title="gynecology icons">Gynecology icons created by Freepik - Flaticon</a>
import orthopedicIcon from '@/../public/category-icons/orthopedic.png'
//<a href="https://www.flaticon.com/free-icons/arthritis" title="arthritis icons">Arthritis icons created by Freepik - Flaticon</a>
import painIcon from '@/../public/category-icons/pain.png'
//<a href="https://www.flaticon.com/free-icons/pain" title="pain icons">Pain icons created by popcornarts - Flaticon</a>
import plasticSurgeryIcon from '@/../public/category-icons/plasticSurgery.png'
//<a href="https://www.flaticon.com/free-icons/surgery" title="surgery icons">Surgery icons created by Victoruler - Flaticon</a>
import podiatryIcon from '@/../public/category-icons/podiatry.png'
//<a href="https://www.flaticon.com/free-icons/podiatry" title="podiatry icons">Podiatry icons created by Flat Icons - Flaticon</a>
import spineIcon from '@/../public/category-icons/spine.png'
//<a href="https://www.flaticon.com/free-icons/spine" title="spine icons">Spine icons created by Freepik - Flaticon</a>
import kidneyIcon from '@/../public/category-icons/kidney.png'
//<a href="https://www.flaticon.com/free-icons/kidney" title="kidney icons">Kidney icons created by Freepik - Flaticon</a>


import CategoryCard from './categoryCard';

export const SurgeryCategorySection = () => {

    return (
        <div className='flex flex-col space-y-3'>
            <h1 className='text-2xl font-bold font-serif'>Search Doctors by Category</h1>
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