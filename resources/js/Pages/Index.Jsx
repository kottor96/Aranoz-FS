import React from 'react'
import Layout from '../Layouts/Layout.jsx'

export default function Index() {
  return (
    <Layout>
        <section>
            <div className='flex justify-between mx-10 my-20'>
                <div>
                    <div>
                        <h1>Titre</h1>
                    </div>
                    <div>
                        <p>description</p>
                    </div>
                </div>
                <div>
                    <img src="" alt="une image" />
                </div>
            </div>
        </section>
        <section>
            <div>
                <h2>Feature Category</h2>
            </div>
            <div className='grid'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
        <section>
            <div className='flex'>
                <h3>Asesome</h3>
                <p>Shop</p>
            </div>
            <div>
                {/* {map} */}
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
