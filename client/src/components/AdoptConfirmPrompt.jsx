import { useEffect, useState } from "react";
import Modal from "./UI/Modal";
import CheckBox from "./UI/CheckBox";
import { maxDateFinder } from "../utils/misc";

const AdoptConfirmPrompt = ({ onClose, onConfirm, vetData }) => {
  const maxDate = maxDateFinder();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <Modal
      className="adopt-confirm-modal"
      title="Adopt this pet?"
      onClose={onClose}
    >
      <div className="modal-body py-3 px-4 mt-2 mb-2">
        <div className="column col-12">
          <fieldset className="row">
            <legend id="modal-legend">Vet Info</legend>
            <div className="d-flex px-4 justify-content-around align-items-center px-2 py-2">
              <div className="vet-image-thumbnail">
                <img src={vetData.image} alt="" />
              </div>
              <ul className="vet-info-list">
                <li className="status-list">
                  <strong>Name:</strong>
                  {vetData.vet_name}
                </li>
                <li className="status-list">
                  <strong>Category:</strong>
                  {vetData.vet_category}
                </li>
                <li className="status-list">
                  <strong>Breed:</strong>
                  {vetData.vet_breed}
                </li>
              </ul>
            </div>
          </fieldset>
          <div className="py-4 col-12">
            <div className="d-flex align-items-center justify-content-between">
              <label className="form-text" htmlFor="date-selector">
                Choose an appointment with the owner
              </label>
              <input
                id="date-selector"
                type="date"
                min={maxDate}
                className="form-control form-control-date"
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 d-flex">
          <CheckBox
            id="agree-confirm"
            name="agree-confirm"
            value="agreed"
            text="I agree to the terms and hereby promise to take well care of the vet
            without causing any harm"
            onChange={() => setBtnDisabled((prev) => !prev)}
          />
        </div>
      </div>
      <div className="modal-footer">
        <button
          className="btn btn-style btn-primary"
          type="button"
          onClick={() => onConfirm(selectedDate)}
          disabled={btnDisabled}
        >
          Request Owner
        </button>
      </div>
    </Modal>
  );
};

export default AdoptConfirmPrompt;
