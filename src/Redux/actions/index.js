// 定义所有reducer需要接收并使用的action

export const increment = () => {
  return {
    type: "INCREMENT",
  }
}

export const decrement = () => {
  return {
    type: "DECREMENT",
  }
}

export const reset = () => {
  return {
    type: "RESET",
  }
}

export const logIn = () => {
  return {
    type: "LOG_IN",
  }
}

export const logOut = () => {
  return {
    type: "LOG_OUT",
  }
}