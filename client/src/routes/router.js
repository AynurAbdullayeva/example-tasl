import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs";
import Service from "../pages/Service";
import Team from "../pages/Team";
import Price from "../pages/Price";
import Contact from "../pages/Contact";
import Pages from "../pages/Pages"
import MainRoot from "../pages/MainRoot";

export const ROUTER=[
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'/about',
                element:<AboutUs/>
            },
            {
                path:'/service',
                element:<Service/>
            },
            {
                path:'/team',
                element:<Team/>
            },
            {
                path:'/price',
                element:<Price/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/pages',
                element:<Pages/>
            }
        ]
    }
]