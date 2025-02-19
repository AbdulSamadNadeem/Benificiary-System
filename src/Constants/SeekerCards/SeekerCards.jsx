import React from 'react'
import { MdHealthAndSafety ,MdElectricBolt } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { FaBriefcase ,FaGraduationCap } from "react-icons/fa";


export const SeekerCardsText = [
    {
        heading : 'Education',
        icon:<FaGraduationCap/>,
        value:'Education'
    },
    {
        heading: 'Health',
        icon:<MdHealthAndSafety/>,
        value:'Health'
    },
    {
        heading: 'Finance',
        icon:<GiPayMoney/>,
        value:'Finance'
    },
    {
        heading: 'Bills',
        icon:<MdElectricBolt/>,
        value:'Bills'
    },
    {
        heading: 'Jobs',
        icon:<FaBriefcase/>,
        value:'Jobs'
    },
    {
        heading: 'Food',
        icon:<FaBowlFood/>,
        value:'Food'
    },
]