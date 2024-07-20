import { useState } from "react";
import { useNavigation } from "react-router-dom";
import Modal from "./UI/Modal";
import CheckBox from "./UI/CheckBox";

const RescueConfirmPrompt = ({ onClose, onConfirm, vetData }) => {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const navigation = useNavigation();

  let isSubmitting = false;
  if (navigation.state === "submitting") {
    isSubmitting = true;
  }

  return (
    <Modal
      className="rescue-confirm-modal"
      title="Save this vet?"
      onClose={onClose}
    >
      <div className="modal-body py-3 px-4 mt-2 mb-2">
        <div className="column col-12">
          <fieldset className="row">
            <legend id="modal-legend">Vet Info</legend>
            <div className="d-flex px-4 justify-content-between align-items-center px-2 py-2">
              <div className="col-md-4 d-flex justify-content-center">
                <div className="vet-image-thumbnail">
                  <img src={vetData.images[0].image} alt="" />
                </div>
              </div>
              <div className="col-md-8 mx-4">
                <ul className="container vet-info-list">
                  <li className="status-list">
                    <strong>Category:</strong>
                    {vetData.vet_category}
                  </li>
                  <li className="status-list">
                    <strong>Health Status:</strong>
                    {vetData.vet_health_status.map((item, i) => (
                      <span key={i} className="text-danger">
                        &nbsp;{item}
                        {", "}
                      </span>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </fieldset>
          <div className="py-4 col-12">
            <p className="text-danger fw-bold" style={{ lineHeight: "1.1rem" }}>
              <span
                style={{
                  fontWeight: "900",
                  color: "var(--bs-dark)",
                  marginRight: "0.5rem",
                }}
              >
                N.B:-
              </span>{" "}
              Please be prompt enough to save this injured vet
            </p>
          </div>
        </div>
        <div className="mt-2 d-flex">
          <CheckBox
            id="confirm"
            name="confirm"
            value="agreed"
            text="I agree to the terms and hereby promise to take well care of the vet
              and their safety as a genuine vetenary volunteer."
            onChange={() => setBtnDisabled((prev) => !prev)}
          />
        </div>
      </div>
      <div className="modal-footer">
        <button
          className="btn btn-style btn-primary"
          type="button"
          onClick={onConfirm}
          disabled={btnDisabled}
        >
          {isSubmitting ? "Sending Request" : "Save Vet"}
        </button>
      </div>
    </Modal>
  );
};

export default RescueConfirmPrompt;
