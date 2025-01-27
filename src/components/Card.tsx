import { useEffect } from 'react';
// import { ShareIcon } from "../icons/ShareIcon";
// import { Trash2Icon } from 'lucide-react';
// import { TwitterIcon } from '../icons/TwitterIcon';
// import { YoutubeIcon } from '../icons/YoutubeIcon';

interface CardProps {
    link: string;
    type: "twitter" | "youtube";
    className?: string;
}

export function Card({link, type }: CardProps) {
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
    }, [type]);

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
          </div>
        </div>
    );
}
