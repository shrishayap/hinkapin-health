import Image from 'next/image';
import React from 'react';
import howItWorks from "@/../public/heroGraphic.png"
import ProcedureSearchBar from '@/components/procedureSearchBar';
import Link from 'next/link';

export const LandingHero = () => {
    return (
        <div className='rounded-xl border p-3 md:p-8 bg-black'>
            <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-10">
                <div className="flex flex-col space-y-4 w-full lg:w-1/2">
                    <h1 className="text-6xl font-medium font-serif text-white">Simple, Clear Pricing for Your Healthcare</h1>
                    <p className="text-white">We make healthcare easy to understand. You will know the exact price before treatment. Our trusted doctors provide quality care at fair prices - no hidden costs.</p>
                    <ProcedureSearchBar />
                    <Link href="/contact">
                        <button className="text-white rounded-md p-2 font-semibold w-full border-2">Need help? Contact us to plan your care</button>
                    </Link>
                </div>
                <Image className="hidden lg:block w-1/2" src={howItWorks} alt="Hinkapin Health" />
            </div>
        </div>
    );
}

export default LandingHero;