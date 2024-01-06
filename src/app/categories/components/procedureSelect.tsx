import React from "react"
import SurgeryCategoryHolder from "@/app/categories/components/surgeryCategoryHolder";
import ProcedurePriceTable from "./procedurePriceTable";

interface ProcedureSelectProps {
    category: string;
}

export const ProcedureSelect: React.FC<ProcedureSelectProps> = ({
    category,
}) => {


    return (
        <div className='flex flex-col space-y-2'>

            <SurgeryCategoryHolder category={category}/>
            <ProcedurePriceTable category={category} />

        </div>
    )
}

export default ProcedureSelect