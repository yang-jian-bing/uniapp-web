// request.js
// 通常可以吧 baseUrl 单独放在一个 js 文件了
// const baseUrl = 'http://127.0.0.1:7002'
const baseUrl = 'https://www.shuainiba.com'

const request = (options = {}) => {
  // 在这里可以对请求头进行一些设置
  // 例如：
  // options.header = {
  //      "Content-Type": "application/x-www-form-urlencoded"
  // }
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseUrl + options.url || '',
      method: options.type || 'GET',
      data: {
        ...options.data,
        checkSum: "starlab",
        userId: uni.getStorageSync("userId")
      },
      header: options.header || {}
    }).then(data => {
      let [err, res] = data;
      if (res.data.errCode === 0) {
        resolve(res);
      } else {
        uni.showToast({
          title: res.data.errMsg,
          icon: "error",
        });
        reject(res.data.errMsg)
      }
    }).catch(error => {
      reject(error)
    })
  });
}

const get = (url, data, options = {}) => {

  options.type = 'GET';
  options.data = data;
  options.url = url;
  return request(options)
}

const post = (url, data, options = {}) => {
  options.type = 'POST';
  options.data = data;
  options.url = url;
  return request(options)
}

const put = (url, data, options = {}) => {
  options.type = 'PUT';
  options.data = data;
  options.url = url;
  return request(options)
}


export default {
  request,
  get,
  post,
  put
}
