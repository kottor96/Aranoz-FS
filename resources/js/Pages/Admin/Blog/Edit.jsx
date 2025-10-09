import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import IntroAdmin from '../Components/IntroAdmin'
import BlogEditSection from '../Components/BlogEditSection'

export default function Edit(blog,blogCat,blogTag) {
  console.log(blog);
  console.log(blogCat);
  console.log(blogTag);
  return (
    <AdminLayout>
      <IntroAdmin titre={'Blog Settings'} text={'Aranoz - Shop System'}/>
      <BlogEditSection blog={blog} blogCat={blogCat} blogTag={blogTag}/>
    </AdminLayout>
  )
}
