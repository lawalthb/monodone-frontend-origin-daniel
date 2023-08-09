import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function TransitionAlerts(props) {
    const [open, setOpen] = React.useState(false);

    return (
        <Box sx={{
            width: '452px', top: "45px", left: "490px",
            position: 'absolute'
        }}>
            <Collapse in={props.transitionAlert} style={{background: "#EEFFE8", borderRadius: "7px" }}>
                <Alert
                style={{background: "#EEFFE8"}}
                    action={
                        <IconButton
                            aria-label="close"
                            color="success"
                            size="small"
                            onClick={() => props.setTransitionAlert(false)}
                        >
                            <CloseIcon fontSize="inherit" style={{ color: "#565656"}} />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    Successfully sent <br />
                    Your Order has been successfully sent.
                </Alert>
            </Collapse>
        </Box>
    );
}
