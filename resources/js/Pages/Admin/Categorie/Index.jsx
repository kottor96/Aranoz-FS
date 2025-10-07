import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import IntroAdmin from '../Components/IntroAdmin'
export default function Index() {
  return (
    <AdminLayout>
        <IntroAdmin titre={'Categories Setting'} text={"Aranoz - Shop System"}/>
        
    </AdminLayout>
  )
}
