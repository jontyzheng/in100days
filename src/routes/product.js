/*
 * @Author: jonty
 * @Date: 2022-02-16 22:36:50
 * @LastEditTime: 2022-02-28 23:23:04
 * @Description: 
 * @Reference: 
 * @FilePath: \in100days\src\routes\product.js
 */
import React from 'react'
import { PieChartTwoTone } from '@ant-design/icons'
// import './index.css'

export function Product() {

    const itemArray = [
        {
            title: '11',
            price: '11'
        },
        {
            title: '22',
            price: '22'
        },
        {
            title: '33',
            price: '33'
        },
        {
            title: '44',
            price: '44'
        },
        {
            title: '55',
            price: '55'
        },
        {
            title: '66',
            price: '66'
        },
        {
            title: '77',
            price: '77'
        },
        {
            title: '88',
            price: '88'
        },
        {
            title: '99',
            price: '99'
        },
        {
            title: '100',
            price: '100'
        },
    ]

    return (
        <div>
            <div className='contentBox' style={{
                background: 'white',
                borderRadius: '16px',
                width: '100%',
                // height: '100vh'
            }}>
                <div className='cardBox' style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                }}>
                    {
                        itemArray.map(item => (
                            <div className='cardItem' style={{
                                width: '200px',
                                height: '200px',
                                // border: '1px red solid',
                                borderRadius: '16px',
                                boxShadow: '0 2px 8px 0 grey', // [1]
                                margin: '10px',
                                textAlign: 'center',
                                padding: '20px auto'

                            }}>
                                {item.title}
                            </div>
                        ))
                    }
                </div>
            </div>

        </div >
    )
}
/**
 * 
 * [1] (x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色)
 * box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
 * 
*/
