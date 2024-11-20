"use client";

import { CreatePost } from "@/app/components/home/CreatePost";
import { CustomProfileCard } from "@/app/components/home/CustomProfileCard";
import { CustomTeamCards } from "@/app/components/home/CustomTeamsCard";
import { FriendList } from "@/app/components/home/FriendList";
import { PostsCard } from "@/app/components/home/PostsCard";
import { SuggestedUsersCard } from "@/app/components/home/SuggestedUsersCard";
import UserHeader from "@/app/components/home/UserHeadder";
import { logged_user_posts } from "@/app/temp/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <UserHeader />

      {/* Main Content */}
      <main className="pt-16">
        <div className="flex flex-wrap">
          {/* First Column */}
          <div className="flex-shrink-0 w-full md:w-auto md:max-w-[20%] lg:max-w-[30%] p-4">
            <div className="flex flex-col space-y-4">
              <CustomProfileCard />
              <SuggestedUsersCard />
              <CustomTeamCards />
            </div>
          </div>

          {/* Second Column */}
          <div className="flex-grow p-4 ">
            <CreatePost />
            <center>
              {" "}
              {logged_user_posts.flatMap((post) => (
                <PostsCard key={post.id} {...post} />
              ))}
            </center>
          </div>
          
          
          {/* Third Column */}
          <div className="flex-shrink-0 w-full md:w-auto md:max-w-[20%] lg:max-w-[30%]">
            <div className="flex-grow p-4 ">
            <FriendList />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
