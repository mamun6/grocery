import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'
const  AllProducts = () => {

    const {products, searchQuery} = useAppContext()
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        if(searchQuery.length > 0){
            setFilteredProducts(products.filter(
                product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ))}
            else{
                setFilteredProducts(products)
            }

    },[products, searchQuery])

    return (
        <div className='mt-16 ' >
            <div className='flex flex-col items-center w-max' >
                <p className='text-2xl font-medium text-center uppercase' >All products</p>
                <div className='w-16 h-0.5 bg-primary rounded-full' >

                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 
            lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6' >
                    {filteredProducts.filter((product)=> product.inStock).map((product,index)=>(
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllProducts