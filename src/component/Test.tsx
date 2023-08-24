import React from 'react'
// import { useClient } from 'next/client'
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

function Test(){
    // const data = {
    //     labels: ['1', '2', '3', '4', '5', '6'],
    //     datasets: [
    //         {label: 'My First Dataset',
    //         data: [65, 59, 80, 81, 56, 55, 40],
    //         backgroundColor: 'rgb(255, 0, 55)',
    //         }
    //     ]
    // }
    // const options = {
    //     scales: {
    //         y:{
    //             position: 'top',
    //             border:{
    //                 display: false,
    //             },
    //             ticks:{
    //                 display: false,

    //             },
    //             grid:{
    //                 display: false,
    //             }
    //         },x:{
    //             ticks:{
    //                 display: false,
    //             },
    //             grid:{
    //                 display: false,
    //             }
    //         }
    //     },
    //     Plugin:{
    //         datalabels: {
    //             display: true,
    //             color: "white",
    //             align: "bottom",
    //             padding: {
    //               right: 0
    //             },
    //             labels: {
    //               padding: { top: 1 },
    //               title: {
    //                 font: {
    //                   weight: "bold",
    //                   size: 2
    //                 }
    //               }
    //               // value: {
    //               //   color: "green"
    //               // }
    //             }
    //             // formatter: function (value) {
    //             //   return "\n" + value;
    //             // }
    //           }
    //     }
    // }
    const data = {
        labels: [
          ["Sprint", "11"],
          ["Sprint", "12"],
          ["Sprint", "13"],
          ["Sprint", "14"],
          ["Sprint 15", "(Latest)"]
        ],
        datasets: [
          {
            categoryPercentage: 1,
            label: "Sprint Velocity",
            data: [65, 59, 80, 81, 56],
            backgroundColor: [
              "rgba(99, 99, 234, 1)",
              "rgba(99, 99, 234, 0.7)",
              "rgba(99, 99, 234, 0.4)",
              "rgba(99, 99, 234, 0.1)",
              "rgba(236, 91, 86, 1)"
            ],
            borderWidth: 0
          }
        ]
      };
      
      const options = {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: false
            }
          },
          y: {
            display: false,
            grid: {
              display: false,
              drawBorder: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false,
            text: "Sprint Velocity",
            padding: {
              bottom: 20
            },
            weight: "bold",
            color: "#00325c",
            font: {
              size: 13
            },
            align: "center"
          },
          datalabels: {
            display: true,
            color: "black",
            align: "top",
            anchor: "end",
            padding: {
              right: 0
            },
            labels: {
              padding: { top: 1 },
              title: {
                font: {
                  weight: "bold",
                  size: 24
                }
              }
            }
          }
        }
      };
      
    return(
        <div>
            <Bar
                data={data}
                // options={options}
            >

            </Bar>
        </div>
    )
}

export default Test