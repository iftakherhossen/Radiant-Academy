import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TalentSection = () => {
    return (
        <div className='w-5/6 mx-auto my-5'>
            <div className='flex flex-col-reverse justify-center items-center lg:flex-row gap-4'>
                <div className="w-5/6 lg:w-[50%] py-14">
                    <div className="w-5/6 mx-auto">
                        <Image src="/talent.webp" alt="talent hunt image"
                            width="562"
                            height="438"
                        />
                    </div>
                </div>
                <div className="w-5/6 lg:w-[50%] py-14 lg:pl-20">
                    <h1 className='text-5xl font-bold text-violet-800 my-5'>Grab your place</h1>
                    <p className='text-black text-xl mb-5'>Enjoy the thrilling experience of our Live talent hunt <br /> with Radiant Academy. </p>
                    <Link passHref href="/register">
                    <button className="bg-rose-500 rounded-md text-white px-7 py-3 my-5">
                        Create Account
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TalentSection;