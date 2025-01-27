import { Card } from "../components/Card";
import { useContent } from "../hooks/useContent";
import Dock from "../components/Dock";
import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';

export function Dashboard() {
  const { contents = [], error } = useContent();

  console.log(contents)
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <p className="text-2xl text-white">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 min-h-screen dotted-background overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-neutral-950/90 to-transparent">
        <div className="absolute bottom-56 right-[200px] w-36 h-[1000px] rotate-45">
          <div className="w-full h-full bg-gradient-to-t to-slate-600/20 via-slate-600/30 from-transparent rounded-tl-[800px] rounded-tr-[800px] blur-2xl" />
        </div>

        {contents.length > 0 ? (
            <div className="pl-2 max-w-[1280px] mx-auto">
            <Box sx={{ width: "100%" }}>
            <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={3}>
                {contents.map((item) => (
                  <div key={item._id} style={{ minHeight: "100px" }}>
                    <Card type={item.type} link={item.link}/>
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

        <Dock />
      </div>
    </div>
  );
}

export default Dashboard;
