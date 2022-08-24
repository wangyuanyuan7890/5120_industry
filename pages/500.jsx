import ErrorPage from "@/components/ErrorPage"

export default function Custom500() {
  return (
    <ErrorPage
      title="Server error"
      status="An error occurred"
      message="There was an unexpected error"
    />
  )
}
