import { FileText, Video, Twitter } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import NoteCard from './components/NoteCard';

function App() {
  const notes = [
    {
      icon: <FileText className="w-5 h-5 text-gray-600" />,
      title: 'Project Ideas',
      content: '• Build a personal knowledge base\n• Create a habit tracker\n• Design a minimalist todo app',
      tags: [
        { text: 'productivity', color: 'bg-indigo-100 text-indigo-800' },
        { text: 'ideas', color: 'bg-blue-100 text-blue-800' }
      ],
      date: '10/03/2024'
    },
    {
      icon: <Video className="w-5 h-5 text-gray-600" />,
      title: 'How to Build a Second Brain',
      tags: [
        { text: 'productivity', color: 'bg-indigo-100 text-indigo-800' },
        { text: 'learning', color: 'bg-green-100 text-green-800' }
      ],
      date: '09/03/2024'
    },
    {
      icon: <Twitter className="w-5 h-5 text-gray-600" />,
      title: 'Productivity Tip',
      content: 'The best way to learn is to build in public. Share your progress, get feedback, and help others along the way.',
      tags: [
        { text: 'productivity', color: 'bg-indigo-100 text-indigo-800' },
        { text: 'learning', color: 'bg-green-100 text-green-800' }
      ],
      date: '08/03/2024'
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col w-full lg:w-auto">
        <Header />
        <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-y-auto">
          {notes.map((note, index) => (
            <NoteCard key={index} {...note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;