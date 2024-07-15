const apiUrl = "http://localhost:3000"; // this should be in .env

export const fetchData = async (): Promise<string[]> => {
  const response = await fetch(`${apiUrl}/data.json`);
  const data = await response.json();
  return data;
};
