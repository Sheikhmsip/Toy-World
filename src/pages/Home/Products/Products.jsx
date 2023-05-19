import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Products = () => {
    const [products, setProducts] = useState([])
    const [marvel, setMarvel] = useState([])

    const [toy , setToy] = useState([])
    


 const handleMarvel= () =>{
    const filter = toy.filter(marvel => marvel.category == 'Marvel')
    console.log(filter);
    setProducts(filter)
 }

 const handleStar =() =>{
    const filter = toy.filter(star => star.category == 'star wars');
    setProducts(filter)
 }

 const handleAvenger =() =>{
    const filter = toy.filter(avenger => avenger.category == 'Avenger');
    setProducts(filter)
 }

 const handleAll = () => {
    const all = toy;
    setProducts(toy)
 }
  
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setToy(data))
    }, [])


    return (
        <div>
            <h2 className='mx-auto w-[96%] rounded-xl text-center bg-slate-400 text-4xl py-3 text-white font-bold'>Spacial Products Of <span className=' text-blue-600'>Toys</span> <span className=' text-yellow-400'>Stars</span></h2>


            <Tabs className='w-[96%] mx-auto'>
                <TabList>
                    <Tab onClick={handleAll}>All Products</Tab>
                    <Tab onClick={() => handleMarvel()}>Marvel</Tab>
                    <Tab onClick={handleStar}>Star Ware</Tab>
                    <Tab onClick={handleAvenger}>Avenger</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-3 mx-auto w-[96%] gap-5'>
                        {
                            products.map(product => <ProductsCard
                                key={product.product_id}
                                product={product}
                            ></ProductsCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 mx-auto w-[96%] gap-5'>
                        {
                            products.map(product => <ProductsCard
                                key={product.product_id}
                                product={product}
                            ></ProductsCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 mx-auto w-[96%] gap-5'>
                        {
                            products.map(product => <ProductsCard
                                key={product.product_id}
                                product={product}
                            ></ProductsCard>)
                        }
                    </div>

                </TabPanel>

                <TabPanel>
                <div className='grid md:grid-cols-3 mx-auto w-[96%] gap-5'>
                        {
                            products.map(product => <ProductsCard
                                key={product.product_id}
                                product={product}
                            ></ProductsCard>)
                        }
                    </div>

                </TabPanel>
                
            </Tabs>


        </div>
    );
};

export default Products;