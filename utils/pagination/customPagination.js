import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function CustomPagination(props) {
  const handlePrevious = () => {
    if (props.activePagenumber === 1) {
      return;
    }
    props.setActivePagenumber(props.activePagenumber - 1);
  };
  const handleNext = () => {
    if (props.activePagenumber === Math.floor(props.allData.length / 6)) {
      return;
    }
    props.setActivePagenumber(props.activePagenumber + 1);
  };
  useEffect(() => {
    function handlePagination() {
      const size = props.allData?.length;
      const noOfPages = Math.floor(size / 6);
      const pageNumbers = [];
      for (let i = 1; i <= noOfPages; i++) {
        pageNumbers.push(i);
      }
      props.setPageNumbers(pageNumbers);
    }
    handlePagination();
  }, [props.allData]);
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
          marginBottom: '20px',
          gap: '20px',
        }}
      >
        <Button
          onClick={handlePrevious}
          disabled={props.activePagenumber === 1}
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
        {props.pageNumbers.slice(0, 10).map((num, idx) => (
          <div
            onClick={() => {
              props.setPageNumber(num);
              props.setActivePagenumber(idx + 1);
            }}
            key={idx}
            style={
              props.activePagenumber === num
                ? {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    background: '#00902F',
                    width: '40px',
                    height: '40px',
                    fontSize: '13px',
                    cursor: 'pointer',
                    borderRadius: '3px',
                  }
                : {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                    background: 'transparent',
                    width: '40px',
                    height: '40px',
                    fontSize: '13px',
                    cursor: 'pointer',
                    borderRadius: '3px',
                    border: '1px solid #00902F',
                  }
            }
          >
            {num}
          </div>
        ))}
        <Button
          onClick={handleNext}
          disabled={
            props.activePagenumber === Math.floor(props.allData.length / 6)
          }
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
    </>
  );
}
