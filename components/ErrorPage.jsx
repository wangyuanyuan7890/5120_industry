import Page from "@/components/Page"

import SearchVoid from "@/public/search_void.svg"
import styles from "@/styles/components/ErrorPage.module.scss"

export default function ErrorPage({ title, status, message }) {
  return (
    <Page title={title || "Error"}>
      <div className={styles.error_wrapper}>
        <SearchVoid className={styles.error_image} />
        <div className={styles.error}>
          <span className={styles.status}>{status || "An error occurred"}</span>
          <span className={styles.message}>{message || ""}</span>
        </div>
      </div>
    </Page>
  )
}
