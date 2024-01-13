"use client";

import ListDoctors from '@/app/categories/components/listDoctors';
import PopularProcedureSection from '@/app/home-components/popularProcedureSection';
import SurgeryCategorySection from '@/app/home-components/surgeryCategorySection';
import Header from '@/components/header';
import Divider from '@mui/joy/Divider';
import { notFound } from 'next/navigation';
import * as React from 'react';
import ProcedureExplainCard from '../components/procedureExplainCard';
import { getProcedureData } from './ajax';
import DoctorCardSkeleton from '@/app/categories/components/doctorCardSkeleton';


export default function Page({ params }: { params: { uuid: string } }) {

    let uuid = params.uuid;

    const [loading, setLoading] = React.useState(true);
    const [err404, setErr404] = React.useState(false);
    const [category, setCategory] = React.useState('all');
    const [name, setName] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    const [price, setPrice] = React.useState(null);


    React.useEffect(() => {

        const fetchData = async () => {

            setLoading(true);

            const data = await getProcedureData(uuid);
            if (data === null) {
                setErr404(true);
            } else {
                setCategory(data.category);
                setName(data.name);
                setDescription(data.description);
                setPrice(data.price);
            }

            setLoading(false);
            return;
        };

        fetchData();
    }, [uuid]);

    if (err404) {
        return notFound();
    }


    return (

        <div className=' justify-center flex flex-col space-y-4'>

            <Header />

            <div className='justify-center flex flex-col space-y-4 max-w-[1200px] self-center w-full pb-4 px-2'>

                {loading &&
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 lg:gap-3 max-w-[1200px] self-center'>
                        <DoctorCardSkeleton />
                        <DoctorCardSkeleton />
                        <DoctorCardSkeleton />
                        <DoctorCardSkeleton />
                        <DoctorCardSkeleton />
                        <DoctorCardSkeleton />
                    </div>
                }

                {!loading &&
                    <>
                        <ProcedureExplainCard name={name} price={price} description={description} />

                        <div className='flex flex-col space-y-2 '>
                            <p className='text-xl font-bold'>Doctors for {name}</p>
                            <ListDoctors category={category} title={false} procedureUUID={uuid}/>
                        </div>

                        <Divider>OR</Divider>
                        <PopularProcedureSection />
                        <SurgeryCategorySection />
                    </>
                }

            </div>


        </div>

    )
}



