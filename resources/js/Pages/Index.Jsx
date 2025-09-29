import React, { useState } from 'react'
import Layout from '../Layouts/Layout.jsx'

export default function Index({products,categories}) {

    const randomProduct = [...products].sort(() => Math.random() - 0.5).splice(0,4);
    const [i,setI] = useState(0);
    const afficheProd = randomProduct[i];
    const imageDefault = afficheProd.images.find(img => img.type === "image_main");
    
    function changeProduct(arg) {
        if(arg === '+' && i < randomProduct.length - 1){
            setI(prev => prev + 1);
        } else if(arg === '-' && i > 0){
            setI(prev => prev - 1);
        }
    }

    const chaise = categories.find(cat => cat.name='Chaises');
    
    const [i2,setI2] = useState([0])
    const produitCarousel = [...products].sort(() => Math.random() - 0.5).splice(i2,i2+7) 
    console.log(produitCarousel);
    
    return (
        <Layout>
            <section id='first_section'>
                <div className='flex justify-between items-center transition-all'>
                    <div id='produitTete'>
                        <div>
                            <h1>{afficheProd.name}</h1>
                        </div>
                        <div>
                            <p>{afficheProd.description}</p>
                        </div>
                    </div>
                    <div>
                        <img src={`storage/product/${imageDefault.image}`} alt={imageDefault.image} />
                    </div>
                </div>
                <div id='sp_home1' className='flex items-center justify-center gap-3' >
                    <button onClick={()=>changeProduct('+')}>Next</button> |
                    <button onClick={()=>changeProduct('-')}>Previous</button>
                </div>
            </section>
            <section id='second_section'>
                <div id='title2'>
                    <h2>Feature Category</h2>
                </div>
                <div id='flex_home'>
                    <div className='flex gap-4'>
                        <div className='type2 relative'>
                            <div className='absolute top-0 left-0'>
                                <h5>{chaise.name}</h5>
                                <p>{chaise.products[0]?.name}</p>
                            </div>
                            <div className='absolute bottom-0 right-0'>
                                <img src={`storage/product/${chaise.products[0].images[0].image}`} alt={chaise.products[0].name} />
                            </div>
                        </div>
                        <div className='type1 relative'>
                            <div className='absolute top-0 left-0'>
                                <h5>{chaise.name}</h5>
                                <p>{chaise.products[0]?.name}</p>
                            </div>
                            <div className='absolute bottom-0 right-0'>
                                <img src={`storage/product/${chaise.products[0].images[0].image}`} alt={chaise.products[0].name} />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='type1 relative'>
                            <div className='absolute top-0 left-0'>
                                <h5>{chaise.name}</h5>
                                <p>{chaise.products[0]?.name}</p>
                            </div>
                            <div className='absolute bottom-0 right-0'>
                                <img src={`storage/product/${chaise.products[0].images[0].image}`} alt={chaise.products[0].name} />
                            </div>
                        </div>
                        <div className='type2 relative'>
                            <div className='absolute top-0 left-0'>
                                <h5>{chaise.name}</h5>
                                <p>{chaise.products[0]?.name}</p>
                            </div>
                            <div className='absolute bottom-0 right-0'>
                                <img src={`storage/product/${chaise.products[0].images[0].image}`} alt={chaise.products[0].name} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='trois_section'>
                <div className='flex'>
                    <h3>Asesome</h3>
                    <p>Shop</p>
                </div>
                <div id='article' className='grid grid-cols-4'>
                    { produitCarousel.map(product=>(
                        
                        <div key={product.id}>
                            <div>
                                <img src={product.images.image} alt="" />
                            </div>
                            <div>
                                <h4>{product.name}</h4>
                                {product.promo != null?
                                    <p><span></span></p>
                                    :
                                    <p>{product.price}</p>
                                }
                            </div>
                        </div>
                    )) }
                </div>
            </section>
            <section>
                <div>
                    <h1>Weekly Sale on 60% Off All Products</h1>
                </div>
                <div>
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                    <div>
                        <input type="text" />
                        <button>BOOK NOW</button>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex'>
                    <h3>Best Seller</h3>
                    <p>Shop</p>
                </div>
                <div>
                    <div>
                        <button>Next</button>
                        <button>Preview</button>
                    </div>
                    {/* {map} */}
                </div>
            </section>
            <section>
                <div>
                    <p>join newsletter</p>
                </div>
                <div>
                    Subscribe to get updated with new offers
                </div>
                <div><input type="text" /><button>SUBSCRIBE NOW</button></div>
            </section>
        </Layout>
    )
}
