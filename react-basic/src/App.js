/*
 * @Author: jonty
 * @Date: 2022-03-21 00:15:04
 * @LastEditTime: 2022-04-07 16:44:36
 * @Description: 
 * @Reference: 
 * @FilePath: \react-basic\src\App.js
 */
// css导入
import './app.css'
import React from 'react'
import { Comment } from './components/comment'

const name = 'this is a name'
// 同级方法
function getAge() {
  return 30
}
// 同级数组
const arr = ['a', 'b', 'c']
// 同级变量
const list = [
  {
    'name': 'react',
    'value': 1
  },
  {
    'name': 'vue',
    'value': 2
  },
]
const flag = true
// 返回元素
function getHeader(flag) {
  if (flag) {
    return <h1>h1标签</h1>
  } else {
    return <h2>h2标签</h2>
  }
}
// 样式对象
const styles = {
  color: 'blue',
  fontSize: '40px'
}
const passFlag = true


function App() {
  return (
    <>
      <div className="App">
        react app {name}
        {getAge()}
        {1 + 2}
        {arr.join('--')}
        <br />
        {/* 方法 */}
        {
          list.map(item => {
            return (
              <li key={item.name}>
                {item.name}
              </li>
            )
          })
        }
        {flag ? '真棒！' : '真菜！'}
        {
          getHeader()
        }
        {/* 外层{}表表达式 内层{}表对象 */}
        <div style={styles}>文字样式测试</div>
        <div className='app'>css样式测试</div>
        提示：<span className={passFlag ? 'pass' : 'fail'}>动态类名演示</span>
        <div>for属性的作用</div>
        <label htmlFor="female">男</label>
        <input type="radio" id='man' name='gender' />
        <br />
        <label htmlFor="man">女</label>
        <input type="radio" id='female' name='gender' />
        <br />
        （同一个name单选才生效）
        <Comment />
      </div>
    </>
  );
}

export default App;
