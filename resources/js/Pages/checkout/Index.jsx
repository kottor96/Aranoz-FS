import Layout from '@/Layouts/Layout'
import React from 'react'
import Checkout from './Components/Checkout'
import IntroSection from '@/Components/IntroSection'


export default function Index() {
    return (
        <Layout>
            <IntroSection titre={'Product Checkout'} text={'Home - Shop Single'}/>
            <Checkout />
        </Layout>
    )
}
