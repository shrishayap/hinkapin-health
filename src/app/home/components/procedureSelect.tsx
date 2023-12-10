import React from "react"
import SurgeryCategoryHolder from "@/app/home/components/surgeryCategoryHolder";
import SubCategorySelect from "@/app/home/components/subcategorySelect";
import { Chip, Tooltip } from "@mui/joy";

interface ProcedureSelectProps {
    selectedCategory: string | null;
    onSelectCategory: (param: string | null) => void;
    selectedSubCategory: string | null;
    onSelectSubCategory: (param: string) => void;
}

export const ProcedureSelect: React.FC<ProcedureSelectProps> = ({
    selectedCategory,
    onSelectCategory,
    selectedSubCategory,
    onSelectSubCategory
}) => {


    return (
        <div className='flex flex-col space-y-2'>

            <SurgeryCategoryHolder selectedCategory={selectedCategory} onSelect={onSelectCategory} />

            {selectedCategory != 'All Procedures' &&
                <div className='flex flex-row justify-between'>

                    <div className='w-full max-w-[600px]'>
                        <SubCategorySelect category={selectedCategory} onSelect={onSelectSubCategory} selectedSubCategory={selectedSubCategory} />
                    </div>
                    
                </div>
            }

        </div>
    )
}

export default ProcedureSelect