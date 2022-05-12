import * as React from 'react';

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import CustumerQueueStyle from './CustumerQueue.styles';
import { ITableData, ICustomerQueue } from './CustumerQueue.types';

export default function CustumerQueue({ tabelData }: ICustomerQueue) {
  const [value, setValue] = React.useState<string>('0');
  const handleClick = (val: string) => {
    setValue(val);
  };

  return (
    <CustumerQueueStyle>
      <div className="buttonsView">
        <button className={`button ${value === '0' && 'active'}`} onClick={() => handleClick('0')}>
          <VideocamOutlinedIcon className="buttonLogo" />
          Live (1)
        </button>
        <button className={`button ${value === '1' && 'active'}`} onClick={() => handleClick('1')}>
          <AccessTimeOutlinedIcon className="buttonLogo" />
          Scheduled (0)
        </button>
        <button className={`button ${value === '2' && 'active'}`} onClick={() => handleClick('2')}>
          <PersonAddAltOutlinedIcon className="buttonLogo" />
          Assigned (0)
        </button>
      </div>

      <Table
        sx={{
          minWidth: 650,
          [`& .${tableCellClasses.root}`]: {
            borderBottom: 'none',
          },
        }}
        aria-label="simple table"
      >
        <TableHead
          style={{ border: '1px solid #DADADA' }}
          sx={{
            [`& .MuiTableCell-head`]: {
              padding: '4px 18px',
            },
          }}
        >
          <TableRow>
            <TableCell className="tableHead">Customer name</TableCell>
            <TableCell className="tableHead">Apple ID</TableCell>
            <TableCell className="tableHead">location</TableCell>
            <TableCell className="tableHead">IP Status</TableCell>
            <TableCell className="tableHead">Waiting Since</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tabelData.map((el: ITableData) => (
            <TableRow key={el.customerName} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell className="tableBody">{el.customerName}</TableCell>
              <TableCell className="tableBody">{el.appleId}</TableCell>
              <TableCell className="tableBody">{el.location}</TableCell>

              <TableCell className="tableBody">
                <div className="displayIp">
                  <span className="SafeColor">{el.ipStatus.split('|')[0]} </span>&nbsp;|&nbsp;
                  {el.ipStatus.split('|')[1]}
                </div>
              </TableCell>
              <TableCell className="tableBody">{el.waiting}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <button className="initiateButton">
        <AddIcCallOutlinedIcon className="buttonLogo" />
        Initiate call
      </button>
    </CustumerQueueStyle>
  );
}
