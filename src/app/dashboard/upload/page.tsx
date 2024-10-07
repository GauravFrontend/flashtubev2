"use client";
import { LabelInputContainer } from "@/app/signup/page";
import FileUpload from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

const UploadPage = () => {
  const [avatarFiles, setAvatarFiles] = useState<File[]>([]);

  const handleAvatarUpload = (files: File[]) => {
    setAvatarFiles(files);
  };

  return (
    <div className="w-full h-[99vh]">
      <div className=" w-full h-full flex flex-col justify-center items-center">
        <div className="max-w-[55rem] w-full rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black h-[65%]">
          <div className="w-full max-w-4xl border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
            <FileUpload
              title="Upload Avatar"
              files={avatarFiles}
              onChange={handleAvatarUpload}
            />
          </div>
          <div>
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Gaurav"
                type="text"
                value={"firstName"}
              />
            </LabelInputContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
