'use client'

import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import PlaceIcon from '@mui/icons-material/Place';
import StarIcon from '@mui/icons-material/Star';
import TimerIcon from '@mui/icons-material/Timer';
import { Divider, Button } from '@mui/joy';
import { amber, red, grey } from '@mui/material/colors';
import DoctorModal from './doctorModal';

interface DoctorCardProps {
    doctorData: {
        "First Name": string,
        "Middle Initial": string,
        "Last Name": string,
        "Prefix": string,
        "Qualifications": string[],
        "Gender": string,
        "Title": string,
        "Category": string,
        "Specialties": string[],
        "Education": string[],
        "Residencies": string[],
        "Professional Memberships": string[],
        "Description": string,
        "Hospital Name": string,
        "Hospital Address": string,
        "Hospital City": string,
        "Hospital State": string,
        "Hospital Zip": string,
        "Years of Experience": number,
        "Phone Number": string,
        "Rating": number,
        "Number of Ratings": number
        "Image URL": string
    }
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctorData }) => {

    const doctorName = `${doctorData["Prefix"]} ${doctorData["First Name"]} ${doctorData["Last Name"]}`;

    let qualification = "";
    for (let qual of doctorData["Qualifications"]) {
        qualification += qual + " ";
    }

    const hospitalAddress = `${doctorData["Hospital Address"]}, ${doctorData["Hospital City"]}, ${doctorData["Hospital State"]} ${doctorData["Hospital Zip"]}`;
    const [open, setOpen] = React.useState(false);
    const imageURL = `doctorPictures/${doctorData["Image URL"]}`;


    return (
        <>
            <Card
                variant="outlined"
                sx={{
                    minWidth: '320px',
                    flex: '1 0 0',
                    margin: '4px',
                }}
                className='rounded-xl shadow-md'
            >
                <div className='flex flex-row'>
                    <div className='w-1/2'>
                        <Avatar src={imageURL} sx={{ '--Avatar-size': '90px' }} />
                    </div>
                    <div className='w-1/2 self-center'>
                        <Typography level="title-lg">{doctorName} <span><Typography level="body-sm">{qualification}</Typography></span></Typography>
                    </div>
                </div>

                <Divider />

                <CardContent>


                    <Typography level="title-md">
                        {doctorData["Title"]}
                    </Typography>


                    <Typography level="body-sm">
                        <PlaceIcon sx={{ color: red[800] }} /> {doctorData["Hospital Name"]}
                    </Typography>
                    <Typography level="body-sm" className='ml-7'>
                        {hospitalAddress}
                    </Typography>

                    <div className='flex flex-row justify-between'>
                        <Typography level="body-sm">
                            <StarIcon sx={{ color: amber[900] }} /> {doctorData["Rating"]} ({doctorData["Number of Ratings"]})
                        </Typography>

                        <Typography level="body-sm">
                            <TimerIcon sx={{ color: grey[900] }} /> {doctorData["Years of Experience"]} YOE
                        </Typography>
                    </div>

                </CardContent>

                <Button onClick={() => setOpen(true)} variant="outlined" color="neutral">
                    Learn More
                </Button>

            </Card>

            <DoctorModal doctorData={doctorData} open={open} setOpen={setOpen} />
        </>
    );
}

export default DoctorCard;