/*
 * @Author: ThreeE_Zhuang
 * @Date: 2021-08-05 11:11:12
 * @LastEditors: ThreeE_Zhuang
 * @LastEditTime: 2021-08-10 10:15:06
 * @Description: file content
 */

function add_a(href, text, args='') {
    return `<a href="${href}" ${args}>${text}</a>`
}

function add_img(src, height=100, args='') {
    return `<img src="${src}" height=${height} ${args}/>`
}

