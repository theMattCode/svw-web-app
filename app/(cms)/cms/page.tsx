export default async function CMSIndexPage(): Promise<JSX.Element | null> {
  // Check if the application is running in development mode
  if (process.env.NODE_ENV !== "development") {
    // Redirect to the home page or show a message indicating the page is not available
    window.location.href = "/";
    return null;
  }

  return (
    <div>
      <h1>Development Only Page Content</h1>
      {/* Rest of your page content */}
    </div>
  );
}
