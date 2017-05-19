/**
 * Created by lw on 2017/5/8.
 */
$(function () {
    //第二种情况 重置img
    if ($(".noclickImg:has(img)").length == 0) {
        $(".noclickImg").on("click", function () {
            $(".Mask").css("display", "block")
            var path = $(".noclickImg img")[0].src;
            $(".MaskImg img").attr('src', path);
            Maskhide()
        })
    }
    //默认img
    $(".clickImg").on("click", function () {
        $(".Mask").css("display", "block")
        var path = $(".clickImg img")[0].src;
        $(".MaskImg img").attr('src', path);
        Maskhide()
    })
    //验证
    $(".Modify").on("click",function () {
        if ($(".address").val().trim()==""){
            alert("办公地址不得为空")
            return false
        }else if ($(".introduce").val().trim()==""){
            alert("部门简介不得为空")
            return false
        }else if ($(".Duty").val().trim()==""){
            alert("部门职责不得为空")
            return false
        }
        Modify()
    })
})
//隐藏遮罩
function Maskhide() {
    $(".Mask").on("click", function () {
        $(".Mask").css("display", "none")
    })
}
//重置
function Reset(){
    var gnl=confirm("是否确定要重置?");
    if (gnl==true){
        $("input").val("")
        $("textarea").val("")
        //起飞兄弟
        // $.ajax({ url: "0.0", context: document.body, success: function(){
        //     $(this).addClass("done");
        // }});
        return true;
    }else{
        return false;
    }
}
//    修改
function Modify(){
    var gnl=confirm("是否确定要新增?");
    if (gnl==true){
        //起飞兄弟
        // $.ajax({ url: "0.0", context: document.body, success: function(){
        //     $(this).addClass("done");
        // }});
        return true;
    }else{
        return false;
    }
}