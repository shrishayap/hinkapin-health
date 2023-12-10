'use client'

import React from 'react';
import InfoCard from './infoCard';
import RouteIcon from '@mui/icons-material/Route';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ForumIcon from '@mui/icons-material/Forum';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Link from 'next/link';

interface InfoCardHolderProps { }

const InfoCardHolder: React.FC<InfoCardHolderProps> = ({ }) => {


    return (
        <Link href='/how-it-works'>
            <div className="flex flex-row overflow-x-auto space-x-3">
                <InfoCard title='End to End' description='Care coordination from pre-op to post-op until you are fully recovered' icon={<RouteIcon />} />
                <InfoCard title='Affordable and Bundled' description='Your cost is affordable and bundled to save you time and money' icon={<PriceCheckIcon />} />
                <InfoCard title='Price Transparency' description='No hidden fees or ridiculous upcharging. This price shown is what you pay' icon={<RemoveRedEyeIcon />} />
                <InfoCard title='Treatment for All' description='No insurance or high deductables? We have a solution' icon={<PeopleAltIcon />} />
                <InfoCard title='Community Driven' description='Fostering relationships with  providers to create affordable, competitive, flat-rate surgery bundles' icon={<ForumIcon />} />
                <InfoCard title='Simple' description='No more dealing with confusing insurance terms and going to dozens of places just for one treatment' icon={<EmojiEmotionsIcon />} />
            </div>
        </Link>
    );
};

export default InfoCardHolder;