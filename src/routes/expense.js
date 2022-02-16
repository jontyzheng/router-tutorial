/*
 * @Author: jonty
 * @Date: 2022-02-16 22:42:59
 * @LastEditTime: 2022-02-16 22:58:04
 * @Description: 
 * @Reference: 
 * @FilePath: \router-tutorial\src\routes\expense.js
 */
import React from 'react'
import Icon, { AccountBookTwoTone } from '@ant-design/icons'
import brokenSvg from '../images/brokenSvg'

export default function expense() {

    const svg = () => (
        <svg >

        </svg>
    )

    const brokenIcon = props => (
        props
    )

    return (
        <div>
            <img src={brokenSvg} alt="logo" />
            <h2>开支页面</h2>
        </div>
    )
}
