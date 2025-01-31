import { useRef, useState } from "react";
// import { CrossIcon } from "../icons/CrossIcon";
// import { Button } from "./Button";
// import { Input } from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useContent } from "../hooks/useContent";
import {
  // CirclePlus,
  // File,
  FileIcon,
  // Link,
  Merge,
  // NotebookIcon,
  Globe,
  // NotebookPenIcon,
  Youtube,
  Twitter
} from "lucide-react";


enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
  Website = "website",
  Document = "Document",
  Notes = "notes",
  Integrations = "integrations"
}

export function CreateContentModal({ open, onClose}: any) {
  const { refresh } = useContent();
  // const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Website);
  console.log(linkRef.current?.value)

  async function addContent() {
    // const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/Content`,
      {
        link,
        // title,
        type,
      });

    onClose();
    refresh();

  }

  return (
    <>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm w-full"
            onClick={onClose}
          />
          <div className="relative bg-[#353535] border border-gray-400/20  rounded-lg shadow-xl lg:min-h-[400px] w-80 sm:min-w-[60vw] lg:min-w-[50vw] xl:min-w-[40vw] z-10">

            <div className="space-y-4 mt-2 p-4">
              <div className="flex flex-col gap-8">
                <div className="flex gap-2 overflow-x-scroll overflow-y-hidden max-h-[78px]  custom-scrollbar">

                <button
                    className={`flex flex-col justify-center items-center rounded-md bg-[#232323] text-white/80 p-2 w-44 h-18
                      ${type === ContentType.Website ? "bg-blue-400/40 border border-blue-400" : ""}`}
                    onClick={() => setType(ContentType.Website)}
                  >
                    <Globe stroke="#3A38E2" />
                    Website
                  </button>

                  <button
                    className={`flex flex-col justify-center items-center rounded-md bg-[#232323] text-white/80 p-2 w-44 h-18
                      ${type === ContentType.Youtube ? "bg-[#532828] border border-[#DC3330]" : ""}`}
                    onClick={() => setType(ContentType.Youtube)}
                  >
                    <Youtube stroke="#DC3330" />
                    Youtube
                  </button>

                  <button
                    className={`flex flex-col justify-center items-center rounded-md bg-[#232323] text-white/80 p-2 w-44 h-18
                      ${type === ContentType.Twitter ? "bg-sky-400/40 border border-sky-400" : ""}`}
                    onClick={() => setType(ContentType.Twitter)}
                  >
                    <Twitter stroke="#5E9FE9" />
                    Tweets
                  </button>

                  <button
                    className={`flex flex-col justify-center items-center rounded-md bg-[#232323] text-white/80 p-2 w-44 h-18
                      ${type === ContentType.Document ? "bg-green-400/40 border border-green-400" : ""}`}
                    onClick={() => setType(ContentType.Document)}
                  >
                    <FileIcon stroke="#57A548" />
                    Documents
                  </button>

                  <button
                    className={`flex flex-col justify-center items-center rounded-md bg-[#232323] text-white/80 p-2 w-44 h-18
                      ${type === ContentType.Integrations ? "bg-purple-400/40 border border-purple-400" : ""}`}
                    onClick={() => setType(ContentType.Integrations)}
                  >
                    <Merge stroke="purple" />
                    Integrations
                  </button>


                </div>
              <div className="flex flex-col bg-[#272727] rounded-md p-4 sm:p-6 min-h-[220px]">
                  {/* <Input reference={titleRef} placeholder="Title" />
                  <Input reference={linkRef} placeholder="Link" /> */}
                  {type === "website" && (
                    <div>
                      <h3>Website URL</h3>
                      <input
                        ref={linkRef}
                        type="text"
                        className="bg-[#454545] rounded-lg h-16 w-full outline-none p-4"
                        placeholder="https://hivee-mind.vercel.app"
                      />
                    </div>
                  )}

                  {type === "youtube" && (
                    <div>
                    <h3>Youtube URL</h3>
                    <input ref={linkRef} type="text" className="bg-[#454545] rounded-lg h-16 w-full outline-none p-4" placeholder="https://hivee-mind.vercel.app"/>
                    </div>
                  )}

                  {type === "twitter" && (
                    <div>
                    <h3>Tweets</h3>
                    <input ref={linkRef} type="text" className="bg-[#454545] rounded-lg h-16 w-full outline-none p-4" placeholder="https://hivee-mind.vercel.app"/>
                    </div>
                  )}

                  {type === "Document" && (
                    <div>
                      <h3>Documents</h3>
                  {/* <input type="text" className="bg-[#454545] rounded-lg h-16 w-full outline-none p-4" placeholder="https://hivee-mind.vercel.app"/> */}
                  <p className="bg-[#454545] rounded-lg h-16 w-full p-6">Coming soon...</p>

                    </div>
                  )}

                  {type === "integrations" && (
                    <div>
                  <h3>Integrations</h3>
                  <p className="bg-[#454545] rounded-lg h-16 w-full p-6">Coming soon...</p>
                    </div>
                  )}



              </div>
              <div className="flex flex-row justify-between items-center ">
                <button className="bg-[#151414] p-2 rounded-lg" onClick={onClose}>Cancel</button>
                <button className="bg-[#151414] p-2 rounded-lg" onClick={addContent}>Add Content</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
