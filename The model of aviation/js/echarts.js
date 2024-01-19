$(function () {

    ceshis();
    ceshis1();
    ceshis2();
    ceshis3();

    function ceshis() {
        var myChart = echarts.init(document.getElementById('chart1'));

        option = {
tooltip: {
  trigger: 'axis',
  axisPointer: { type: 'shadow' },
  // formatter:'{c}' ,
},
grid: {
  left: '0',
  top: '30',
  right: '10',
  bottom: '-20',
  containLabel: true
},
legend: {
  data: ['9月14号至18号客流量'],
  right: 'center',
  top: 0,
  textStyle: {
    color: "#fff"
  },
  itemWidth: 12,
  itemHeight: 10,
  // itemGap: 35
},

xAxis: [{
  type: 'category',
  boundaryGap: false,
  axisLabel: {
    rotate: -90,
    textStyle: {
      color: "rgba(255,255,255,.6)",
      fontSize: 14,

    },
  },
  axisLine: {
    lineStyle: {
      color: 'rgba(255,255,255,.1)'
    }

  },

  data: [
    '9-14 14:00:00','9-14 15:00:00','9-14 16:00:00','9-14 17:00:00','9-14 18:00:00','9-14 19:00:00','9-14 20:00:00','9-14 21:00:00','9-14 22:00:00','9-14 23:00:00','9-15 00:00:00','9-15 01:00:00',
    '9-15 02:00:00','9-15 03:00:00','9-15 04:00:00','9-15 05:00:00','9-15 06:00:00','9-15 07:00:00','9-15 08:00:00','9-15 09:00:00','9-15 10:00:00','9-15 14:00:00','9-15 15:00:00','9-15 16:00:00',
    '9-15 17:00:00','9-15 18:00:00','9-15 19:00:00','9-15 20:00:00','9-15 21:00:00','9-15 22:00:00','9-15 23:00:00','9-16 00:00:00','9-16 01:00:00','9-16 02:00:00','9-16 03:00:00','9-16 04:00:00',
    '9-16 05:00:00','9-16 06:00:00','9-16 07:00:00','9-16 08:00:00','9-16 09:00:00','9-16 10:00:00','9-16 12:00:00','9-16 13:00:00','9-16 14:00:00','9-16 15:00:00','9-16 16:00:00','9-16 17:00:00',
    '9-16 18:00:00','9-16 19:00:00','9-16 20:00:00','9-16 21:00:00','9-16 22:00:00','9-16 23:00:00','9-17 00:00:00','9-17 01:00:00','9-17 02:00:00','9-17 03:00:00','9-17 04:00:00','9-17 05:00:00',
    '9-17 06:00:00','9-17 07:00:00','9-17 08:00:00','9-17 09:00:00','9-17 10:00:00','9-17 11:00:00','9-17 12:00:00','9-17 13:00:00','9-17 14:00:00','9-17 15:00:00','9-17 16:00:00','9-17 17:00:00',
    '9-17 18:00:00','9-17 19:00:00','9-17 20:00:00','9-17 21:00:00','9-17 22:00:00','9-17 23:00:00','9-18 01:00:00','9-18 02:00:00','9-18 03:00:00','9-18 05:00:00','9-18 06:00:00','9-18 07:00:00',
    '9-18 08:00:00','9-18 09:00:00','9-18 10:00:00','9-18 11:00:00','9-18 12:00:00','9-18 13:00:00',
    ]

}, {

  axisPointer: { show: false },
  axisLine: { show: false },
  position: 'bottom',
  offset: 20,



}],

yAxis: [{
  type: 'value',
  axisTick: { show: false },
  // splitNumber: 6,
  axisLine: {
    lineStyle: {
      color: 'rgba(255,255,255,.1)'
    }
  },
  axisLabel: {
    formatter: "{value} ",
    textStyle: {
      color: "rgba(255,255,255,.6)",
      fontSize: 14,
    },
  },

  splitLine: {
    lineStyle: {
      color: 'rgba(255,255,255,.1)'
    }
  },
  name: '客流量', // 添加 y 轴的标签
  nameTextStyle: {
    color: 'rgba(255,255,255,.6)',
    fontSize: 14,
  }

}],
series: [
  {
    name: '客流量',
    type: 'line',
    smooth: true,
    symbol: 'circle',
    symbolSize: 5,
    showSymbol: false,
    lineStyle: {
      normal: {
        color: 'rgba(228, 228, 126, 1)',
        width: 2
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(228, 228, 126, .2)'
        }, {
          offset: 1,
          color: 'rgba(228, 228, 126, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
      }
    },
    itemStyle: {
      normal: {
        color: 'rgba(228, 228, 126, 1)',
        borderColor: 'rgba(228, 228, 126, .1)',
        borderWidth: 12
      }
    },
    data: [
        "1644","3750","5194","5433","4739","3904","3556","3712","3934","3854","3542","3362","3530","3836","3835","3293","2412","1607","1080","652","49","1598","3704","5148","5387",
        "4693","3858","3509","3666","3888","3808","3495","3316","3484","3789","3789","3247","2366","1561","1034","606","3","1552","3658","5102","5341","4647","3812","3463","3620",
        "3842","3762","3449","3270","3438","3743","3743","3201","2320","1515","988","560","1506","3612","5056","5295","4601","3766","3417","3574","3796","3716","3403","3224","3392",
        "3697","3697","3155","2274","1469","942","514","1460","3565","5010","5249","4555","3720","3371","3528","3749",
        
        ]

  }, 
]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function ceshis1() {
        var myChart = echarts.init(document.getElementById('chart2'));

        var ydata = [{
            name: 'CZ3099',
            value: 1667
        },
            {
                name: 'CZ327',
                value: 1613
            },
            {
                name: 'CZ3999',
                value: 1440
            },
            {
                name: 'CA1310',
                value: 1227
            },
            {
                name: 'CZ399',
                value: 1214
            },
            {
                name: 'CA1316',
                value: 1201
            },
            {
                name: 'HU7804',
                value: 1139
            },
            {
                name: 'CZ699',
                value: 1120
            },
            
        
        ];
        var color = ["#8d7fec", "#5085f2", "#e75fc3", "#f87be2", "#f2719a", "#fca4bb", "#f59a8f", "#fdb301"]
        var xdata = ['CZ3099','CZ327','CZ3999','CA1310','CZ399','CA1316','HU7804','CZ699'];


        option = {
            /*backgroundColor: "rgba(255,255,255,1)",*/
            color: color,
            legend: {
                orient: "vartical",
                x: "left",
                top: "center",
                left: "53%",
                bottom: "0%",
                data: xdata,
                itemWidth: 8,
                itemHeight: 8,
                textStyle: {
                    color: '#fff'
                },
                formatter: function(name) {
                    return '' + name
                }
            },
            series: [{
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 2, //最小的扇区角度（0 ~ 360）
                radius: ["20%", "60%"],
                center: ["30%", "45%"],
                avoidLabelOverlap: false,
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#ffffff',
                        borderWidth: 1,
                    },
                },
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: '{text|{b}}\n{c} ({d}%)',
                        rich: {
                            text: {
                                color: "#fff",
                                fontSize: 14,
                                align: 'center',
                                verticalAlign: 'middle',
                                padding: 8
                            },
                            value: {
                                color: "#8693F3",
                                fontSize: 24,
                                align: 'center',
                                verticalAlign: 'middle',
                            },
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: 24,
                        }
                    }
                },
                data: ydata
            }]
        };
        myChart.setOption(option);

        setTimeout(function() {
            myChart.on('mouseover', function(params) {
                if (params.name == ydata[0].name) {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                } else {
                    myChart.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }
            });

            myChart.on('mouseout', function(params) {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            });
            myChart.dispatchAction({ 
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            });
        }, 1000);

        // 使用刚指定的配置项和数据显示图表。
        /*myChart.setOption(option);*/
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function ceshis2() {
        var myChart = echarts.init(document.getElementById('chart3'));

        option = {
            //  backgroundColor: '#00265f',
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'shadow'
                  }
              },
              grid: {
                  left: '0%',
                  top:'10px',
                  right: '0%',
                  bottom: '4%',
                 containLabel: true
              },
              xAxis: [{
                  type: 'category',
                        data: ['E1', 'E2', 'E3', 'EC', 'Ec', 'T1', 'W1','W2','W3','WC'],
                  axisLine: {
                      show: true,
                   lineStyle: {
                          color: "rgba(255,255,255,.1)",
                          width: 1,
                          type: "solid"
                      },
                  },
                  
                  axisTick: {
                      show: false,
                  },
                  axisLabel:  {
                          interval: 0,
                         // rotate:50,
                          show: true,
                          splitNumber: 15,
                          textStyle: {
                               color: "rgba(255,255,255,.6)",
                              fontSize: '12',
                          },
                      },
              }],
              yAxis: [{
                  type: 'value',
                  axisLabel: {
                     //formatter: '{value} %'
                      show:true,
                       textStyle: {
                               color: "rgba(255,255,255,.6)",
                              fontSize: '12',
                          },
                  },
                  axisTick: {
                      show: false,
                  },
                  axisLine: {
                      show: true,
                      lineStyle: {
                          color: "rgba(255,255,255,.1	)",
                          width: 1,
                          type: "solid"
                      },
                  },
                  splitLine: {
                      lineStyle: {
                         color: "rgba(255,255,255,.1)",
                      }
                  }
              }],
              series: [
                  {
                  type: 'bar',
                  data: [65800,67198,57400,212800,4200,231000,74200,58800,56000,221200],
                  barWidth:'35%', //柱子宽度
                 // barGap: 1, //柱子之间间距
                  itemStyle: {
                      normal: {
                          color:'#00FFFF',
                          opacity: 1,
                          barBorderRadius: 5,
                          label: {
                            show: true, // 显示标签
                            position: 'top', // 数据显示在顶部
                            textStyle: {
                                color: 'rgba(255,255,255,.6)', // 文字颜色
                                fontSize: '12' // 文字大小
                            }
                        }
                      }
                  }
              }
                  
              ]
          };

       

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
   

    function ceshis5() {
        var myChart = echarts.init(document.getElementById('chart_1'));


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }


});