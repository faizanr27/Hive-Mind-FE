import { useState } from 'react';
import { Twitter, Video, FileText, Link2, Hash, Brain, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <Twitter className="w-5 h-5" />, text: 'Tweets' },
    { icon: <Video className="w-5 h-5" />, text: 'Videos' },
    { icon: <FileText className="w-5 h-5" />, text: 'Documents' },
    { icon: <Link2 className="w-5 h-5" />, text: 'Links' },
    { icon: <Hash className="w-5 h-5" />, text: 'Tags' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
        transition-transform duration-300 ease-in-out
        w-64 h-screen bg-white border-r border-gray-200 p-4
      `}>
        <div className="flex items-center gap-2 mb-8">
          <Brain className="w-8 h-8 text-indigo-600" />
          <span className="text-xl font-bold font-sans text-indigo-500">Hive Mind</span>
        </div>
        <nav>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;