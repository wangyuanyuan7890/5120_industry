import Head from "next/head"
import Layout from "@/components/Layout"

import "@/styles/globals.scss"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ecofash</title>
        <link rel="icon" href="/ecofash_favicon.svg" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
