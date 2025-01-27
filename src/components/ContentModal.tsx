import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useContent } from "../hooks/useContent";
import {
  CirclePlus,
  File,
  FileIcon,
  Link,
  Merge,
  NotebookIcon,
  Globe,
  NotebookPenIcon,
  Youtube
} from "lucide-react";


enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
  Website = "website",
  Document = "Document",
  Integrations = "integrations"
}

export function CreateContentModal({ open, onClose}: any) {
  const { refresh } = useContent();
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Website);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/Content`,
      {
        link,
        title,
        type,
      });

    onClose();
    refresh();

  }

  return (
    <>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center ">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="relative bg-black/20 border border-gray-400/20  rounded-lg shadow-xl w-96 max-w-[90vw] z-10">
            <div
              className="absolute right-4 top-4 cursor-pointer"
              onClick={onClose}
            >
              <CrossIcon stroke="white" />
            </div>

            <div className="space-y-4 mt-2 p-2">
              <div className="flex flex-col bg-black/50 rounded-sm justify-center items-center">
              <Input reference={titleRef} placeholder="Title" />
              <Input reference={linkRef} placeholder="Link" />
              </div>
              <div>
                <h1 className="mb-2">Type</h1>
                <div className="flex  rounded-sm overflow-x-scroll bg-black/50  border border-black p-4 custom-scrollbar">

                  {/* <Button
                    text="Youtube"
                    variant={
                      type === ContentType.Youtube ? "primary" : "secondary"
                    }
                    onClick={() => setType(ContentType.Youtube)}
                  />
                  <Button
                    text="Twitter"
                    variant={
                      type === ContentType.Twitter ? "primary" : "secondary"
                    }
                    onClick={() => setType(ContentType.Twitter)}
                  />
                  <Button
                    text="Website"
                    variant={
                      type === ContentType.Website ? "primary" : "secondary"
                    }
                    onClick={() => setType(ContentType.Website)}
                  />
                  <Button
                    text="Documents"
                    variant={
                      type === ContentType.Document ? "primary" : "secondary"
                    }
                    onClick={() => setType(ContentType.Document)}
                  /> */}
                  <button className="focus:bg-blue-400/40 focus:border focus:border-blue-400 text-white/80 p-2 rounded-sm w-44 h-20" onClick={() => setType(ContentType.Website)}>
                    <Globe/>
                    Website
                  </button>
                  <button className="focus:bg-green-400/40 focus:border focus:border-green-400 text-white/80 p-2 rounded-sm w-44 h-20" onClick={() => setType(ContentType.Youtube)}>
                  <Youtube/>
                    Youtube
                  </button>
                  <button className="focus:bg-yellow-400/40 focus:border focus:border-yellow-400 text-white/80 p-2 rounded-sm w-44 h-20" onClick={() => setType(ContentType.Document)}>
                  <FileIcon/>
                    Documents
                  </button>
                  <button className="focus:bg-purple-400/40 focus:border focus:border-purple-400 text-white/80 p-2 rounded-sm w-44 h-20" onClick={() => setType(ContentType.Integrations)}>
                  <Merge/>
                    Integrations
                  </button>

                </div>
              </div>

              <div className="flex justify-center pt-4">
                <Button onClick={addContent} variant="primary" text="Submit" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
