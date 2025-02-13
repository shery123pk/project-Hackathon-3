
import Hero from "@/components/Herro";
import FontShowcase from "@/components/Retangle";

import Dress from "@/components/dress";
import CustomerCarousel from "@/components/Customer";

import Tshirts from "@/components/tshirt";
import CasualShirts from "@/components/shirts";


export default function Home() {
  return (
   <div>
   
    <Hero/>
    <FontShowcase/>
    {/* <NewArivel/>
    <BestSelling/> */}
    <CasualShirts/>
    <Tshirts/>
    {/* <Product/> */}
    {/* <Top_sell/> */}
    <Dress/>
    <CustomerCarousel/>
    
   </div> 
  );
}
