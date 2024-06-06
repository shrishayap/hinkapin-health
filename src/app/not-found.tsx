import Header from "@/components/header"


function NotFoundPage() {
    return (

        <div className='flex flex-col space-y-4'>


            <Header />

            <div className='flex flex-col space-y-2 px-2 max-w-[1200px] w-full self-center pb-4 pt-20'>
                <p className='text-xl font-bold'>404: Page Not Found</p>
                <p>We&apos;re sorry, but the page you are looking for does not exist.</p>
                <a href='/' className='hover:underline'>Click here to return to the home page</a>
            </div>
        </div>
    )
}

export default NotFoundPage