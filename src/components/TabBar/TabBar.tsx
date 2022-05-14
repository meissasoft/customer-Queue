import * as React from 'react';

import { Tab, Tabs } from 'react-bootstrap';

import { ComunityLogo } from '@/assets/svg/comunity-logo';
import { HistoryLogo } from '@/assets/svg/history-logo';

import CallHistory from './CallHistory';
import CustumerQueue from './CustumerQueue';
import { TabBarStyle } from './TabBar.styles';

export default function TabBar() {
  const [value, setValue] = React.useState('CustumerQueue');
  const tabelArray = [
    {
      customerName: 'Abhilash Madhukumar',
      appleId: 8526705017_1,
      location: 'India',
      ipStatus: 'Safe | proxy/VPN not detected India',
      waiting: '00:04',
    },
  ];
  const handleChange = (selectedTab: any) => {
    setValue(selectedTab);
  };

  return (
    <TabBarStyle>
      <Tabs
        onSelect={handleChange}
        defaultActiveKey="CustumerQueue"
        id="uncontrolled-tab-example"
        className="mb-3 pt-1"
      >
        <Tab
          eventKey="CustumerQueue"
          title={
            <div style={{ display: 'flex' }}>
              {' '}
              <ComunityLogo isActive={value === 'CustumerQueue'} /> &nbsp; Customer Queue{' '}
            </div>
          }
        >
          <CustumerQueue tabelData={tabelArray} />
        </Tab>
        <Tab
          eventKey="callhistory"
          title={
            <div style={{ display: 'flex' }}>
              <HistoryLogo isActive={value === 'callhistory'} /> &nbsp; Call history
            </div>
          }
        >
          <CallHistory />
        </Tab>
      </Tabs>
    </TabBarStyle>
  );
}
