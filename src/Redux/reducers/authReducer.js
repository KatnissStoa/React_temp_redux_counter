// 身份验证的action

// 初始化state为false
const authReducer = (state = false, action) => {
  switch (action.type) {
    case "LOG_IN":
      // return 的是state的状态
      return true
    case "LOG_OUT":
      return false
    // 默认都是返回state
    default:
      return state
  }
}
export default authReducer