// 实现reducer可以使用switch或if语句。按照习惯，将action的类型(即action.type)全部大写。

// state初始值为1，也可设为从0开始计数
const counterReducer = (state = 1, action) => {
  switch (action.type) {
    // 计数器+1
    case "INCREMENT":
      return state + 1
    // 计数器-1
    case "DECREMENT":
      return state - 1
    // 计数器重置为0
    case "RESET":
      return (state = 0)
    default:
      return state
  }
}
export default counterReducer