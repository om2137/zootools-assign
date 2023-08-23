"use client"
import React from 'react'
// import { useClient } from 'next/client'

import { 
    Chart as ChartJS, 
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
 } from 'chart.js'
 import { Bar } from 'react-chartjs-2'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Chart() {
    const labels = [];
    const datas = [110, 200, 300, 600, 400, 700, 1200, 800, 900, 1000, 1500, 800, 700, 900, 600, 1000, 1200, 1100, 1600, 1800, 1100, 1400, 1500, 1700, 1900, 1500, 1600, 1800, 1200, 2000, 2400, 2200, 1900, 2400, 3000];
    for (let i = 0; i < 35; i++) {
        labels.push(i);
    }
    
    
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Participants',
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
        scales: {
            x: {
                
               display: false
                // border:{dash: [1, 4]},
                // ticks: {
                //     display: false,
                // },
                // grid:{
                //     drawTicks: false,
                // }
            },
            y: { 
                // display: false,
                
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
                
              }
        }
        
    }
    
  return (
    <div>
        
        <div className='w-min-screen h-96'>
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


