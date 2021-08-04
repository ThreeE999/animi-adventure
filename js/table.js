/*
 * @Author: ThreeE_Zhuang
 * @Date: 2021-08-03 15:18:02
 * @LastEditors: ThreeE_Zhuang
 * @LastEditTime: 2021-08-04 12:10:16
 * @Description: file content
 */

var HEAD = ['标题1', '标题2'];


function add_style(text, style=false, clas=false) {
    var s = '';
    if(style)
    {
        s += ' style="' + style + '"';
    }
    if(clas)
    {
        s += ' class="' + clas + '"';
    }
    return "<span" + s + ">" + text + "</span>"
}

function table(data, head=HEAD) {
    var h = '';
    var checkbox = '';
    for(var i in head)
    {
        h += '<th class="column' + i + '" aonclick="delete_column(this)">' + head[i] + '</th>';
        checkbox += `
            <div class="page__toggle">
            <label class="toggle">
                <input class="toggle__input" type="checkbox" onclick="change_col(this)" col="column`+i+`" checked>
                <span class="toggle__label">
                <span class="toggle__text">`+ head[i] + `</span>
                </span>
            </label>
            </div>
        `;
    }
    var thead = "<thead><tr>" + h + "</tr></thead>";
    checkbox = `<div class="page__section page__custom-settings">
                <span class="page__name">选择查看列</span>` + checkbox + `</div>`;
    $(".check-box").append(checkbox);

    var D = '';
    for(var i in data)
    {
        var d = '';
        for(var j in data[i])
        {
            d += '<td class="column' + j + '">' + data[i][j] + '</td>';

        }
        D += '<tr>' + d + '</tr>';
    }
    var tbody = "<tbody>" + D + "</tbody>";
    $("table").append(thead+tbody);

}

function delete_column(obj) {
    // $("."+$(obj).attr('class')).remove()
    var classname = $(obj).attr('class');
    $("."+classname).addClass('hide-col');
}
