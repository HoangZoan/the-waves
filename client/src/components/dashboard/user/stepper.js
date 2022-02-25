import { useFormik } from "formik";
import * as Yup from "yup";

import { errorHelper } from "../../../utils/tools";
import Loader from "../../../utils/loader";

import Modal from "react-bootstrap/Modal";

import { TextField, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usersReducer from "../../../store/reducers/users.reducer";

const EmailStepper = ({ users }) => {
  const [loading, setLoading] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Enter old email", "Enter new email", "Are you sure?"];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { email: "", newEmail: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("This is required")
        .email("This is not a valid email")
        .test("match", "Please check your email", (email) => {
          return email === users.data.email;
        }),
      newEmail: Yup.string()
        .required("This is required")
        .email("This is not a valid email")
        .test("match", "Please check your email", (newEmail) => {
          return newEmail !== users.data.email;
        }),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const closeModal = () => setEmailModal(false);
  const openModal = () => setEmailModal(true);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const nextBtn = () => (
    <Button className="mt-3" variant="contained" onClick={handleNext}>
      Next
    </Button>
  );

  const backBtn = () => (
    <Button
      className="mt-3 ml-2"
      variant="contained"
      color="secondary"
      onClick={handleBack}
    >
      Back
    </Button>
  );

  return (
    <Fragment>
      <form
        className="mt-3 article_form"
        style={{ maxWidth: "250px" }}
        onSubmit={formik.handleSubmit}
      >
        <div className="form-group">
          <TextField
            label="Your current email"
            style={{ width: "100%" }}
            name="emailStatic"
            variant="outlined"
            value={users.data.email}
            disabled
          />
        </div>

        <Button className="mb-3" variant="contained" onClick={openModal}>
          Edit email
        </Button>
      </form>

      <Modal size="lg" centered show={emailModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update your email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          <form className="mt-3 stepper_form" onSubmit={formik.handleSubmit}>
            {activeStep === 0 && (
              <div className="form-group">
                <TextField
                  style={{ width: "100%" }}
                  name="email"
                  label="Enter your current email"
                  variant="outlined"
                  {...formik.getFieldProps("email")}
                  {...errorHelper(formik, "email")}
                />
                {formik.values.email && !formik.errors.email && nextBtn()}
              </div>
            )}

            {activeStep === 1 && (
              <div className="form-group">
                <TextField
                  style={{ width: "100%" }}
                  name="newEmail"
                  label="Enter your new email"
                  variant="outlined"
                  {...formik.getFieldProps("newEmail")}
                  {...errorHelper(formik, "newEmail")}
                />
                {backBtn()}
                {formik.values.newEmail && !formik.errors.newEmail && nextBtn()}
              </div>
            )}

            {activeStep === 2 && (
              <div className="form-group">
                {loading ? (
                  <Loader />
                ) : (
                  <Fragment>
                    {backBtn()}
                    <Button
                      className="mt-3"
                      variant="contained"
                      onClick={formik.submitForm}
                    >
                      Edit email
                    </Button>
                  </Fragment>
                )}
              </div>
            )}
          </form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default EmailStepper;
