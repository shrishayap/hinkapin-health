'use client'

import * as React from 'react';
import ProcedureSelect from '../components/procedureSelect';
import { Divider } from '@mui/joy';
import Header from '../../../components/header';
import ListDoctors from '../components/listDoctors';


export default function Page({ params }: { params: { category: string } }) {

    let category = params.category;

    return (

        <div className='justify-center flex flex-col space-y-4'>

            <Header />

            <div className='justify-center flex flex-col space-y-4 max-w-[1200px] self-center px-2  w-full'>
                <ProcedureSelect category={category} />
                <Divider />
                <ListDoctors category={category} />
            </div>

        </div>

    );
}
