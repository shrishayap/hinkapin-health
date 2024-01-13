'use client'

import * as React from 'react';
import ProcedureSelect from '../components/procedureSelect';
import { Divider } from '@mui/joy';
import Header from '../../../components/header';
import ListDoctors from '../components/listDoctors';


export default function Page({ params }: { params: { category: string } }) {

    let category = params.category;

    return (

        <div className='justify-center flex flex-col space-y-4 px-2 py-4'>

            <Header />
            <Divider />


            <div className='justify-center flex flex-col space-y-4 max-w-[1150px] self-center  w-full'>
                <ProcedureSelect category={category} />
                <Divider />
                <ListDoctors category={category} />
            </div>

        </div>

    );
}
