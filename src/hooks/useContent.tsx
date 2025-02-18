import useSWR from "swr";
import axios from "axios";
import { BACKEND_URL } from "../config";
// import { useAuth} from "../context/AuthContext"

interface Content {
  type: "twitter" | "youtube";
  link: string;
  title: string;
  _id: string;
}

const fetcher = async (url: string) => {

  console.log("called")
  const response = await axios.get(url);
  return response.data.userContent || [];
};

export function useContent() {
  const { data, error, mutate } = useSWR(`${BACKEND_URL}/Content`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    refreshInterval: 0,
  });

  return {
    contents: data as Content[] || [],
    error,
    refresh: mutate,
  };
}
