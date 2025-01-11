import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Content {
    type:  "twitter" | "youtube";
    link: string;
    title: string;
  }


  export function useContent() {
    const [contents, setContents] = useState<Content[]>([]);
    const [error, setError] = useState<string | null>(null);
  
    const refresh = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No authentication token found");
          return;
        }
  
        await axios.get(`${BACKEND_URL}/Content`, {
          headers: {
            "Authorization": token,
          },
        })

            .then((response) => {
                console.log(response.data)
                setContents(response.data.userContent || [])
            })
        setError(null);  
      } catch (error) {
        setError("Failed to fetch content");
        console.error(error);
      }
    };
  
    useEffect(() => {
      refresh();
      const interval = setInterval(() => {
        refresh();
      }, 10 * 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);  
  
    return { contents, refresh, error };
  }
