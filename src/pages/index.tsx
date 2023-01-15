import React, { useEffect, useState } from "react";
import { userAccessToken, fetchUser } from '../utlis/fetchDetails';
import { useRouter } from "next/router";
import Hero from "@/components/hero";
import Blog from "@/components/blog";
import Brands from "@/components/brands";

const Home = () => {
  // const router = useRouter();
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const accessToken = userAccessToken();
  //   if (!accessToken) {
  //     router.push("/login");
  //   }
  //   const [userInfo] = fetchUser();
  //   console.log(userInfo);
  //   setUser(userInfo);
  // }, []);

  // const logout = () => {
  //   localStorage.clear();
  //   router.push("/login");
  // };

  return (
    <>
      <Hero />
      <Blog />
      <Brands />
    </>
  );
};

export default Home;



{/* <div className="w-1/3 h-auto p-4 bg-white shadow-md rounded-md flex justify-start items-center relative">
  <button

    className="absolute top-3 right-3 cursor-pointer text-gray-600"
    onClick={logout}
  >log out</button>
  <img src={user?.photoURL} className="rounded-md shadow-md" alt="" />
  <p className="text-2xl font-sans font-semibold ml-2">
    {user?.displayName}
    <span className="block text-xs font-serif font-normal">
      {user?.email}
    </span>
  </p>
</div> */}