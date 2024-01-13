"use client";

import * as React from 'react';



import Divider from '@mui/joy/Divider';
import { notFound } from 'next/navigation';
import { getDoctorData } from './ajax';
import DoctorPageSkeleton from '../components/doctorPageSkeleton';
import Header from '@/components/header';
import DoctorMainInfo from '../components/doctorMainInfo';
import DoctorSecondaryInforamtion from '../components/doctorSecondaryInfo';
import DoctorContactForm from '../components/doctorContactForm';

export default function Page({ params }: { params: { uuid: string } }) {

    let uuid = params.uuid;
    
    const [doctorData, setDoctorData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [err404, setErr404] = React.useState(false);


    React.useEffect(() => {

        const fetchData = async () => {

            setLoading(true);

            const data = await getDoctorData(uuid)
            if (data === null) {
                setErr404(true);
            }

            setDoctorData(data);
            setLoading(false);
            return;
        };

        fetchData();
    }, [uuid]);

    if (err404) {
        return notFound();
    }

    if (loading) {
        return (
            <div className='pl-4 justify-center flex flex-col space-y-4'>
                <Header />
                <DoctorPageSkeleton />
            </div>

        )
    }


    return (

        <div className=' justify-center flex flex-col space-y-4'>

            <Header />

            <div className='flex flex-row justify-center'>

                {doctorData &&

                    <div className='grid grid-cols-1 md:grid-cols-2 mx-3 max-w-[1200px] self-center gap-2 pb-4 lg:gap-4'>

                        <div className='flex flex-col space-y-4 p-4 rounded-xl bg-white border-2'>
                            <DoctorMainInfo
                                uuid={doctorData.UUID}
                                firstName={doctorData["First Name"]}
                                lastName={doctorData["Last Name"]}
                                prefix={doctorData.Prefix}
                                qualifications={doctorData.Qualifications}
                                title={doctorData.Title}
                                hospitalName={doctorData["Hospital Name"]}
                                hospitalAddress={doctorData["Hospital Address"]}
                                hospitalCity={doctorData["Hospital City"]}
                                hospitalState={doctorData["Hospital State"]}
                                hospitalZip={doctorData["Hospital Zip"]}
                                rating={doctorData.Rating}
                                numberOfRatings={doctorData["Number of Ratings"]}
                                yearsOfExperience={doctorData["Years of Experience"]}
                                gender={doctorData.Gender}
                                phoneNumber={doctorData["Phone Number"]}
                                description={doctorData.Description}
                            />

                            <Divider />

                            <DoctorSecondaryInforamtion
                                education={doctorData.Education}
                                specialties={doctorData.Specialties}
                                residencies={doctorData.Residencies}
                                professionalMemberships={doctorData["Professional Memberships"]}
                            />

                        </div>

                        <DoctorContactForm
                            doctorPrefix={doctorData.Prefix}
                            doctorFirstName={doctorData["First Name"]}
                            doctorLastName={doctorData["Last Name"]}
                            doctorCategory={doctorData.Category}
                        />

                    </div>

                }




            </div>
        </div>


    )
}



