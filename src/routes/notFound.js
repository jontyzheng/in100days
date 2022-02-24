/*
 * @Author: jonty
 * @Date: 2022-02-24 22:05:35
 * @LastEditTime: 2022-02-24 22:17:09
 * @Description: 
 * @Reference: 
 * @FilePath: \in100days\src\routes\notFound.js
 */
import React from 'react'
import { Link, } from 'react-router-dom'

export function NotFound() {
    return (
        <div>
            <h1>404 找不到</h1>
            <Link to='/' >返回</Link>
        </div>
    )
}
