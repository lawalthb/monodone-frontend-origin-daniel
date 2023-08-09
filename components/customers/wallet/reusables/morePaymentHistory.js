import { Form } from "react-bootstrap";
import PaymentHistory from "./paymentHistory";
import SentRequestsContent from "./sentRequestsContent";

export default function MorePaymentHistory(props) {
    return (
        <>
            <div style={{
                marginTop: '10px'
            }}>
                <Form.Label style={{
                    fontSize: '12px',
                    color: "black",
                    fontWeight: '400',
                    marginTop: '30px'
                }}>
                    19 July, 2022
                </Form.Label>
                <PaymentHistory
                    paymentType="Cash out"
                    status="Agent office #34"
                    amount="-#1350.00"
                />
                <PaymentHistory
                    paymentType="Cash out"
                    status="Rejection"
                    amount="#1350.00"
                />
                <PaymentHistory
                    paymentType="Cash out"
                    status="Approved"
                    amount="#1350.00"
                />
                <PaymentHistory
                    paymentType="Cash top up"
                    status="Pending"
                    amount="#100.00"
                />
                <SentRequestsContent
                    imgSrc="/img/driver2.png"
                    name="Stephania"
                    amount="#150.00"
                />
                <SentRequestsContent
                    imgSrc="/img/walletprof.png"
                    name="Adanna"
                    amount="#150.00"
                />
                <SentRequestsContent
                    imgSrc="/img/driver2.png"
                    name="Stephania"
                    amount="#150.00"
                />
                <SentRequestsContent
                    imgSrc="/img/walletprof.png"
                    name="Adanna"
                    amount="#150.00"
                />
                <Form.Label style={{
                    fontSize: '12px',
                    color: "black",
                    fontWeight: '400',
                    marginTop: '30px'
                }}>
                    17 July, 2022
                </Form.Label>
                <PaymentHistory
                    paymentType="Cash out"
                    status="Agent office #34"
                    amount="-#1350.00"
                />
                <PaymentHistory
                    paymentType="Cash out"
                    status="Rejection"
                    amount="#1350.00"
                />
                <PaymentHistory
                    paymentType="Cash out"
                    status="Approved"
                    amount="#1350.00"
                />
                <PaymentHistory
                    paymentType="Cash top up"
                    status="Pending"
                    amount="#100.00"
                />
                <Form.Label style={{
                    fontSize: '12px',
                    color: "black",
                    fontWeight: '400',
                    marginTop: '30px'
                }}>
                    16 July, 2022
                </Form.Label>
                <PaymentHistory
                    paymentType="Cash top up"
                    status="Pending"
                    amount="#100.00"
                />
                <PaymentHistory
                    paymentType="Cash top up"
                    status="Pending"
                    amount="#100.00"
                />
            </div>
        </>
    )
}