import React, { useState,useEffect } from 'react';
import { Home,  LucideTwitter, Youtube, Link, PlusIcon, PowerCircle } from 'lucide-react';
import { CreateContentModal } from './ContentModal';
import { useContent } from "../hooks/useContent"
import { useNavigate } from "react-router-dom";

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  isHovered: boolean;
  onHover: (isHovered: boolean) => void;
  onClick?: () => void;
}

const DockItem: React.FC<DockItemProps> = ({ icon, label, isHovered, onHover, onClick }) => {
  return (
    <div
      className="relative flex flex-col items-center group"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={onClick}
    >
      <div
        className={`p-3 rounded-xl bg-gray-800/20 backdrop-blur-md border border-gray-700/50 
          transition-all duration-200 group-hover:bg-gray-700/80 shadow-lg
          ${isHovered ? 'scale-125 -translate-y-4' : 'scale-100'}`}
      >
        {icon}
      </div>
      <span
        className={`absolute -bottom-8 px-3 py-1 rounded-lg bg-gray-800 text-gray-100 text-sm
          shadow-xl border border-gray-700/50 backdrop-blur-md
          transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        {label}
      </span>
    </div>
  );
};

const Dock: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const {contents, refresh} = useContent();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/signin")
  }

  const handleShare = () => {

  }

    useEffect(() => {
      refresh();
    }, [modalOpen])

  const dockItems = [
    { icon: <Home size={14} className="text-gray-100" />, label: 'Home' },
    { icon: <LucideTwitter size={14} className="text-gray-100"/>, label: 'Twitter' },
    { icon: <Youtube size={14} className="text-gray-100" />, label: 'Youtube' },
    { icon: <Link size={14} className="text-gray-100" />, label: 'share', onClick: () => handleShare() },
    { icon: <PlusIcon size={14} className="text-gray-100" />, label: 'Add content', onClick: () => setModalOpen(!modalOpen) },
    { icon: <PowerCircle size={14} className="text-gray-100" />, label: 'Logout', onClick: () => handleLogout() },
  ];

  return (
    <>
    <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 ">
      <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-transparent backdrop-blur-lg border border-gray-800/50 shadow-2xl cursor-pointer">
        {dockItems.map((item, index) => (
          <DockItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isHovered={hoveredIndex === index}
            onHover={(isHovered) => setHoveredIndex(isHovered ? index : null)}
            onClick={item.onClick}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Dock;