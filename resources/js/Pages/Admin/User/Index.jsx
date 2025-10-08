import React from 'react'
import SectionUser from '../Components/SectionUser'
import IntroAdmin from '../Components/IntroAdmin'
import AdminLayout from '@/Layouts/AdminLayout'

export default function Index({users}) {
  return (
    <AdminLayout>
        <IntroAdmin titre={'User Settings'} text={'Aranoz - Shop System'}/>
        <SectionUser users={users}/>
    </AdminLayout>
  )
}
