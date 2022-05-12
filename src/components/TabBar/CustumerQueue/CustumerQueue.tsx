import * as React from 'react';

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import CustumerQueueStyle from './CustumerQueue.styles';
import { ITableData, ICustomerQueue } from './CustumerQueue.types';

export default function CustumerQueue({ tabelData }: ICustomerQueue) {
  return (
    <CustumerQueueStyle>
      <div className="buttonsView">
        <button className="button" defaultChecked>
          <VideocamOutlinedIcon className="buttonLogo" />
          Live (1)
        </button>
        <button className="button">
          <AccessTimeOutlinedIcon className="buttonLogo" />
          Scheduled (0)
        </button>
        <button className="button">
          <PersonAddAltOutlinedIcon className="buttonLogo" />
          Assigned (0)
        </button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Customer name</TableCell>
              <TableCell align="right">Apple ID</TableCell>
              <TableCell align="right">location</TableCell>
              <TableCell align="right">IP Status</TableCell>
              <TableCell align="right">Waiting Since</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tabelData.map((el: ITableData) => (
              <TableRow key={el.customerName} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {el.customerName}
                </TableCell>
                <TableCell align="right">{el.appleId}</TableCell>
                <TableCell align="right">{el.location}</TableCell>
                <TableCell align="right">{el.ipStatus}</TableCell>
                <TableCell align="right">{el.waiting}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <button className="initiateButton">
        <AddIcCallOutlinedIcon className="buttonLogo" />
        Initiate call
      </button>
    </CustumerQueueStyle>
  );
}
