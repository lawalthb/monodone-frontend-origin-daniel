import Media from '@/utils/media';
import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';
import LoadboardGridDesktopSideshow from './loadboardGridDesktopSideshow';
import { useRouter } from 'next/router';

export default function LoadboardGridDesktop(props) {
  const router = useRouter();
  const { tablet } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: tablet ? '60%' : '57%',
            gap: '20px',
          }}
        >
          {props.loadboardData
            ?.slice(
              parseInt(props.pageNumber * 6) - 6,
              parseInt(props.pageNumber * 6)
            )
            .map((data, idx) =>
              data.cargoTypeGrid === 'Car Clearing' ? (
                <div
                  onMouseEnter={() => props.showDetail(idx)}
                  key={idx}
                  style={{
                    display: 'flex',
                    border: '1px solid #D1D1D1',
                    borderRadius: '6px',
                    height: '300px',
                    paddingRight: '5px',
                    cursor: 'pointer',
                  }}
                >
                  <Image
                    style={{
                      maxWidth: '100%',
                      width: '287px',
                      margin: '35px 0px',
                    }}
                    src={data.cargotypeImgGrid}
                    width="287"
                    height="184"
                    alt="sofa"
                  />
                  <div
                    style={{
                      padding: '13px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '13px',
                      width: '100%',
                      marginLeft: '-40px',
                      marginTop: '20px',
                    }}
                  >
                    <Form.Label
                      style={{
                        fontSize: tablet ? '10px' : '16px',
                        fontWeight: 600,
                        color: '#303133',
                      }}
                    >
                      {data.cargoTypeGrid}
                    </Form.Label>
                    <div
                      style={{
                        display: 'flex',
                        gap: '10px',
                      }}
                    >
                      <Form.Label
                        style={{
                          fontSize: '14px',
                          fontWeight: 400,
                          color: '#808080',
                          width: '50px',
                        }}
                      >
                        Location:
                      </Form.Label>
                      <Form.Label
                        style={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#151515',
                          marginLeft: '13px',
                        }}
                      >
                        {data.deliveryLocationGrid}
                      </Form.Label>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        gap: '10px',
                      }}
                    >
                      <Form.Label
                        style={{
                          fontSize: '14px',
                          fontWeight: 400,
                          color: '#808080',
                          width: '50px',
                        }}
                      >
                        Date:
                      </Form.Label>
                      <Form.Label
                        style={{
                          fontSize: '14px',
                          fontWeight: 400,
                          color: '#808080',
                          marginLeft: '13px',
                        }}
                      >
                        {data.pickupDate}
                      </Form.Label>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        gap: '13px',
                      }}
                    >
                      <Form.Label
                        style={{
                          fontSize: '11px',
                          fontWeight: 400,
                          color: '#808080',
                        }}
                      >
                        Posted by :
                      </Form.Label>
                      <Image
                        style={{
                          maxWidth: '100%',
                          width: '110px',
                        }}
                        src={data.postedBy}
                        width={tablet ? '110' : '123'}
                        height="15"
                        alt="marker"
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      {tablet ? (
                        <>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            <div
                              style={{
                                width: '60px',
                                height: '40px',
                                borderRadius: '5px',
                                background: 'rgba(208, 255, 152, 0.15)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#00902F',
                                fontSize: '11px',
                                fontWeight: 500,
                              }}
                            >
                              {data.amount}
                            </div>
                            <Form.Label
                              style={{
                                fontSize: '11px',
                                fontWeight: 500,
                                color: '#151515',
                                marginTop: '2px',
                                textAlign: 'center',
                              }}
                            >
                              {data.weight}lbs <br /> * <br /> {data.length}mm
                            </Form.Label>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            <Form.Label
                              style={{
                                fontSize: '11px',
                                fontWeight: 500,
                                color: '#151515',
                                marginTop: '16px',
                              }}
                            >
                              {data.packageType}
                            </Form.Label>
                            <Button
                              style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '12px',
                                height: '40px',
                                width: '137px',
                                background: '#7CC427',
                                border: 'none',
                                marginTop: '5px',
                              }}
                            >
                              <Form.Label
                                style={{
                                  fontSize: '12px',
                                  fontWeight: 400,
                                  color: 'white',
                                  marginTop: '7px',
                                }}
                              >
                                View details
                              </Form.Label>
                              <Image
                                style={{}}
                                src="/img/cargoarrowforward.png"
                                width="6"
                                height="10"
                                alt="arrow"
                              />
                            </Button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            style={{
                              width: '60px',
                              height: '40px',
                              borderRadius: '5px',
                              background: 'rgba(208, 255, 152, 0.15)',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              color: '#00902F',
                              fontSize: '11px',
                              fontWeight: 500,
                            }}
                          >
                            {data.amount}
                          </div>
                          <Form.Label
                            style={{
                              fontSize: '11px',
                              fontWeight: 500,
                              color: '#151515',
                              marginTop: '16px',
                            }}
                          >
                            {data.weight}lbs * {data.length} mm
                          </Form.Label>
                          <Form.Label
                            style={{
                              fontSize: '11px',
                              fontWeight: 500,
                              color: '#151515',
                              marginTop: '16px',
                            }}
                          >
                            {data.packageType}
                          </Form.Label>
                          <Button
                            onClick={() => router.push(`/loadboard/${data.id}`)}
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              gap: '12px',
                              height: '40px',
                              width: '137px',
                              background: '#7CC427',
                              border: 'none',
                              marginTop: '5px',
                            }}
                          >
                            <Form.Label
                              style={{
                                fontSize: '12px',
                                fontWeight: 400,
                                color: 'white',
                                marginTop: '7px',
                              }}
                            >
                              View details
                            </Form.Label>
                            <Image
                              style={{}}
                              src="/img/cargoarrowforward.png"
                              width="6"
                              height="10"
                              alt="arrow"
                            />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  onMouseEnter={() => props.showDetail(idx)}
                  key={idx}
                  style={{
                    display: 'flex',
                    border: '1px solid #D1D1D1',
                    borderRadius: '6px',
                    height: '300px',
                    paddingRight: '5px',
                    cursor: 'pointer',
                  }}
                >
                  <Image
                    style={{
                      maxWidth: '100%',
                      width: tablet ? '200px' : '250px',
                      margin: 0,
                    }}
                    src={data.cargotypeImgGrid}
                    width={tablet ? '200' : '250'}
                    height="300"
                    alt="sofa"
                  />
                  <div
                    style={{
                      padding: '13px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '13px',
                      width: '100%',
                    }}
                  >
                    {tablet ? (
                      <Form.Label
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          color: '#303133',
                        }}
                      >
                        {data.cargoTypeGrid}
                      </Form.Label>
                    ) : (
                      <Form.Label
                        style={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#303133',
                        }}
                      >
                        {data.cargoTypeGrid}
                      </Form.Label>
                    )}
                    <div
                      style={{
                        display: 'flex',
                        gap: '13px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Image
                          style={{
                            marginTop: '-22px',
                          }}
                          src="/img/loadboardfromto.png"
                          width="14"
                          height="69"
                          alt="marker"
                        />
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <Form.Label
                          style={{
                            fontSize: tablet ? '10px' : '13px',
                            fontWeight: 600,
                            color: '#303133',
                          }}
                        >
                          {data.cityTownGrid}
                        </Form.Label>
                        <Form.Label
                          style={{
                            fontSize: '11px',
                            fontWeight: 400,
                            color: '#808080',
                            marginTop: '-6px',
                          }}
                        >
                          {data.takeoffDate}
                        </Form.Label>
                        <Form.Label
                          style={{
                            fontSize: tablet ? '10px' : '13px',
                            fontWeight: 600,
                            color: '#303133',
                          }}
                        >
                          {data.deliveryLocationGrid}
                        </Form.Label>
                        <Form.Label
                          style={{
                            fontSize: '11px',
                            fontWeight: 400,
                            color: '#808080',
                            marginTop: '-6px',
                          }}
                        >
                          {data.pickupDate}
                        </Form.Label>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        gap: '13px',
                      }}
                    >
                      <Form.Label
                        style={{
                          fontSize: '11px',
                          fontWeight: 400,
                          color: '#808080',
                        }}
                      >
                        Posted by :
                      </Form.Label>
                      <Image
                        style={{
                          maxWidth: '100%',
                          width: '110px',
                        }}
                        src={data.postedBy}
                        width={tablet ? '110' : '123'}
                        height="15"
                        alt="marker"
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      {tablet ? (
                        <>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            <div
                              style={{
                                width: '60px',
                                height: '40px',
                                borderRadius: '5px',
                                background: 'rgba(208, 255, 152, 0.15)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#00902F',
                                fontSize: '11px',
                                fontWeight: 500,
                              }}
                            >
                              {data.amount}
                            </div>
                            <Form.Label
                              style={{
                                fontSize: '11px',
                                fontWeight: 500,
                                color: '#151515',
                                marginTop: '2px',
                                textAlign: 'center',
                              }}
                            >
                              {data.weight}lbs <br /> * <br /> {data.length}mm
                            </Form.Label>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            <Form.Label
                              style={{
                                fontSize: '11px',
                                fontWeight: 500,
                                color: '#151515',
                                marginTop: '16px',
                              }}
                            >
                              {data.packageType}
                            </Form.Label>
                            <Button
                              onClick={() =>
                                router.push(`/loadboard/${data.id}`)
                              }
                              style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '12px',
                                height: '40px',
                                width: '137px',
                                background: '#7CC427',
                                border: 'none',
                                marginTop: '5px',
                              }}
                            >
                              <Form.Label
                                style={{
                                  fontSize: '12px',
                                  fontWeight: 400,
                                  color: 'white',
                                  marginTop: '7px',
                                }}
                              >
                                View details
                              </Form.Label>
                              <Image
                                style={{}}
                                src="/img/cargoarrowforward.png"
                                width="6"
                                height="10"
                                alt="arrow"
                              />
                            </Button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            style={{
                              width: '60px',
                              height: '40px',
                              borderRadius: '5px',
                              background: 'rgba(208, 255, 152, 0.15)',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              color: '#00902F',
                              fontSize: '11px',
                              fontWeight: 500,
                            }}
                          >
                            {data.amount}
                          </div>
                          <Form.Label
                            style={{
                              fontSize: '11px',
                              fontWeight: 500,
                              color: '#151515',
                              marginTop: '16px',
                            }}
                          >
                            {data.weight} * {data.length}mm
                          </Form.Label>
                          <Form.Label
                            style={{
                              fontSize: '11px',
                              fontWeight: 500,
                              color: '#151515',
                              marginTop: '16px',
                            }}
                          >
                            {data.packageType}
                          </Form.Label>
                          <Button
                            onClick={() => router.push(`/loadboard/${data.id}`)}
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              gap: '12px',
                              height: '40px',
                              width: '137px',
                              background: '#7CC427',
                              border: 'none',
                              marginTop: '5px',
                            }}
                          >
                            <Form.Label
                              style={{
                                fontSize: '12px',
                                fontWeight: 400,
                                color: 'white',
                                marginTop: '7px',
                              }}
                            >
                              View details
                            </Form.Label>
                            <Image
                              style={{}}
                              src="/img/cargoarrowforward.png"
                              width="6"
                              height="10"
                              alt="arrow"
                            />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '38%',
            border: '1px solid #D1D1D1',
            borderRadius: '6px',
            height: '1600px',
          }}
        >
          <LoadboardGridDesktopSideshow specificData={props.specificData} />
        </div>
      </div>
    </>
  );
}
