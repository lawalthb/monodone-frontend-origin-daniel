import GeneralModal from "../modal/generalModal"
import { FaTimes } from "react-icons/fa";

export default function AssignQuotationSuccessModal({assignDriver, setAssignDriver, action}) {
  return (
    <GeneralModal
      size="md"
      show={assignDriver}
      onHide={() => setAssignDriver(false)}
      setAssignDriver={setAssignDriver}
      action={action}
    >
      <div className="assign-driver-success">
        <div className="close-modal" onClick={() => setAssignDriver(false)}><FaTimes /></div>
        <div className="success-message">
          <p className="success">Success!</p>
          <p className="message">Your load has been assigned to a driver </p>
          <button onClick={() => setAssignDriver(false)}>Ok</button>
        </div>
      </div>
    </GeneralModal>
  )
}
