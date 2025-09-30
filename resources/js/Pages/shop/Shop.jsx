import IntroSection from "@/Components/IntroSection"
import SectionShop from "./Components/SectionShop"

export default function Shop({products,categories}){
    return <>
        <IntroSection titre={"Shop Category"} text={"Home - Shop Category"}/>
        <SectionShop products={products} categories={categories}/>
    </>
}