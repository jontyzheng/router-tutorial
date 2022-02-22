/*
 * @Author: jonty
 * @Date: 2022-02-16 22:36:50
 * @LastEditTime: 2022-02-22 21:45:24
 * @Description: 
 * @Reference: 
 * @FilePath: \router-tutorial\src\routes\invoice.js
 */
import React from 'react'
import { PieChartTwoTone } from '@ant-design/icons'
import { getInvoices, deleteInvoive } from "../data/getInvioces";
import { NavLink, Outlet, useSearchParams,   } from 'react-router-dom'
import { QueryNavLink } from './QueryNavLink'

export default function Invoice() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams()
    

    console.log('invoices', invoices);
    return (
        <div style={{ textAlign: 'center' }}>
            <PieChartTwoTone style={{ fontSize: '100px' }} />
            <h3>发票页面</h3>
            <div >
                <div >
                    <nav style={{ borderRight: "solid 1px blue", width: '35vh', float: 'left' }}>
                        <h2>物件一览</h2>
                        <input
                            onChange={event => {
                                let filter = event.target.value
                                if (filter) {
                                    setSearchParams({ filter })
                                } else {
                                    setSearchParams({})
                                }
                            }}
                        />
                        {/* 一给searchParam传值 */}
                        {/* 紧接着筛选显示出name中以这些值开头的元素 */}
                        {
                            invoices.filter(item => {
                                let filter = searchParams.get('filter')
                                if (!filter) {
                                    return true
                                }
                                let name = item.name.toLowerCase()
                                return name.startsWith(filter.toLowerCase())
                            }).map(item => (
                                <QueryNavLink
                                    style={({ isActive }) => {
                                        return {
                                            display: "block",
                                            margin: "1rem 0",
                                            color: isActive ? 'red' : ''
                                        }
                                    }}
                                    to={`/invoice/${item.number}`}
                                    // `` 变量标识符
                                    key={item.number}
                                >
                                    {item.name}
                                </QueryNavLink>
                            ))
                        }
                        {/* 用发票数组渲染一组超链接 */}
                        {/* NavLink = Link+isActive */}
                        {/* 【实时搜索(原理：实时过滤)】 */}
                    </nav>
                </div>
                <div style={{ width: '50vh', float: 'right', marginRight: '5vh' }}>
                    <Outlet />
                </div>
            </div>

        </div >
    )
}
