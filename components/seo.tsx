import Head from 'next/head'

export default function Seo({pageTitle}: any){
    return(
        <>
        <Head>
            <title>
                {pageTitle}
            </title>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Generated by create next app" />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
        </Head>
        </>
    )
}