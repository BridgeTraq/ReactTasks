import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, BarElement, LinearScale, Tooltip, Title } from 'chart.js'
import { barChartData } from './chatData'

ChartJS.register(CategoryScale, BarElement, LinearScale, Tooltip, Title)


export default function Charts() {
    const options = {
        responsive: true,
        scales: {
            x: {
                border: {
                    display: false
                },
                grid: {
                    display: false

                },
                beginAtZero: true,
                max: 30,
                ticks: {

                },
            },
            y: {
                border: {
                    display: false,
                    dash: [5, 5]
                },
                padding: 10,
                beginAtZero: true,
                max: 30,
                ticks: {
                    stepSize: 15,
                },
            }
        }
    }
    return (
        <div className='w-full h-full z-10 mt-4'>
            <Bar options={options} data={barChartData} />
        </div>
    )
}

