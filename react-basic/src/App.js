/*
 * @Author: jonty
 * @Date: 2022-03-21 00:15:04
 * @LastEditTime: 2022-03-21 23:05:48
 * @Description: 
 * @Reference: 
 * @FilePath: \react-basic\src\App.js
 */

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
            <li>
              {item.name}
            </li>
          )
        })
      }
    </div>
  );
}

export default App;
