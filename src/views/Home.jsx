import { useEffect, useState } from "react"
import fetchData from "../utils/fetchData.js"
import ProductCard from "../components/ProductCard.jsx"

const Home= ()=>{
    const [products, setProducts]=useState([])
  
  useEffect(()=>{
    fetchData(setProducts)
  },[])

    return (<>
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto h-900">
        <div className="flex flex-wrap -m-4">
          {
            products.map((product)=>{

              return(<>
                    <ProductCard
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                    stock={product.stock}
                    />
                  </>)
            })
          }
        </div>
      </div>
    </section>
    </>)
}

export default Home;
