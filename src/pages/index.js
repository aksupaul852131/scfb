import Hero from "@/components/hero";
import Blog from "@/components/blog";
import Brands from "@/components/brands";
import Head from "next/head";
import client from '../../client'
import { Step } from "@/components/steps";

export default function Home({ blogs }) {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Smart Care",
    "alternateName": "Smart Care Supaul",
    "url": "https://www.smartcaresupaul.in/",
    "logo": "https://www.smartcaresupaul.in/logo1.png",
    "sameAs": [
      "https://www.facebook.com/smartcaresupaul",
      "https://twitter.com/SmartCareSupaul",
      "https://www.youtube.com/@smartcare-servicecentersup9750",
      "https://www.linkedin.com/in/smart-care-b7a13b262/"
    ]
  };

  return (
    <div>
      <Head>
        <title>Smart Care | Home Appliance Repair Services in Supaul - Expert Technicians Available Now</title>
        <meta name="description" content='Get expert repair and maintenance services for all types of home appliances in Supaul, Bihar. Smart Care technicians are trained to fix any issue quickly and efficiently.' />

        <link rel="canonical" href='http://smartcaresupaul.in' />
        <meta name="google-site-verification" content="ZInZzH3oqHUCrkz_tEbsHH1zGv1G4DtrTpJp_YseZ0Y" />

        {/* OG  */}
        <meta property="og:url" content="http://smartcaresupaul.in" />
        <meta property="og:title" content='Smart Care | Home Appliance Repair Services in Supaul - Expert Technicians Available Now' />
        <meta property="og:url" content="https://www.smartcaresupaul.in/app_sc.png" />
        <meta property="og:description" content='Get expert repair and maintenance services for all types of home appliances in Supaul, Bihar. Smart Care technicians are trained to fix any issue quickly and efficiently.' />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />

        {/* schema */}
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

      </Head>
      <Hero />
      <Step />

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



