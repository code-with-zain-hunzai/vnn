import Stadium from '../../public/stadium.png';
export default function Experience() {
    return (
        <section
            className="relative min-h-[50vh] flex items-center justify-center py-20"
            style={{
                backgroundImage: 'url(/experience.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >

            {/* Content */}
            <div className="relative z-10 mx-auto px-6 text-center flex justify-between container">
                <div className='w-1/2 flex flex-col justify-center text-start'>
                    <h2 className='text-5xl font-bold leading-10 text-white text-start pb-12'>Proven Experiences</h2>
                    <p className='text-white pb-4'>
                        Our proven experiences showcase the real-world impact of our solutions across industries. From delivering seamless live sports coverage to enabling secure enterprise communications and ensuring disaster recovery readiness, each story reflects how we bring together technology, creativity, and reliability.
                    </p>
                    <span className='text-white'>
                        More than just projects, these experiences demonstrate how we help clients connect, engage, and grow on a global scale — proving the value of solutions built to perform when it matters most.
                    </span>
                </div>
                <div className='w-1/2'>
                    <img src={Stadium} alt="experience" className='w-full' />
                </div>
            </div>
        </section>
    );
}