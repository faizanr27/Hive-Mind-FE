import { useEffect } from "react";

interface CardProps {
    link: string;
    type: "twitter" | "youtube" | "website" | "Document";
    title?: string;
    className?: string;
}

export function Card({link, type, title }: CardProps) {

    useEffect(() => {
        // Load Twitter widgets script
        if (type === "twitter") {
            const script = document.createElement("script");
            script.src = "https://platform.twitter.com/widgets.js";
            script.async = true;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }
    }, [type, link]);

    // Function to get YouTube video ID
    const getYouTubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };


    return (

        <div className="rounded-xl">
          <div className="rounded-2xl">
            {type === "youtube" && (
              <iframe
                className="w-full h-full rounded-md object-fill"
                src={`https://www.youtube.com/embed/${getYouTubeId(link)}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            {type === "twitter" && (
              <blockquote className="twitter-tweet" data-theme="dark">
                <a href={link.replace("x.com", "twitter.com")}></a>
              </blockquote>
            )}

{type === "website" && (
  <div className="relative flex flex-col bg-gray-800 hover:bg-gray-700 rounded-lg transition-all">
    {/* Badge for Website */}
    <h4 className="absolute top-2 left-[85%] transform -translate-x-1/2 bg-slate-700/60 z-40 text-white text-xs px-2 py-1 w-[25%] text-center border border-slate-500/50 rounded-full">
      Website
    </h4>

    <img
      src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="favicon"
      className="object-cover rounded-md h-36 z-10"
    />

    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center gap-3 p-4 justify-between z-20">
        <div className="flex flex-col overflow-hidden">
          <span className="text-white font-medium truncate">{title}</span>
          <span className="text-gray-400 text-sm truncate">{new URL(link).hostname}</span>
        </div>
      </div>
    </a>
  </div>
)}




                {type === "Document" && (
                    <iframe
                        className="w-full h-96 rounded-md border"
                        src={`https://docs.google.com/gview?url=${encodeURIComponent(link)}&embedded=true`}
                        allowFullScreen
                    />
                )}
          </div>
        </div>
    );
}
