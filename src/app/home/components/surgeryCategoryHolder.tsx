'use client'

import React from 'react';
import SurgeryCategory from '@/app/home/components/surgeryCategory';

import colonIcon from '@/../public/categories/colon.svg';
import entIcon from '@/../public//categories/ent.svg';
import stomachIcon from '@/../public/categories/stomach.svg';
import generalSurgeryIcon from '@/../public/categories/gs.svg';
import gynoIcon from '@/../public/categories/gyno.svg';
import orthoIcon from '@/../public/categories/ortho.svg';
import painIcon from '@/../public/categories/pain.svg';
import plasticIcon from '@/../public/categories/plastic.svg';
import podiatryLogo from '@/../public/categories/podiatry.svg';
import spineLogo from '@/../public/categories/spine.svg';
import urologyLogo from '@/../public/categories/urology.svg';
import hospitalLogo from '@/../public/categories/hospital.svg';

interface SurgeryCategoryHolderProps {
    selectedCategory: string | null;
    onSelect: (param: string | null) => void;
}

const SurgeryCategoryHolder: React.FC<SurgeryCategoryHolderProps> = ({
    selectedCategory,
    onSelect
}) => {


    const handleCategorySelect = (categoryTitle: string | null) => {
        onSelect(categoryTitle)
    };

    return (
        <div className="flex flex-row overflow-x-auto md:space-x-2 lg:justify-between">
            <SurgeryCategory title='All Procedures' svg={hospitalLogo} onSelect={() => handleCategorySelect(null)} isSelected={selectedCategory === null}/>
            <SurgeryCategory title='Colorectal' svg={colonIcon} onSelect={() => handleCategorySelect('Colorectal')} isSelected={selectedCategory === "Colorectal"}/>
            <SurgeryCategory title='ENT' svg={entIcon} onSelect={() => handleCategorySelect('Ear, Nose, & Throat')} isSelected={selectedCategory === 'Ear, Nose, & Throat'} />
            <SurgeryCategory title='Gastro' svg={stomachIcon} onSelect={() => handleCategorySelect('Gastro')} isSelected={selectedCategory === 'Gastro'}/>
            <SurgeryCategory title='General Surgery' svg={generalSurgeryIcon} onSelect={() => handleCategorySelect('General Surgery')} isSelected={selectedCategory === 'General Surgery'}/>
            <SurgeryCategory title='Gynecology' svg={gynoIcon} onSelect={() => handleCategorySelect('Gynecology')} isSelected={selectedCategory === 'Gynecology'}/>
            <SurgeryCategory title='Orthopedic' svg={orthoIcon} onSelect={() => handleCategorySelect('Orthopedic')} isSelected={selectedCategory === 'Orthopedic'}/>
            <SurgeryCategory title='Pain Management' svg={painIcon} onSelect={() => handleCategorySelect('Pain Management')} isSelected={selectedCategory === 'Pain Management'}/>
            <SurgeryCategory title='Plastic Surgery' svg={plasticIcon} onSelect={() => handleCategorySelect('Plastic Surgery')} isSelected={selectedCategory === 'Plastic Surgery'}/>
            <SurgeryCategory title='Podiatry' svg={podiatryLogo} onSelect={() => handleCategorySelect('Podiatry')} isSelected={selectedCategory === 'Podiatry'}/>
            <SurgeryCategory title='Spine' svg={spineLogo} onSelect={() => handleCategorySelect('Spine')} isSelected={selectedCategory === 'Spine'}/>
            <SurgeryCategory title='Urology' svg={urologyLogo} onSelect={() => handleCategorySelect('Urology')} isSelected={selectedCategory === 'Urology'}/>
        </div>
    );
};

export default SurgeryCategoryHolder;