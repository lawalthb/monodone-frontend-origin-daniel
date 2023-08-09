import Head from "next/head";
import Image from "next/image";
import ViewQuotationTopNav from "@/components/customers/layout/ViewQuotationTopNav";
import React, { useState, useRef, useEffect } from "react";
import Media from "@/utils/media";
import { Button, Table } from "react-bootstrap";
import AssignQuotationSuccessModal from "@/components/customers/AssignQuotationSuccessModal";

// STYLES = index.scss

export default function ViewQuotation() {
  const [isLoading, setIsLoading] = useState(false)
  const [assignDriver, setAssignDriver] = useState(false)
  const [action, setAction] = useState('')
  const { mobile, tabletAndDesktop} = Media();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>View Quotation</title>
        <meta name="Description" content="Drivers Services." />
        <link rel="manifest" href="manifest.webmanifest" />
      </Head>
      <>
        {mobile && (
          <>
            <ViewQuotationTopNav />
            <div className="view-quotation-page-mobile">
              <div className="quotation-info-mobile">
                <div className="address-img-mobile">
                  <Image
                    className="address-map-mobile"
                    src="/img/map-quotation.png"
                    width="600"
                    height="385"
                    alt="quotation-map"
                  />
                </div>
                <Table borderless className="quotation-details-mobile">
                  <tbody>
                    <tr>
                      <td>Package Name</td>
                      <td>Car</td>
                    </tr>
                    <tr>
                      <td>Delivery from</td>
                      <td>Lagos</td>
                    </tr>
                    <tr>
                      <td>Delivery to</td>
                      <td>Onisha</td>
                    </tr>
                    <tr>
                      <td>Date for delivery</td>
                      <td>May 25, 2023</td>
                    </tr>
                    <tr>
                      <td>Time for delivery</td>
                      <td>10:30am</td>
                    </tr>
                    <tr>
                      <td>Price for delivery</td>
                      <td>N 7829</td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>34KG</td>
                    </tr>
                    <tr>
                      <td>Number of Package</td>
                      <td>30</td>
                    </tr>                
                  </tbody>
                </Table>
              </div>
              <div className="assign-driver-mobile">
                <h5 className="assign-header-mobile">Quotations</h5>
                <Table className="assign-details-mobile">
                  <tbody>
                    <tr>
                      <td>Alex Ekwueme</td>
                      <td>2 trucks</td>
                      <td>N 7829/Truck</td>
                      <td className="button-mobile">
                        <Button 
                          onClick={() => setAssignDriver(true)}
                        >Assign</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Alex Ekwueme</td>
                      <td>2 trucks</td>
                      <td>N 7829/Truck</td>
                      <td className="button-mobile">
                        <Button 
                          onClick={() => setAssignDriver(true)}
                        >Assign</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Alex Ekwueme</td>
                      <td>2 trucks</td>
                      <td>N 7829/Truck</td>
                      <td className="button-mobile">
                        <Button 
                          onClick={() => setAssignDriver(true)}
                        >Assign</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Alex Ekwueme</td>
                      <td>2 trucks</td>
                      <td>N 7829/Truck</td>
                      <td className="button-mobile">
                        <Button 
                          onClick={() => setAssignDriver(true)}
                        >Assign</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </>
        )}
        {tabletAndDesktop && (
          <>
            <ViewQuotationTopNav />
            <div className="view-quotation-page">
              <div className="quotation-info">
                <div className="address-img">
                  <Image
                    className="address-map"
                    src="/img/map-quotation.png"
                    width="600"
                    height="385"
                    alt="quotation-map"
                  />
                </div>
                <Table borderless className="quotation-details">
                  <tbody>
                    <tr>
                      <td>Package Name</td>
                      <td>Car</td>
                    </tr>
                    <tr>
                      <td>Delivery from</td>
                      <td>Lagos</td>
                    </tr>
                    <tr>
                      <td>Delivery to</td>
                      <td>Onisha</td>
                    </tr>
                    <tr>
                      <td>Date for delivery</td>
                      <td>May 25, 2023</td>
                    </tr>
                    <tr>
                      <td>Time for delivery</td>
                      <td>10:30am</td>
                    </tr>
                    <tr>
                      <td>Price for delivery</td>
                      <td>N 7829</td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>34KG</td>
                    </tr>
                    <tr>
                      <td>Number of Package</td>
                      <td>30</td>
                    </tr>                
                  </tbody>
                </Table>
              </div>
              <div className="assign-driver">
                <h5 className="assign-header">Quotations</h5>
                <Table className="assign-details">
                  <tbody>
                    <tr>
                      <td>Alex Ekwueme</td>
                      <td>2 trucks</td>
                      <td>N 7829/Truck</td>
                      <td className="button">
                        <Button 
                          onClick={() => setAssignDriver(true)}
                        >Assign</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Alex Ekwueme</td>
                      <td>2 trucks</td>
                      <td>N 7829/Truck</td>
                      <td className="button">
                        <Button 
                          onClick={() => setAssignDriver(true)}
                        >Assign</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Alex Ekwueme</td>
                      <td>2 trucks</td>
                      <td>N 7829/Truck</td>
                      <td className="button">
                        <Button 
                          onClick={() => setAssignDriver(true)}
                        >Assign</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Alex Ekwueme</td>
                      <td>2 trucks</td>
                      <td>N 7829/Truck</td>
                      <td className="button">
                        <Button 
                          onClick={() => setAssignDriver(true)}
                        >Assign</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </>
        )}
        <AssignQuotationSuccessModal 
          assignDriver={assignDriver}
          setAssignDriver={setAssignDriver}
          action={action}
        />
      </>
    </>
  )
}
