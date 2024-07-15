import data from "@/assets/data.json";

export const fetchData = async (): Promise<string[]> => {
  return data;
};
