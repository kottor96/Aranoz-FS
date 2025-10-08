import Layout from '@/Layouts/Layout'
import React from 'react'

export default function Index({orders}) {
  return (
    <Layout>
        <IntroAdmin titre={'Order Settings'} text={'Aranoz - Shop System'}/>
        <OrderSection orders={orders}/>
    </Layout>
  )
}
