/**
 * Created by lw on 2017/5/25.
 */
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
            name: '硬盘',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:70, name:'用量'},
                {value:30, name:'剩余用量'},
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
            name: '硬盘',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:30, name:'用量'},
                {value:70, name:'剩余用量'},
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
            name: '硬盘',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:20, name:'用量'},
                {value:80, name:'剩余用量'},
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
            name: '硬盘',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:60, name:'用量'},
                {value:40, name:'剩余用量'},
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
            name: '硬盘',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:95, name:'用量'},
                {value:5, name:'剩余用量'},
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
var myChart1 = echarts.init(document.getElementById('main10'));

option1 = {
    title : {
        text: '当前用量饼图',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '硬盘',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:90, name:'用量'},
                {value:10, name:'剩余用量'},
            ],
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
    myChart1.setOption(option1);