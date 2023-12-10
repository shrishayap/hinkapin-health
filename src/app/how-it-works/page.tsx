"use client"

import React from 'react';
import Image from "next/image";

import cloudIcon from '@/../public/upload.svg';
import oneIcon from '@/../public/one.svg';
import twoIcon from '@/../public/two.svg';
import threeIcon from '@/../public/three.svg';
import fourIcon from '@/../public/four.svg';
import discussIcon from '@/../public/discuss.svg';
import searchIcon from '@/../public/search.svg';
import treatmentIcon from '@/../public/treatment.svg';

import howItWorksImage from '@/../public/how_it_wkrs.png';

export default function Page() {

   

    const renderStep1 = () => {
        return (
            <>
                <Image src={oneIcon} alt="" width={40} height={40} className='pb-3'/>
                <p className='text-2xl font-bold pb-3'>Upload Medical Data</p>
                <p className='font-light'>Fill out your medical data for the last time. We keep your data to on file so you never have to answer the same question twice</p>
                <div className='flex flex-row justify-center'>
                    <Image src={cloudIcon} alt="" width={80} height={80} />
                </div>
            </>
        )
    }

    const renderStep2 = () => {
        return (
            <>
                <Image src={twoIcon} alt="" width={40} height={40} className='pb-3'/>
                <p className='text-2xl font-bold pb-3'>Case Manager Assigned</p>
                <p className='font-light'>A personal case manager is assigned and works with a physician to review your medical needs and a one-on-one session will be booked. Diagnosis fee is paid upfront before one-on-one session.</p>
                <div className='flex flex-row justify-center'>
                    <Image src={searchIcon} alt="" width={80} height={80} />
                </div>
            </>
        )
    }

    const renderStep3 = () => {
        return (
            <>
                <Image src={threeIcon} alt="" width={40} height={40} className='pb-3'/>
                <p className='text-2xl font-bold pb-3'>Diagnosis Session with Physician</p>
                <p className='font-light pb-1'>All options are discussed and end to end care coordination will be set up. Case manager will create a detailed plan including the bundled fee and the schedule</p>
                <p className='font-light'>If you decide to go through with the bundled procedure, the diagnosis fee will be deducted from the final bundled fee</p>
                <div className='flex flex-row justify-center'>
                    <Image src={discussIcon} alt="" width={100} height={100} />
                </div>
            </>
        )
    }

    const renderStep4 = () => {
        return (
            <>
                <Image src={fourIcon} alt="" width={40} height={40} className='pb-3'/>
                <p className='text-2xl font-bold pb-3'>Treatment</p>
                <p className='font-light pb-1'>Once you make the upfront bundled payment, the care coordinator will walk you through all the steps and book all your appointments for you.</p>
                <p className='font-light pb-2'>All aspects including pre and post-surgery care is coordinated and no additional payments need to be made! No more dealing with confusing insurance lingo and chasing down medicine from dozens of locations.</p>
                <div className='flex flex-row justify-center'>
                    <Image src={treatmentIcon} alt="" width={80} height={80} />
                </div>
            </>
        )
    }



    return (
        <div className="min-h-screen flex flex-col bg-gray-100 space-y-10 pb-40">
        
          <div className='flex flex-col items-center bg-white p-8 rounded-lg shadow-lg h-auto'>
            <p className='text-6xl font-serif font-extrabold'>
              Hinkapin Health
            </p>
            <p className='font-serif text-lg font-light pt-3'>
              Making a difference one patient at a time
            </p>
            <Image src={howItWorksImage} alt="" width={1000} height={500}/>
          </div>
      
          <div className='flex flex-row pl-36 pr-36 space-x-10 h-2/5'>
            <div className="flex flex-col bg-white p-8 rounded-lg shadow-lg w-2/5 h-auto transform scale-100 hover:scale-105 transition-transform duration-1000">
              {renderStep1()}
            </div>
            <div className="flex flex-col bg-white p-8 rounded-lg shadow-lg w-3/5 h-auto transform scale-100 hover:scale-105 transition-transform duration-1000">
              {renderStep2()}
            </div>
          </div>
      
          <div className='flex flex-row pl-36 pr-36 space-x-10 h-2/5'>
            <div className="flex flex-col bg-white p-8 rounded-lg shadow-lg w-6/12 h-auto transform scale-100 hover:scale-105 transition-transform duration-1000">
              {renderStep3()}
            </div>
            <div className="flex flex-col bg-white p-8 rounded-lg shadow-lg w-6/12 h-auto transform scale-100 hover:scale-105 transition-transform duration-1000">
              {renderStep4()}
            </div>
          </div>
      
        </div>
      );
      
      
      
};

