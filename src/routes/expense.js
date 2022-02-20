/*
 * @Author: jonty
 * @Date: 2022-02-16 22:42:59
 * @LastEditTime: 2022-02-17 21:40:48
 * @Description: 
 * @Reference: 
 * @FilePath: \router-tutorial\src\routes\expense.js
 */
import React from 'react'
import brokenHeart from '../images/brokenheart.png'

export default function expense() {

    return (
        <div style={{ textAlign: 'center' }}>
            <img src={brokenHeart} title='cs' />
            <h2>开支页面</h2>
        </div>
    )
}
