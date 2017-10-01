//这个函数主要是模仿了thunk函数的做为redux的中间件

export function middlewareThunk(store) {
  return function (next) {
    return function (action) {
      console.log("这边能不能找到dispatch", store);
      console.log(action, "这边作为中间件的action");
      console.log(typeof action, "这边作为中间件的类型");
      if (typeof action === "function") {
        console.log("----传递回来的是action一个函数----");
        //明白了这边就是对这个action函数进行了加工，让他参数带上了一个store
        return action(store);
      }
      return next(action)
    }
  }
}