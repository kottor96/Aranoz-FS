import IntroSection from '@/Components/IntroSection'
import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import ShowOrder from '../Components/showOrder'
export default function Show({order}) {
    
    return (
        <AdminLayout>            
            <IntroSection titre={'Show Order'} text={'Aranoz - Shop System'}/>
            <ShowOrder order={order}/>
        </AdminLayout>
    )
}
