import IntroSection from "@/Components/IntroSection"
import SectionShop from "./Components/SectionShop"
import Layout from "@/Layouts/Layout"
import BestSellerShop from "./Components/BestSellerShop"

export default function Shop({products,categories,cat}){
    

    return <Layout>
        <IntroSection titre={"Shop Category"} text={"Home - Shop Category"}/>
        <SectionShop products={products} categories={categories} cat={cat}/>
        <BestSellerShop products={products}/>
    </Layout>
}