import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import BlogAdminSection from '../Components/BlogAdminSection'
import IntroAdmin from '../Components/IntroAdmin'

export default function Index({blogs}) {
  return (
    <AdminLayout>
        <IntroAdmin titre={'Blog Settings'} text={'Aranoz - Shop System'}/>
        <BlogAdminSection blogs={blogs}/>
    </AdminLayout>
  )
}
