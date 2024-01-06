'use client'

import React from 'react';
import SurgeryCategory from '@/app/categories/components/surgeryCategory';

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
import { redirect } from 'next/navigation'

interface SurgeryCategoryHolderProps {
    category: string ;
}

const SurgeryCategoryHolder: React.FC<SurgeryCategoryHolderProps> = ({
    category,
}) => {

    return (
        <div className="flex flex-row overflow-x-auto md:space-x-2 lg:justify-between">
            <SurgeryCategory title='Our Specialists' svg={hospitalLogo} link='/categories/all' isSelected={category === 'all'}/>
            <SurgeryCategory title='Colorectal' svg={colonIcon} link='/categories/colorectal' isSelected={category === "colorectal"}/>
            <SurgeryCategory title='ENT' svg={entIcon} link='/categories/ent' isSelected={category === 'ent'} />
            <SurgeryCategory title='Gastro' svg={stomachIcon} link='/categories/gastro' isSelected={category === 'gastro'}/>
            <SurgeryCategory title='General Surgery' svg={generalSurgeryIcon} link='/categories/general-surgery' isSelected={category === 'general-surgery'}/>
            <SurgeryCategory title='Gynecology' svg={gynoIcon} link='/categories/gynecology' isSelected={category === 'gynecology'}/>
            <SurgeryCategory title='Orthopedic' svg={orthoIcon} link='/categories/orthopedic' isSelected={category === 'orthopedic'}/>
            <SurgeryCategory title='Pain Management' svg={painIcon} link='/categories/pain-management' isSelected={category === 'pain-management'}/>
            <SurgeryCategory title='Plastic Surgery' svg={plasticIcon} link='/categories/plastic-surgery' isSelected={category === 'plastic-surgery'}/>
            <SurgeryCategory title='Podiatry' svg={podiatryLogo} link='/categories/podiatry' isSelected={category === 'podiatry'}/>
            <SurgeryCategory title='Spine' svg={spineLogo} link='/categories/spine' isSelected={category === 'spine'}/>
            <SurgeryCategory title='Urology' svg={urologyLogo} link='/categories/urology' isSelected={category === 'urology'}/>
        </div>
    );
};

export default SurgeryCategoryHolder;