import React, { useState, useRef } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';

export default function PopoverComp(props) {
    const target = useRef(null);

    return (
        <>
            <OverlayTrigger
                trigger="click"
                placement="right"
                rootClose
                overlay={
                    <Popover id={`popover-positioned-right`}>
                        <Popover.Body>
                            <div
                                onClick={() => props.handleCustomerAgentProfile()}
                            >
                                <span className="ml-2" style={{
                                    color: "#00902F"
                                }}>View agent profile</span>
                            </div>
                        </Popover.Body>
                    </Popover>
                }
            >
                <span ref={target}>
                    {props.children}
                </span>
            </OverlayTrigger>
        </>
    );
}
