import Image from 'next/image';
import React from 'react';
import howItWorks from "@/../public/how_it_wkrs.png"
import ProcedureSearchBar from './procedureSearchBar';

export const LandingHero = () => {
    return (
        <div className='rounded-xl border p-3 md:p-8 bg-gradient-to-r from-red-500 to-orange-500'>
            <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-10">
                <div className="flex flex-col space-y-4">
                    <h1 className="text-6xl font-medium font-serif text-white">Reimagining single cost bundled health care</h1>
                    <p className="text-white">Upfront pricing. Transparency. Quality healthcare. We work hard with our team of care providers to give you the best treatment at a fair price. No surprises. No gimmicks. </p>
                    <ProcedureSearchBar />
                </div>
                <Image className="hidden lg:block w-1/2" src={howItWorks} alt="Hinkapin Health" />
            </div>
        </div>
    );
}

export default LandingHero;