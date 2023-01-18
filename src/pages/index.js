import Hero from "@/components/hero";
import Blog from "@/components/blog";
import Brands from "@/components/brands";
import Head from "next/head";
import client from '../../client'


// pages/index.js
import { createClient } from "next-sanity";


export default function Home({ blogs }) {

  console.log('bggg',
    blogs
  );
  return (
    <div>
      <Head>
        <title>Smart Care | Professional Repair Service</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <Hero />
      <Blog blogs={blogs} />
      <Brands />
    </div>


  );
};

export async function getServerSideProps(context) {
  const blogs = await client.fetch(`*[_type == "post"][0..5]`);

  return {
    props: {
      blogs
    }
  };
}



