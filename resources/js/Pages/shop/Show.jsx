import Layout from '@/Layouts/Layout'
import React from 'react'
import ShowSectionGeneral from './Components/ShowSectionGeneral'
import IntroSection from '@/Components/IntroSection'
import ShowSectionDetails from './Components/ShowSectionDetails'


export default function Show({ product }) {
  return (
    <Layout>
        <IntroSection titre={"Shop Single"} text={"Home - Shop Single"}/>
        <ShowSectionGeneral product={ product }/>
        <ShowSectionDetails product={ product }/>
    </Layout>
  )
}
