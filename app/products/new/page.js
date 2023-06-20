'use client'

import Layout from "@/components/layout";
import { useState } from "react";
import  axios from "axios";

export default function NewProduct(){
    const [Title,setTitle] = useState();
    const [Description,SetDescription] = useState();
    const [Price,setPrice] = useState();

    async function createProduct(ev){
     const data ={Title,Description,Price}
     await axios.post('/api/products', data)
    }

    return(
        <Layout>
            <form onSubmit={createProduct}>
            <h1>New product</h1>
            <label>Product Name</label>
         <input type="text" placeholder="Product name"
         value={Title}
         onChange={ev => setTitle(ev.target.value)}>

         </input>
            <label>Description</label>
         <textarea placeholder="Description"
          value={Description}
          onChange={ev => SetDescription(ev.target.value)}
         ></textarea>
            <label>Price(In Rupees)</label>
         <input type="text" placeholder="Price"
          value={Price}
          onChange={ev => setPrice(ev.target.value)}></input>
         <button 
         type="submit"
         className="btn-primary">Save</button>
         </form>
        </Layout>
    )
}