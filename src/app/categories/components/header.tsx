import {Button, ButtonGroup} from "@mui/joy"
import React from "react";
import Link from "next/link";

interface HeaderProps {
   
}


export const Header: React.FC<HeaderProps> = ({
  
}) => {
  
    return (
        <div className='flex flex-row justify-between'>

            <div className='flex flex-row'>
                <p className='font-serif font-extrabold text-3xl'>Hinkapin Health</p>
            </div>

                <ButtonGroup >
                    <Link href='/how-it-works'>
                        <Button>How it works</Button>
                    </Link>
                </ButtonGroup>


        </div>
    )
}

export default Header