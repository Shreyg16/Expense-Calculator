import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const ExpenseChart = ({ income, expense }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: ['Income', 'Expense'],
        datasets: [
          {
            label: 'Amount',
            data: [income, expense],
            backgroundColor: ['green', 'red'],
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chart.destroy(); 
    };
  }, [income, expense]);

  return <canvas ref={chartRef} />;
};

export default ExpenseChart;
