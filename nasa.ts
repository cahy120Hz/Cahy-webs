const NASA_API_KEY = "DEMO_KEY";
const NASA_BASE_URL = "https://api.nasa.gov/planetary/apod";

export interface NasaApodData {
  date: string;
  explanation: string;
  hdurl?: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
  copyright?: string;
}

export async function fetchApod(date?: string): Promise<NasaApodData> {
  const params = new URLSearchParams({ api_key: NASA_API_KEY });
  if (date) params.append("date", date);

  const response = await fetch(`${NASA_BASE_URL}?${params}`);
  if (!response.ok) throw new Error("Failed to fetch NASA APOD");
  return response.json();
}

export async function fetchApodRange(startDate: string, endDate: string): Promise<NasaApodData[]> {
  const params = new URLSearchParams({
    api_key: NASA_API_KEY,
    start_date: startDate,
    end_date: endDate,
  });

  const response = await fetch(`${NASA_BASE_URL}?${params}`);
  if (!response.ok) throw new Error("Failed to fetch NASA APOD range");
  return response.json();
}
