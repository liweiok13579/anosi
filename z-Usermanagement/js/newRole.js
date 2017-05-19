/**
 * Created by lw on 2017/5/9.
 */
$(function () {
    $(".Modify").on("click",function () {
        if ($(".Rolename").val().trim()==""){
            alert("角色名称不得为空")
            return false
        }else if ($(".Roleresponsibility").val().trim()==""){
            alert("角色说明不得为空")
            return false
        }
        Modify()
    })
})
//    重置
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