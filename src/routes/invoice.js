/*
 * @Author: jonty
 * @Date: 2022-02-16 22:36:50
 * @LastEditTime: 2022-02-19 23:20:19
 * @Description: 
 * @Reference: 
 * @FilePath: \router-tutorial\src\routes\invoice.js
 */
import React from 'react'
import { PieChartTwoTone } from '@ant-design/icons'
import { getInvoices } from "../data/getInvioces";
import { Link, Outlet } from 'react-router-dom'

export default function Invoice() {
    let invoices = getInvoices();
    console.log('invoices', invoices);
    return (
        <div style={{ textAlign: 'center' }}>
            <PieChartTwoTone style={{ fontSize: '100px' }} />
            <h3>发票页面</h3>
            <div >
                <div >

                    <nav style={{ borderRight: "solid 1px blue", width: '35vh', float: 'left' }}>
                        <h2>物件一览</h2>
                        {
                            invoices.map(item => (
                                <Link
                                    style={{ display: "block", margin: "1rem 0" }}
                                    to={`/invoice/${item.number}`}
                                    // `` 变量标识符
                                    key={item.number}
                                >
                                    {item.name}
                                </Link>
                            ))
                        }
                        {/* 用发票数组渲染一组超链接 */}
                    </nav>
                </div>
                <div style={{ width: '50vh', float: 'right', marginRight: '5vh' }}>
                    <Outlet />
                </div>
            </div>

        </div >
    )
}
