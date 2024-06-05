"use client";

import PopularProcedureSection from '@/app/home-components/popularProcedureSection';
import SurgeryCategorySection from '@/app/home-components/surgeryCategorySection';
import Header from '@/components/header';
import Divider from '@mui/joy/Divider';
import { notFound } from 'next/navigation';
import * as React from 'react';
import ProcedureExplainCard from '../components/procedureExplainCard';
import DoctorCardSkeleton from '@/app/categories/components/doctorCardSkeleton';
import ProcedureContactForm from '../components/procedureContactForm';


export default function Page({ params }: { params: { uuid: string } }) {

    let uuid = params.uuid;

    const [loading, setLoading] = React.useState(true);
    const [err404, setErr404] = React.useState(false);

    const [medicalName, setMedicalName] = React.useState('');
    const [commonName, setCommonName] = React.useState('');
    const [cptCode, setCptCode] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [price, setPrice] = React.useState(0);
    const [locations, setLocations] = React.useState(['Dallas, TX', 'Austin, TX']);



    React.useEffect(() => {

        const fetchData = async () => {

            setLoading(true);

            const packet = await fetch(`/api/procedureData?uuid=${uuid}`);
            if (packet.status === 404) {
                setErr404(true);
            } else {
                const jsonData = await packet.json();
                const data = jsonData["data"];
                setMedicalName(data.medical_name);
                setCommonName(data.common_name);
                setCptCode(data.cpt_code);
                setDescription(data.description);
                setPrice(data.price);
                setLocations(data.locations);
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
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4'>
                            <ProcedureExplainCard medicalName={medicalName} commonName={commonName} cptCode={cptCode} price={price} description={description} locations={locations}/>
                            <ProcedureContactForm procedureName={medicalName} />
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



