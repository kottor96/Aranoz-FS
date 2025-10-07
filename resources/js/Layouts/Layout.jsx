import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

export default function Layout({children}){
    return <div>
        <header>
            <NavBar />
        </header>
        <main>
            {children}
        </main>
        <Footer />
        
    </div>
}