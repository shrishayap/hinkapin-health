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
import Link from 'next/link';

interface DoctorCardProps {
    doctorData: {
        "First Name": string,
        "Middle Initial": string,
        "Last Name": string,
        "Prefix": string,
        "Qualifications": string[],
        "Title": string,
        "Hospital Name": string,
        "Hospital Address": string,
        "Hospital City": string,
        "Hospital State": string,
        "Hospital Zip": string,
        "Years of Experience": number,
        "Rating": number,
        "Number of Ratings": number
        "Image URL": string
        "UUID": string
    }
    procedureUUID?: string | null
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctorData, procedureUUID = null }) => {

    //add defensive coding checking for doctorName
    let doctorName = "";
    if (doctorData["Prefix"]) doctorName += doctorData["Prefix"]
    if (doctorData["First Name"]) doctorName += " " + doctorData["First Name"]
    if (doctorData["Middle Initial"]) doctorName += " " + doctorData["Middle Initial"]
    if (doctorData["Last Name"]) doctorName += " " + doctorData["Last Name"]



    let qualification = "";
    for (let qual of doctorData["Qualifications"]) {
        qualification += qual + " ";
    }

    let hospitalAddress = "";
    if (doctorData["Hospital Address"] && doctorData["Hospital City"] && doctorData["Hospital State"] && doctorData["Hospital Zip"])
        hospitalAddress = `${doctorData["Hospital Address"]}, ${doctorData["Hospital City"]}, ${doctorData["Hospital State"]} ${doctorData["Hospital Zip"]}`;
    else hospitalAddress = "Address not available";



    let imageURL = 'https://firebasestorage.googleapis.com/v0/b/hinkapin-health.appspot.com/o/doctorImages%2F'
    imageURL += doctorData["UUID"];
    imageURL += ".jpeg?alt=media";


    return (
        <>
            <Card
                variant="outlined"
                className='rounded-xl border-2 bg-white'
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
                    <Typography level="body-sm">
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


                <Link href={{
                    pathname: `/doctors/${doctorData['UUID']}`,
                    query: { procedureUUID: procedureUUID }
                }}>
                    <Button variant="outlined" color="neutral" className='w-full'>
                        Learn More
                    </Button>
                </Link>

            </Card>
        </>
    );
}

export default DoctorCard;