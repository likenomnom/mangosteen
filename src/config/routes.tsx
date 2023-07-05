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
import { ItemList } from "../components/item/ItemList";
import { ItemCreate } from "../components/item/ItemCreat";

import { TagPage } from "../views/TagPage";
import { TagCreate } from "../components/tag/TagCreate";
import { TagEdit } from "../components/tag/TagEdit";
import { SignInPage } from "../views/SignInPage";
import { StatisticsPage } from "../views/StatisticsPage";
import { ComingSoon } from "../shared/ComingSoon";




export const routes: RouteRecordRaw[] = [
  {
    path: '/welcome',
    component: ()=> import('../views/Welcome'),
    beforeEnter: (to, from, next) => {
      localStorage.getItem('skipFeatures') === 'yes' ? next('/items') : next()
    },
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
    redirect: '/welcome'
  },
  {
    path: '/items', component: ()=> import('../views/ItemPage'),
    
    children: [
      { path: '', component: ItemList },
      { path: 'create', component: ItemCreate },
    ]
  },
  {
    path: '/tags', component: ()=> import('../views/TagPage'),
    children: [
      { path: 'create', component: ()=> import('../components/tag/TagCreate') },
      { path: ':id/edit', component: ()=> import('../components/tag/TagEdit') }
    ]
  },
  {
    path: '/sign_in', component: ()=> import('../views/SignInPage')
  },
  {
    path: '/statistics', component: ()=> import('../views/StatisticsPage')
  },{
    path: '/export', component: ()=> import('../shared/ComingSoon')
  },{
    path: '/notify', component: ComingSoon
  }
]