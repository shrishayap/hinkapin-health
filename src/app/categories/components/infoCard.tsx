import Button from '@mui/joy/Button';

import Typography from '@mui/joy/Typography';
import Link from 'next/link';
import Card from '@mui/joy/Card';
import Image from 'next/image';

interface InfoCardProps {
    procedure: string;
    price: number;
    icon: string
    link: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ procedure, price, icon, link }) => {


    return (

        <Link href={link}>

            <Card
                variant="outlined"
                sx={{
                    minWidth: '320px',
                }}
                className='rounded-xl hover:border-blue-500'
            >
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col w-9/12'>
                            <Typography level="h4">{procedure}</Typography>
                            <Typography level="body-md">${price}</Typography>
                            <Button variant="outlined" size="sm" color='neutral'>
                                See Specialists
                            </Button>
                        </div>
                        <Image src={icon} alt={procedure} height={55} width={55} />
                    </div>



                </Card>


        </Link>
    )


}



export default InfoCard;