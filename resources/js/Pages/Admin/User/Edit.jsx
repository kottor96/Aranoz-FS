import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import SectionUserEdit from '../Components/SectionEditUser'
import IntroAdmin from '../Components/IntroAdmin'

export default function Edit({user,roles}) {
    
    return (
        <AdminLayout>
            <IntroAdmin titre={'User Settings'} text={'Aranoz - Shop System'}/>
            <SectionUserEdit user={user} roles={roles}/>
        </AdminLayout>
    )
}
