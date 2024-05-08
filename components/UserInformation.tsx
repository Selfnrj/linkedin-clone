import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";

async function UserInformation() {
  const user = await currentUser();

  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const imageUrl = user?.imageUrl;

  return (
    <div className="flex flex-col justify-center items-center bg-card mr-6 rounded-lg border py-4">
      <Avatar>
        {user?.id ? (
          <AvatarImage src={imageUrl} />
        ) : (
          <AvatarImage src="https://github.com/shadcn.png" />
        )}
        <AvatarFallback>
          {firstName?.charAt(0)}
          {lastName?.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <SignedIn>
        <div>
          <h1>
            {firstName} {lastName}
          </h1>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="text-center space-y-2">
          <p className="font-semibold">You are not signed in</p>
          <Button asChild className="bg-[#0B63C4] text-white">
            <SignInButton>Sign in</SignInButton>
          </Button>
        </div>
      </SignedOut>
      <hr className="w-full my-5" />
      <div className="flex justify-between w-full px-4 text-sm">
        <p className="font-semibold">Posts</p>
        <p className="text-blue-400">0</p>
      </div>
      <div className="flex justify-between w-full px-4 text-sm">
        <p className="font-semibold ">Comments</p>
        <p className="text-blue-400">0</p>
      </div>
    </div>
  );
}

export default UserInformation;
