"use client"

import ReactECharts from "echarts-for-react";
import { EChartsOption  } from "echarts";

export default function ExpenseChart() {

    const options:EChartsOption={
        // title:{
        //     text:"Expenses",
        //     left:"center",
        //     top:20,
        //     textStyle:{
        //         fontSize:16,
        //         color:"#333"
        //     }
        // },

        tooltip:{
            trigger:"axis",
            formatter: 'Spent: ${c}',
            axisPointer: {
            type: 'line',
            axis: 'y',
            label: {
                show: true,
                formatter: (params: { value: number | string }) => {
                return `$${params.value}`;
                },
                fontWeight: 500,
                color: "#94a3b8",
                fontSize: 12,
                backgroundColor: "#f1f5f9",
                padding: [4, 4, 0, 4],
            },
            lineStyle: {
                type: 'dashed',
                color: "#2563eb",
                width: 1,
            },
            },
        },

        grid: {
            top: "10%",
            left: "0%",
            right: "0%",
            bottom: "3%",
            containLabel: true
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
            name:"Expense",
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

        <ReactECharts option={options} style={{height:"80%",width:"100%"}} /> 
    )

}