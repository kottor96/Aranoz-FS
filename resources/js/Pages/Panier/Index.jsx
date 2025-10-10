import IntroSection from '@/Components/IntroSection'
import Layout from '@/Layouts/Layout'
import React from 'react'
import CartList from './Components/CartList'

export default function Index() {
  return (
    <Layout>
        <IntroSection titre={'Cart Products'} text={'Home - Cart Products'}/>
        <CartList />

    </Layout>
  )
}
