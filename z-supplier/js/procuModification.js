/**
 * Created by lw on 2017/5/18.
 */
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
    var gnl=confirm("是否确定要修改?");
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