/*
 * @Descripttion: 常用 http 请求库
 * @Author: lucien
 * @Date: 2021-07-27 14:49:00
 * @LastEditors: YangJianBing
 * @LastEditTime: 2022-12-04 21:01:09
 */
import request from '../utils/request'
export function postAction(url, parameter, type) {
  return request({
    url: url,
    method: 'post',
    data: parameter,
    type
  })
}
export function getImgBase64(url,parameter) {
  return request({
    url: url,
    method: 'get',
    params: parameter,
    responseType:'arraybuffer'
  })
}
export function httpAction(url, parameter, method) {
  return request({
    url: url,
    method: method,
    data: parameter
  })
}

export function putAction(url, parameter, type) {
  return request({
    url: url,
    method: 'put',
    data: parameter,
    type
  })
}

export function getAction(url, parameter, type) {
  return request({
    url: url,
    method: 'get',
    params: parameter,
    type
  })
}
// 文件预览
export function filePreview(data) {
  return request({
    url: '/api/fileManage/inLine',
    method: 'get',
    params: data,
    responseType: 'blob'
  })
}
export function lawFilePreview(data) {
  return request({
    url: '/gymobilelaw/fileManage/inLine',
    method: 'post',
    params: data,
    responseType: 'blob'
  })
}
export function downloadAction(url, method, parameter, filename) {
  return request({
    url: url,
    method: method,
    params: parameter,
    responseType: 'blob'
  })
    .then(response => {
      const type = response.type || ''
      if (type.includes('application/json')) {
        const reader = new FileReader()
        reader.onload = e => {
          if (e.target.readyState === 2) {
            let res = {}
            res = JSON.parse(e.target.result)
            // Message.error(res.msg)
          }
        }
        reader.readAsText(response)
      } else {
        filename = decodeURI(filename)
        if (typeof window.navigator.msSaveBlob !== 'undefined') {
          window.navigator.msSaveBlob(response, filename)
        } else {
          var blobURL = window.URL.createObjectURL(response) // 将blob对象转为一个URL
          var tempLink = document.createElement('a') // 创建一个a标签
          tempLink.style.display = 'none'
          tempLink.href = blobURL
          tempLink.setAttribute('download', filename) // 给a标签添加下载属性
          if (typeof tempLink.download === 'undefined') {
            tempLink.setAttribute('target', '_blank')
          }
          document.body.appendChild(tempLink) // 将a标签添加到body当中
          tempLink.click() // 启动下载
          document.body.removeChild(tempLink) // 下载完毕删除a标签
          window.URL.revokeObjectURL(blobURL)
        }
      }
    })
    .catch(error => {
      console.log(error)
    })
}

export function downloadExcel(url, parameter, method) {
  return request({
    url: url,
    method: method || 'post',
    data: method !== 'get' ? parameter : null,
    params: method === 'get' ? parameter : null,
    responseType: 'blob'
  })
}

export function deleteAction(url, parameter) {
  return request({
    url: url,
    method: 'delete',
    params: parameter
  })
}
