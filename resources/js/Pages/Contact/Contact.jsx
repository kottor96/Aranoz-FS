import IntroSection from '@/Components/IntroSection'
import Layout from '@/Layouts/Layout'
import React from 'react'
import SectionMap from './Components/sectionMap'
import FormSection from './Components/FormSection'
export default function Contact({Contact}) {
  return (
    <Layout>
      <IntroSection titre={"Contact us"} text={"Home - contact us"} />
      <SectionMap />
      <FormSection />
    </Layout>
  )
}
