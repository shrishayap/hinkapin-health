'use client'

import { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Chip, Divider, Option, Select, Skeleton, Table } from '@mui/joy';
import { getProcedurePrices } from '../[category]/ajax';
import Link from 'next/link';

interface ProcedurePriceTableProps {
    category: string;
}

const ProcedurePriceTable: React.FC<ProcedurePriceTableProps> = ({ category }) => {

    const [procedureData, setProcedureData] = useState<{ name: string, price: number | string, uuid: string }[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {

            setLoading(true);

            if (category === 'all') {
                setProcedureData([])
                return;
            };

            const newData: { procedureName: string, price: number | string }[] = [];

            const data = await getProcedurePrices(category)

            if (data === null) {
                setProcedureData([]);
                setLoading(false);
                return;
            }


            setProcedureData(data.procedures);
            setLoading(false);
        };

        fetchData();
    }, [category]);


    if (category === 'all') return (null);
    if (procedureData.length === 0) return (null)

    return (
        <div className='w-full bg-white rounded-xl p-2 md:p-3 border-2'>

            <Accordion>
                <AccordionSummary>See Procedure Pricing</AccordionSummary>
                <AccordionDetails>

                    <div className='flex flex-col'>

                        <div className='flex flex-row justify-between border-b-2 px-2 py-1'>
                            <p className='font-bold'>Name</p>
                            <p className='font-bold'>Price</p>
                        </div>

                        {procedureData.map((data) => (
                            <div className='w-full hover:bg-slate-100 px-2 py-1 border-b' key={data.uuid}>
                                <Link href={`/procedures/${data.uuid}`} className='w-full flex flex-row justify-between'>
                                    <p>{data.name}</p>
                                    {typeof data.price === 'number' ? <p>${data.price.toFixed(2)}</p> : <p>{data.price}</p>}
                                </Link>
                            </div>
                        ))}
                    </div>

                </AccordionDetails>
            </Accordion>
        </div>
    )

}

export default ProcedurePriceTable;