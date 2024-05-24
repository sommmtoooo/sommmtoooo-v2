export function formatDate(date: string) {
  return new Date(date).toLocaleString("en-US", {
    dateStyle: "long",
  });
}

export function getDateYear(date: string) {
  return new Date(date).getFullYear();
}
