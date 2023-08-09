export default function ParcelFormMobileReusable(props) {
  return (
    <>
      <input
        style={
          props.errors
            ? {
                border: '1px solid red',
                padding: '0px 10px',
                fontSize: '12px',
                borderRadius: '5px',
                height: '56px',
                width: '100%',
                marginTop: '10px',
              }
            : {
                border: '1px solid #E7E7E7',
                padding: '0px 10px',
                fontSize: '12px',
                borderRadius: '5px',
                height: '56px',
                width: '100%',
                marginTop: '20px',
              }
        }
        type="text"
        {...props.register(`${props.name}`, {
          required: true,
        })}
        placeholder={`${props.placeholder}`}
      />
    </>
  );
}
