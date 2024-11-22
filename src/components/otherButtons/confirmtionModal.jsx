import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ConfirmationModal = ({ show, onConfirm, onCancel }) => {
    if (!show) return null;
    
    return (
        <div className="modal-overlay1">
            <div className="modal-dialog1">
                <div className="modal-content1">
                    <div className="modal-header1">
                        <h5 className="modal-title1">Modify Record</h5>
                    </div>
                    <div className="modal-body1 d-flex align-items-center">
                        <i className="bi bi-question-circle-fill text-primary fs-1 me-3"></i>
                        <p className="mb-0">Do You Want To Modify Record?</p>
                    </div>
                    <div className="modal-footer1">
                        <button className="btn btn-primary" onClick={onConfirm}>Yes</button>
                        <button className="btn btn-secondary" onClick={onCancel}>No</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
