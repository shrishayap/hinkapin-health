'use client'

import React from 'react';
import InfoCard from './infoCard';
import Typography from '@mui/joy/Typography/Typography';
import kidney from '@/../public/popular-procedures-icons/kidney.svg'
import female from '@/../public/popular-procedures-icons/female.svg'
import tonsil from '@/../public/popular-procedures-icons/tonsil.svg'
import bump from '@/../public/popular-procedures-icons/bump.svg'
import colon from '@/../public/popular-procedures-icons/colon.svg'
import gallBladder from '@/../public/popular-procedures-icons/gall-bladder.svg'


const InfoCardHolder = () => {


    return (
        <div className='flex flex-col space-y-2'>
            <Typography level='h4'> Popular Procedures </Typography>
            <div className="flex flex-row overflow-x-auto space-x-3">
                <InfoCard procedure='Colonoscopy + Biopsy' price={1610} icon={colon} link='/categories/gastro' />
                <InfoCard procedure='Gall Bladder Surgery' price={5945} icon={gallBladder} link='/categories/general-surgery' />
                <InfoCard procedure='Hernia Repair' price={5225} icon={bump} link='/categories/general-surgery' />
                <InfoCard procedure='Kidney Stone' price={5005} icon={kidney} link='/categories/urology' />
                <InfoCard procedure='Tonsil & Adnoid Removal' price={4631} icon={tonsil} link='/categories/ent' />
                <InfoCard procedure='Tubal Reversal' price={5775} icon={female} link='/categories/urology' />
            </div>
        </div>
    );
};

export default InfoCardHolder;