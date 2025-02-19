'use client'
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import ProcedureSearchBar from '@/components/procedureSearchBar';

export const Header = () => {
    const t = useTranslations('Navigation');
    const [isOpen, setIsOpen] = useState(false);
    const [searchOnly, setSearchOnly] = useState(false);
    const [language, setLanguage] = useState('en');

    const navigation = [
        { text: t('popular'), link: '/#popularProcedures' },
        { text: t('categories'), link: '/#surgeryCategory' },
        { text: t('howItWorks'), link: '/#howItWorks' },
        { text: t('navigation'), link: '/surgicalNavigation' },
        { text: t('contact'), link: '/contact' }
    ];

    const [orgName, setOrgName] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Read language cookie on component mount
        const languageCookie = document.cookie
            .split('; ')
            .find(row => row.startsWith('language='));
        const currentLanguage = languageCookie ? languageCookie.split('=')[1] : 'en';
        setLanguage(currentLanguage);

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
        };

        fetchData();
    }, []);

    const handleLanguageChange = (newValue) => {
        setLanguage(newValue);
        document.cookie = `language=${newValue}; path=/; max-age=31536000`; // 1 year expiry
        window.location.reload(); // Reload to apply new language
    };

    if (searchOnly) return (
        <nav className="flex justify-center p-2 md:p-4 bg-[#f9da5c] border-4 border-black">
            <div className='flex space-x-2'>
                <ProcedureSearchBar size='md' />
                <IconButton onClick={() => setSearchOnly(false)} color="neutral" variant="outlined">
                    <IoClose />
                </IconButton>
            </div>

        </nav>
    )

    return (
        <nav className="flex justify-center p-2 md:p-4 bg-[#f9da5c] border-4 border-black">

            <div className='w-full max-w-[1200px] flex space-x-5 justify-between'>

                <Link href='/'>
                    <h1 className="text-2xl font-bold font-serif"> {loading ? " " : orgName} </h1>
                </Link>

                <div className='hidden md:flex md:flex-grow'>
                    <ProcedureSearchBar size='md' />
                </div>

                <div className="hidden md:flex space-x-3 items-center">
                    {navigation.map((item, index) => (
                        <Link key={index} href={item.link} className="hover:border-b-2 border-black self-center">
                            <p className='font-semibold text-sm'>{item.text}</p>
                        </Link>
                    ))}
                    
                    <Select
                        value={language}
                        onChange={(_, newValue) => handleLanguageChange(newValue)}
                        size="sm"
                        sx={{ minWidth: 100 }}
                    >
                        <Option value="en">English</Option>
                        <Option value="es">Español</Option>
                    </Select>
                </div>

                <div className="md:hidden flex space-x-2">
                    <IconButton className='border-2 border-black' onClick={() => setSearchOnly(true)} color="neutral" variant="outlined">
                        <IoSearch />
                    </IconButton>
                    <IconButton className='border-2 border-black' onClick={() => setIsOpen(true)} color="neutral" variant="outlined">
                        <IoMenu />
                    </IconButton>
                </div>
            </div>

            <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="flex flex-col space-y-2 p-4">
                    {navigation.map((item, index) => (
                        <Link key={index} href={item.link} className="self-start">
                            <p className='font-semibold text-lg'>{item.text}</p>
                        </Link>
                    ))}
                    <Select
                        value={language}
                        onChange={(_, newValue) => handleLanguageChange(newValue)}
                        size="sm"
                        sx={{ minWidth: 100 }}
                    >
                        <Option value="en">English</Option>
                        <Option value="es">Español</Option>
                    </Select>
                </div>
            </Drawer>


        </nav>
    );
}

export default Header;