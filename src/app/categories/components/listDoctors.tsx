'use client'
import React from 'react';
import DoctorCard from './doctorCard';
import { getDoctorPreviews } from '../[category]/ajax';
import DoctorCardSkeleton from './doctorCardSkeleton';
import notFoundImage from '@/../public/notFound.png'
import Image from 'next/image'
import { MdErrorOutline } from "react-icons/md";



interface ListDoctorsProps {
    category: string
    title?: boolean
    procedureUUID?: string | null
}

interface CatToLabelMap {
    [key: string]: string;
}

const catToLabelMap: CatToLabelMap = {
    'all': 'All Specialists in Dallas - Fort Worth',
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
    category,
    title = true,
    procedureUUID = null
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

            {(doctorData.length > 0 && title ) && <p className='text-xl font-bold' >Showing results for: {catToLabelMap[category]}</p>}
            {!loading && doctorData.length === 0 &&

                <div className='flex flex-col md:flex-row'>
                    <p className='text-xl self-center bg-red-300 p-4 rounded-xl'>
                        <div className='flex justify-center'>
                            <MdErrorOutline className='w-10 h-10'/>
                        </div>
                        Sorry, we were not able to find any specialists matching this category.
                        Please select another category to search other available providers.
                    </p>
                    <Image className="max-w-[600px] self-center" src={notFoundImage} alt="Data not found" />
                </div>

            }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 lg:gap-3'>

                {loading &&
                    <>
                        <DoctorCardSkeleton />
                        <DoctorCardSkeleton />
                        <DoctorCardSkeleton />
                        <DoctorCardSkeleton />
                        <DoctorCardSkeleton />
                        <DoctorCardSkeleton />
                    </>
                }




                {doctorData.map(doctor => {
                    return (
                        <DoctorCard doctorData={doctor} key={doctor['UUID']} procedureUUID={procedureUUID}/>
                    );
                })}
            </div>

        </div>

    );
};

export default ListDoctors;