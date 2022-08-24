import ErrorPage from "@/components/ErrorPage"

export default function Custom404() {
  return (
    <ErrorPage
      title="Page not found"
      status="Page not found"
      message="We were unable to find the page you were looking for"
    />
  )
}
