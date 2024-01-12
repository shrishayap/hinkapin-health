'use client'
import Button from '@mui/joy/Button';
import Drawer from '@mui/joy/Drawer';
import { useState } from 'react';

export const HomeNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigation = ['Home', 'Popular Procedures', 'Categories', 'How it Works'];
    const refs = ['home', 'popularProcedures', 'surgeryCategory', 'howItWorks']

    return (
        <nav className="flex justify-between items-center p-6 bg-white border-b-2">
            <h1 className="text-3xl font-bold font-serif">Hinkapin Health</h1>
            <div className="hidden md:flex ">
                {navigation.map((item, index) => (
                    <a key={index} href={`#${refs[index]}`} className="hover:bg-slate-200 rounded-lg px-3 py-2">
                        <p className='font-bold text-md'>{item}</p>
                    </a>
                ))}
            </div>
            <div className="md:hidden">
                <Button onClick={() => setIsOpen(true)} color="neutral" variant="outlined">Menu</Button>
            </div>
            <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="p-6">
                    {navigation.map((item, index) => (
                        <a key={index} href={`#${refs[index]}`} className="block mb-4 hover:bg-slate-200 rounded-lg px-3 py-2">{item}</a>
                    ))}
                </div>
            </Drawer>
        </nav>
    );
}

export default HomeNavBar;