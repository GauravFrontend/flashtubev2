"use client";
import React, { useState } from "react";
import FileUploadIndex from "./ui/file-upload";

export function FileUploadAvatar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <div className="w-full max-w-4xl mx-auto h-full overflow-hidden border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUploadIndex onChange={handleFileUpload} />
    </div>
  );
}
