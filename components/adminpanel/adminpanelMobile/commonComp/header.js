import Image from "next/image";
import { useState } from "react";
import { Form } from "react-bootstrap";

export default function MobileHeader(props) {
    const [isSearch, setIsSearch] = useState(false)

    return (
        <div style={{
            display: 'flex',
            justifyContent: "space-between",
            marginTop: '10px',
            background: "transparent",
            padding: "8px"
        }}>
            <Form.Label style={props.isShippingCompanies ? {
                color: "black",
                fontWeight: "500",
                fontSize: "12px",
                marginTop: '22px'
            } : {
                color: "black",
                fontWeight: "500",
                fontSize: "14px",
                marginTop: '22px'
            }}>
                {props.caption}
            </Form.Label>
            <div style={{
                display: "flex",
                gap: '10px',
                marginTop: '20px'
            }}>
                <div style={isSearch ? props.isSpecializedShipment ? {
                    position: "absolute",
                    top: "5.8rem",
                    right: "22px"
                } : {
                    position: "absolute",
                    top: "5.8rem",
                    right: "30px"
                } : {
                    display: 'none'
                }}>
                    <Image
                        onClick={() => setIsSearch(false)}
                        style={{
                            width: "14px",
                            maxWidth: "100%",
                        }}
                        src="/img/close.png"
                        width="14"
                        height="14"
                        alt="badge"
                    />
                </div>
                <Image
                    style={{
                        width: "25px",
                        maxWidth: "100%",
                    }}
                    src="/img/adminbadge.png"
                    width="25"
                    height="22"
                    alt="badge"
                />
                {isSearch && (
                    <input style={(props.isDriverManagers
                        || props.isShippingCompanies
                        || props.isTransportCompanies
                        || props.isSpecializedShipment
                        || props.isWebsite
                        || props.isPriceSettings) ? {
                        height: "30px",
                        padding: '5px',
                        border: "1px solid #A6A6A6",
                        borderRadius: '5px',
                        width: "150px"
                    } : {
                        height: "30px",
                        padding: '5px',
                        border: "1px solid #A6A6A6",
                        borderRadius: '5px',
                    }} type="text" placeholder="search" />
                )}
                <Image
                    onClick={() => setIsSearch(true)}
                    style={isSearch ? {
                        display: 'none'
                    } : {
                        width: "20px",
                        maxWidth: "100%",
                    }}
                    src="/img/searchadmin.png"
                    width="20"
                    height="20"
                    alt="badge"
                />
            </div>
        </div>
    )
}