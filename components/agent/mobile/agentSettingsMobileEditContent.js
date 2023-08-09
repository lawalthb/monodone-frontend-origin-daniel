export default function AgentSettingsMobileEditContent(props) {
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
                background: '#F9F9F9',
              }
            : {
                border: '1px solid #E7E7E7',
                padding: '0px 10px',
                fontSize: '12px',
                borderRadius: '5px',
                height: '56px',
                width: '100%',
                marginTop: '20px',
                background: '#F9F9F9',
              }
        }
        type="text"
        {...props.register(`${props.name}`, {
          required: true,
        })}
        placeholder={props.placeholder}
      />
    </>
  );
}
