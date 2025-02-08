'use client'

import Autocomplete from '@mui/joy/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/joy/CircularProgress';
import { useState, useEffect } from 'react';
import { getSearchQeury } from './ajax';
import AutocompleteOption from '@mui/joy/AutocompleteOption';
import Link from 'next/link';

interface ProcedureSearchBarProps {
    size?: 'sm' | 'md' | 'lg'
}

export const ProcedureSearchBar = ({ size = 'lg' }: ProcedureSearchBarProps) => {
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [options, setOptions] = useState<any[]>([])
    
    // Move placeholder logic to top level
    const suggestions = [
        "Knee pain...",
        "Wrist surgery...", 
        "Hip replacement...",
        "Back pain...",
        "Shoulder surgery...",
        "Carpal tunnel...",
        "Cataract surgery..."
    ];
    const [placeholder, setPlaceholder] = useState(suggestions[0]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholder(suggestions[Math.floor(Math.random() * suggestions.length)]);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setOptions([])
            if (searchTerm.length > 2) {
                setLoading(true)
                const matching = await getSearchQeury(searchTerm);
                matching && setOptions(matching);
                setLoading(false)
                console.log(matching);
            }
        }
        fetchData();
    }, [searchTerm]);

    return (
        <Autocomplete
            className='flex-grow border-2 border-black'
            freeSolo
            noOptionsText="No matching procedures"
            inputValue={searchTerm}
            onInputChange={(event, newInputValue) => {
                setSearchTerm(newInputValue);
            }}
            startDecorator={< SearchIcon />}
            placeholder={placeholder}
            options={options}
            size={size}
            loading={loading}
            endDecorator={
                loading && <CircularProgress size="sm" />
            }
            getOptionLabel={(option) => option.medical_name}
            renderOption={
                (props, option) => (
                    <AutocompleteOption {...props} key={option.id}>
                        <Link href={`/procedures/${option.id}`}>
                            <div className='flex flex-col'>
                                <p className='font-bold text-sm'>{option.medical_name}</p>
                                <p className='font-light text-xs'>{option.description}</p>
                            </div>
                        </Link>
                    </AutocompleteOption>
                )
            }
        />
    )
}

export default ProcedureSearchBar;