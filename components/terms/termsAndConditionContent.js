export default function TermsAndConditionContent(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          textAlign: 'justify',
          fontSize: '12px',
          color: 'black',
        }}
      >
        {props.details}
      </div>
    </>
  );
}
