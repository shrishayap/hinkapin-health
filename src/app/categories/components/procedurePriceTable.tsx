import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Chip, Option, Select, Skeleton, Table } from '@mui/joy';
import { getProcedurePrices } from '../[category]/ajax';

interface ProcedurePriceTableProps {
    category: string;
}

const ProcedurePriceTable: React.FC<ProcedurePriceTableProps> = ({ category }) => {

    const [priceData, setPriceData] = React.useState<{ procedureName: string, price: number | string }[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        const fetchData = async () => {

            setLoading(true);

            if (category === 'all') {
                setPriceData([])
                return;
            };

            const newData: { procedureName: string, price: number | string }[] = [];

            const data = await getProcedurePrices(category)
            
            if (data === null) {
                setPriceData([]);
                setLoading(false);
                return;
            }

            for (const procedureName in data) {
                const price = data[procedureName];
                newData.push({ procedureName, price: price })
            }

            setPriceData(newData);
            setLoading(false);
        };

        fetchData();
    }, [category]);


    if (category === 'all') return (null);
    if (priceData.length === 0) return (null)

    return (
        <Accordion>
            <AccordionSummary>See Procedure Pricing</AccordionSummary>
            <AccordionDetails>
                <Table sx={{ '& tr > *:not(:first-child)': { textAlign: 'right' } }}>
                    <thead>
                        <tr>
                            <th style={{ width: '70%' }}>Procedure</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <>
                                <tr>
                                    <td colSpan={2}>
                                        <Skeleton variant="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <Skeleton variant="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <Skeleton variant="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <Skeleton variant="text" />
                                    </td>
                                </tr>
                            </>


                        ) : (
                            priceData.map((data) => (
                                <tr key={data.procedureName}>
                                    <td>{data.procedureName}</td>
                                    <td>
                                        <Chip
                                            color="primary"
                                            variant="solid"
                                        >
                                            {typeof data.price === 'number' ? '$' : null} {data.price}
                                        </Chip>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </AccordionDetails>
        </Accordion>
    )

}

export default ProcedurePriceTable;