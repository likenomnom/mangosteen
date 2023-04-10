import { RouteRecordRaw } from "vue-router";
import { Welcome } from "../views/Welcome";
import { First } from "../components/welcome/First";
import { Fourth } from "../components/welcome/Fourth";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { FourthActions } from "../components/welcome/FourthAction";
import { ThirdActions } from "../components/welcome/ThirdAction";
import { SecondActions } from "../components/welcome/SecondAction";
import { FirstActions } from "../components/welcome/FirstAction";
import { StartPage } from "../views/StartPage";


export const routes: RouteRecordRaw[] = [
  {
    path: '/welcome',
    component: Welcome,
    children: [
      { path: '', redirect: '/welcome/1' },
      { path: '1', name: "Welcome1", components: { main: First, footer: FirstActions }, },
      { path: '2', name: "Welcome2", components: { main: Second, footer: SecondActions }, },
      { path: '3', name: "Welcome3", components: { main: Third, footer: ThirdActions }, },
      { path: '4', name: "Welcome4", components: { main: Fourth, footer: FourthActions }, },
    ]
  },
  {
    path: '',
    component: Welcome,
    children: [
     
      { path: '1', component: First },
      { path: '2', component: Second },
      { path: '3', component: Third },
      { path: '4', component: Fourth },
    ]
  },
  {path:'/start', component: StartPage}
]