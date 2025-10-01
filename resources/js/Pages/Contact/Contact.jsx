import IntroSection from '@/Components/IntroSection'
import Layout from '@/Layouts/Layout'
import React from 'react'
import SectionMap from './Components/sectionMap'

export default function Contact() {
  return (
    <Layout>
      <IntroSection titre={"Contact us"} text={"Home - contact us"} />
      <SectionMap />
    </Layout>
  )
}
