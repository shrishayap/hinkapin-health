'use client'
import Snackbar from '@mui/joy/Snackbar';
import IconButton from '@mui/joy/IconButton';
import { IoMdClose } from "react-icons/io";


import { useState } from "react";


export const CTASnackBar = () => {

    const [open, setOpen] = useState(true);

    return (
        <Snackbar
            variant="soft"
            color="neutral"
            open={open}
            onClose={(event, reason) => {
                if (reason === 'clickaway') {
                    return;
                }
                setOpen(false);
            }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            endDecorator={
                <IconButton
                    onClick={() => setOpen(false)}
                    size="sm"
                    variant="outlined"
                    color="neutral">
                    <IoMdClose />
                </IconButton>

            }
            className='bg-white border shadow-2xl border-black'
        >


            <a href='/contact'>
                <div className="flex flex-col">
                    <p className='text-lg font-bold'>Bundled cash price surgery</p>
                    <p>Click to contact us today</p>
                </div>
            </a>
        </Snackbar>


    )
}

export default CTASnackBar;