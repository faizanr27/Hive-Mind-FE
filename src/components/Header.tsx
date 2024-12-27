import { Share2, PlusCircle } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 border-b border-gray-200 gap-4">
      <h1 className="text-2xl font-bold pl-8 lg:pl-0">All Notes</h1>
      <div className="flex gap-2 w-full sm:w-auto">
        <button className="flex items-center gap-2 px-4 py-2 text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 flex-1 sm:flex-initial justify-center">
          <Share2 className="w-5 h-5" />
          <span className="hidden sm:inline">Share Brain</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 flex-1 sm:flex-initial justify-center">
          <PlusCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Add Content</span>
        </button>
      </div>
    </div>
  );
};

export default Header;