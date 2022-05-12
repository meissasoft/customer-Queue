import * as React from 'react';

import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';

import { ComunityLogo } from '@/assets/svg/comunity-logo';
import { HistoryLogo } from '@/assets/svg/history-logo';
import { COLORS } from '@/constants/colors';

import CallHistory from './CallHistory';
import CustumerQueue from './CustumerQueue';
import { TabBarStyle, StyledLine, StyledTab } from './TabBar.styles';

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
      ipStatus: 'Safe | proxy/VPN not detected India',
      waiting: '00:04',
    },
  ];

  return (
    <TabBarStyle>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                sx: {
                  background: `-webkit-linear-gradient(${COLORS.BLUE_250}, ${COLORS.BLUE_260});`,
                },
              }}
            >
              <StyledTab
                label={
                  <div style={{ display: 'flex' }}>
                    {' '}
                    <ComunityLogo isActive={value === '1'} /> &nbsp; Customer Queue{' '}
                  </div>
                }
                value="1"
                isActive={value === '1'}
              />
              <StyledTab
                label={
                  <div style={{ display: 'flex' }}>
                    <HistoryLogo isActive={value === '2'} /> &nbsp; Call history
                  </div>
                }
                value="2"
                isActive={value === '2'}
              />
            </Tabs>
          </Box>
          <StyledLine />
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
