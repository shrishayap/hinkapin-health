import React from 'react';
import SurgeryCategory from '@/app/categories/components/surgeryCategory';

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

interface SurgeryCategoryHolderProps {
    category: string ;
}

const SurgeryCategoryHolder: React.FC<SurgeryCategoryHolderProps> = ({
    category,
}) => {

    return (
        <div className="flex flex-row overflow-x-auto md:space-x-2 lg:justify-between">
            <SurgeryCategory title='Cardio / Vascular' svg={heartIcon} link='/categories/cardiovascular' isSelected={category === 'cardiovascular'}/>
            <SurgeryCategory title='Colorectal' svg={colonIcon} link='/categories/colorectal' isSelected={category === "colorectal"}/>
            <SurgeryCategory title='ENT' svg={entIcon} link='/categories/ent' isSelected={category === 'ent'} />
            <SurgeryCategory title='Gastro' svg={stomachIcon} link='/categories/gastro' isSelected={category === 'gastro'}/>
            <SurgeryCategory title='General Surgery' svg={surgeryIcon} link='/categories/general' isSelected={category === 'general'}/>
            <SurgeryCategory title='Gynecology' svg={gynecologyIcon} link='/categories/gynecology' isSelected={category === 'gynecology'}/>
            <SurgeryCategory title='Orthopedic' svg={orthopedicIcon} link='/categories/orthopedic' isSelected={category === 'orthopedic'}/>
            <SurgeryCategory title='Pain Management' svg={painIcon} link='/categories/pain-management' isSelected={category === 'pain-management'}/>
            <SurgeryCategory title='Opthamology' svg={viewIcon} link='/categories/eyes' isSelected={category === 'eyes'}/>
            <SurgeryCategory title='Podiatry' svg={podiatryIcon} link='/categories/podiatry' isSelected={category === 'podiatry'}/>
            <SurgeryCategory title='Spine' svg={spineIcon} link='/categories/spine' isSelected={category === 'spine'}/>
            <SurgeryCategory title='Urology' svg={kidneyIcon} link='/categories/urology' isSelected={category === 'urology'}/>
        </div>
    );
};

export default SurgeryCategoryHolder;