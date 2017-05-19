/**
 * Created by lw on 2017/5/19.
 */
/**
 * Created by lw on 2017/5/18.
 */
//    通过
function Adopt() {
    var gnl = confirm("是否确定要通过此条审批?");
    if (gnl == true) {
        return true;
    } else {
        return false;
    }
}

//    驳回
//    驳回
$(function () {
    $(".Reject").on("click", function () {
        $(".Mask").css("display", "block")
        $(".Reject1").on("click", function () {
            var gnl = confirm("是否确定要驳回此条审批?");
            if (gnl == true) {
                $(".Mask").css("display", "none")
                return true;
            } else {
                return false;
            }
        });
        //    取消
        $(".Reject2").on("click", function () {
            $(".Mask").css("display", "none")
        });
    })

})