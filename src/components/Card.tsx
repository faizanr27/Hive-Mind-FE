import { useEffect } from 'react';
import { ShareIcon } from "../icons/ShareIcon";
import { Trash2Icon } from 'lucide-react';
import { TwitterIcon } from '../icons/TwitterIcon';
import { YoutubeIcon } from '../icons/YoutubeIcon';

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
}

export function Card({title, link, type}: CardProps) {
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
        <div>
            <div className="p-4 bg-slate-600/20 backdrop-blur-sm rounded-xl max-w-72 min-h-48 min-w-72">
                <div className="flex justify-between">
                    <div className="flex items-center text-md">
                        <div className="text-gray-500 pr-2">
                            {type == "twitter" ? <TwitterIcon/> : <YoutubeIcon/>}
                        </div>
                        <p className='text-gray-500 font-semibold text-lg'>{title}</p>
                    </div>
                    <div className="flex items-center">
                        <div className="pr-2 text-gray-500">
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <ShareIcon />
                            </a>
                        </div>
                        <div className="text-gray-500">
                            <Trash2Icon />
                        </div>
                    </div>
                </div>

                <div className="pt-4">
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
                        <div className="twitter-embed">
                            <blockquote className="twitter-tweet" data-dnt="true">
                                <a href={link}></a>
                            </blockquote>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}