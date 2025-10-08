import React from 'react'
import SectionMap from '@/Pages/Contact/Components/SectionMap'
import SectionUpdateContact from '../Components/SectionUpdateContact';
import AdminLayout from '@/Layouts/AdminLayout';
import IntroAdmin from '../Components/IntroAdmin';

export default function Contact({contact,countries}) {
  return (
    <AdminLayout>
        <IntroAdmin titre={'Contact settings'} text={'Aranoz - Shop Systeme'}/>
        <SectionMap contact={contact}/>
        <SectionUpdateContact contact={contact} countries={countries}/>
    </AdminLayout>
  )
}
