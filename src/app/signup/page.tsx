"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import FileUpload from "@/components/ui/file-upload";

export default function SignupForm() {
  const [avatarFiles, setAvatarFiles] = useState<File[]>([]);
  const [coverImageFiles, setCoverImageFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAvatarUpload = (files: File[]) => {
    setAvatarFiles(files);
  };

  const handleCoverUpload = (files: File[]) => {
    setCoverImageFiles(files);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted", { avatarFiles, coverImageFiles });
    setLoading(false);
    // Handle your API call here
    const formData = new FormData();
    avatarFiles.forEach((file) => formData.append("avatar", file));
    coverImageFiles.forEach((file) => formData.append("coverImage", file));

    // Make your API call with formData
    // await apiCall(formData);
  };
  return (
    <>
      <div className="bg-black min-w-min h-lvh flex justify-center gap-2 pt-52 pb-52 ">
        <div className="max-w-md w-full  rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome to FlashTube
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            A platform to showcase my front-end and back-end skills.
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="Gaurav" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Sharma" type="text" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="username">Username</Label>
              <Input
                id="usernmae"
                placeholder="Should I throw a 'Generate' button here?"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="youareawesome@flashtube.com"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br mt-10 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                </div>
              ) : (
                <>
                  Sign up &rarr;
                  <BottomGradient />
                </>
              )}
            </button>
          </form>
        </div>
        <div className="max-w-md w-full flex flex-col gap-2 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <div className="w-full max-w-4xl border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
            <FileUpload
              title="Upload Avatar"
              files={avatarFiles}
              onChange={handleAvatarUpload}
            />
          </div>
          <div className="w-full max-w-4xl border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
            <FileUpload
              title="Upload Cover Image"
              files={coverImageFiles}
              onChange={handleCoverUpload}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
