import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

export default function FirstStep(props) {
  const { user } = props;
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: user.name,
      age: user.age,
      mobile: user.mobile
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    props.updateUser(data);
    props.history.push("/second");
  };
  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        className="col-md-6 offset-md-3"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            autoComplete="off"
           {...register("name", {
              required: "Name is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Name should contain only characters.",
              },
            })}
            className={`${errors.name ? "input-error" : ""}`}
          />
          {errors.name && (
            <p className="errorMsg">{errors.name.message}</p>
          )}
        </Form.Group>
<br/>
        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            placeholder="Enter your Age"
            autoComplete="off"
            {...register("age",{
              required: "age is required.",
              pattern: {
                value: /^(1[8-9])|([2-5][0-9])|(6[0-5])$/,
                message: "age should be between 18 to 65.",
              },
            })}
            className={`${errors.age ? "input-error" : ""}`}
          />
          {errors.age && (
            <p className="errorMsg">{errors.age.message}</p>
          )}
        </Form.Group>
        <br/>

        <Form.Group controlId="mobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            name="mobile"
            placeholder="Enter your Mobile Number"
            autoComplete="off"
            {...register("mobile",{
              required: "Mobile Number is required.",
              pattern: {
                value: /^[0-9]+$/,
                message: "Mobile Number should contain only number.",
              },
            })}
            className={`${errors.mobile ? "input-error" : ""}`}
          />
          {errors.mobile && (
            <p className="errorMsg">{errors.mobile.message}</p>
          )}
        </Form.Group>
          <br/>
          <div  style={{textAlign:"center"}}>
        <Button variant="primary" type="submit">
          Next
        </Button>
        </div>
      </motion.div>
    </Form>
  );
}
