import * as React from 'react';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import { ComunityLogo } from '@/assets/svg/comunity-logo';
import { HistoryLogo } from '@/assets/svg/history-logo';
import { COLORS } from '@/constants/colors';

import CallHistory from './CallHistory';
import CustumerQueue from './CustumerQueue';
import TabBarStyle from './TabBar.styles';

export default function TabBar() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const tabelArray = [
    {
      customerName: 'Abhilash Madhukumar',
      appleId: 8526705017_1,
      location: 'India',
      ipStatus: 'safe | proxy/VPN not detected India',
      waiting: '00:04',
    },
  ];

  return (
    <TabBarStyle>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: `${COLORS.BLUE_250}` }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                style={{ fontWeight: 'bold' }}
                label={
                  <div>
                    {' '}
                    <ComunityLogo /> &nbsp; Customer Queue{' '}
                  </div>
                }
                value="1"
              />
              <Tab
                style={{ fontWeight: 'bold' }}
                label={
                  <div>
                    {' '}
                    <HistoryLogo /> &nbsp; Call history{' '}
                  </div>
                }
                value="2"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <CustumerQueue tabelData={tabelArray} />
          </TabPanel>
          <TabPanel value="2">
            <CallHistory />
          </TabPanel>
        </TabContext>
      </Box>
    </TabBarStyle>
  );
}
