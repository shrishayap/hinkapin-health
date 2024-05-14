
import Button from "@mui/joy/Button/Button";
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';

interface ProcedureCardProps {
    name: string;
    price: number;
    id: number;
}

export const ProcedureCard = ({ name, price, id }: ProcedureCardProps) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    
    return (
        <div className="flex flex-col items-center space-y-4 p-4 border-2 rounded-lg justify-end bg-white hover">
            <div className='h-full'>
                <h2 className="text-center overflow-wrap">{name}</h2> 
            </div>
            <div className='flex flex-col items-center space-y-0'>
                <p className="text-sm font-serif">Starting at</p>
                <p className="text-2xl font-bold font-serif">{formatter.format(price)}</p>
            </div>

            <Link href={`/procedures/${id}`}>
                <Button endDecorator={<KeyboardArrowRight />} variant="outlined" color='neutral' >
                    Learn More
                </Button>
            </Link>
        </div>
    )
}

export default ProcedureCard;