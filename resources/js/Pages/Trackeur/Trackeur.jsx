import IntroSection from '@/Components/IntroSection'
import Layout from '@/Layouts/Layout'
import React from 'react'
import TrackOrderSection from './Components/TrackOrderSection'

export default function Trackeur() {
  return (
    <Layout>
        <IntroSection titre={"Tracking Order"} text={"Home - Tracking Order"}/>
        <TrackOrderSection />
    </Layout>
  )
}
