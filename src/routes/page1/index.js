/*
 * @Author: jonty
 * @Date: 2022-03-07 23:32:55
 * @LastEditTime: 2022-03-24 23:02:45
 * @Description: 切页
 * @Reference: 
 * @FilePath: \in100days\src\routes\page1\index.js
 */
import { Table, Button, Modal } from 'antd'
import { React, useState, useEffect, useRef } from 'react'
import { doQuery } from './service'
import AddModal from './components/addModal'

export function Page1() {

  const getFormValue = useRef()

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

  const columns = [
    {
      title: '商品名称',
      dataIndex: 'itemName',
      key: 'itemName',
    },
    {
      title: '商品名称',
      dataIndex: 'price',
      key: 'price',
    },
  ]
  
  function showAddModal() {
    setAddVisible(!addVisible)
  }

  function onAddSubmit() {
    // onAddSubmit
  }

  


  return (
    <div>

      <div className='btnBox'>
        <Button type='primary' onClick={showAddModal}>新增</Button>
      </div>

      <Modal
        visible={addVisible}
        // onOk={onAddSubmi}
        onCancel={showAddModal}
        title={"新增商品"}
      >
        <AddModal onAddSubmit={onAddSubmit} />
      </Modal>
      
      <Modal
        visible={addVisible}
        // onOk={onAddSubmi}
        onCancel={showAddModal}
        title={"新增商品"}
      >
        <AddModal onAddSubmit={onAddSubmit} />
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