import React from 'react'
import IntroAdmin from '../Components/IntroAdmin'
import OrderSection from '../Components/OrderSection'
import AdminLayout from '@/Layouts/AdminLayout'
import OrderCompleteSection from '../Components/OrderCompleteSection'

export default function Index({orders}) {
  return (
    <AdminLayout>
        <IntroAdmin titre={'Order Settings'} text={'Aranoz - Shop System'}/>
        <OrderSection orders={orders}/>
        <OrderCompleteSection orders={orders}/>
    </AdminLayout>
  )
}
