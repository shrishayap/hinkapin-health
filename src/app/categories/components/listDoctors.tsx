'use client'

import React from 'react';
import DoctorCard from './doctorCard';
import { Typography } from '@mui/joy';
import { getDoctorPreviews } from '../[category]/ajax';
import DoctorCardSkeleton from './doctorCardSkeleton';


interface ListDoctorsProps {
    category: string
}

interface CatToLabelMap {
    [key: string]: string;
}

const catToLabelMap: CatToLabelMap = {
    'all': 'Our Specialists in Dallas - Fort Worth',
    'colorectal': 'Colorectal Specialists',
    'ent': 'Ear, Nose, & Throat Specialists',
    'gastro': 'Gastroenterology Specialists',
    'gynecology': 'Gynecology Specialists',
    'orthopedic': 'Orthopedic Specialists',
    'pain-management': 'Pain Management Specialists',
    'plastic-surgery': 'Plastic Surgery Specialists',
    'podiatry': 'Podiatry Specialists',
    'spine': 'Spine Specialists',
    'general-surgery': 'General Surgery Specialists',
    'urology': 'Urology Specialists',
}

const ListDoctors: React.FC<ListDoctorsProps> = ({
    category
}) => {

    const [loading, setLoading] = React.useState<boolean>(true);
    const [doctorData, setDoctorData] = React.useState<any[]>([]);


    React.useEffect(() => {
        const fetchData = async () => {

            setLoading(true);

            const data = await getDoctorPreviews(category)
            if (data === null) {
                setDoctorData([]);
                setLoading(false);
                return;
            }

            setDoctorData(data.doctors);
            console.log(data);
            setLoading(false);
            return;
        };

        fetchData();
    }, [category]);

    return (
        <div className='flex flex-col space-y-3'>

            {doctorData.length > 0 && <Typography level='h4' >Showing results for: {catToLabelMap[category]}</Typography>}
            
            <div className='flex flex-wrap flex-row'>

                {loading &&
                    <>
                        <DoctorCardSkeleton />
                        <DoctorCardSkeleton />
                        <DoctorCardSkeleton />
                        <DoctorCardSkeleton />
                        <DoctorCardSkeleton />
                        <DoctorCardSkeleton />
                        <DoctorCardSkeleton />
                    </>
                }

                {!loading && doctorData.length === 0 &&

                    <div className='text-center m-16'>
                        <Typography level='h2'>
                            Sorry, we were not able to find any specialists matching &quot;{category}&quot;.
                            Please select another category to search other available providers
                        </Typography>
                    </div>

                }


                {doctorData.map(doctor => {
                    return (
                        <DoctorCard doctorData={doctor} key={doctor['UUID']} />
                    );
                })}
            </div>

        </div>

    );
};

export default ListDoctors;