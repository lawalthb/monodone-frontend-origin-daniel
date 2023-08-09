import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import EditAgentForm from './editAgentForm';
import AdminFullinfo from './adminFullinfo';

function PaginationRounded() {
  return (
    <Stack
      style={{
        float: 'right',
        fontSize: '12px',
      }}
      spacing={2}
    >
      <Pagination count={10} shape="rounded" />
    </Stack>
  );
}

const fullInformation = {
  agentNo: '',
  dateAdded: '',
  name: '',
  address: '',
  phoneNo: '',
  weight: '',
  dimensions: '',
  store: ['/img/storeimg.png', '/img/storeimg2.png'],
  regDoc: '/img/regdoc.png',
  guarantorName1: 'Ufere Goodnews',
  guarantorAddress1: 'Greenland Estate, Lekki - Lagos',
  guarantorPhoneNo1: '998 772 26 66',
  guarantorName2: 'Ufere Goodnews',
  guarantorAddress2: 'Greenland Estate, Lekki - Lagos',
  guarantorPhoneNo2: '998 772 26 66',
};

export default function AdminpanelContentAgent(props) {
  const ref = useRef();
  const [agentNos, setAgentNos] = useState([]);
  const [weights, setWeights] = useState([]);
  const [agentNo, setAgentNo] = useState('');
  const [agentWeight, setAgentWeight] = useState('');
  const [agentNoEdit, setAgentNoEdit] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [weightEdit, setWeightEdit] = useState('');
  const [editAgentForm, setEditAgentForm] = useState(false);
  const [toThirty, setToThirty] = useState(false);
  const [moreThirty, setMoreThirty] = useState(false);
  const [fullInfo, setFullInfo] = useState(fullInformation);
  const [adminFullinfo, setAdminFullinfo] = useState(false);
  const [dates, setDates] = useState([]);
  const [newDate, setNewDate] = useState('');
  const [pageNumbers, setPageNumbers] = useState([]);
  const [pageNumber, setPageNumber] = useState();
  const [activePagenumber, setActivePagenumber] = useState(1);

  console.log('page number', pageNumber);

  const handleFullInfo = () => {
    const filteredData = props.adminAgentData.filter(
      (data) => data.agentNo === agentNoEdit
    )[0];
    setFullInfo((prevState) => {
      return {
        ...prevState,
        agentNo: filteredData?.agentNo,
        dateAdded: filteredData?.dateAdded,
        name: filteredData?.businessName,
        address: filteredData?.address,
        phoneNo: filteredData?.phoneNumber,
        weight: filteredData?.weight,
        dimensions: filteredData?.dimensions,
      };
    });
  };

  const handleSaveEdited = () => {
    const filteredData = props.adminAgentData.filter(
      (data) => data.agentNo === agentNoEdit
    )[0];
    const index = props.adminAgentData.findIndex(
      (data) => data.agentNo === agentNoEdit
    );

    filteredData.businessName = firstName + ' ' + lastName;
    filteredData.address = address;
    filteredData.phoneNumber = phoneNo;
    if (toThirty) {
      filteredData.weight = 'to 30 kg';
    }
    if (moreThirty) {
      filteredData.weight = 'more 30 kg';
    }

    props.adminAgentData.splice(index, 1, filteredData);
    console.log('saved');
  };

  const handleToThirty = () => {
    setToThirty(true);
    setMoreThirty(false);
  };
  const handleMoreThirty = () => {
    setMoreThirty(true);
    setToThirty(false);
  };

  const onFirstnameChange = (event) => {
    setFirstName(event.target.value);
  };
  const onLastnameChange = (event) => {
    setLastName(event.target.value);
  };
  const onAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const onPhoneNoChange = (event) => {
    setPhoneNo(event.target.value);
  };

  const handleAdminFullinfo = () => {
    props.setBackdrop(false);
    props.setIsAgentRequest(false);
    props.setIsAgentManagement(false);
    props.setAgentList(true);
    setAdminFullinfo(false);
  };
  const handleEditOption = () => {
    setAdminFullinfo(false);
    props.setAgentList(true);
    props.setIsAgentRequest(false);
    props.setIsAgentManagement(false);
  };
  useEffect(() => {
    function handlePagination() {
      const size = props.adminAgentData.length;
      const noOfPages = Math.floor(size / 10);
      const pageNumbers = [];
      for (let i = 1; i <= noOfPages; i++) {
        pageNumbers.push(i);
      }
      setPageNumbers(pageNumbers);
      // console.log("page numbers", pageNumbers)
    }
    function moderatedAgentNos() {
      const newData = [];
      const agentNumbers = props.adminAgentData.map((dt) => dt.agentNo);
      const agentNosSet = new Set(agentNumbers);
      for (let i of agentNosSet) {
        newData.push(i);
      }
      setAgentNos(newData);
    }

    function moderatedWeight() {
      const newData = [];
      const agentWeights = props.adminAgentData.map((dt) => dt.weight);
      const agentWeightSet = new Set(agentWeights);
      for (let item of agentWeightSet) {
        if (item.startsWith('t')) {
          newData.push(item.split('to ')[1].replace('kg', 'lbs'));
        }
        if (item.startsWith('m')) {
          newData.push(item.split('more ')[1].replace('kg', 'lbs'));
        }
      }
      setWeights(newData);
    }

    function moderatedDates() {
      const newData = [];
      const agentDates = props.adminAgentData.map((dt) => dt.dateAdded);
      const agentDatesSet = new Set(agentDates);
      for (let item of agentDatesSet) {
        newData.push(item);
      }
      setDates(newData);
    }
    handlePagination();
    moderatedDates();
    moderatedAgentNos();
    moderatedWeight();
  }, [props]);

  useEffect(() => {
    if (props.isAgentRequest) {
      props.setIsAgentManagement(false);
    } else {
      props.setIsAgentManagement(true);
    }
  }, [props]);

  useEffect(() => {
    setPageNumber(1);
  }, [setPageNumber]);

  return (
    <>
      {props.isAgentRequest && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Form.Label
              style={{
                color: 'black',
                fontWeight: '600',
                fontSize: '18px',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
              }}
            >
              Agents
            </Form.Label>
            <input
              style={{
                background: '#FFFFFF',
                padding: '9px 16px 10px',
                borderRadius: '5px',
                border: '1px solid #E7E7E7',
              }}
              type="text"
              placeholder="search"
            />
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '30px',
            }}
          >
            <Form.Label
              onClick={props.handleIsAgentManagement}
              style={
                props.isAgentManagement
                  ? {
                      fontSize: '13px',
                      color: '#00902F',
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      borderBottom: '2px solid #00902F',
                    }
                  : {
                      fontSize: '13px',
                      color: '#A6A6A6',
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '500',
                    }
              }
            >
              AGENT MANAGEMENT
            </Form.Label>
            <Form.Label
              onClick={props.handleIsAgentRequest}
              style={
                props.isAgentRequest
                  ? {
                      fontSize: '13px',
                      color: '#00902F',
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      marginLeft: '20px',
                      borderBottom: '2px solid #00902F',
                    }
                  : {
                      fontSize: '13px',
                      color: '#A6A6A6',
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      marginLeft: '20px',
                    }
              }
            >
              AGENT REQUEST
            </Form.Label>
            <Image
              style={{
                width: '18px',
                maxWidth: '100%',
                marginLeft: '10px',
              }}
              src="/img/badgeagent.png"
              width="18"
              height="18"
              alt="badge"
            />
          </div>
          <hr
            style={{
              marginTop: '-10px',
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '4px',
              }}
            >
              <input
                style={{
                  padding: '5px',
                  width: '120px',
                }}
                type="text"
                placeholder="Date"
                ref={ref}
                onFocus={() => (ref.current.type = 'date')}
                onBlur={() => (ref.current.type = 'text')}
              />
            </div>
            <div
              style={{
                display: 'flex',
                gap: '5px',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '12px',
                  marginTop: '10px',
                }}
              >
                Sort by
              </Form.Label>
              <select
                style={{
                  width: '120px',
                  padding: '8px',
                  border: '1px solid #E7E7E7',
                }}
                onChange={(event) => setNewDate(event.target.value)}
              >
                <option value={''}>Date</option>
                {dates.map((date, idx) => (
                  <option key={idx} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '10px',
            }}
          >
            <Form.Label
              style={{
                fontSize: '12px',
                marginTop: '10px',
                color: 'black',
                marginLeft: '10px',
              }}
            >
              Date:
            </Form.Label>
            <Button
              style={{
                display: 'flex',
                background: '#E7E7E7',
                border: 'none',
                height: '19px',
                padding: '7px',
                marginTop: '10px',
                marginLeft: '10px',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '10px',
                  color: '#A6A6A6',
                  marginTop: '-5px',
                }}
              >
                22 July 2022
              </Form.Label>
              <Image
                style={{
                  width: '10px',
                  maxWidth: '100%',
                  marginLeft: '10px',
                  marginTop: '-3px',
                }}
                src="/img/canceladmin.png"
                width="10"
                height="10"
                alt="badge"
              />
            </Button>
            <Button
              style={{
                display: 'flex',
                background: '#E7E7E7',
                border: 'none',
                height: '19px',
                padding: '7px',
                marginTop: '10px',
                marginLeft: '10px',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '10px',
                  color: '#A6A6A6',
                  marginTop: '-5px',
                }}
              >
                22 July 2022
              </Form.Label>
              <Image
                style={{
                  width: '10px',
                  maxWidth: '100%',
                  marginLeft: '10px',
                  marginTop: '-3px',
                }}
                src="/img/canceladmin.png"
                width="10"
                height="10"
                alt="badge"
              />
            </Button>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '20px',
              width: '100%',
              background: '#FFFFFF',
              padding: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                borderBottom: '1px solid #E7E7E7',
                paddingBottom: '8px',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  width: '20%',
                  color: '#A6A6A6',
                }}
              >
                Date added
              </div>
              <div
                style={{
                  fontSize: '11px',
                  width: '40%',
                  color: '#A6A6A6',
                }}
              >
                Name
              </div>
              <div
                style={{
                  fontSize: '11px',
                  width: '20%',
                  color: '#A6A6A6',
                }}
              >
                Status
              </div>
              <div
                style={{
                  fontSize: '11px',
                  width: '20%',
                  color: '#A6A6A6',
                }}
              ></div>
            </div>
            {newDate.length > 0
              ? props.adminAgentData
                  .filter((data) => data.dateAdded === newDate)
                  .slice(pageNumber * 10 - 10, pageNumber * 10)
                  .map((data, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                        marginTop: '20px',
                        borderBottom: '1px solid #E7E7E7',
                        paddingBottom: '8px',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '13px',
                          width: '20%',
                          color: 'black',
                        }}
                      >
                        {data.dateAdded}
                      </div>
                      <div
                        style={{
                          fontSize: '12px',
                          fontWeight: '500',
                          width: '40%',
                          color: 'black',
                        }}
                      >
                        {data.businessName}
                      </div>
                      <div
                        style={{
                          width: '20%',
                        }}
                      >
                        <Form.Label
                          style={
                            data.status === 'Waiting'
                              ? {
                                  fontSize: '12px',
                                  fontWeight: '500',
                                  width: 'fit-content',
                                  color: '#FFC700',
                                  background: 'rgba(255, 199, 0, 0.2)',
                                  borderRadius: '100px',
                                  padding: '2px 10px',
                                }
                              : data.status === 'Confirmed'
                              ? {
                                  fontSize: '12px',
                                  fontWeight: '500',
                                  width: 'fit-content',
                                  color: '#7CC427',
                                  background: 'rgba(124, 196, 39, 0.2)',
                                  borderRadius: '100px',
                                  padding: '2px 10px',
                                }
                              : data.status === 'Rejected'
                              ? {
                                  fontSize: '12px',
                                  fontWeight: '500',
                                  width: 'fit-content',
                                  color: '#F20808',
                                  background: 'rgba(242, 8, 8, 0.2)',
                                  borderRadius: '100px',
                                  padding: '2px 10px',
                                }
                              : {}
                          }
                        >
                          {data.status}
                        </Form.Label>
                      </div>
                      <div
                        style={{
                          fontSize: '13px',
                          width: '20%',
                          color: '#A6A6A6',
                          display: 'flex',
                          justifyContent: 'flex-end',
                        }}
                      >
                        <Image
                          onClick={() => {
                            setAgentNoEdit(data.agentNo);
                            props.setBackdrop(true);
                            setAdminFullinfo(true);
                            handleFullInfo();
                          }}
                          style={{
                            width: '19px',
                            maxWidth: '100%',
                            marginLeft: '10px',
                            marginTop: '-3px',
                            cursor: 'pointer',
                          }}
                          src={data.action[0]}
                          width="19"
                          height="19"
                          alt="badge"
                        />
                      </div>
                    </div>
                  ))
              : props.adminAgentData
                  .slice(pageNumber * 10 - 10, pageNumber * 10)
                  .map((data, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                        marginTop: '20px',
                        borderBottom: '1px solid #E7E7E7',
                        paddingBottom: '8px',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '13px',
                          width: '20%',
                          color: 'black',
                        }}
                      >
                        {data.dateAdded}
                      </div>
                      <div
                        style={{
                          fontSize: '12px',
                          fontWeight: '500',
                          width: '40%',
                          color: 'black',
                        }}
                      >
                        {data.businessName}
                      </div>
                      <div
                        style={{
                          width: '20%',
                        }}
                      >
                        <Form.Label
                          style={
                            data.status === 'Waiting'
                              ? {
                                  fontSize: '12px',
                                  fontWeight: '500',
                                  width: 'fit-content',
                                  color: '#FFC700',
                                  background: 'rgba(255, 199, 0, 0.2)',
                                  borderRadius: '100px',
                                  padding: '2px 10px',
                                }
                              : data.status === 'Confirmed'
                              ? {
                                  fontSize: '12px',
                                  fontWeight: '500',
                                  width: 'fit-content',
                                  color: '#7CC427',
                                  background: 'rgba(124, 196, 39, 0.2)',
                                  borderRadius: '100px',
                                  padding: '2px 10px',
                                }
                              : data.status === 'Rejected'
                              ? {
                                  fontSize: '12px',
                                  fontWeight: '500',
                                  width: 'fit-content',
                                  color: '#F20808',
                                  background: 'rgba(242, 8, 8, 0.2)',
                                  borderRadius: '100px',
                                  padding: '2px 10px',
                                }
                              : {}
                          }
                        >
                          {data.status}
                        </Form.Label>
                      </div>
                      <div
                        style={{
                          fontSize: '13px',
                          width: '20%',
                          color: '#A6A6A6',
                          display: 'flex',
                          justifyContent: 'flex-end',
                        }}
                      >
                        <Image
                          onClick={() => {
                            setAgentNoEdit(data.agentNo);
                            props.setBackdrop(true);
                            setAdminFullinfo(true);
                            handleFullInfo();
                          }}
                          style={{
                            width: '19px',
                            maxWidth: '100%',
                            marginLeft: '10px',
                            marginTop: '-3px',
                            cursor: 'pointer',
                          }}
                          src={data.action[0]}
                          width="19"
                          height="19"
                          alt="badge"
                        />
                      </div>
                    </div>
                  ))}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '20px',
                marginBottom: '10px',
                gap: '20px',
              }}
            >
              <Button
                disabled={activePagenumber === 1}
                style={{
                  color: '#808080',
                  fontSize: '15px',
                  cursor: 'pointer',
                  background: 'transparent',
                  border: 'none',
                  marginTop: '-7px',
                  marginRight: '-7px',
                }}
              >
                {'<'}
              </Button>
              {pageNumbers.map((num, idx) => (
                <Form.Label
                  onClick={() => {
                    setPageNumber(num);
                    setActivePagenumber(idx + 1);
                  }}
                  key={idx}
                  style={
                    activePagenumber === num
                      ? {
                          color: '#7CC427',
                          fontSize: '15px',
                          cursor: 'pointer',
                        }
                      : {
                          color: '#808080',
                          fontSize: '15px',
                          cursor: 'pointer',
                        }
                  }
                >
                  {num}
                </Form.Label>
              ))}
              <Button
                disabled={activePagenumber === 10}
                style={{
                  color: '#808080',
                  fontSize: '15px',
                  cursor: 'pointer',
                  background: 'transparent',
                  border: 'none',
                  marginTop: '-9px',
                  marginLeft: '-7px',
                }}
              >
                {'>'}
              </Button>
            </div>
          </div>
        </>
      )}
      {props.isAgentManagement && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Form.Label
              style={{
                color: 'black',
                fontWeight: '600',
                fontSize: '18px',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
              }}
            >
              Agents
            </Form.Label>
            <input
              style={{
                background: '#FFFFFF',
                padding: '9px 16px 10px',
                borderRadius: '5px',
                border: '1px solid #E7E7E7',
              }}
              type="text"
              placeholder="search"
            />
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '30px',
            }}
          >
            <Form.Label
              onClick={props.handleIsAgentManagement}
              style={
                props.isAgentManagement
                  ? {
                      fontSize: '13px',
                      color: '#00902F',
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      borderBottom: '2px solid #00902F',
                    }
                  : {
                      fontSize: '13px',
                      color: '#A6A6A6',
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '500',
                    }
              }
            >
              AGENT MANAGEMENT
            </Form.Label>
            <Form.Label
              onClick={props.handleIsAgentRequest}
              style={
                props.isAgentRequest
                  ? {
                      fontSize: '13px',
                      color: '#00902F',
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      marginLeft: '20px',
                      borderBottom: '2px solid #00902F',
                    }
                  : {
                      fontSize: '13px',
                      color: '#A6A6A6',
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      marginLeft: '20px',
                    }
              }
            >
              AGENT REQUEST
            </Form.Label>
            <Image
              style={{
                width: '18px',
                maxWidth: '100%',
                marginLeft: '10px',
              }}
              src="/img/badgeagent.png"
              width="18"
              height="18"
              alt="badge"
            />
          </div>
          <hr
            style={{
              marginTop: '-10px',
            }}
          />
        </>
      )}
      {props.isAgentManagement && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '4px',
              }}
            >
              <input
                style={{
                  padding: '5px',
                  width: '120px',
                }}
                type="text"
                placeholder="Date"
                ref={ref}
                onFocus={() => (ref.current.type = 'date')}
                onBlur={() => (ref.current.type = 'text')}
              />
              <select
                style={{
                  width: '86px',
                  padding: '8px',
                  border: '1px solid #E7E7E7',
                }}
              >
                <option>City</option>
              </select>
              <select
                style={{
                  width: '86px',
                  padding: '8px',
                  border: '1px solid #E7E7E7',
                }}
                onChange={(event) => setAgentWeight(event.target.value)}
              >
                <option value="">Weight</option>
                {weights.map((wt, idx) => (
                  <option key={idx} value={wt}>
                    {wt}
                  </option>
                ))}
              </select>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '5px',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '12px',
                  marginTop: '10px',
                }}
              >
                Sort by
              </Form.Label>
              <select
                style={{
                  width: '100px',
                  padding: '8px',
                  border: '1px solid #E7E7E7',
                }}
                onChange={(event) => setAgentNo(event.target.value)}
              >
                <option value={''}>Agent No</option>
                {agentNos.map((no, idx) => (
                  <option key={idx} value={no}>
                    {no}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '10px',
            }}
          >
            <Form.Label
              style={{
                fontSize: '12px',
                marginTop: '10px',
                color: 'black',
              }}
            >
              Weight:
            </Form.Label>
            <Button
              style={{
                display: 'flex',
                background: '#E7E7E7',
                border: 'none',
                height: '19px',
                padding: '7px',
                marginTop: '10px',
                marginLeft: '10px',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '10px',
                  color: '#A6A6A6',
                  marginTop: '-5px',
                }}
              >
                more 30 kg
              </Form.Label>
              <Image
                style={{
                  width: '10px',
                  maxWidth: '100%',
                  marginLeft: '10px',
                  marginTop: '-3px',
                }}
                src="/img/canceladmin.png"
                width="10"
                height="10"
                alt="badge"
              />
            </Button>
            <Form.Label
              style={{
                fontSize: '12px',
                marginTop: '10px',
                color: 'black',
                marginLeft: '10px',
              }}
            >
              Date:
            </Form.Label>
            <Button
              style={{
                display: 'flex',
                background: '#E7E7E7',
                border: 'none',
                height: '19px',
                padding: '7px',
                marginTop: '10px',
                marginLeft: '10px',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '10px',
                  color: '#A6A6A6',
                  marginTop: '-5px',
                }}
              >
                22 July 2022
              </Form.Label>
              <Image
                style={{
                  width: '10px',
                  maxWidth: '100%',
                  marginLeft: '10px',
                  marginTop: '-3px',
                }}
                src="/img/canceladmin.png"
                width="10"
                height="10"
                alt="badge"
              />
            </Button>
            <Button
              style={{
                display: 'flex',
                background: '#E7E7E7',
                border: 'none',
                height: '19px',
                padding: '7px',
                marginTop: '10px',
                marginLeft: '10px',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '10px',
                  color: '#A6A6A6',
                  marginTop: '-5px',
                }}
              >
                22 July 2022
              </Form.Label>
              <Image
                style={{
                  width: '10px',
                  maxWidth: '100%',
                  marginLeft: '10px',
                  marginTop: '-3px',
                }}
                src="/img/canceladmin.png"
                width="10"
                height="10"
                alt="badge"
              />
            </Button>
          </div>
          <table
            style={
              props.backdrop
                ? {
                    // width: '900px',
                    // maxWidth: '100%',
                    width: '100%',
                    border: '1px solid #E7E7E7',
                    marginTop: '10px',
                    background: '#E7E7E7',
                    flexDirection: 'column',
                  }
                : {
                    // width: '900px',
                    // maxWidth: '100%',
                    width: '100%',
                    border: '1px solid #E7E7E7',
                    marginTop: '10px',
                    background: 'white',
                    flexDirection: 'column',
                  }
            }
          >
            <tbody
              style={
                props.backdrop
                  ? {
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '20px',
                      background: 'white',
                      width: '100%',
                      //   width: '990px',
                      //   maxWidth: '100%',
                      //   background: '#E7E7E7',
                    }
                  : {
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '20px',
                      background: 'white',
                      //   width: '990px',
                      width: '100%',
                      //   maxWidth: '100%',
                    }
              }
            >
              <tr
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '7px',
                  borderBottom: '1px solid #E7E7E7',
                }}
              >
                <th
                  style={{
                    width: '10%',
                    fontSize: '12px',
                    marginLeft: '-5px',
                  }}
                >
                  Agent No
                </th>
                <th
                  style={{
                    width: '10%',
                    fontSize: '12px',
                    marginLeft: '-30px',
                  }}
                >
                  Date added
                </th>
                <th
                  style={{
                    width: '13%',
                    marginLeft: '-20px',
                    fontSize: '12px',
                  }}
                >
                  Business name
                </th>
                <th
                  style={{
                    width: '18%',
                    fontSize: '12px',
                    marginLeft: '-40px',
                  }}
                >
                  Addess
                </th>
                <th
                  style={{
                    width: '10%',
                    fontSize: '12px',
                    marginLeft: '15px',
                  }}
                >
                  {' '}
                  Phone number
                </th>
                <th
                  style={{
                    width: '10%',
                    fontSize: '12px',
                  }}
                >
                  Weight
                </th>
                <th
                  style={{
                    width: '10%',
                    fontSize: '12px',
                    marginLeft: '-5px',
                  }}
                >
                  Dimension (LxWxH)
                </th>
                <th
                  style={{
                    width: '10%',
                  }}
                ></th>
              </tr>
              {agentNo.length > 0
                ? props.adminAgentData
                    .filter((dt) => dt.agentNo === agentNo)
                    .slice(0, 10)
                    .map((data, index) => (
                      <tr
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          width: '100%',
                          padding: '7px',
                          borderBottom: '1px solid #E7E7E7',
                        }}
                        key={index}
                      >
                        <td
                          style={{
                            width: '5%',
                            fontSize: '12px',
                            fontWeight: '500',
                            color: 'black',
                            marginLeft: '-5px',
                          }}
                        >
                          {data.agentNo}
                        </td>
                        <td
                          style={{
                            width: '5%',
                            fontSize: '12px',
                            fontWeight: '500',
                            color: 'black',
                            marginLeft: '-25px',
                          }}
                        >
                          {data.dateAdded}
                        </td>
                        <td
                          style={{
                            width: '5%',
                            fontSize: '12px',
                            fontWeight: '500',
                            color: 'black',
                            marginLeft: '-5px',
                          }}
                        >
                          {data.businessName}
                        </td>
                        <td
                          style={{
                            fontSize: '12px',
                            fontWeight: '500',
                            color: 'black',
                            marginLeft: '-5px',
                          }}
                        >
                          {data.address}
                        </td>
                        <td
                          style={{
                            fontSize: '12px',
                            fontWeight: '500',
                            color: 'black',
                            marginLeft: '-30px',
                          }}
                        >
                          {data.phoneNumber}
                        </td>
                        <td
                          style={{
                            fontSize: '12px',
                            fontWeight: '500',
                            color: 'black',
                            marginLeft: '-6px',
                          }}
                        >
                          {data.weight}
                        </td>
                        <td
                          style={{
                            fontSize: '12px',
                            fontWeight: '500',
                            color: 'black',
                            marginLeft: '-5px',
                          }}
                        >
                          {data.dimensions}
                        </td>
                        <td>
                          <Image
                            onClick={() => {
                              setAgentNoEdit(data.agentNo);
                              props.setBackdrop(true);
                              setAdminFullinfo(true);
                              handleFullInfo();
                            }}
                            style={{
                              width: '19px',
                              maxWidth: '100%',
                              marginLeft: '10px',
                              marginTop: '-3px',
                              cursor: 'pointer',
                            }}
                            src={data.action[0]}
                            width="19"
                            height="19"
                            alt="badge"
                          />
                          <Image
                            onClick={() => {
                              setAgentNoEdit(data.agentNo);
                              setFirstName(data.businessName.split(' ')[0]);
                              setLastName(data.businessName.split(' ')[1]);
                              setAddress(data.address);
                              setPhoneNo(data.phoneNumber);
                              setWeightEdit(data.weight);
                              props.setBackdrop(true);
                              setEditAgentForm(true);
                            }}
                            style={{
                              width: '19px',
                              maxWidth: '100%',
                              marginLeft: '10px',
                              marginTop: '-3px',
                              cursor: 'pointer',
                            }}
                            src={data.action[1]}
                            width="19"
                            height="19"
                            alt="badge"
                          />
                          <Image
                            style={{
                              width: '19px',
                              maxWidth: '100%',
                              marginLeft: '10px',
                              marginTop: '-3px',
                              cursor: 'pointer',
                            }}
                            src={data.action[2]}
                            width="19"
                            height="19"
                            alt="badge"
                          />
                        </td>
                      </tr>
                    ))
                : agentWeight.length > 0
                ? props.adminAgentData
                    .filter(
                      (dt) =>
                        dt.weight.split(' ')[1] === agentWeight.split(' ')[0]
                    )
                    .slice(0, 10)
                    .map((data, idx) => (
                      <tr
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          width: '100%',
                          padding: '7px',
                          borderBottom: '1px solid #E7E7E7',
                        }}
                        key={idx}
                      >
                        <td
                          style={{
                            width: '5%',
                            fontSize: '12px',
                            fontWeight: '500',
                            color: 'black',
                            marginLeft: '-5px',
                          }}
                        >
                          {data.agentNo}
                        </td>
                        <td
                          style={{
                            width: '5%',
                            fontSize: '12px',
                            fontWeight: '500',
                            color: 'black',
                            marginLeft: '-25px',
                          }}
                        >
                          {data.dateAdded}
                        </td>
                        <td
                          style={{
                            width: '5%',
                            fontSize: '12px',
                            fontWeight: '500',
                            color: 'black',
                            marginLeft: '-5px',
                          }}
                        >
                          {data.businessName}
                        </td>
                        <td
                          style={{
                            fontSize: '12px',
                            fontWeight: '500',
                            color: 'black',
                            marginLeft: '-5px',
                          }}
                        >
                          {data.address}
                        </td>
                        <td
                          style={{
                            fontSize: '12px',
                            fontWeight: '500',
                            color: 'black',
                            marginLeft: '-30px',
                          }}
                        >
                          {data.phoneNumber}
                        </td>
                        <td
                          style={{
                            fontSize: '12px',
                            fontWeight: '500',
                            color: 'black',
                            marginLeft: '-6px',
                          }}
                        >
                          {data.weight}
                        </td>
                        <td
                          style={{
                            fontSize: '12px',
                            fontWeight: '500',
                            color: 'black',
                            marginLeft: '-5px',
                          }}
                        >
                          {data.dimensions}
                        </td>
                        <td>
                          <Image
                            onClick={() => {
                              setAgentNoEdit(data.agentNo);
                              props.setBackdrop(true);
                              setAdminFullinfo(true);
                              handleFullInfo();
                            }}
                            style={{
                              width: '19px',
                              maxWidth: '100%',
                              marginLeft: '10px',
                              marginTop: '-3px',
                              cursor: 'pointer',
                            }}
                            src={data.action[0]}
                            width="19"
                            height="19"
                            alt="badge"
                          />
                          <Image
                            onClick={() => {
                              setAgentNoEdit(data.agentNo);
                              setFirstName(data.businessName.split(' ')[0]);
                              setLastName(data.businessName.split(' ')[1]);
                              setAddress(data.address);
                              setPhoneNo(data.phoneNumber);
                              setWeightEdit(data.weight);
                              props.setBackdrop(true);
                              setEditAgentForm(true);
                            }}
                            style={{
                              width: '19px',
                              maxWidth: '100%',
                              marginLeft: '10px',
                              marginTop: '-3px',
                              cursor: 'pointer',
                            }}
                            src={data.action[1]}
                            width="19"
                            height="19"
                            alt="badge"
                          />
                          <Image
                            style={{
                              width: '19px',
                              maxWidth: '100%',
                              marginLeft: '10px',
                              marginTop: '-3px',
                              cursor: 'pointer',
                            }}
                            src={data.action[2]}
                            width="19"
                            height="19"
                            alt="badge"
                          />
                        </td>
                      </tr>
                    ))
                : props.adminAgentData.slice(0, 10).map((data, index) => (
                    <tr
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '7px',
                        borderBottom: '1px solid #E7E7E7',
                      }}
                      key={index}
                    >
                      <td
                        style={{
                          width: '5%',
                          fontSize: '12px',
                          fontWeight: '500',
                          color: 'black',
                          marginLeft: '-5px',
                        }}
                      >
                        {data.agentNo}
                      </td>
                      <td
                        style={{
                          width: '5%',
                          fontSize: '12px',
                          fontWeight: '500',
                          color: 'black',
                          marginLeft: '-25px',
                        }}
                      >
                        {data.dateAdded}
                      </td>
                      <td
                        style={{
                          width: '5%',
                          fontSize: '12px',
                          fontWeight: '500',
                          color: 'black',
                          marginLeft: '-5px',
                        }}
                      >
                        {data.businessName}
                      </td>
                      <td
                        style={{
                          fontSize: '12px',
                          fontWeight: '500',
                          color: 'black',
                          marginLeft: '-5px',
                        }}
                      >
                        {data.address}
                      </td>
                      <td
                        style={{
                          fontSize: '12px',
                          fontWeight: '500',
                          color: 'black',
                          marginLeft: '-30px',
                        }}
                      >
                        {data.phoneNumber}
                      </td>
                      <td
                        style={{
                          fontSize: '12px',
                          fontWeight: '500',
                          color: 'black',
                          marginLeft: '-6px',
                        }}
                      >
                        {data.weight}
                      </td>
                      <td
                        style={{
                          fontSize: '12px',
                          fontWeight: '500',
                          color: 'black',
                          marginLeft: '-5px',
                        }}
                      >
                        {data.dimensions}
                      </td>
                      <td>
                        <Image
                          onClick={() => {
                            setAgentNoEdit(data.agentNo);
                            props.setBackdrop(true);
                            setAdminFullinfo(true);
                            handleFullInfo();
                          }}
                          style={{
                            width: '19px',
                            maxWidth: '100%',
                            marginLeft: '10px',
                            marginTop: '-3px',
                            cursor: 'pointer',
                          }}
                          src={data.action[0]}
                          width="19"
                          height="19"
                          alt="badge"
                        />
                        <Image
                          onClick={() => {
                            setAgentNoEdit(data.agentNo);
                            setFirstName(data.businessName.split(' ')[0]);
                            setLastName(data.businessName.split(' ')[1]);
                            setAddress(data.address);
                            setPhoneNo(data.phoneNumber);
                            setWeightEdit(data.weight);
                            props.setBackdrop(true);
                            setEditAgentForm(true);
                          }}
                          style={{
                            width: '19px',
                            maxWidth: '100%',
                            marginLeft: '10px',
                            marginTop: '-3px',
                            cursor: 'pointer',
                          }}
                          src={data.action[1]}
                          width="19"
                          height="19"
                          alt="badge"
                        />
                        <Image
                          style={{
                            width: '19px',
                            maxWidth: '100%',
                            marginLeft: '10px',
                            marginTop: '-3px',
                            cursor: 'pointer',
                          }}
                          src={data.action[2]}
                          width="19"
                          height="19"
                          alt="badge"
                        />
                      </td>
                    </tr>
                  ))}
            </tbody>
            <PaginationRounded />
          </table>
        </>
      )}
      <EditAgentForm
        style={{
          marginTop: '5%',
          marginLeft: '5%',
        }}
        editAgentForm={editAgentForm}
        setEditAgentForm={setEditAgentForm}
        setBackdrop={props.setBackdrop}
        agentNoEdit={agentNoEdit}
        firstName={firstName}
        lastName={lastName}
        address={address}
        phoneNo={phoneNo}
        weightEdit={weightEdit}
        onFirstnameChange={onFirstnameChange}
        onLastnameChange={onLastnameChange}
        onAddressChange={onAddressChange}
        onPhoneNoChange={onPhoneNoChange}
        toThirty={toThirty}
        handleToThirty={handleToThirty}
        moreThirty={moreThirty}
        handleMoreThirty={handleMoreThirty}
        setToThirty={setToThirty}
        setMoreThirty={setMoreThirty}
        handleSaveEdited={handleSaveEdited}
        setIsAgentRequest={props.setIsAgentRequest}
        setIsAgentManagement={props.setIsAgentManagement}
        setAgentList={props.setAgentList}
      />
      <AdminFullinfo
        style={{
          marginTop: '2%',
          marginLeft: '5%',
        }}
        adminFullinfo={adminFullinfo}
        setAdminFullinfo={setAdminFullinfo}
        // setBackdrop={props.setBackdrop}
        agentNo={fullInfo.agentNo}
        dateAdded={fullInfo.dateAdded}
        name={fullInfo.name}
        address={fullInfo.address}
        phoneNo={fullInfo.phoneNo}
        weight={fullInfo.weight}
        dimensions={fullInfo.dimensions}
        guarantorName1={fullInfo.guarantorName1}
        guarantorAddress1={fullInfo.guarantorAddress1}
        guarantorPhone1={fullInfo.guarantorPhoneNo1}
        guarantorName2={fullInfo.guarantorName2}
        guarantorAddress2={fullInfo.guarantorAddress2}
        guarantorPhone2={fullInfo.guarantorPhoneNo2}
        setIsAgentRequest={props.setIsAgentRequest}
        setIsAgentManagement={props.setIsAgentManagement}
        setAgentList={props.setAgentList}
        caption={
          props.isAgentRequest ? "Agent's Request Details" : 'Full Information'
        }
        okOption={props.isAgentRequest ? 'Accept' : 'Ok'}
        editOption={props.isAgentRequest ? 'Reject' : 'Edit'}
        isAgentRequest={props.isAgentRequest}
        compName="Agent"
        handleAdminFullinfo={handleAdminFullinfo}
        isAgentManagement={props.isAgentManagement}
        handleEditOption={handleEditOption}
      />
    </>
  );
}
