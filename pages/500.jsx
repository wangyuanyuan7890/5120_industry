import ErrorPage from "@/components/ErrorPage"

// Custom 500 page using the generic ErrorPage componnt
export default function Custom500() {
  return (
    <ErrorPage
      title="Server error"
      status="An error occurred"
      message="There was an unexpected error"
    />
  )
}
