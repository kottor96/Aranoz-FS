import React from 'react';
import NavAdmin from "./Components/NavAdmin";
import Footer from './Components/Footer';
export default function AdminLayout({children}) {
  return (
    <div>
      <header>
          <NavAdmin/>
      </header>
      <main>
          {children}
      </main>
      <Footer />
    </div>
  )
}
