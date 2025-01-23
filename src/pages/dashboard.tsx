import { Card } from "../components/Card";
import { useContent } from "../hooks/useContent";
import Dock from "../components/Dock";


export function Dashboard() {
  const { contents, error } = useContent();
  console.log(contents)

  if (error) return <p className="flex justify-center items-center text-2xl text-white h-screen w-screen">Error: {error.message}</p>;

  return (
    <div className="absolute inset-0 min-h-screen dotted-background overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-neutral-950/90 to-transparent">
        <div className="absolute bottom-56 right-[200px] w-36 h-[1000px] rotate-45">
          <div className="w-full h-full bg-gradient-to-t to-slate-600/20 via-slate-600/30 from-transparent rounded-tl-[800px] rounded-tr-[800px] blur-2xl" />
        </div>

        {contents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 mt-10 max-w-max mx-auto">
          {contents.map(({ type, link, title }, index) => (
            <Card  key={index} type={type} link={link} title={title} />
          ))}
          </div>
        ) : (
          <p className="flex justify-center items-center text-2xl text-white h-screen w-screen">
            No content available.
          </p>
        )}

        <div>
          <Dock />
        </div>
      </div>
    </div>
  );
}