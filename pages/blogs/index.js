import Head from "next/head";
import React from 'react';
import BlogSection from "../../components/BlogComponents/BlogSection";
export const getStaticProps = async ()=>{
    const res = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7dcdae5174374026b19e0a5b076096a3')
    const blogs = await res.json()
    return{
        props:{
            blogs,
        }
    }
}
const index = ({blogs}) => {
    // console.log('dddss',blogs)
    return (
        <div>
            <Head>
                <title>Radiant Academy | Blog</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* FORUM CONTENTS GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <BlogSection blogs={blogs}/>
        </div>
    );
};

export default index;