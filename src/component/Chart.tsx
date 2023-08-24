"use client"
import React from 'react'
import { 
    Chart as ChartJS, 
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
 } from 'chart.js'
 import { Bar } from 'react-chartjs-2'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, );

interface Props {
    datas: number[];
}

function Chart( {datas}: Props) {
    const labels = [];
    const x:"center" | "left" | "right" | undefined = "center";
    const y:"center" | "top" | "bottom" | undefined = "bottom";
    const titleA:"center" | "left" | "right" | undefined = "center"; 
    const bodyA:"center" | "left" | "right" | undefined = "center";
    for (let i = 0; i < 35; i++) {
        labels.push(i);
    }
    
    const titleTooltip = (tooltipItem:any) => {
        return '3000 signups';
    }
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'signups',
                data: datas,
                backgroundColor: "#fed500",
                borderWidth: 0,
                borderSkipped: false,
                borderRadius: 10,
                barThickness: 22,
            }
        ]
    }
    const options = {
        layout: {
            padding: {
                top: 100
            }
        },
        scales: {
            x: {
               display: false
            },
            y: { 
                border:{
                    dash: [1, 4],
                    display: false,
                },
                ticks: {
                    display: false,
                },
                grid:{
                    drawTicks: false,
                }
            }
       },
       maintainAspectRatio: false,
       plugins: {
            
            legend: {
                display: false
            },
            datalabels: {
                display: false,
            },
            tooltip: {
                backgroundColor: '#ffffff',
                titleColor: 'rgba(0, 0, 0, 1)',
                titleAlign: titleA,
                bodyColor: 'rgba(144, 144, 144, 1)',
                bodyAlign: bodyA,
                borderColor: '#d6d6d6',
                titleFont: {
                    size: 20,
                    weight: 'bold',
                    label: 'Signups',
                },
                bodyFont: {
                    size: 16,
                    weight: 'bold',
                    color: '#909090',
                },
                padding: 18,
                xAlign: x,
                yAlign: y,
                caretSize: 12,
                borderWidth: 1,
                displayColors: false,
                shadowOffsetX: 5,
                shadowOffsetY: 5,
                shadowBlur: 5,
                shadowColor: '#fc0000',
                callbacks: {
                    title: titleTooltip,
                    label: function(tooltipItem:any) {
                        return 'August 1';
                    },
                },

            },
            
        }
        
    }
    
  return (
    <div>
        
        <div className='w-min-screen h-[28rem]'>
            <Bar 
                data={data}
                options={options}
            >
            </Bar>    
        </div>    
    </div>
  )
}
export default Chart;


