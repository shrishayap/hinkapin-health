import Typography from '@mui/joy/Typography';
import React from 'react';
import { Chip, Option, Select } from '@mui/joy';
import data from '@/../data/procedures.json';


interface SubCategorySelectProps {
    category: string | null;
    onSelect: (param: string) => void;
    selectedSubCategory: string | null;
}

const SubCategorySelect: React.FC<SubCategorySelectProps> = ({ category, onSelect, selectedSubCategory }) => {

    if (category === null || category === 'All Procedures') return (null);

    const handleButtonClick = (subCategory: string) => {
        onSelect(subCategory);
    };

    return (
        <>
            <div className='flex flex-col'>
                <Typography level='title-sm'>Select Procedure</Typography>
                <Select placeholder="Select Procedure"
                    slotProps={{
                        listbox: {
                            placement: 'bottom-start',
                            sx: { minWidth: 160 },
                        },
                    }}
                    defaultValue={selectedSubCategory}
                    >
                    {data[category].map(({ name, price }: { name: string, price: number }) => {
                        const priceDisplay = price.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        });
                        return (
                            <Option key={name} value={name} label={
                                <div className='flex flex-row'>
                                    <Chip size="sm" variant="solid" color="primary">{`${priceDisplay}`}</Chip>
                                    {name}
                                </div>
                            } onClick={() => handleButtonClick(name)}>
                                    {name}
                                    <Chip size="sm" variant="solid" color="primary">{`${priceDisplay}`}</Chip>
                            </Option>

                        );
                    })}
                </Select>

            </div>
        </>
    );
};

export default SubCategorySelect;
