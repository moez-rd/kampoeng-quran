export function formatWhatsApp(wa: string): string {
  // "6289532020180" → "0895-3202-0180"
  const local = wa.replace(/^62/, "0");
  return local.replace(/(\d{4})(\d{4})(\d+)/, "$1-$2-$3");
}

export function formatTanggal(dateStr: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateStr));
}

export function formatTanggalSingkat(dateStr: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(dateStr));
}
