/*
 * @Author: jonty
 * @Date: 2022-03-07 23:32:55
 * @LastEditTime: 2022-03-20 00:21:55
 * @Description: 切页
 * @Reference: 
 * @FilePath: \in100days\src\routes\page1\index.js
 */
import { Table, Button, Modal } from 'antd'
import { React, useState, useEffect } from 'react'
import { doQuery } from './service'
import AddModal from './components/addModal'

export function Page1() {

  // 声明一个对象数组的数据源变量
  const [dataSource, setDataSource] = useState([{
    'name': '商品名称',
    'price': 2
  }])

  const [addVisible, setAddVisible] = useState(false)

  var param = {
    pageNum: 1,
    pageSize: 5,
    // total: 0
  }

  useEffect(
    () => {
      indexQuery()
    }, []
  )
  // 页面记载时执行的方法：参数二（空数组）不可缺少

  function indexQuery() {
    doQuery(param).then(
      (res) => {
        console.log(res.data.list);
        setDataSource(res.data.list) // 返回数据的 data 部分
      }
    ).catch(
      err => alert(err)
    )
  }

  function showAddModal() {
    setAddVisible(!addVisible)
  }

  const arr = [
    {
      name: 'name1',
      price: 1,
    },
    {
      name: 'name2',
      price: 1,
    },
    {
      name: 'name3',
      price: 1,
    },
    {
      name: 'name4',
      price: 1,
    },
    {
      name: 'name5',
      price: 1,
    },
  ]

  const columns = [
    {
      key: '1',
      dataIndex: 'itemName',
      title: 'itemName'
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
        <Button type='primary' onClick={showAddModal}>新增</Button>
      </div>

      <Modal
        visible={addVisible}
        // onOk={onAddSubmi}
        onCancel={showAddModal}
      >
        <AddModal />
      </Modal>

      <div className='contentBox'>
        <Table
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    </div>
  )
}