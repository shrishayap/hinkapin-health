'use client'

import React from 'react';
import doctors from '@/../data/doctors.json';
import DoctorCard from './doctorCard';
import { Typography } from '@mui/joy';


interface ListDoctorsProps {
    category: string | null;
}

const ListDoctors: React.FC<ListDoctorsProps> = ({
    category
}) => {

    //Loop through doctors.json which is ana rray of doctor objects, and return ones whose "category": matches the category prop
    let filteredDoctors = doctors.filter(doctor => doctor.Category === category);
    if (category === null) {
        filteredDoctors = doctors;
    }

    return (
        <div className='flex flex-col space-y-3'>
            <Typography level='h4' >{filteredDoctors.length} results for {category ? category : 'All Procedures'}</Typography>
            <div className='flex flex-wrap flex-row'>
                {filteredDoctors.map(doctor => {
                    return (
                        <DoctorCard doctorData={doctor} key={doctor['Image URL']} />
                    );
                })}
            </div>

        </div>

    );
};

export default ListDoctors;