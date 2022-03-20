/*
 * @Author: jonty
 * @Date: 2022-03-20 00:04:51
 * @LastEditTime: 2022-03-20 23:12:56
 * @Description: 
 * @Reference: 
 * @FilePath: \in100days\src\routes\page1\components\addModal.js
 */
import React from 'react'
import { Form, InputNumber, Input, Row, message } from 'antd'
import { doCreateOrUpdate } from '../service'
const FormItem = Form.Item

export default function AddModal(props) {


    const { onAddSubmit } = props
    
    const [form] = Form.useForm()


    const onFinish = (fieldsValue) => {
        console.log(fieldsValue);
        doCreateOrUpdate(fieldsValue).then(res => message.success('新增成功')).catch(err => alert(err))
    }

    return (
        <div>
            <Form form={form} onFinish={onFinish}>
                <Row>
                    <FormItem
                        label={'商品名称'}
                        name='itemName'>
                        <Input />
                    </FormItem>
                </Row>
                <Row>
                    <FormItem
                        label={'商品名称'}
                        name='itemName'>
                        <InputNumber />
                    </FormItem>
                </Row>
            </Form>
        </div>
    )
}
