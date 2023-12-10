'use client'

import * as React from 'react';
import ProcedureSelect from './components/procedureSelect';
import { Divider } from '@mui/joy';
import Header from './components/header';
import InfoCardHolder from './components/infoCardHolder';
import ListDoctors from './components/listDoctors';


export default function Page() {


    const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
    const [selectedSubCategory, setSelectedSubCategory] = React.useState<string | null>(null);

    const handleCategorySelect = (category: string | null) => {
        setSelectedCategory(category);
        setSelectedSubCategory(null);
    }

    const handleSubCategorySelect = (subCategory: string) => {
        setSelectedSubCategory(subCategory);
    }

    let num = 12


    return (

        <div className='pl-4 justify-center flex flex-col space-y-4 pr-4 pt-4'>

            <Header onSelectCategory={handleCategorySelect} onSelectSubCategory={handleSubCategorySelect}/>
            <Divider />

            <div className='justify-center flex flex-col space-y-4 max-w-full xl:max-w-[1150px] self-center'>

                <InfoCardHolder />

                <ProcedureSelect selectedCategory={selectedCategory} onSelectCategory={handleCategorySelect} selectedSubCategory={selectedSubCategory} onSelectSubCategory={handleSubCategorySelect} />

                <Divider />
                <ListDoctors category={selectedCategory}/>
            </div>

        </div>

    );
}
