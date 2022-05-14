import * as React from 'react';

import { Button, Table } from 'react-bootstrap';

import { AddIcCallOutlinedIcon } from '@/assets/svg/call-icon';
import { PersonAddAltOutlinedIcon } from '@/assets/svg/person-icon';
import { AccessTimeOutlinedIcon } from '@/assets/svg/time-Icon';
import { VideocamOutlinedIcon } from '@/assets/svg/video-icon';

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
          <VideocamOutlinedIcon isActive={value === '0'} className="buttonLogo" />
          Live (1)
        </Button>
        <Button className={`button ${value === '1' && 'active'}`} onClick={() => handleClick('1')}>
          <AccessTimeOutlinedIcon isActive={value === '1'} className="buttonLogo" />
          Scheduled (0)
        </Button>
        <Button className={`button ${value === '2' && 'active'}`} onClick={() => handleClick('2')}>
          <PersonAddAltOutlinedIcon isActive={value === '2'} className="buttonLogo" />
          Assigned (0)
        </Button>
      </div>

      <Table className="tabelMain">
        <thead style={{ border: '1px solid #DADADA' }}>
          <tr className="thead">
            <td className="tableHead">Customer name</td>
            <td className="tableHead">Apple ID</td>
            <td className="tableHead">location</td>
            <td className="tableHead">IP Status</td>
            <td className="tableHead">Waiting Since</td>
          </tr>
        </thead>
        <tbody className="tbody">
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
