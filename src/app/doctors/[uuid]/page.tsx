"use client";

import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Typography from '@mui/joy/Typography';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';
import StarIcon from '@mui/icons-material/Star';
import TimerIcon from '@mui/icons-material/Timer';
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Divider, List, ListItem } from '@mui/joy';
import { amber, red, grey, blue } from '@mui/material/colors';

import { notFound } from 'next/navigation';
import { getDoctorData } from './ajax';
import DoctorPageSkeleton from '../components/doctorPageSkeleton';
import Header from '@/app/categories/components/header';

export default function Page({ params }: { params: { uuid: string } }) {

    let category = params.uuid;

    const [doctorData, setDoctorData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [err404, setErr404] = React.useState(false);


    React.useEffect(() => {

        const fetchData = async () => {

            setLoading(true);

            const data = await getDoctorData(category)
            if (data === null) {
                setErr404(true);
            }

            setDoctorData(data);
            setLoading(false);
            return;
        };

        fetchData();
    }, [category]);

    if (err404) {
        return notFound();
    }

    if (loading) {
        return (
            <div className='pl-4 justify-center flex flex-col space-y-4 pr-4 pt-4'>
                <Header />
                <Divider />
                <DoctorPageSkeleton />
            </div>

        )
    }


    let imageURL = 'https://firebasestorage.googleapis.com/v0/b/hinkapin-health.appspot.com/o/doctorImages%2F'
    imageURL += doctorData["UUID"];
    imageURL += ".jpeg?alt=media";

    const doctorName = `${doctorData["Prefix"]} ${doctorData["First Name"]} ${doctorData["Last Name"]}`;

    let qualification = "";
    for (let qual of doctorData["Qualifications"]) {
        qualification += qual + " ";
    }

    const hospitalAddress = `${doctorData["Hospital Address"]}, ${doctorData["Hospital City"]}, ${doctorData["Hospital State"]} ${doctorData["Hospital Zip"]}`;
    const phoneNumber = "(" + doctorData["Phone Number"].slice(0, 3) + ") - " + doctorData["Phone Number"].slice(3, 6) + " - " + doctorData["Phone Number"].slice(6, 10);

    const education = doctorData.Education ?
        (
            <List marker={'disc'}>
                {doctorData.Education.map((education, idx) => {
                    return (
                        <ListItem key={idx}>{education}</ListItem>
                    )
                })}
            </List>
        ) :
        <Typography level='body-md'>Not available</Typography>

    const specialties = doctorData.Specialties ?
        (
            <List marker={'disc'}>
                {doctorData.Specialties.map((specialty, idx) => {
                    return (
                        <ListItem key={idx}>{specialty}</ListItem>
                    )
                })}
            </List>
        ) :
        <Typography level='body-md'>Not available</Typography>

    const residencies = doctorData.Residencies ?
        (
            <List marker={'disc'}>
                {doctorData.Residencies.map((residency, idx) => {
                    return (
                        <ListItem key={idx}>{residency}</ListItem>
                    )
                })}
            </List>
        ) :
        <Typography level='body-md'>Not available</Typography>

    const professionalMemberships = doctorData["Professional Memberships"] ?
        (
            <List marker={'disc'}>
                {doctorData["Professional Memberships"].map((membership, idx) => {
                    return (
                        <ListItem key={idx}>{membership}</ListItem>
                    )
                })}
            </List>
        ) :
        <Typography level='body-md'>Not available</Typography>

    return (

        <div className='pl-4 justify-center flex flex-col space-y-4 pr-4 pt-4'>

            <Header />
            <Divider />

            <div className='flex flex-row justify-center'>

                <div className='flex flex-col mx-4 md:mx-10 lg:mx-24 max-w-full xl:max-w-[1150px] self-center'>

                    <div className='flex flex-row mb-3'>
                        <div className='w-1/2'>
                            <Avatar src={imageURL} sx={{ '--Avatar-size': '180px' }} />
                        </div>
                        <div className='w-1/2 self-center'>
                            <Typography level="h3">{doctorName} <span><Typography level="body-sm">{qualification}</Typography></span></Typography>
                        </div>
                    </div>

                    <Divider />

                    <div className='flex flex-col mt-3 mb-3'>

                        <Typography level="title-md">
                            {doctorData["Title"]}
                        </Typography>


                        <Typography level="body-md">
                            <PlaceIcon sx={{ color: red[800] }} /> {doctorData["Hospital Name"]}
                        </Typography>
                        <Typography level="body-md" className='ml-7'>
                            {hospitalAddress}
                        </Typography>

                        <div className='flex flex-row justify-between'>
                            <Typography level="body-md">
                                <StarIcon sx={{ color: amber[900] }} /> {doctorData["Rating"]} ({doctorData["Number of Ratings"]})
                            </Typography>

                            <Typography level="body-md">
                                <TimerIcon sx={{ color: grey[900] }} /> {doctorData["Years of Experience"]} YOE
                            </Typography>
                        </div>

                        <div className='flex flex-row justify-between'>
                            <Typography level="body-md">
                                <LocalPhoneIcon sx={{ color: blue[700] }} /> {phoneNumber}
                            </Typography>

                            <Typography level="body-md">
                                {doctorData["Gender"]}
                            </Typography>
                        </div>
                    </div>

                    <div className='mb-3'>
                        <Typography level="body-md">{doctorData.Description}</Typography>
                    </div>

                    <Divider />

                    <AccordionGroup className='mt-3'>

                        <Accordion>
                            <AccordionSummary>Specialties</AccordionSummary>
                            <AccordionDetails>{specialties}</AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary>Education</AccordionSummary>
                            <AccordionDetails>{education}</AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary>Residencies</AccordionSummary>
                            <AccordionDetails>{residencies}</AccordionDetails>
                        </Accordion>



                        <Accordion>
                            <AccordionSummary>Professional Memberships</AccordionSummary>
                            <AccordionDetails>{professionalMemberships}</AccordionDetails>
                        </Accordion>
                    </AccordionGroup>

                </div>

            </div>
        </div>


    )
}


