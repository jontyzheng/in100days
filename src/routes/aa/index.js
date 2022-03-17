/*
 * @Author: jonty
 * @Date: 2022-03-07 23:32:55
 * @LastEditTime: 2022-03-17 00:20:46
 * @Description: 切页
 * @Reference: 
 * @FilePath: \in100days\src\routes\aa\index.js
 */
import { Table, Button } from 'antd'
import { React, useState, useEffect } from 'react'
import { doQuery } from './service'

export function AA() {

  // 声明一个对象数组的数据源变量
  const [dataSource, setDataSource] = useState([{
    'name': '商品名称',
    'price': 2
  }])

  useEffect(
    () => {
      indexQuery()
    }, []
  )
  // 页面记载时执行的方法：参数二（空数组）不可缺少

  const indexQuery = () => {
    doQuery().then(
      res => {
        setDataSource(res.data) // 返回数据的 data 部分
      }
    ).catch(err => alert(err))
  }



  const arr = [
    {
      name: 'name1',
      price: 1,
    },
    {
      name: 'name1',
      price: 1,
    },
    {
      name: 'name1',
      price: 1,
    },
    {
      name: 'name1',
      price: 1,
    },
    {
      name: 'name1',
      price: 1,
    },
  ]

  const columns = [
    {
      key: '1',
      dataIndex: 'name',
      title: 'name'
    },
    {
      key: '2',
      dataIndex: 'price',
      title: 'price'
    },
  ]

  return (
    <div>

      <div className='btnBox'>
        <Button type='primary'>新增</Button>
      </div>

      <div className='contentBox'>
        <Table
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    </div>
  )
}