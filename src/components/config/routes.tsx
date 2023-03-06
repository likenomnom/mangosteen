import { RouteRecordRaw } from "vue-router";
import { Bar } from "../../views/Bar";
import { Foo } from "../../views/Foo";
import { Welcome } from "../../views/Welcome";
import { First } from "../welcome/first";
import { Fourth } from "../welcome/foruth";
import { Second } from "../welcome/second";
import { Third } from "../welcome/third";


export const routes: RouteRecordRaw[] = [
  {path:'/', component:Foo},
  {path:'/about', component:Bar},
  {path:'/welcome',
  component:Welcome,
   children:[
    {path:'/1',component:First},
    {path:'/2',component:Second},
    {path:'/3',component:Third},
    {path:'/4',component:Fourth},

   ]
  }
]