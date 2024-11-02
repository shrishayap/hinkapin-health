'use client'
import { useState} from 'react';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import Textarea from '@mui/joy/Textarea';

interface ProcedureContactFormProps {
    procedureName: string;
}

export const ProcedureContactForm = ({ procedureName }: ProcedureContactFormProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');


    return (
        <div className='flex flex-col space-y-2 rounded-xl'>

            <p className='text-lg font-bold'>Schedule a consultation for {procedureName}</p>
            <p className=''>Fill the form below to connect with our patient care coordination team and get a primary consultation booked.</p>
            <iframe src='https://forms.zohopublic.com/hinkapinhealth/form/NTTCSurgeryenquiryform1/formperma/X6KGjD7enRG2MadHZa3YtOy0FtS0La_8cihq9g7xZCI' className='rounded-md h-[900px] border'/>

        </div>
    );
};

export default ProcedureContactForm;