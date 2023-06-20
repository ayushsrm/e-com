import Layout from "@/components/layout"
import Link from "next/link"


export default function products() {
  
  return(
   <Layout>
    <Link href={'/products/new'} className="bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg py-1 px-2" >Add New Products</Link>
   </Layout>
  )
}
