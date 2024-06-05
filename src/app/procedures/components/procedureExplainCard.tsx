
import Chip from '@mui/joy/Chip';
import ProcedureDisclaimer from './disclaimer';


interface ProcedureExplalinCardProps {
    medicalName: string;
    commonName: string;
    cptCode: string;
    description: string;
    price: number;
    locations: string[];
}

export const ProcedureExplainCard = ({ medicalName, commonName, cptCode, description, price, locations }: ProcedureExplalinCardProps) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    return (
        <div className='flex flex-col space-y-2 p-3 md:p-8 rounded-xl text-black border-2 bg-white'>
            <p className='text-2xl font-bold'>{medicalName}</p>
            {commonName && <p><span className='font-bold'>Common Name: </span>{commonName ? commonName : 'Not available'}</p>}
            <p><span className='font-bold'>CPT Code: </span>{cptCode ? cptCode : 'Not available'}</p>
            <p><span className='font-bold'>Description: </span>{description ? description : 'Not available'}</p>

            <div>
                <p><span className='font-bold'>Price: </span> {price ? <span> Starting from {formatter.format(price)} </span> : 'Please call for price'}</p>
                <p className='text-sm font-light'>Prices may vary by location.</p>
            </div>



            <div className='flex flex-col space-y-1'>
                <p className='font-bold'>Locations: </p>
                <div className='flex flex-row space-x-2 space-y-1 flex-wrap'>
                    {
                        locations.map((location) => (
                            <Chip
                                color="primary"
                                size="md"
                                variant="solid"
                                key={location}
                            > {location}
                            </Chip>
                        ))
                    }
                </div>
                <a className='text-sm font-light hover:underline' href='/contact'>If your location is not listed, please contact us.</a>
            </div>

            <ProcedureDisclaimer />
            <a className='text-sm font-light hover:underline' href='/#paymentOptions'>Hinkapin Health offers multiple payment options for your convenience. Click here to veiw all payment options.</a>
        </div >
    );
}

export default ProcedureExplainCard;