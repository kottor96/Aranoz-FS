import Layout from '@/Layouts/Layout'
import React from 'react'
import IntroAdmin from '../Components/IntroAdmin'
import OrderSection from '../Components/OrderSection'

export default function Index({orders}) {
  return (
    <Layout>
        <IntroAdmin titre={'Order Settings'} text={'Aranoz - Shop System'}/>
        <OrderSection orders={orders}/>
    </Layout>
  )
}
