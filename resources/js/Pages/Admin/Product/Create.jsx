import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import IntroAdmin from '../Components/IntroAdmin'
import ProductModifOrCreate from '../Components/ProductModifOrCreate';

export default function Create({categories}) {
  return (
    <AdminLayout>
       <IntroAdmin titre={'Product Update'} text={'Aranoz - Shop System'}/>
       <ProductModifOrCreate type={'create'} categories={categories}/>
    </AdminLayout>
  )
}
