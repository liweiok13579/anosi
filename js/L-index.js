$(function () {
    //空格提交
    $(document).keyup(function (event) {
        if (event.keyCode == 13) {
            $(".tijiao").trigger("click");
        }
    });
    // class类名集合 sign 登录界面中间div类名
    var img = $(".right_con img");
    img.click(function () {
        alert("此功能尚未开放，敬请期待！");
    })


})
function Jump() {
    var val = $(".form-control")[0].value;
    var val1 = $(".form-control")[1].value;
    var cuowu = $(".cuowu")
    if (val == "admin" && val1 == "admin") {
        // Jump
            frm.submit();
    } else {
        cuowu.css("display", "block")
    }
    return true;
}