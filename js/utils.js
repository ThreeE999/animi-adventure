/*
 * @Author: ThreeE_Zhuang
 * @Date: 2021-08-05 11:11:12
 * @LastEditors: ThreeE_Zhuang
 * @LastEditTime: 2021-08-11 15:17:49
 * @Description: file content
 */

// function addA(href, text, args = '') {
//     return `<a href="${href}" ${args}>${text}</a>`
// }

// function addImg(src, height = 100, args = '') {
//     return `<img src="${src}" height=${height} ${args}/>`
// }

function ajaxRequest(type, url, callback) { 
    var type = type, url = url, callback = callback; 
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.open(type, url, true); 
    xmlhttp.send(null); 
    xmlhttp.onreadystatechange = function () { 
        if (xmlhttp.readyState == 4) { 
            if (xmlhttp.status == 200) { 
                callback(json_encode(xmlhttp.responseText)) 
            } 
        } 
    }; 
} 

function json_encode(str) { 
    json = JSON.parse(str); 
    return json; 
} 
