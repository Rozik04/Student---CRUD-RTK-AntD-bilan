import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
const Layout = lazy(()=> import('../pages/layout/Layout'))
const Home = lazy(()=> import('../pages/home/Home'))
const Create = lazy(()=> import('../pages/create/Create'))
const GetStudent = lazy(()=> import('../pages/student/Student'))


const MainRoutes = () => {
  return (
    useRoutes([
        {path:'/', element:<Layout/>, children:[
            {path:'/', element:<Home/>},
            {path:'/create', element:<Create/>},
            {path:'/student/:id', element:<GetStudent/>}
        ]}
    ])
  )
}

export default React.memo(MainRoutes)