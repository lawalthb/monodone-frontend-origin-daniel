import Media from '@/utils/media';
import { Form } from 'react-bootstrap';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

export default function LoadboardGridList(props) {
  const { mobile, tabletAndDesktop } = Media();

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 51,
    height: 31,
    padding: 0,
    borderRadius: 15,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(20px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: 'rgba(0, 144, 47, 1)',
        },
        '& > .MuiSwitch-thumb': {
            backgroundColor:
        theme.palette.mode === 'dark' ? '#FFFFFF' : '#FFFFFF',
          },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 27,
      height: 27,
      borderRadius: '50%',
      backgroundColor:
        theme.palette.mode === 'dark' ? '#FFFFFF' : '#FFFFFF',
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
        width: 51,
        height: 31,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        'rgba(0, 144, 47, 1)',
      boxSizing: 'border-box',
    },
  }));

  function handleAvailability() {
    if(props.list){
      props.handleGrid()
    }else{
      props.handleList()
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '10px',
          padding: mobile ? '20px' : '20px 40px',
        }}
      >
        <Form.Label
          onClick={() => props.handleGrid()}
          style={{
            fontSize: '14px',
            fontWeight: '400',
            color: '#808080',
            cursor: 'pointer',
          }}
        >
          Grid
        </Form.Label>
        <AntSwitch checked={props.list} onChange={() => handleAvailability()} inputProps={{ 'aria-label': 'ant design' }} />
        <Form.Label
          onClick={() => props.handleList()}
          style={{
            fontSize: '14px',
            fontWeight: '400',
            color: '#151515',
            cursor: 'pointer',
          }}
        >
          List
        </Form.Label>
      </div>
    </>
  );
}
