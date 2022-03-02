import React from 'react';
import emailjs from '@emailjs/browser';

const contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'radiant_academy', e.target, 'user_YkJkSWKqQwdoELEotZTxP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div>
            <div className="grid grid-cols-1 mx-auto py-[5rem]">
                <div className="mb-6">
                    <h1 className="text-5xl	font-bold text-violet-900 text-center">Contact Us</h1>
                </div>
                <div className="bg-slate-200 py-4">
                    <div className="px-7 md:w-3/5 lg:w-3/6 xl:w-2/6 flex flex-col mx-auto">
                        <form onSubmit={sendEmail}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Type Your Name"
                                className="w-full py-3 mt-4 mb-2 px-3 outline-none rounded-lg mb-6 focus:outline-none focus:ring focus:ring-violet-300"
                                required
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="Type Your Email"
                                className=" w-full py-3 px-3 outline-none rounded-lg mb-6 focus:outline-none focus:ring focus:ring-violet-300"
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Type Your Subject"
                                className="w-full py-3 px-3 outline-none rounded-lg mb-6 focus:outline-none focus:ring focus:ring-violet-300"
                                required
                            />
                            <textarea
                                className="border-2 w-full h-[120px] outline-none py-3 px-3 resize-none rounded-lg mb-4 focus:outline-none focus:ring focus:ring-violet-300"
                                name="message"
                                placeholder="Type your comment here!"
                                required
                            ></textarea>
                            <button type="submit" className="bg-violet-900 text-white px-4 md:px-8 py-2 text-lg font-bold rounded-full shadow-md w-[100px] sm:w-[120px] md:w-[150px] lg:w-[150px] float-right">SEND</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default contact;