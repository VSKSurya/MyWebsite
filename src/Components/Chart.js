import React from 'react';
import { Line } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [
    { year: '2000', value: 3 },
    { year: '2004-2008 : TCS', value: 4.5 },
    { year: '2008 - 2021 : Schoolnet India Limited', value: 13.5 }
  ];

  const config = {
    data,
    width: 650,
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