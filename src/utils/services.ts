const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchData = async (): Promise<string[]> => {
  const response = await fetch(`${apiUrl}/data.json`);
  const data = await response.json();
  return data;
};
