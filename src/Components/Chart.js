import React, { useState, useEffect } from 'react';
import { Pie, Line } from 'react-chartjs-2';

const Chart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'REVENUE GENERATED',
        data: [],
        backgroundColor: [
          'pink',
          '#17a2b8',
          '#ffc107',
          'rgb(87, 185, 96)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          "grey",
         
        ],
        borderColor: [
          'red',
          'indigo',
          "grey",
          "black",
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
         
        ],
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/carts');
        const data = await response.json();

        const labels = data.carts.map((cart) => `User-${cart.userId}`);
        const discountedTotals = data.carts.map((cart) => cart.discountedTotal);

        setChartData((prevData) => ({
          ...prevData,
          labels: labels,
          datasets: [
            {
              ...prevData.datasets[0],
              data: discountedTotals,
            },
          ],
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>

      <Line data={chartData} />
      <hr style={{color:"black"}} />
      <div className='pie'>
      <Pie data={chartData} />
      </div>
    </>
  );
};

export default Chart;
