import Image from 'next/image';
import { Form } from 'react-bootstrap';
import PackagesCashoutContent from './packagesCashoutContent';

const historyData = [
  {
    caption1: '# 20 4002 8668 0998',
    caption2: 'Lego Technic Tractor John Deer',
    amount: '',
    from: 'Abuja Name City',
    to: 'Kaduna Name City',
    dateFrom: '14 Jul 2022',
    dateTo: '16 Jul 2022',
    status: 'Issued',
    imgSrc: '/img/ellipse-dot.png',
  },
  {
    caption1: 'ID 2490 9090 897 8080',
    caption2: '26 July 2022 | 11:59 PM',
    amount: '₦ 1 350.00',
    from: '',
    to: '',
    dateFrom: '',
    dateTo: '',
    status: 'Pednding',
  },
  {
    caption1: '# 20 4002 8668 0998',
    caption2: 'Lego Technic Tractor John Deer',
    amount: '',
    from: 'Abuja Name City',
    to: 'Kaduna Name City',
    dateFrom: '14 Jul 2022',
    dateTo: '16 Jul 2022',
    status: 'Issued',
    imgSrc: '/img/ellipse-dot.png',
  },
  {
    caption1: 'ID 2490 9090 897 8080',
    caption2: '26 July 2022 | 11:59 PM',
    amount: '₦ 1 350.00',
    from: '',
    to: '',
    dateFrom: '',
    dateTo: '',
    status: 'Pednding',
  },
];

export default function AgentOrdersHistory(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Image
          onClick={() => props.setHistory(false)}
          src="/img/agent-arrow-left.png"
          width="20"
          height="20"
          alt="left-arrow"
        />
        <Form.Label
          style={{
            color: 'rgba(21, 21, 21, 1)',
            fontSize: '16px',
            fontWeight: '500',
          }}
        >
          History
        </Form.Label>
        <div></div>
      </div>
      <hr
        style={{
          marginTop: '-0.09px',
        }}
      />
      {historyData.map((history, idx) => (
        <PackagesCashoutContent
          key={`${history.caption1}-${idx}`}
          caption1={history.caption1}
          caption2={history.caption2}
          amount={history.amount}
          from={history.from}
          to={history.to}
          dateFrom={history.dateFrom}
          dateTo={history.dateTo}
          status={history.status}
          imgSrc={history.imgSrc}
          noPoint={!history.from ? true : false}
        />
      ))}
    </>
  );
}
