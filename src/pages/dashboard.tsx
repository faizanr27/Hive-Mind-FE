import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { useContent } from "../hooks/useContent"
import { BACKEND_URL } from "../config"
import axios from "axios"
import Dock from "../components/Dock"

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh, error } = useContent();

  useEffect(() => {
    refresh();
  }, [])

  return <div className="absolute inset-0 min-h-screen dotted-background overflow-x-hidden">
    <div className="absolute inset-0 bg-gradient-to-tl from-black via-neutral-950 to-transparent">
    <div className="absolute bottom-56 right-[200px] w-36 h-[1000px] rotate-45 ">
      <div className="w-full h-full bg-gradient-to-t to-slate-600/20 via-slate-600/30 from-transparent rounded-tl-[800px] rounded-tr-[800px] blur-2xl " />
    </div>
    <div className="flex justify-center items-center my-auto gap-4 flex-wrap mt-10">
        {contents.length > 0 ? (
          contents.map(({ type, link, title }, index) => (
            <Card  key={index} type={type} link={link} title={title} />
          ))
        ) : (
          <p className="flex justify-center items-center text-2xl text-white h-screen w-screen">No content available.</p>
        )}
      </div>

    <div>
      <Dock/>
    </div>
    </div>
  </div>
}

