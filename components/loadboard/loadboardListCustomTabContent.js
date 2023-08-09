export default function LoardboardListCustomTabContent(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '15%',
            cursor: 'pointer',
          }}
        >
          {' '}
        </div>
        <div
          style={{
            display: 'flex',
            width: '45%',
            fontSize: '12px',
            fontWeight: '500',
            color: '#000000',
            cursor: 'pointer',
          }}
        >
          {props.caption}
        </div>
        <div
          style={{
            display: 'flex',
            width: '40%',
            fontSize: '12px',
            color: '#000000',
            cursor: 'pointer',
            fontWeight: '500',
          }}
        >
          {props.content}
        </div>
      </div>
    </>
  );
}
