import LoadboardDetailsContentCarclearingContainer from './loadboardDetailsContentCarclearingContainer';
import LoadboardDetailsContentOthers from './loadboardDetailsContentOthers';

export default function LoadboardDetailsContent(props) {
  return (
    <>
      {props.specificLoadboardData?.cargoTypeGrid ===
      ('Car Clearing' || 'Container Shipment') ? (
        <LoadboardDetailsContentCarclearingContainer
          specificLoadboardData={props.specificLoadboardData}
        />
      ) : (
        <LoadboardDetailsContentOthers
          specificLoadboardData={props.specificLoadboardData}
        />
      )}
    </>
  );
}
