import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import IntroAdmin from '../Components/IntroAdmin'
import LikedSection from '../Components/LikedSection'

export default function Liked({products}) {
  return (
    <AdminLayout>
        <IntroAdmin titre={'Liked Settings'} text={'Aranoz - Shop System'}/>
        <LikedSection products={products}/>
    </AdminLayout>
  )
}
