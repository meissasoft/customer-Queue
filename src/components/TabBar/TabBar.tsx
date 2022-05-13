import * as React from 'react';

import { Tab, Tabs } from 'react-bootstrap';

// import TabContext from '@mui/lab/TabContext';
// import TabPanel from '@mui/lab/TabPanel';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';

import CallHistory from './CallHistory';
import CustumerQueue from './CustumerQueue';
import { TabBarStyle } from './TabBar.styles';

export default function TabBar() {
  const tabelArray = [
    {
      customerName: 'Abhilash Madhukumar',
      appleId: 8526705017_1,
      location: 'India',
      ipStatus: 'Safe | proxy/VPN not detected India',
      waiting: '00:04',
    },
  ];

  return (
    <TabBarStyle>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="queue" title="Custumer Queue">
          <CustumerQueue tabelData={tabelArray} />
        </Tab>
        <Tab eventKey="callhistory" title="Call History">
          <CallHistory />
        </Tab>
      </Tabs>
    </TabBarStyle>
  );
}
