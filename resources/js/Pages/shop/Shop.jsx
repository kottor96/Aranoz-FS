import IntroSection from "@/Components/IntroSection"
import SectionShop from "./Components/SectionShop"
import Layout from "@/Layouts/Layout"

export default function Shop({products,categories}){
    return <Layout>
        <IntroSection titre={"Shop Category"} text={"Home - Shop Category"}/>
        <SectionShop products={products} categories={categories}/>
    </Layout>
}