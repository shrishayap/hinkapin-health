'use client'

import * as React from 'react';
import { Divider } from '@mui/joy';
import Header from '../../../components/header';
import SurgeryCategoryHolder from '../components/surgeryCategoryHolder';
import ProcedureCardHolder from '../components/procedureCardHolder';
import { notFound } from 'next/navigation';


export default function Page({ params }: { params: { category: string } }) {

    let category = params.category;

    //if category not part of   const validCategories = ['cardiovascular', 'colorectal', 'ent', 'gastro', 'general', 'gynecology', 'eyes', 'orthopedic', 'pain-management', 'spine', 'podiatry', 'urology'];, return 404

    const validCategories = ['cardiovascular', 'colorectal', 'ent', 'gastro', 'general', 'gynecology', 'eyes', 'orthopedic', 'pain-management', 'spine', 'podiatry', 'urology'];
    if (!validCategories.includes(category)) {
        return notFound();
    }


    return (

        <div className='justify-center flex flex-col space-y-4'>

            <Header />

            <div className='justify-center flex flex-col space-y-4 max-w-[1200px] self-center px-2 w-full pb-3'>
                <SurgeryCategoryHolder category={category} />
                <Divider />
                <ProcedureCardHolder category={category} />

            </div>

        </div>

    );
}
