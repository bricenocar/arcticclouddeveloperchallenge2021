import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import About from '@/components/About'
import Agenda from '@/components/Agenda'
import LastYear from '@/components/LastYear'
import Register from '@/components/Register'
import Overview from '@/components/Overview'
import BusinessChallenge from '@/components/BusinessChallenge'
import Participants from '@/components/Participants'
import Stakes from '@/components/Stakes'
import Values from '@/components/Values'
import Jury from '@/components/Jury'
import PreviousEvents from '@/components/PreviousEvents'
import Judges from '@/components/Judges'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '*', redirect: '/home' },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/overview',
      name: 'overview',
      component: Overview
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: Agenda
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/LastYear',
      name: 'LastYear',
      component: LastYear
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/business',
      name: 'business',
      component: BusinessChallenge
    },
    {
      path: '/participants',
      name: 'participants',
      component: Participants
    },
    {
      path: '/anniversary',
      name: 'stakes',
      component: Stakes
    },
    {
      path: '/previous',
      name: 'previous',
      component: PreviousEvents
    },
    {
      path: '/values',
      name: 'valueswins',
      component: Values
    },
    {
      path: '/jury',
      name: 'jury',
      component: Jury
    },
    {
      path: '/judges',
      name: 'judges',
      component: Judges
    }
  ]
})
