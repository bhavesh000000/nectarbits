export const headerData = [
    {
        title: "Mobile App",
        data: {
            id:1,
            title: "Mobile App",
            data:  [{ name: "Services", path:'/services' },{ name: "React Native Development" }, { name: "Flutter App Development", path:'/mobiledevelopment' }, { name: "iPhone App Development" }, { name: "Android App Development" }, { name: "iPad App Development" }, { name: "Swift App Development" }]

        }
    },
    {   
        title: "Managed Services",
        data: {
            id:2,
            title: "Managed Services",
            data:  [{ name: " Native Development" }]
        }
    },
    {
        title: "Web Development",
        data: {
            id:3,
            title: "Web Development",
            data:  [{ name: "React  Development" }]
        }
    },
    {
        title: "Hire Developer",
        data: {
            id:4,
            title: "Hire Developer",
            data:  [{ name: "React Native " }]
        }
    },
 
]


var products_ic1 = require('../../Assets/Images/products_ic1.webp');
var products_ic2 = require('../../Assets/Images/products_ic2.webp');
var products_ic3 = require('../../Assets/Images/products_ic3.webp');
var products_ic4 = require('../../Assets/Images/products_ic4.webp');

export const productsData = [
    {
        tabData:{
            tabImage:products_ic1,
            tabTitle: "E-Commerce Solution",
            subTitle: 'Multi-Vendor eCommerce Platform',
            accData : {
                id:1,
                title:'Use Cases',
                data: ["React Native Development", "Flutter App Development", "iPhone App Development", "Android App Development", "iPad App Development", 'Swift App Development']
            }
        }
    },
    {
        tabData:{
            tabImage:products_ic2,
            tabTitle: "Service Marketplace",
            subTitle: 'Multi-Vendor eCommerce Platform',
            accData : {
                id:2,
                title:'Use Cases',
                data: ["React Native Development", "Flutter App Development"]
            }
        }
    },
    {
        tabData:{
            tabImage:products_ic3,
            tabTitle: "Dating App Solution",
            subTitle: 'Multi-Vendor eCommerce Platform',
            accData : {
                id:3,
                title:'Use Cases',
                data: ["React Native Development", "Flutter App Development"]
            }
        }
    },
    {
        tabData:{
            tabImage:products_ic4,
            tabTitle: "Fuel Delivery App",
            subTitle: 'Multi-Vendor eCommerce Platform',
            linkTo:"/fulesolution",
            accData : {
                id:4,
                title:'Use Cases',
                data: ["React Native Development", "Flutter App Development"]
            }
        }
    },
]