import * as React from 'react';

import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Avatar from '@mui/joy/Avatar';
import Typography from '@mui/joy/Typography';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';
import StarIcon from '@mui/icons-material/Star';
import TimerIcon from '@mui/icons-material/Timer';
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Divider, List, ListItem, ModalClose } from '@mui/joy';
import { amber, red, grey, blue } from '@mui/material/colors';


interface DoctorModalProps {
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
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DoctorModal: React.FC<DoctorModalProps> = ({ doctorData, open, setOpen }) => {

    const imageURL = `doctorPictures/${doctorData["Image URL"]}`;
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
        <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog sx={(theme) => ({
                [theme.breakpoints.only('xs')]: {
                    top: 'unset',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius: 0,
                    transform: 'none',
                    maxWidth: 'unset',
                },
                overflow: 'scroll'
            })}>

                <ModalClose variant="plain" sx={{ m: 1 }} />

                <div className='flex flex-col'>

                    <div className='flex flex-row mb-3'>
                        <div className='w-1/2'>
                            <Avatar src={imageURL} sx={{ '--Avatar-size': '120px' }} />
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


            </ModalDialog>
        </Modal>

    )

}


export default DoctorModal;