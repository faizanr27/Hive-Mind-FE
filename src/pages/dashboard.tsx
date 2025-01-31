import { Card } from "../components/Card";
import { useContent } from "../hooks/useContent";
import Dock from "../components/Dock";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export function Dashboard() {
  const { contents = [], error } = useContent();
  const { name } = useAuth();
  const [activeTab, setActiveTab] = useState("Home"); // Track active tab

  console.log(contents);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <p className="text-2xl text-white">Error: {error.message}</p>
      </div>
    );
  }

  // Filter content based on activeTab
  const filteredContents =
    activeTab === "Home"
      ? contents
      : contents.filter((item) => item.type.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="absolute inset-0 min-h-screen full-page-gradient dotted-background overflow-x-hidden">
      <div className="absolute inset-0 ">
        <div className="absolute bottom-56 right-[200px] w-36 h-[1000px] rotate-45">
          <div className="w-full h-full bg-gradient-to-t to-slate-600/20 via-slate-600/30 from-transparent rounded-tl-[800px] rounded-tr-[800px] blur-2xl" />
        </div>

        {filteredContents.length > 0 ? (
          <div className="pl-2 max-w-[1280px] mx-auto">
            <h1 className="ml-2 mb-2 xxs:ml-0 bg-gradient-to-br from-zinc-300 via-zinc-600 to-zinc-900 bg-clip-text text-transparent text-6xl mt-4 font-semibold">
              Welcome {name}
            </h1>
            <Box sx={{ width: "100%" }}>
              <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={3}>
                {filteredContents.map((item) => (
                  <div key={item._id} style={{ minHeight: "100px" }}>
                    <Card type={item.type} link={item.link} />

                  </div>
                ))}
              </Masonry>
            </Box>
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen w-screen">
            <p className="text-2xl text-white">No content available.</p>
          </div>
        )}

        <Dock setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default Dashboard;
