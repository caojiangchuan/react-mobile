import React ,{Component}from 'react';

// 引入柱状图
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'



export  default  class tubiao extends Component{
    constructor(props) {
        super(props);
        this.state={
            message:'我是父组件传来的消息'
        }

    }

        componentDidMount()
        {
            var data = []

            for (var i = 0; i <= 360; i++) {
                var t = i / 180 * Math.PI
                var r = Math.sin(2 * t) * Math.cos(2 * t)
                data.push([r, i])
            }

            var myChart = echarts.init(document.getElementById('main'))
            myChart.setOption({
                title: {
                    text: '极坐标双数值轴'
                },
                legend: {
                    data: ['line']
                },
                polar: {
                    center: ['50%', '54%']
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                angleAxis: {
                    type: 'value',
                    startAngle: 0
                },
                radiusAxis: {
                    min: 0
                },
                series: [{
                    coordinateSystem: 'polar',
                    name: 'line',
                    type: 'line',
                    showSymbol: false,
                    data: data
                }],
                animationDuration: 2000
            })
        }


    render() {
        return(
            <div>

                <div id="main" style={{ width: 400, height: 400 }}></div>

            </div>
        )
    }

}
