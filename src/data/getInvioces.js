/*
 * @Author: jonty
 * @Date: 2022-02-17 22:06:48
 * @LastEditTime: 2022-02-19 22:07:57
 * @Description: 返回一个数组
 * @Reference: 
 * @FilePath: \router-tutorial\src\data\getInvioces.js
 */
let invioces = [
    {
        name: "Santa Monica(圣莫尼卡)",
        number: 1995,
        amount: "$10,800",
        due: "12/05/1995"
    },
    {
        name: "Stankonia(斯坦科尼亚)",
        number: 2000,
        amount: "$8,000",
        due: "10/31/2000"
    },
    {
        name: "Ocean Avenue(海洋大道)",
        number: 2003,
        amount: "$9,500",
        due: "07/22/2003"
    },
    {
        name: "Tubthumper(大喇叭)",
        number: 1997,
        amount: "$14,000",
        due: "09/01/1997"
    },
    {
        name: "Wide Open Spaces(开阔的空间)",
        number: 1998,
        amount: "$4,600",
        due: "01/27/1998"
    }
]

export function getInvoices() {
    return invioces
}

// 法2：过滤出和number相同的数组元素
export function getInvoice(number) {
    return invioces.find(
        invoice => invoice.number === number
    )
}

