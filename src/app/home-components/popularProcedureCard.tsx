'use client'

import Image, { StaticImageData } from 'next/image';
import Button from "@mui/joy/Button/Button";
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface PopularProcedureCardProps {
    id: number;
    icon: StaticImageData;
}

export const PopularProcedureCard = ({ id, icon }: PopularProcedureCardProps) => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [loading, setLoading] = useState(true)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await fetch('/api/dollarMenuProcedureData?id=' + id);
            const { procedure } = await data.json();
            setName(procedure[0].name);
            setPrice(procedure[0].price);
            setLoading(false);
            return;
        };

        fetchData();
    }, [id])

    return (
        <div className="flex flex-col items-center space-y-4 p-4 border-2 rounded-lg justify-end bg-white hover">
            <div className='h-full'>
                <h2 className="text-center overflow-wrap">{name}</h2>
            </div>
            <Image alt={name} src={icon} width={50} height={50} />
            <div className='flex flex-col items-center space-y-0'>
                <p className="text-sm">Starting from</p>
                <p className="text-2xl font-bold">{loading ? ' ' : formatter.format(price)}</p>
            </div>

            <Link href={`/procedures/${id}`}>
                <Button endDecorator={<KeyboardArrowRight />} variant="outlined" color='neutral' >
                    Learn More
                </Button>
            </Link>
        </div>
    )
}

export default PopularProcedureCard;