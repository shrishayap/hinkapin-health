
export const HinkapinHealthDemo = () => {
    return (
        <div className='flex flex-col space-y-3'>
            <h3 className='text-xl font-bold'>Hinkapin Health Demo</h3>
            <div className='flex justify-center'>
                <iframe
                    className='w-full aspect-video rounded-xl'
                    src="https://www.youtube.com/embed/0wC9DJ6NSgk?si=mo1AtOZNZiN8avaY"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default HinkapinHealthDemo;