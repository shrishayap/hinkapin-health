'use client'
import { useState, useEffect } from 'react';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { getProcedurePrices } from '@/app/categories/[category]/ajax';

interface DoctorContactFormProps {
    doctorPrefix: string,
    doctorFirstName: string,
    doctorLastName: string,
    doctorCategory: string
}

export const DoctorContactForm = ({ doctorPrefix, doctorFirstName, doctorLastName, doctorCategory }: DoctorContactFormProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [procedureChoices, setProcedureChoices] = useState<any[]>([]);
    const [selectedProcedure, setSelectedProcedure] = useState<string | null>(null);

    //check to see if there are any parameters that match ?procedureUUID= in the url
    //if so, set the selectedProcedure to that uuid
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const procedureUUID = urlParams.get('procedureUUID');
        if (procedureUUID) {
            setSelectedProcedure(procedureUUID);
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProcedurePrices(doctorCategory)
            if (data === null) {
                setProcedureChoices([]);
                return;
            }
            setProcedureChoices(data.procedures);
        };

        fetchData();
    }, []);

    const handleChange = (
        event: React.SyntheticEvent | null,
        newValue: string | null,
    ) => {
        setSelectedProcedure(newValue);
    };


    return (
        <div className='flex flex-col space-y-2 bg-gradient-to-r from-slate-900 to-slate-700 p-4 md:p-8 rounded-xl'>

            <p className='text-white text-lg font-bold'>Schedule an appointment with {doctorPrefix} {doctorFirstName} {doctorLastName}</p>
            <p className='text-white'>Fill the form below to connect with our concierge team and get a primary consultation booked.</p>


            <div className='grid grid-cols-2 gap-2'>

                <FormControl>
                    <FormLabel className='text-white'>First name</FormLabel>
                    <Input
                        required
                        placeholder='First Name'
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel className='text-white'>Last Name</FormLabel>
                    <Input
                        required
                        placeholder='Last Name'
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </FormControl>

            </div>

            <FormControl>
                <FormLabel className='text-white'>Email</FormLabel>
                <Input
                    required
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </FormControl>

            <FormControl>
                <FormLabel className='text-white'>Phone</FormLabel>
                <Input
                    required
                    placeholder='Phone'
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
            </FormControl>

            <FormControl>
                <FormLabel className='text-white'>Select Procedure</FormLabel>
                <Select
                    placeholder='Select Procedure'
                    value={selectedProcedure}
                    onChange={handleChange}
                >
                    {procedureChoices.map(procedure => {
                        return (
                            <Option key={procedure.uuid} value={procedure.uuid}>{procedure.name}</Option>
                        );
                    })}
                </Select>
            </FormControl>

            <FormControl>
                <FormLabel className='text-white'>Message</FormLabel>
                <Textarea
                    required
                    placeholder="Your Message..."
                    value={message}
                    minRows={4}
                    onChange={e => setMessage(e.target.value)}
                />

            </FormControl>

            <Button color='neutral' variant='outlined' className='w-full bg-white'>Submit</Button>

            <p className='text-sm font-light text-white'>Do not submit any sensetive medical information</p>

        </div>
    );
};

export default DoctorContactForm;