/**
 * Created by lw on 2017/5/25.
 */
//1模块
var myChart = echarts.init(document.getElementById('main'));
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series : [
        {
            name: 'cpu',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:70, name:'占有率'},
                {value:30, name:'闲置率'},
            ],
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);
//2模块
var myChart = echarts.init(document.getElementById('main2'));
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series : [
        {
            name: 'cpu',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:40, name:'占有率'},
                {value:70, name:'闲置率'},
            ],
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);
//3模块
var myChart = echarts.init(document.getElementById('main3'));
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series : [
        {
            name: 'cpu',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:60, name:'占有率'},
                {value:40, name:'闲置率'},
            ],
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);
//4模块
var myChart = echarts.init(document.getElementById('main4'));
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series : [
        {
            name: 'cpu',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:50, name:'占有率'},
                {value:50, name:'闲置率'},
            ],
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);
//5模块
var myChart = echarts.init(document.getElementById('main5'));
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series : [
        {
            name: 'cpu',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:10, name:'占有率'},
                {value:90, name:'闲置率'},
            ],
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);
//6模块
var myChart = echarts.init(document.getElementById('main6'));
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series : [
        {
            name: 'cpu',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:80, name:'占有率'},
                {value:20, name:'闲置率'},
            ],
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);
//7模块
var myChart = echarts.init(document.getElementById('main7'));
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series : [
        {
            name: 'cpu',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:5, name:'占有率'},
                {value:95, name:'闲置率'},
            ],
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);
//8模块
var myChart = echarts.init(document.getElementById('main8'));
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series : [
        {
            name: 'cpu',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:95, name:'占有率'},
                {value:5, name:'闲置率'},
            ],
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);
//9模块
var myChart = echarts.init(document.getElementById('main9'));
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series : [
        {
            name: 'cpu',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:70, name:'占有率'},
                {value:30, name:'闲置率'},
            ],
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);

//弹出层
var myChart10 = echarts.init(document.getElementById('main10'));
option10 = {
    title : {
        text: '服务器状态走势图',
        subtext: '30及-30：预警，50及-50：警告',
        x: 'center',
        align: 'right'
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
            name: '状态',
            max:50,
            min: -50,
            boundaryGap: [0.2, 0.2],
            splitNumber:3
        }
    ],// 根据数值改变颜色
    itemStyle: {
        normal: {
            color:"#72d0eb",
        }
    },
    series: [
        {
            name: '状态',
            type: 'line',
            data: (function () {
                var res = [];
                var len = 0;
                while (len < 10) {
                    res.push((Math.random() * 60 - 30).toFixed(1) - 0);
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

    var data0 = option10.series[0].data;

    data0.shift();
    data0.push((Math.random() * 60 - 30).toFixed(1) - 0);

    option10.xAxis[0].data.shift();
    option10.xAxis[0].data.push(axisData);
    myChart10.setOption(option10);
}, 2100);



//预警弹出层
var myChart11 = echarts.init(document.getElementById('main11'));
option11= {
    title : {
        text: '服务器状态走势图',
        subtext: '30及-30：预警，50及-50：警告',
        x: 'center',
        align: 'right'
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
            name: '状态',
            max:50,
            min: -50,
            boundaryGap: [0.2, 0.2],
            splitNumber:3
        }
    ],// 根据数值改变颜色
    itemStyle: {
        normal: {
            color:"sandybrown",
        }
    },
    series: [
        {
            name: '状态',
            type: 'line',
            data: (function () {
                var res = [];
                var len = 0;
                while (len < 10) {
                    res.push((Math.random() * 80 - 40).toFixed(1) - 0);
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

    var data0 = option11.series[0].data;

    data0.shift();
    data0.push((Math.random() * 80 - 40).toFixed(1) - 0);

    option11.xAxis[0].data.shift();
    option11.xAxis[0].data.push(axisData);
    myChart11.setOption(option11);
}, 2100);
//警告弹出层
var myChart12 = echarts.init(document.getElementById('main12'));
option12= {
    title : {
        text: '服务器状态走势图',
        subtext: '30及-30：预警，50及-50：警告',
        x: 'center',
        align: 'right'
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
            name: '状态',
            max:50,
            min: -50,
            boundaryGap: [0.2, 0.2],
            splitNumber:3
        }
    ],// 根据数值改变颜色
    itemStyle: {
        normal: {
            color:"red",
        }
    },
    series: [
        {
            name: '状态',
            type: 'line',
            data: (function () {
                var res = [];
                var len = 0;
                while (len < 10) {
                    res.push((Math.random() * 100 - 55).toFixed(1) - 0);
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

    var data0 = option12.series[0].data;

    data0.shift();
    data0.push((Math.random() * 100 - 55).toFixed(1) - 0);

    option12.xAxis[0].data.shift();
    option12.xAxis[0].data.push(axisData);
    myChart12.setOption(option12);
}, 2100);