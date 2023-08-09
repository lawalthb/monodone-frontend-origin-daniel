import { useForm } from 'react-hook-form';
import AgentSettingsMobileEditContent from './agentSettingsMobileEditContent';
import { Button, Form } from 'react-bootstrap';
import Image from 'next/image';

export default function AgentSettingsMobileEdit(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    props.setSettingsData(data);
    props.setSettingsEdit(false);
    props.setAgentSettingsEditSuccess(true);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(submitForm)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Image
            onClick={() => props.setSettingsEdit(false)}
            src="/img/agent-arrow-left.png"
            width="20"
            height="20"
            alt="left-arrow"
          />
          <Form.Label
            style={{
              color: 'rgba(21, 21, 21, 1)',
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            {'Edit Profile'}
          </Form.Label>
          <Button
            type="submit"
            style={{
              background: 'transparent',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              color: 'rgba(0, 144, 47, 1)',
              border: 'none',
              marginTop: '-10px',
            }}
          >
            Done
            {/* {settingsEdit ? 'Done' : 'Edit'} */}
          </Button>
        </div>
        <hr
          style={{
            marginTop: '-0.09px',
          }}
        />
        <AgentSettingsMobileEditContent
          errors={errors.name}
          register={register}
          name="name"
          placeholder="Adaora Daberechi"
        />
        <AgentSettingsMobileEditContent
          errors={errors.phoneNumber}
          register={register}
          name="phoneNumber"
          placeholder="097 433 44 33"
        />
        <AgentSettingsMobileEditContent
          errors={errors.officeNumber}
          register={register}
          name="officeNumber"
          placeholder="34"
        />
        <AgentSettingsMobileEditContent
          errors={errors.officeAddress}
          register={register}
          name="officeAddress"
          placeholder="21 Alex Ekwueme Way, Jabi 900108, Ab..."
        />
        <AgentSettingsMobileEditContent
          errors={errors.allowableWeight}
          register={register}
          name="allowableWeight"
          placeholder="to 30 lbs"
        />
        <AgentSettingsMobileEditContent
          errors={errors.allowableDimensions}
          register={register}
          name="allowableDimensions"
          placeholder="22 x 155 x 32"
        />
      </form>
    </>
  );
}
