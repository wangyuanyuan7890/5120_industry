import Head from "next/head"

import styles from "@/styles/components/Page.module.scss"

export default function Page({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} - Ecofash` || "Ecofash"}</title>
      </Head>
      <>{children}</>
    </>
  )
}
