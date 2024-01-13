'use client'
import React, { useState } from 'react';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';

export const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className='flex flex-col space-y-2 bg-gradient-to-r from-slate-900 to-slate-700 p-3 md:p-8 rounded-xl'>

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

            <p className='text-sm font-light text-white'>Please do not submit any sensetive medical information</p>

        </div>
    );
};

export default ContactForm;