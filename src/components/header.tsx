'use client'
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { useState, useEffect } from 'react';
import ProcedureSearchBar from '@/components/procedureSearchBar';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchOnly, setSearchOnly] = useState(false);

    const navigation = ['Popular', 'Categories', 'How it Works', 'Navigation', 'Contact'];
    const link = ['/#popularProcedures', '/#surgeryCategory', '/#howItWorks', '/surgicalNavigation', '/contact']

    const [orgName, setOrgName] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await fetch('/api/getOrgData');
            if (data === null) {
                setOrgName(null);
                setLoading(false);
                return;
            }
            const jsonData = await data.json();
            setOrgName(jsonData["data"]["org_name"]);
            setLoading(false);
            return;
        };

        fetchData();
    }, [])

    if (searchOnly) return (
        <nav className="flex justify-center p-2 md:p-4 bg-white border-b-2">
            <div className='flex space-x-2'>
                <ProcedureSearchBar size='md' />
                <IconButton onClick={() => setSearchOnly(false)} color="neutral" variant="outlined">
                    <IoClose />
                </IconButton>
            </div>

        </nav>
    )

    return (
        <nav className="flex justify-center p-2 md:p-4 bg-white border-b-2">

            <div className='w-full max-w-[1200px] flex space-x-5 justify-between'>

                <Link href='/'>
                    <h1 className="text-2xl font-bold font-serif"> {loading ? " " : orgName} </h1>
                </Link>

                <div className='hidden md:flex md:flex-grow'>
                    <ProcedureSearchBar size='md' />
                </div>

                <div className="hidden md:flex space-x-3">
                    {navigation.map((item, index) => (
                        <Link key={index} href={`${link[index]}`} className="hover:border-b-2 border-black self-center">
                            <p className='font-semibold text-sm'>{item}</p>
                        </Link>
                    ))}
                </div>

                <div className="md:hidden flex space-x-2">
                    <IconButton onClick={() => setSearchOnly(true)} color="neutral" variant="outlined">
                        <IoSearch />
                    </IconButton>
                    <IconButton onClick={() => setIsOpen(true)} color="neutral" variant="outlined">
                        <IoMenu />
                    </IconButton>
                </div>
            </div>

            <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="flex flex-col space-y-2 p-4">
                    {navigation.map((item, index) => (
                        <Link key={index} href={`${link[index]}`} className="self-start">
                            <p className='font-semibold text-lg'>{item}</p>
                        </Link>
                    ))}
                </div>
            </Drawer>


        </nav>
    );
}

export default Header;