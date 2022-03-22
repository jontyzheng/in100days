/*
 * @Author: jonty
 * @Date: 2022-03-21 00:15:04
 * @LastEditTime: 2022-03-22 23:30:06
 * @Description: 
 * @Reference: 
 * @FilePath: \react-basic\src\App.js
 */
// css导入
import './app.css'

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



function App() {
  return (
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
      {/* 外层表表达式内层表对象 */}
      <div style={styles}>文字样式测试</div>
      <div className='app'>css样式测试</div>
    </div>
  );
}

export default App;
