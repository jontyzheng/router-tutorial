/*
 * @Author: jonty
 * @Date: 2022-02-18 21:55:40
 * @LastEditTime: 2022-02-22 21:53:43
 * @Description: 发票页右边的一块显示详情的
 * @Reference: 
 * @FilePath: \router-tutorial\src\routes\subInv.js
 */
import React from 'react'
import { useParams, useNavigate, } from 'react-router-dom'
import { getInvoice, deleteInvoive } from '../data/getInvioces'

export default function SubInv() {

    let params = useParams()
    let invoice = getInvoice(parseInt(params.invoiceId, 10)) // js 暴露导出数据
    let navigate = useNavigate() // 导航


    return (
        <div style={{}}>
            <main style={{ padding: "1rem" }}>
                <h2>子发票详情（参数接收） #{params.invoiceId}</h2>
                <h2>总金额: {invoice.amount}</h2> {/* 显示数据 */}
                <p>
                    {invoice.name}: {invoice.number}
                </p>
                <p>有效日期: {invoice.due}</p>
                <button
                    onClick={() => {
                        // deleteInvoive(invoice.number) // 你好心传来我无情删掉
                        navigate('/invoice')
                    }}
                >返回</button>
            </main>
        </div>
    )
}
