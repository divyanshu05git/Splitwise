"use client"

import ReactECharts from "echarts-for-react";
import { EChartsOption } from "echarts";

export default function ExpenseChart() {

    const options:EChartsOption={
        title:{
            text:"Expenses",
            left:"center",
            top:20,
            textStyle:{
                fontSize:16,
                color:"#333"
            }
        },

        tooltip:{
            trigger:"axis",
        },

        xAxis:{
            type:"category",
            data:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
            axisTick:{
                show:false
            },
            axisLine:{
                show:false
            },
            axisLabel:{
                margin:15,
                fontWeight:500,
                color:"#94a3b8"
            }

        },

        yAxis:{
            type:'value',
            min:100,
            minInterval:100,
            axisLabel:{
                show:false,
            },
            splitLine:{
                show:false,
            },
        },

        series:[{
            type:"bar",
            data:[200,300,150,400,250,350,300,450,500,400,350,600],
            barWidth:"60%",
            itemStyle:{
                color: "#e5e7eb",
                borderRadius:[10,10,10,10],
            },
            emphasis:{
                itemStyle:{
                    color: "#2563eb"
                }
            }
        }]
    }

    return (
        <ReactECharts option={options} style={{height:"100%",width:"60%"}} /> 
    )

}