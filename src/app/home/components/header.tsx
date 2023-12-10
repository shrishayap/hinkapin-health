import { Autocomplete, Button, ButtonGroup, IconButton, Tooltip, Typography } from "@mui/joy"
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from 'react-responsive';
import data from '@/../data/procedures.json';
import React from "react";

interface HeaderProps {
    onSelectCategory: (category: string | null) => void;
    onSelectSubCategory: (subCategory: string) => void;
}


export const Header: React.FC<HeaderProps> = ({
    onSelectCategory,
    onSelectSubCategory
}) => {
    const isSmallScreen = useMediaQuery({ maxWidth: 900 });

    const [value, setValue] = React.useState('');

    const options: {
        category: string;
        name: string;
    }[] = [];

    // Convert JSON data to an array of options
    for (const category in data) {
        const procedures = data[category];
        procedures.forEach((procedure: {
            name: string;
            price: number;
        }) => {
            options.push({
                category,
                name: procedure.name,
            });
        });
    }

    // Sort options by category and then alphabetically by price
    options.sort((a, b) => {
        if (a.category !== b.category) {
            return a.category.localeCompare(b.category);
        }
    });


    return (
        <div className='flex flex-row justify-between'>

            <div className='flex flex-row'>
                <Typography level="h1" className='font-serif font-extrabold'>{isSmallScreen ? 'HH' : 'Hinkapin Health'}</Typography>
            </div>


            <Autocomplete
                startDecorator={<SearchIcon />}
                options={options}
                placeholder={isSmallScreen ? 'Search' : 'Search for a procedure'}
                groupBy={(option) => option.category}
                getOptionLabel={(option) => option.name}
                className='w-2/5'
                onChange={(event, newValue) => {
                    if (newValue === null) return;
                    onSelectCategory(newValue.category);
                    onSelectSubCategory(newValue.name);
                    setValue(newValue.name);
                }}
            />

            <Tooltip title="We are still working on this feature" variant="outlined" placement="bottom-start">
                <ButtonGroup >
                    <Button disabled>Log in</Button>
                    <Button disabled>Sign up</Button>
                </ButtonGroup>
            </Tooltip>


        </div>
    )
}

export default Header