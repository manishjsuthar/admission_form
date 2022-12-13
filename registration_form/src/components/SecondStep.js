import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

export default function SecondStep(props) {
  const { user } = props;
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      batch: user.batch,
      payment_type: user.payment_type,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    props.updateUser(data);
    props.history.push("/third");
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        className="col-md-6 offset-md-3"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        {" "}
        <Form.Group controlId="batch">
          <Form.Label> Select Batch</Form.Label>
          <Form.Control
          name="batch"
          as="select"
            {...register("batch", {
              required: "batch is required.",
              pattern: {
                message: "Required",
              },
            })}
            className={`${errors.batch ? "input-error" : ""}`}
          >
            <option>Open this select menu</option>
      <option value="6-7">6-7 AM</option>
      <option value="7-8">7-8 AM</option>
      <option value="8-9">8-9 AM</option>
      <option value="5-6">5-6 AM</option>
          </Form.Control>
          {errors.batch && (
            <p className="errorMsg">{errors.batch.message}</p>
          )}
        </Form.Group>
        <br/>
        <Form.Group controlId="payment_type">
          <Form.Label>payment type</Form.Label>
          <Form.Control
           name="payment_type"
           as="select"
            {...register("payment_type", {
              required: "payment type is required.",
              pattern: {
                message: "Required",
              },
            })}
            className={`${errors.payment_type ? "input-error" : ""}`}
            >
              <option>Open this select menu</option>
      <option value="UPI">UPI</option>
      <option value="CC">Credit card</option>
      <option value="DC">Debit Card</option>
            </Form.Control>
          {errors.payment_type && (
            <p className="errorMsg">{errors.payment_type.message}</p>
          )}
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
          Next
        </Button>
      </motion.div>
    </Form>
  );
}
