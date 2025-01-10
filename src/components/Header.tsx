import { X, Share2, PlusCircle } from 'lucide-react';
import { useState } from 'react';
import {Button} from './Button';

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter"
}

const Header = () => {

  const [type, setType] = useState(ContentType.Youtube);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await fetch("http://localhost:5000/Content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      },
      body: JSON.stringify({
        title,
        link,
        type
      })
    });
    console.log("Submitted");
  }

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 border-b border-gray-200 gap-4">
      <h1 className="text-2xl font-bold pl-8 lg:pl-0">All Notes</h1>
      <div className="flex gap-2 w-full sm:w-auto">
        <button className="flex items-center gap-2 px-4 py-2 text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 flex-1 sm:flex-initial justify-center">
          <Share2 className="w-5 h-5" />
          <span className="hidden sm:inline">Share Brain</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 flex-1 sm:flex-initial justify-center"
          onClick={openModal}
          >
          <PlusCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Add Content</span>
        </button>
      </div>

      {/** Modal */}
      <div
  className={`fixed inset-0 z-50 items-center justify-center bg-black bg-opacity-50 ${isModalOpen ? 'flex' : 'hidden'}`}>
      <div className="relative w-full max-w-lg p-4 mx-auto my-6 bg-white rounded-lg shadow-lg">
        <button className="absolute top-0 right-0 p-2 m-2 text-gray-500 rounded-full hover:bg-gray-100" 
          onClick={openModal}>
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold">Add Content</h2>
        <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit} >
          <input type="text" placeholder="Title" className="p-2 border border-gray-200 rounded-lg" value={title} onChange={(e)=> setTitle(e.target.value)}/>
          <input type="text" placeholder="Link" className="p-2 border border-gray-200 rounded-lg" value={link} onChange={(e)=> setLink(e.target.value)}/>
          <div>
                            <h1>Type</h1>
                            <div className="flex gap-1 justify-start p-1 pb-2">
                                <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={(e) => {
                                  e.preventDefault();
                                    setType(ContentType.Youtube)
                                }}></Button>
                                <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={(e) => {
                                  e.preventDefault();
                                    setType(ContentType.Twitter)
                                }}></Button>
                            </div>
                        </div>
          <button type="submit" className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">Add</button>
        </form>
      </div>
    </div>
    </div>

  );
};

export default Header;

