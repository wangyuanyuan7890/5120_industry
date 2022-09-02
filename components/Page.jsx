import Head from "next/head"

import styles from "@/styles/components/Page.module.scss"

// Generic page wrapper that changes the title for each page
export default function Page({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} - Ecofash` || "Ecofash"}</title>
      </Head>
      {children}
    </>
  )
}
