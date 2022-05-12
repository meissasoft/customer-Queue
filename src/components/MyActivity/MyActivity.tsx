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
      <div className="borderRadus">
        <div className="activityHeader">
          <div>
            <span className="activityHeading">My Activity</span>
          </div>
          <div>
            <span className="activityDropdownHeader">Show</span>
            <select name="activityFilter" id="activityFilter" className="activityDropdown">
              <option value="today">Today</option>
            </select>
          </div>
        </div>
      </div>
      <div className="circularBarMainView">
        <PieChart width={300} height={300}>
          <Pie data={data} cx={150} cy={150} innerRadius={80} outerRadius={130} fill="#8884d8" dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            {/* <Label value={`${totalCalls}<br/>Total Calls`} position="center" /> */}
            <Label
              content={(props) => {
                const {
                  viewBox: { cx, cy },
                } = props;
                const positioningProps = {
                  x: cx,
                  y: cy,
                  textAnchor: 'middle',
                  verticalAnchor: 'middle',
                };
                const presentationProps = {
                  fill: 'black',
                  fontWeight: 1000,
                  fontSize: 30,
                };
                const positioningProps1 = {
                  x: cx,
                  y: cy + 20,
                  textAnchor: 'middle',
                  verticalAnchor: 'middle',
                };
                const presentationProps1 = {
                  fill: '#6E6E6F',
                  fontWeight: 700,
                  fontSize: 12,
                };
                return (
                  <>
                    <text {...positioningProps} {...presentationProps}>
                      {totalCalls}
                    </text>
                    <text {...positioningProps1} {...presentationProps1}>
                      Total Calls
                    </text>
                  </>
                );
              }}
            />
          </Pie>
        </PieChart>
      </div>

      <div className="activityResultList">
        <div className="singleItem">
          <div className="singleItem_flex">
            <div className="dot dotgreen"></div> <span className="singleItemHeading">Approved</span>
          </div>
          <span className="singleItemDayHeading singleItemDayGreen">{approved}</span>
        </div>
        <div className="singleItem">
          <div className="singleItem_flex">
            <div className="dot dotred"> </div> <span className="singleItemHeading">Rejected</span>
          </div>
          <span className="singleItemDayHeading singleItemDayRed">{rejected}</span>
        </div>
        <div className="singleItem singleItemBorderBottom">
          <div className="singleItem_flex">
            <div className="dot dotyellow"> </div> <span className="singleItemHeading">Issue</span>
          </div>
          <span className="singleItemDayHeading singleItemDayGreen">{issue}</span>
        </div>
      </div>
    </Activity>
  );
});

export default MyActivity;
