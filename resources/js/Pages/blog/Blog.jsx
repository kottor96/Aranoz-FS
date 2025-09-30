import Layout from '@/Layouts/Layout'
import React from 'react'
import BlogListSection from './Components/BlogListeSection'
import IntroSection from '@/Components/IntroSection'

export default function Blog({blogs,filters}) {
  return (
    <Layout>
        <IntroSection titre={'blog'} text={"Blog - Blogs table"}/>
        <BlogListSection blogs={blogs} filters={filters}/>
    </Layout>
  )
}
