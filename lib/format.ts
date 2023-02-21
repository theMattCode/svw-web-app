export function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("de-DE", {
    dateStyle: "full",
  });
}
