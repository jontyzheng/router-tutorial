/*
 * @Author: jonty
 * @Date: 2022-02-22 21:31:04
 * @LastEditTime: 2022-02-22 21:51:32
 * @Description: 
 * @Reference: 
 * @FilePath: \router-tutorial\src\routes\QueryNavLink.js
 */
import { NavLink, useLocation } from 'react-router-dom'

export function QueryNavLink({ to, ...props }) {
    let location = useLocation()
    // console.log(location); // 一个带pathname.searchParams的对象
    return <NavLink to={to + location.search} {...props} />
}