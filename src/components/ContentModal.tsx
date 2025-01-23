import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useContent } from "../hooks/useContent";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModal({ open, onClose}: any) {
  const { refresh } = useContent();
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);

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
          <div className="relative bg-black/20 border border-gray-400/20  rounded-lg shadow-xl p-6 w-96 max-w-[90vw] z-10">
            <div
              className="absolute right-4 top-4 cursor-pointer"
              onClick={onClose}
            >
              <CrossIcon stroke="white" />
            </div>

            <div className="space-y-4 mt-2">
              <div className="flex flex-col justify-center items-center">
              <Input reference={titleRef} placeholder="Title" />
              <Input reference={linkRef} placeholder="Link" />
              </div>
              <div>
                <h1 className="mb-2">Type</h1>
                <div className="flex gap-2 justify-center">
                  <Button
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
