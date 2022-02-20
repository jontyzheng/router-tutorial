/*
 * @Author: jonty
 * @Date: 2022-02-18 21:55:40
 * @LastEditTime: 2022-02-20 22:24:47
 * @Description: 
 * @Reference: 
 * @FilePath: \router-tutorial\src\routes\subInvoice.js
 */
import React from 'react'
import { useParams } from 'react-router-dom'
import { getInvoice } from '../data/getInvioces'

export default function SubInvoice() {

    let params = useParams()
    let invoice = getInvoice(parseInt(params.invoiceId, 10)) // js 暴露导出数据

    return (
        <div style={{}}>
            <main style={{ padding: "1rem" }}>
                <h2>子发票详情（参数接收） #{params.invoiceId}</h2>
                <h2>总金额: {invoice.amount}</h2> {/* 显示数据 */}
                <p>
                    {invoice.name}: {invoice.number}
                </p>
                <p>有效日期: {invoice.due}</p>
            </main>
        </div>
    )
}
