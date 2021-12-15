import React from 'react';
import { Line } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [
    { year: 'Total Exp', value: 15 },
    { year: 'HTML5', value: 14 },
    { year: 'CSS', value: 14 },
    { year: 'Bootstrap', value: 5.5 },
    { year: 'jQuery - UI', value: 1.0 },
    { year: 'React js - UI', value: 0.6 }
  ];

  const config = {
    data,
    width: 550,
    height: 300,
    autoFit: false,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  let chart;

  

  return (
    <div>
     
      <Line {...config} onReady={(chartInstance) => (chart = chartInstance)} />
    </div>
  );
};
export default Page;