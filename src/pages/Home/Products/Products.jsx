import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Products = () => {
    const [toy , setToy] = useState([])
    const [products, setProducts] = useState([])
    // const [marvel, setMarvel] = useState([])
    

 const handleMarvel= () =>{
    const filter = products.filter(marvel => marvel.category == 'Marvel')
    console.log(filter);
    setToy(filter)
 }

 const handleStar =() =>{
    const filter = products.filter(star => star.category == 'star wars');
    setToy(filter)
 }

 const handleAvenger =() =>{
    const filter = products.filter(avenger => avenger.category == 'Avenger');
    setToy(filter)
 }

 
  
    useEffect(() => {
        fetch('https://toys-server-six.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='my-4'>
            <h2 className='mx-auto  text-center bg-slate-400 text-4xl py-3 text-white font-bold'>Spacial Products Of <span className=' text-blue-600'>Toys</span> <span className=' text-yellow-400'>Stars</span></h2>


            <Tabs className='w-[96%] mx-auto'>
                <TabList>
                    <Tab>All Products</Tab>
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
                            toy.map(product => <ProductsCard
                                key={product.product_id}
                                product={product}
                            ></ProductsCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 mx-auto w-[96%] gap-5'>
                        {
                            toy.map(product => <ProductsCard
                                key={product.product_id}
                                product={product}
                            ></ProductsCard>)
                        }
                    </div>

                </TabPanel>

                <TabPanel>
                <div className='grid md:grid-cols-3 mx-auto w-[96%] gap-5'>
                        {
                            toy.map(product => <ProductsCard
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