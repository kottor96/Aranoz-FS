import AdminLayout from '@/Layouts/AdminLayout';
import IntroAdmin from './Components/IntroAdmin';


export default function Home() {
    return (
        <AdminLayout>
            <IntroAdmin titre={'Admin Dashboard'} text={'Aranoz - Shop System'}/>
        </AdminLayout>
    );
}
