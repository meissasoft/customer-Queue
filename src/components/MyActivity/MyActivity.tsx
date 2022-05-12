import React, { FC, memo } from 'react';

import { PieChart, Pie, Cell, Label } from 'recharts';

import Activity from './MyActivity.styles';
import { HeaderTypes } from './MyActivity.types';

const MyActivity: FC<HeaderTypes> = memo(({ approved, rejected, issue, totalCalls }) => {
  const data = [
    { name: 'Approved', value: 5 },
    { name: 'Rejected', value: 3 },
    { name: 'Issues', value: 3 },
  ];
  const COLORS = ['#4DAE68', '#F9C717', '#F24747'];

  return (
    <Activity>
      <div className="activityHeader">
        <div>
          <h5 className="activityHeading">My Activity</h5>
        </div>
        <div>
          <span className="activityDropdownHeader">Show</span>
          <select name="activityFilter" id="activityFilter" className="activityDropdown">
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="week">1 Week Ago</option>
            <option value="month">1 Month Ago</option>
          </select>
        </div>
      </div>
      <div className="circularBarMainView">
        <PieChart width={300} height={300}>
          <Pie data={data} cx={150} cy={150} innerRadius={80} outerRadius={130} fill="#8884d8" dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            <Label value={`${totalCalls} Total Calls`} position="center" />
          </Pie>
        </PieChart>
      </div>

      <div className="activityResultList">
        <div className="singleItem">
          <div className="singleItem_flex">
            <div className="dot dotgreen"></div> <span className="singleItemHeading">Approved</span>
          </div>
          <h5 className="singleItemDayHeading singleItemDayGreen">{approved}</h5>
        </div>
        <div className="singleItem">
          <div className="singleItem_flex">
            <div className="dot dotred"> </div> <span className="singleItemHeading">Rejected</span>
          </div>
          <h5 className="singleItemDayHeading singleItemDayRed">{rejected}</h5>
        </div>
        <div className="singleItem singleItemBorderBottom">
          <div className="singleItem_flex">
            <div className="dot dotyellow"> </div> <span className="singleItemHeading">Issue</span>
          </div>
          <h5 className="singleItemDayHeading singleItemDayGreen">{issue}</h5>
        </div>
      </div>
    </Activity>
  );
});

export default MyActivity;
