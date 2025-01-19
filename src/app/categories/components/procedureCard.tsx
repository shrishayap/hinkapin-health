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
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    });
    
    return (
        <div className="group relative overflow-hidden bg-white rounded-xl shadow-sm border-2">
            <div className="p-6 flex flex-col h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-black" />
                
                <div className="flex flex-col h-full">
                    <div className='flex-grow mb-4'>
                        <h2 className="text-xl font-semibold text-gray-800 leading-tight">
                            {name}
                        </h2>
                    </div>
                    
                    <div className='space-y-1 mb-6'>
                        <p className="text-sm text-gray-500 font-medium">Starting from</p>
                        <p className="text-3xl font-bold text-gray-900">
                            {formatter.format(price) == "$0" ? "Call for Price" : formatter.format(price)}
                        </p>
                    </div>

                    <Link href={`/procedures/${id}`} className="inline-block w-full">
                        <Button
                            endDecorator={<KeyboardArrowRight />}
                            variant="outlined"
                            color='neutral'
                            className="w-full group-hover:bg-gray-50 transition-colors duration-300"
                        >
                            Learn More
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProcedureCard;