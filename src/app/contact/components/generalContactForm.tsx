'use client'
import React, { useState } from 'react';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import Textarea from '@mui/joy/Textarea';

interface GeneralContactFormProps {
    orgName: string;
}

export const GeneralContactForm = ({ orgName }: GeneralContactFormProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className='flex flex-col space-y-2 bg-gradient-to-r from-slate-900 to-slate-700 p-3 md:p-8 rounded-xl'>

            <p className='text-white text-lg font-bold'>Contact {orgName} today</p>

            <div className='grid grid-cols-2 gap-2'>

                <FormControl>
                    <p className='text-white'>First name</p>
                    <Input
                        required
                        placeholder='First Name'
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </FormControl>

                <FormControl>
                    <p className='text-white'>Last Name</p>
                    <Input
                        required
                        placeholder='Last Name'
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </FormControl>

            </div>




            <FormControl>
                <p className='text-white'>Email</p>
                <Input
                    required
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </FormControl>

            <FormControl>
                <p className='text-white'>Phone</p>
                <Input
                    required
                    placeholder='Phone'
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
            </FormControl>

            <FormControl>
                <p className='text-white'>Message</p>
                <Textarea
                    required
                    placeholder="Your Message..."
                    value={message}
                    minRows={4}
                    onChange={e => setMessage(e.target.value)}
                />

            </FormControl>

            <button className='w-full text-white p-1 border-2 rounded-md'>Submit</button>

            <p className='text-sm font-bold text-white'>Do not submit any sensetive medical information</p>

        </div>
    );
};

export default GeneralContactForm;