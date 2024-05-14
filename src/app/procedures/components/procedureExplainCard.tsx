import Chip from '@mui/joy/Chip';


interface ProcedureExplalinCardProps {
    name: string;
    description: string;
    price: number;
    range: number;
    locations: string[];
}

export const ProcedureExplainCard = ({ name, description, price, range, locations }: ProcedureExplalinCardProps) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div className='flex flex-col space-y-2 p-3 md:p-8 rounded-xl text-black border-2 border-black'>
            <p className='text-2xl font-bold'>{name}</p>
            <p><span className='font-bold'>Description: </span>{description ? description : 'Not available'}</p>
            <p><span className='font-bold'>Price: </span> {price ? <span>{formatter.format(price)} - {formatter.format(price * (1 + range / 100))}</span> : 'Please call for price'}</p>
            <p><span className='font-bold'>Locations: </span>

                    <span className='flex flex-row space-x-2'>
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

                        <Chip
                            color="primary"
                            size="md"
                            variant="solid"
                        > More coming soon!
                        </Chip>
                    </span>



            </p>
        </div>
    );
}

export default ProcedureExplainCard;