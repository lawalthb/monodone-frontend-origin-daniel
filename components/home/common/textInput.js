import { useForm } from 'react-hook-form';

export default function TextInput(props) {
  const { register } = useForm();
  return (
    <>
      <input
        style={
          props.errors
            ? {
                border: '1px solid red',
                padding: '0px 10px',
                fontSize: '12px',
                width: props.width,
              }
            : {
                border: '1px solid #E7E7E7',
                padding: '0px 10px',
                fontSize: '12px',
                width: props.width,
              }
        }
        type="text"
        {...register(props.name, {
          required: true,
          pattern: props.pattern,
        })}
        placeholder={props.placeholder}
      />
    </>
  );
}
