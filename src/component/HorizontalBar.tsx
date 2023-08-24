"use client"
import React from 'react'
import { useState } from 'react';
import ChartDataLabels from "chartjs-plugin-datalabels";
import { 
    Chart as ChartJS, 
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
 } from 'chart.js'
 import { Bar } from 'react-chartjs-2'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);

interface types {
    datas: number[],
    labels: string[],
}

function HorizontalBar({datas, labels}:types, ) {
    
    const axis:'y' | 'x' = 'y';
    const dataAlign:'start' | 'center' | 'end' | 'right' | 'left' | 'bottom' | 'top' | undefined = 'end';
    const Anch:'start' | 'center' | 'end' | 'right' | 'left' | 'bottom' | 'top' | undefined = 'start';
    
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Participants',
                data: datas,
                backgroundColor: "rgba(254, 213, 0, 0.2)",
                borderWidth: 0,
                borderSkipped: false,
                borderRadius: 8,
                barThickness: 46,
            }
        ]
    }
    const options = {
        indexAxis:axis,
        scales: {
            x: {
                beginAtZero: true,
                max: 100000,
                display: false
            },
            y: { 
                
                ticks: {
                    font: {
                        size: 28,
                        
                    },
                    color: '#000000',
                    mirror: true,
                },
                border:{
                    display: false,
                },
                grid:{
                    display: false,
                }
            }
        },
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            },
            datalabels: {
                // display: false,
                color: "black",
                align: dataAlign,
                anchor: Anch,
                offset: 500,
                font: {
                    align: 'right',
                    size: 30
                },
                padding: {
                    left: 100,
                }
                
              }
        }
        
    }
    
  return (
    <div>
        
        <div className='w-full h-96'>
            <Bar 
                data={data}
                options={options}
            >
            </Bar>    
        </div>    
    </div>
  )
}
export default HorizontalBar;


