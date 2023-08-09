import PackageDocBtn from './packageDocBtn';

export default function PackageDocumentSwitches(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          marginTop: '10px',
        }}
      >
        <PackageDocBtn
          imgSrc={
            props.isPackage
              ? '/img/agentmobilepackage.png'
              : '/img/agentmobilepackagenot.png'
          }
          caption="Package"
          isPackage={props.isPackage}
          setIsPackage={props.setIsPackage}
          handleIsPackage={props.handleIsPackage}
        />
        <PackageDocBtn
          imgSrc={
            props.isDocument
              ? '/img/agentmobiledocumentselected.png'
              : '/img/agentmobiledocument.png'
          }
          caption="Document"
          isDocument={props.isDocument}
          setIsDocument={props.setIsDocument}
          handleIsDocument={props.handleIsDocument}
        />
      </div>
    </>
  );
}
