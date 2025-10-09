import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import IntroAdmin from '../Components/IntroAdmin'
import ProductModifOrCreate from '../Components/ProductModifOrCreate'

export default function Edit({product,categories}) {
  return (
    <AdminLayout>
      <IntroAdmin titre={'Product Update'} text={'Aranoz - Shop System'}/>
      <ProductModifOrCreate type={'update'} product={product} categories={categories}/>
    </AdminLayout>
  )
}
