import ErrorPage from "@/components/ErrorPage"

// Custom 404 page using the generic ErrorPage componnt
export default function Custom404() {
  return (
    <ErrorPage
      title="Page not found"
      status="Page not found"
      message="We were unable to find the page you were looking for"
    />
  )
}
