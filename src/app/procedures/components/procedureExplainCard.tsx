import Chip from '@mui/joy/Chip';
import ProcedureDisclaimer from './disclaimer';


interface ProcedureExplalinCardProps {
    medicalName: string;
    commonName: string;
    cptCode: string;
    description: string;
    price: number;
    locations: string[];
    implantDisclaimer: boolean;
}

export const ProcedureExplainCard = ({ medicalName, commonName, cptCode, description, price, locations, implantDisclaimer }: ProcedureExplalinCardProps) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    return (
        <div className='flex flex-col space-y-6 p-6 md:p-8 rounded-xl text-gray-800 border border-gray-200 bg-white shadow-sm'>
            {/* Header Section */}
            <div className='space-y-2'>
                <h2 className='text-3xl font-bold text-primary-600'>{medicalName}</h2>
                {commonName && (
                    <div className='flex items-baseline gap-2'>
                        <span className='text-sm font-semibold text-gray-600'>Common Name:</span>
                        <span>{commonName}</span>
                    </div>
                )}
            </div>

            {/* Info Section */}
            <div className='grid gap-4'>
                <div className='flex items-baseline gap-2'>
                    <span className='text-sm font-semibold text-gray-600'>CPT Code:</span>
                    <span>{cptCode || 'Not available'}</span>
                </div>
                
                <div className='space-y-2'>
                    <span className='text-sm font-semibold text-gray-600'>Description:</span>
                    <p className='leading-relaxed'>{description || 'Not available'}</p>
                </div>
            </div>

            {/* Pricing Section */}
            <div className='bg-black p-4 rounded-lg space-y-2 text-white'>
                <div className='flex items-baseline gap-2'>
                    <span className='text-sm font-semibold text-gray-300'>Price:</span>
                    {price ? (
                        <span className='text-lg font-semibold'>Starting from {formatter.format(price)}</span>
                    ) : (
                        <span>Please call for price</span>
                    )}
                </div>
                <p className='text-sm text-gray-300'>Prices may vary by location.</p>
                {implantDisclaimer && (
                    <p className='text-sm text-gray-300'>*Implants and prosthesis price not included.</p>
                )}
            </div>

            {/* Locations Section */}
            <div className='space-y-3'>
                <span className='text-sm font-semibold text-gray-600'>Available Locations:</span>
                <div className='flex flex-wrap gap-2'>
                    {locations.map((location) => (
                        <Chip
                            color="primary"
                            size="md"
                            variant="soft"
                            key={location}
                        >
                            {location}
                        </Chip>
                    ))}
                </div>
                <a className='text-sm text-primary-600 hover:underline' href='/contact'>
                    If your location is not listed, please contact us
                </a>
            </div>

            {/* Footer Section */}
            <div className='space-y-4 pt-4 border-t border-gray-200'>
                <ProcedureDisclaimer />
                <a className='text-sm text-primary-600 hover:underline block' href='/#paymentOptions'>
                    View all payment options
                </a>
            </div>
        </div>
    );
}

export default ProcedureExplainCard;