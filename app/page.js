"use client"

import Layout from "@/components/layout"
import { useSession } from "next-auth/react"
import Image from "next/image";

export default function Home() {
  const { data : session} = useSession(); 
  
  return(
   <Layout>
    <div className="text-blue-900 flex justify-between">
      <h2>
     Hello,<b>{session?.user.name}</b>
     </h2>
     <div className="flex gap-1 bg-gray-300  text-black rounded-lg overflow-hidden">
  <img src={session?.user?.image}  alt=""  width={20} height={10} />
   {session?.user?.name}
     </div>
   
    </div>
   </Layout>
  )
}
