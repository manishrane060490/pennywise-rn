export function formatDate(utcString: string, timeZone = "Asia/Kolkata") {
    
  if (!utcString) return "";

  const isoString = utcString.includes("T") ? utcString : utcString.replace(" ", "T") + "Z";

  const date = new Date(isoString);

  if (isNaN(date)) return "Invalid Date";

  return date.toLocaleString("en-IN", {
    timeZone,
    dateStyle: "medium",
    timeStyle: "short",
  });
}