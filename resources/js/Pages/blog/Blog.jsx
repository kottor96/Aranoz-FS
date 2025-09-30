import Layout from '@/Layouts/Layout'
import React from 'react'
import BlogSection from './Components/BlogIntroSection'
import BlogListSection from './Components/BlogListeSection'

export default function Blog({blogs,filtres}) {
  return (
    <Layout>
        <BlogSection />
        <BlogListSection blogs={blogs} filtres={filtres}/>
    </Layout>
  )
}
