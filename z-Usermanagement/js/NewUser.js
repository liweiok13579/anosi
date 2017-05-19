/**
 * Created by lw on 2017/5/18.
 */
$(function () {
    $(".Modify").on("click",function () {
        if ($(".Fullname").val().trim()==""){
            alert("用户姓名不得为空")
            return false
        }else if ($(".department").val().trim()==""){
            alert("所属部门不得为空")
            return false
        }else if ($(".Account").val().trim()==""){
            alert("系统账号不得为空")
            return false
        }else if ($(".Password").val().trim()==""){
            alert("系统密码不得为空")
            return false
        }else if ($(".Date").val().trim()==""){
            alert("出生日期不得为空")
            return false
        }else if ($(".iphone").val().trim()==""){
            alert("联系电话不得为空")
            return false
        }else if ($(".address").val().trim()==""){
            alert("办公地址不得为空")
            return false
        }
        Modify()
    })
})
//    重置
function Reset(){
    var gnl=confirm("是否确定要重置?");
    if (gnl==true){
        $("select").val(2);
        $("input").val("")
        $("input[type='radio']").eq(0).attr("checked", false)
        return true;
    }else{
        return false;
    }
}
//    修改
function Modify(){
    var gnl=confirm("是否确定要新增?");
    if (gnl==true){
        //gogogo
        // $.ajax({ url: "0.0", context: document.body, success: function(){
        //     $(this).addClass("done");
        // }});
        return true;
    }else{
        return false;
    }
}

