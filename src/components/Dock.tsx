import React, { useState } from "react";
import { CreateContentModal } from "./ContentModal";
import { Home, LucideYoutube, File, User2, LucideTwitter, Link, PlusIcon } from "lucide-react";
import { ExpandedTabs } from "../components/ui/expanded-tabs";
import ProfilePopover from "./ProfilePopover";

interface DockProps {
  setActiveTab: (tab: string) => void;
}

const Dock: React.FC<DockProps> = ({  setActiveTab }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const tabs = [
    { title: "Home", icon: Home, onClick: () => setActiveTab("Home") },
    { title: "Tweets", icon: LucideTwitter, onClick: () => setActiveTab("Twitter") },
    { title: "Youtube", icon: LucideYoutube, onClick: () => setActiveTab("Youtube") },
    { title: "Links", icon: Link, onClick: () => setActiveTab("Website") },
    { title: "Documents", icon: File, onClick: () => setActiveTab("Documents") },
    { title: "Add memory", icon: PlusIcon, onClick: () => setModalOpen(!modalOpen) },
    { type: "separator" as const },
    { title: "Profile", icon: User2, onClick: () => setDropdownOpen(!dropdownOpen) },
  ];

  return (
    <>
      <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 px-5 py-2 rounded-full shadow-2xl cursor-pointer">
          <ExpandedTabs tabs={tabs} />
          <ProfilePopover dropdownOpen={dropdownOpen} />
        </div>
      </div>
    </>
  );
};

export default Dock;
