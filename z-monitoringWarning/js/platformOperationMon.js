/**
 * Created by lw on 2017/5/25.
 */
//弹出层
var myChart1 = echarts.init(document.getElementById('main10'));

var data = [];
var now = +new Date(2017, 4, 24);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 100; i++) {
    data.push(randomData());
}

// noq = new Date();

function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    }
}


option1 = {
    title: {
        text: '当前平台状态监控'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/'
                + date.getFullYear();
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data
    }]
};

setInterval(function () {

    for (var i = 0; i < 1; i++) {
        data.shift();
        data.push(randomData());
    }

    myChart1.setOption(option1);
}, 1000);