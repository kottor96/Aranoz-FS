import React, { useEffect, useState, useMemo } from 'react'
import Layout from '../Layouts/Layout.jsx'
import { Link, router } from '@inertiajs/react';
import BestSellerShop from "./shop/Components/BestSellerShop.jsx";
import KadirSection from '@/Components/KadirSection.jsx';


export default function Index({products, categories, maxSeconds, startTimestamp, updateInterval}) {
    console.log(categories);
    
    const randomProduct = useMemo(() => [...products].sort(() => Math.random() - 0.5).splice(0,4), [products]);
    const [i,setI] = useState(0);
    const afficheProd = randomProduct[i];
    const imageDefault = afficheProd.images?.find(img => img.type === "image_main");
    
    function changeProduct(arg) {
        if(arg === '+' && i < randomProduct.length - 1){
            setI(prev => prev + 1);
        } else if(arg === '-' && i > 0){
            setI(prev => prev - 1);
        }
    }
    

    const [i2,setI2] = useState(0);

    const produitCarousel = useMemo(() => [...products].sort(() => Math.random() - 0.5).splice(i2,8), [products, i2]);

    function changeProduct2(arg) {
        if(arg === '+' && i2 < products.length - 8){
            setI2(prev => prev + 8);
        } else if(arg === '-' && i2 > 0){
            setI2(prev => prev - 8);
        }
    }
    
    const catAvecProd = categories.filter(el => el.products.length > 0);
    const categoriesAff = [...catAvecProd].sort(() => Math.random() - 0.5).splice(0,4);

    function deplacer($cat){
        router.get(route('shop',$cat.id))
    }
    return (
        <Layout>
            <section id='first_section'>
                <div className='flex justify-between items-center transition-all'>
                    <div id='produitTete'>
                        <div>
                            <h1>{afficheProd?.name}</h1>
                        </div>
                        <div>
                            <p>{afficheProd?.description}</p>
                        </div>
                    </div>
                    <div>
                        <img src={`${imageDefault?.image}`} alt={imageDefault?.image} />
                    </div>
                </div>
                <div id='sp_home1' className='flex items-center justify-center gap-3' >
                    <button onClick={()=>changeProduct('+')}>Next</button> |
                    <button onClick={()=>changeProduct('-')}>Previous</button>
                </div>
            </section>
            <section id="second_section">
                <div id="title2">
                    <h2>Feature Category</h2>
                </div>
                <div id="flex_home">
                    <div className="flex gap-4">
                        {categoriesAff[0] && (
                            <div className="type2 relative cursor-pointer" onClick={()=>deplacer(categoriesAff[0])}>
                                <div className="absolute top-0 left-0 p-3">
                                    <h5>{categoriesAff[0].name}</h5>
                                    <p>{categoriesAff[0].products[0].name}</p>
                                </div>
                                <div className="absolute bottom-0 right-0 h-1/2">
                                    <img
                                        src={`${categoriesAff[0].products[0].images[0].image}`}
                                        alt={categoriesAff[0].products[0].name}
                                        className='h-full w-full' 
                                    />
                                </div>
                            </div>
                        )}
                        {categoriesAff[1] && (
                            <div className="type1 relative cursor-pointer" onClick={()=>deplacer(categoriesAff[0])}>
                                <div className="absolute top-0 left-0 p-3">
                                    <h5>{categoriesAff[1].name}</h5>
                                    <p>{categoriesAff[1].products[0].name}</p>
                                </div>
                                <div className="absolute bottom-0 right-0 h-1/2">
                                    <img
                                        src={`${categoriesAff[1].products[0].images[0].image}`}
                                        alt={categoriesAff[1].products[0].name}
                                        className='h-full w-full'
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-4">
                        {categoriesAff[2] && (
                            <div className="type1 relative cursor-pointer" onClick={()=>deplacer(categoriesAff[0])}>
                                <div className="absolute top-0 left-0 p-3">
                                    <h5>{categoriesAff[2].name}</h5>
                                    <p>{categoriesAff[2].products[0].name}</p>
                                </div>
                                <div className="absolute bottom-0 right-0 h-1/2">
                                    <img
                                        src={`${categoriesAff[2].products[0].images[0].image}`}
                                        alt={categoriesAff[2].products[0].name}
                                        className='h-full w-full'
                                    />
                                </div>
                            </div>
                        )}
                        {categoriesAff[3] && (
                            <div className="type2 relative cursor-pointer" onClick={()=>deplacer(categoriesAff[0])}>
                                <div className="absolute top-0 left-0 p-3">
                                    <h5>{categoriesAff[3].name}</h5>
                                    <p>{categoriesAff[3].products[0].name}</p>
                                </div>
                                <div className="absolute bottom-0 right-0 h-1/2">
                                    <img
                                        src={`${categoriesAff[3].products[0].images[0].image}`}
                                        alt={categoriesAff[3].products[0].name}
                                        className='h-full w-full'
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section id='trois_section'>
                <div className='flex gap-20'>
                    <h3 className='text-xl'>Asesome</h3>
                    <p className='text-gray-400 self-end'>Shop</p>
                </div>
                <div className='flex gap-3 items-center justify-end mb-3'>
                    <button onClick={()=>changeProduct2('+')}>Next</button> |
                    <button onClick={()=>changeProduct2('-')}>prew</button>
                </div>
                <div id='article' className='grid grid-cols-4 gap-3'>
                   {produitCarousel.map(product => (
                        <div
                            key={product.id}
                            className="transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-xl overflow-hidden cursor-pointer"
                        >
                            <Link href={route('product.show', product.id)}>
                                <div>
                                    <img
                                        src={`${product.images[0].image}`}
                                        alt="une image"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="p-2">
                                    <h4 className="text-lg font-semibold">{product.name}</h4>
                                    {product.promo != null ? (
                                        <p><span></span></p>
                                    ) : (
                                        <p>{product.price}</p>
                                    )}
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>
            </section>
            <KadirSection maxSeconds={maxSeconds} startTimestamp={startTimestamp} updateInterval={updateInterval}/>
            <BestSellerShop products={products}/>
            <section id='homeLeter'>
                <div className="flex justify-center flex-col box-border text-center gap-5 mb-5">
                    <p className='text-red-600'>join newsletter</p>
                    <h3 className='text-5xl font-bold'>Subscribe to get updated <br /> with new offers</h3>
                    <div className='flex gap-3 justify-center items-center '><input type="text" className='rounded-sm'/><button className='btnStyle rounded-sm box-border'>SUBSCRIBE NOW</button></div>
                </div>
            </section>
        </Layout>
    )
}
