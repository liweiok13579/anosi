$(function () {
    var myChart = echarts.init(document.getElementById('main'));
    option = {
        title: {
            text: '本日实时访问峰值',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#283b56'
                }
            }
        },
        legend: {
            data: ['最新访问次数']
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: {
            show: true,
            start: 40,
            end: 100,
            // filterMode: 'empty'
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: true,
                data: (function () {
                    var now = new Date();
                    var res = [];
                    var len = 10;
                    while (len--) {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                        now = new Date(now - 2000);
                    }
                    return res;
                })()
            }
        ],
        yAxis: [
            {
                type: 'value',
                scale: true,
                name: '访问次数',
                min: 0,
                boundaryGap: [0.2, 0.2]
            }
        ],// 根据数值改变颜色
        itemStyle: {
            normal: {
                color:"green",
            }
        },
        series: [
            {
                name: '最新访问次数',
                type: 'line',
                data: (function () {
                    var res = [];
                    var len = 0;
                    while (len < 10) {
                        res.push((Math.random() * 10 + 5).toFixed(1) - 0);
                        len++;
                    }
                    return res;
                })()
            }
        ]
    };

    // app.count = 11;
    setInterval(function () {
        axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');

        var data0 = option.series[0].data;

        data0.shift();
        data0.push((Math.random() * 10 + 5).toFixed(1) - 0);

        option.xAxis[0].data.shift();
        option.xAxis[0].data.push(axisData);
        myChart.setOption(option);
    }, 2100);

//****************************************************************************2222222********************************************
    var myChart2 = echarts.init(document.getElementById('main2'));
    myChart2.title = '年度峰值计算';

    var colors = ['#5793f3', '#d14a61', '#675bba'];

    option2 = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['30天内峰值']
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                // magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号', '26号', '27号', '28号', '29号', '30号']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '30天内峰值',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210, 230, 210, 250, 280, 290, 100, 0, 15, 20, 99, 888, 165, 295, 285, 0, 3, 25, 28, 265, 185, 999, 222, 555]
            }
        ]
    };
    myChart2.setOption(option2);
})
