export const headerData = [
    {
        title: "Mobile App",
        data: {
            id:1,
            title: "Mobile App",
            data:  [{ name: "Services", path:'/services' },{ name: "React Native Development", path:'/reactnative' }, { name: "Flutter App Development", path:'/mobiledevelopment' }, { name: "iPhone App Development" }, { name: "Android App Development" }, { name: "iPad App Development" }, { name: "Swift App Development" }]

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
                data: [{ name: "Salon Booking App", path:'/fulesolution' }, { name:"Car Wash App", path:'/solutions'}, { name:"Home Service App"}, {name:"Pharmacy Delivery App"}, {name:"Taxi Booking App"}, {name:'Laundry Booking App'}, {name:'Electric Vehicle Charging App'}]
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
                data: [{ name: "Salon Booking App" }, { name:"Car Wash App"}, { name:"Home Service App"}, {name:"Pharmacy Delivery App"}, {name:"Taxi Booking App"}, {name:'Laundry Booking App'}, {name:'Electric Vehicle Charging App'}]
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
                data: [{ name: "Salon Booking App" }, { name:"Car Wash App"}, { name:"Home Service App"}, {name:"Pharmacy Delivery App"}, {name:"Taxi Booking App"}, {name:'Laundry Booking App'}, {name:'Electric Vehicle Charging App'}]
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
                data: [{ name: "Salon Booking App" }, { name:"Car Wash App"}, { name:"Home Service App"}, {name:"Pharmacy Delivery App"}, {name:"Taxi Booking App"}, {name:'Laundry Booking App'}, {name:'Electric Vehicle Charging App'}]
            }
        }
    },
]

var ic_mvp_development = require('../../Assets/Images/ic_mvp_development.webp');
var triangle = require('../../Assets/Images/triangle.webp');

export const WorkforceData = [
    {
        ap_icon:ic_mvp_development,
        title:'POC/MVP Development',
        conte:'Recreating the Experience and application for your business that customers love already.',
        item:[ {title:'Product Development' , icon: triangle }, {title:'Mobile App Development' , icon: triangle }, {title:'Website Development' , icon: triangle }, {title:'QualityAssurance' , icon: triangle } ],
        link:'Learn more'
    },
    {
        ap_icon:ic_mvp_development,
        title:'Hire Dedicated Developer',
        conte:'We minimize your efforts by eliminating 99% of average talent and offering the Top Resources.',
        item:[ {title:'Hire Laravel Developer' , icon: triangle }, {title:'Hire iOS Developer' , icon: triangle }, {title:'Hire Android Developer' , icon: triangle }, {title:'Hire Backend Developer' , icon: triangle } ],
        link:'Learn more'
    }, 
    {
        ap_icon:ic_mvp_development,
        title:'On-Demand solutions',
        conte:'We design solutions fro startup needs, to expand medium size businesses, and satisfy enterprise-level expectation.',
        item:[ {title:'E-commerce Solution' , icon: triangle }, {title:'Food Delievry Solution' , icon: triangle }, {title:'Car Wash Solution' , icon: triangle }, {title:'Fuel Delivery Solution' , icon: triangle } ],
        link:'Learn more'
    }
]


var ic_onboarding = require('../../Assets/Images/ic_onboarding.webp');
var ic_agile_project = require('../../Assets/Images/ic_agile_project.webp');
var ic_consistant = require('../../Assets/Images/ic_consistant.webp');


export const ManagementData = [
    {
        ap_icon:ic_onboarding,
        title:'Fast Onboarding',
        conte:'We excel at streamlined communication. Enabling rapid application development to our global clientele. We make time, culture and location differences imperceptible.',
        item:[ 'Strategy', 'Visibility', 'Transoparency' ],
    },
    {
        ap_icon:ic_agile_project,
        title:'Agile Project Management',
        conte:'Keeping it simple and clear. A solid project management process in place to meet client’s expectations, avoid budget overruns and minimize project risks. Delivering a software product without a hitch from scope to delivery.',
        item:[ 'Agile', 'Responsive', 'Quality' ],
    },
    {
        ap_icon:ic_consistant,
        title:'Consistent Delivery',
        conte:'In-depth expertise, time-tested processes and tech excellence allow us to deliver optimal output. Wenimplement various software development methedologies to deliver on-time software.',
        item:[ 'Scalability', 'Certainty', 'Performance' ],
    },
]