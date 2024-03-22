import React from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
];

function Performance() {
  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Legend />
      <Tooltip />
    </PieChart>
  );
}

export default Performance;

// import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { PieChart, Pie, Tooltip } from 'recharts';
// import axios from "axios";

// function Performance() {
//   const [data, setData] = useState([]);

//   useEffect(() => {

//     axios.get("/api/data").then((response) => {
//       setData(response.data);
//     });
//   }, []);

//   return (
//     <PieChart width={400} height={400}>
//       <Pie
//         dataKey="value"
//         isAnimationActive={false}
//         data={data}
//         cx={200}
//         cy={200}
//         outerRadius={80}
//         fill="#8884d8"
//         label
//       />
//       <Tooltip />
//     </PieChart>
//   );
// }
// export default Performance