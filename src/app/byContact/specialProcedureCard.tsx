'use client'
import Button from "@mui/joy/Button/Button";
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface SpecialProcedureCardProps {
    name: string;
}

export const SpecialProcedureCard = ({ name }: SpecialProcedureCardProps) => {
    const t = useTranslations('SpecialtyProcedures');

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      });
    
    return (
        <div className="flex flex-col items-center space-y-4 p-4 border-2 rounded-lg justify-end bg-white hover">
            <div className='h-full'>
                <h2 className="text-center overflow-wrap">{name}</h2> 
            </div>

            <Link href={`/contact`}>
                <Button endDecorator={<KeyboardArrowRight />} variant="outlined" color='neutral' >
                    {t('contactUs')}
                </Button>
            </Link>
        </div>
    )
}

export default SpecialProcedureCard;