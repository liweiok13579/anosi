$(function () {
    setdatepicker()
    // 日期选择
    function setdatepicker() {
        $(".datepicker").datepicker({
            language: "zh-CN",
            autoclose: true,//选中之后自动隐藏日期选择框
            clearBtn: true,//清除按钮
            format: "yyyy-mm-dd"//日期格式
        });
    };
    // 发生时间  完成时间
    function getDate(str) {
        str = new Date(str);
        str = str.getTime();
        return str;
    }

    $(".endday").on("change", function () {
        var startday, endday, start, end;
        startday = $(".startday").val().replace(/-/g, '/');
        endday = $(".endday").val().replace(/-/g, '/');
        start = getDate(startday);
        end = getDate(endday);
        if (end < start) {
            alert(" 完成时间不能小于发生时间")
            $(".endday").val("");
        }
    })
})
