import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary from '@mui/joy/AccordionSummary';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';

interface DoctorSecondaryInformationProps {
    education: string[] | null;
    specialties: string[] | null;
    residencies: string[] | null;
    professionalMemberships: string[] | null;
}


export const DoctorSecondaryInforamtion = ({education, specialties, residencies, professionalMemberships}: DoctorSecondaryInformationProps) => {

    const educationList = education ?
        (
            <List marker={'disc'}>
                {education.map((edx, idx) => {
                    return (
                        <ListItem key={idx}>{edx}</ListItem>
                    )
                })}
            </List>
        ) :
        <p>Not available</p>

    const specialyList = specialties ?
        (
            <List marker={'disc'}>
                {specialties.map((spx, idx) => {
                    return (
                        <ListItem key={idx}>{spx}</ListItem>
                    )
                })}
            </List>
        ) :
        <p>Not available</p>

    const residenciesList = residencies ?
        (
            <List marker={'disc'}>
                {residencies.map((rdx, idx) => {
                    return (
                        <ListItem key={idx}>{rdx}</ListItem>
                    )
                })}
            </List>
        ) :
        <p>Not available</p>

    const membershipsList = professionalMemberships ?
        (
            <List marker={'disc'}>
                {professionalMemberships.map((pmx, idx) => {
                    return (
                        <ListItem key={idx}>{pmx}</ListItem>
                    )
                })}
            </List>
        ) :
        <p>Not available</p>


    return (
        <AccordionGroup disableDivider>

            <Accordion>
                <AccordionSummary>Specialties</AccordionSummary>
                <AccordionDetails>{specialyList}</AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary>Education</AccordionSummary>
                <AccordionDetails>{educationList}</AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary>Residencies</AccordionSummary>
                <AccordionDetails>{residenciesList}</AccordionDetails>
            </Accordion>



            <Accordion>
                <AccordionSummary>Professional Memberships</AccordionSummary>
                <AccordionDetails>{membershipsList}</AccordionDetails>
            </Accordion>
        </AccordionGroup>
    )
}

export default DoctorSecondaryInforamtion;