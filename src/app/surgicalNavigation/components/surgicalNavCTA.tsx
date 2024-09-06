'use client'

import { FaArrowCircleRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function SurgicalNavCTA() {
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
            <div className='w-full rounded-xl border p-3 md:p-8 bg-gradient-to-r from-indigo-700 to-blue-700 flex flex-col md:flex-row justify-between items-center'>
                <div className='w-full md:w-1/5 mb-4 md:mb-0'>
                    <Image
                        src="/QRCode.png"
                        alt="QR Code to Hinkapin Health"
                        width={150}
                        height={150}
                        className='mx-auto'
                    />
                </div>
                <div className='w-full md:w-3/5 text-center md:text-left mb-4 md:mb-0'>
                    <p className='text-white font-bold text-lg'>
                        Single cost. Upfront pricing. Bundled.
                    </p>
                    <p className='text-white'>
                        Work with a patient care coordinator and get a consultation booked.
                    </p>
                    <p className='text-white'>
                        Scan the QR code or click the arrow to contact us, or call us today at <a href="tel:+18888500711" className='underline'>+1 (888) 850-0711</a>
                    </p>
                </div>
                <div className='w-full md:w-1/5 flex justify-center'>
                    <Link href="/contact">
                        <FaArrowCircleRight className='w-8 h-8 lg:w-10 lg:h-10 text-white' />
                    </Link>
                </div>
            </div>
        </section>
    )
}