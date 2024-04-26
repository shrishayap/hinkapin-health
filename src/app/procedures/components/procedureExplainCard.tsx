
interface ProcedureExplalinCardProps {
    name: string;
    description: string;
    price: number;
}

export const ProcedureExplainCard = ({ name, description, price }: ProcedureExplalinCardProps) => {

    return (
        <div className='flex flex-col space-y-2 bg-gradient-to-r from-slate-900 to-slate-700 p-3 md:p-8 rounded-xl text-white'>
            <p className='text-2xl font-bold'>{name}</p>
            <p><span className='font-bold'>Description: </span>{description ? description : 'Not Available'}</p>
            <p><span className='font-bold'>Price: </span>{typeof price === 'number' ? <span>${(price * 0.9).toFixed(2)} - ${(price * 1.1).toFixed(2)}</span> : <span>{price}</span>}
            </p>
        </div>
    );
}

export default ProcedureExplainCard;