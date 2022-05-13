import * as React from 'react';

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import Table from '@mui/material/Table';
import { tableCellClasses } from '@mui/material/TableCell';
import { Button } from 'react-bootstrap';

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
        <Button className={`button ${value === '0' && 'active'}`} onClick={() => handleClick('0')}>
          <VideocamOutlinedIcon className="buttonLogo" />
          Live (1)
        </Button>
        <Button className={`button ${value === '1' && 'active'}`} onClick={() => handleClick('1')}>
          <AccessTimeOutlinedIcon className="buttonLogo" />
          Scheduled (0)
        </Button>
        <Button className={`button ${value === '2' && 'active'}`} onClick={() => handleClick('2')}>
          <PersonAddAltOutlinedIcon className="buttonLogo" />
          Assigned (0)
        </Button>
      </div>

      <Table
        sx={{
          minWidth: 650,
          [`& .${tableCellClasses.root}`]: {
            borderBottom: 'none',
          },
        }}
        aria-label="simple table"
        className="tabelMain"
      >
        <thead style={{ border: '1px solid #DADADA' }}>
          <tr className="thead">
            <td className="tableHead">Customer name</td>
            <td className="tableHead">Apple ID</td>
            <td className="tableHead">location</td>
            <td className="tableHead">IP Status</td>
            <td className="tableHead">Waiting Since</td>
          </tr>
        </thead>
        <tbody>
          {tabelData.map((el: ITableData) => (
            <tr key={el.customerName}>
              <td className="tableBody">{el.customerName}</td>
              <td className="tableBody">{el.appleId}</td>
              <td className="tableBody">{el.location}</td>
              <td className="tableBody">
                <div className="displayIp">
                  <span className="SafeColor">{el.ipStatus.split('|')[0]} </span>&nbsp;|&nbsp;
                  {el.ipStatus.split('|')[1]}
                </div>
              </td>
              <td className="tableBody">{el.waiting}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button className="initiateButton">
        <AddIcCallOutlinedIcon className="buttonLogo" />
        Initiate call
      </Button>
    </CustumerQueueStyle>
  );
}
