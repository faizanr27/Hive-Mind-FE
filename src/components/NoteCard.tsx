import React from 'react';
import { Share2, Trash2 } from 'lucide-react';

interface Tag {
  text: string;
  color: string;
}

interface NoteCardProps {
  icon?: React.ReactNode;
  title: string;
  content?: string;
  tags: Tag[];
  date: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ icon, title, content, tags, date }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-base sm:text-lg font-semibold line-clamp-2">{title}</h3>
        </div>
        <div className="flex gap-1 sm:gap-2 ml-2 flex-shrink-0">
          <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full">
            <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
          <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full">
            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
        </div>
      </div>
      
      {content && (
        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
          {content}
        </p>
      )}
      
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${tag.color}`}
          >
            #{tag.text}
          </span>
        ))}
      </div>
      
      <div className="text-xs sm:text-sm text-gray-500">
        Added on {date}
      </div>
    </div>
  );
};

export default NoteCard;