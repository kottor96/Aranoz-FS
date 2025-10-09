import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import IntroAdmin from '../Components/IntroAdmin'
import ProductSection from '../Components/ProductSection'

export default function Index({products}) {
  return (
    <AdminLayout>
        <IntroAdmin titre={'Product Settings'} text={'Aranoz - Shop System'}/>
        <ProductSection products={products}/>
    </AdminLayout>
  )
}
