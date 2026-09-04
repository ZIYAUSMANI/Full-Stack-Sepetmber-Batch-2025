import React, { useEffect } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formValidationSchema from "../../FromSchema/formValidationSchema";
import { toast, ToastContainer } from "react-toastify";
import { getUserById, updateUser } from "../../api/Services";

const AccountDetailsForm = ({ onUserUpdated }) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            id: "",
        },

        resolver: yupResolver(
            formValidationSchema.pick([
                "firstName",
                "lastName",
                "email",
            ])
        ),

        mode: "onSubmit",
    });

    const modifyUser = async (data) => {
        try {
            await updateUser(data)
            toast.success("User updated successfully!!!")
            if (onUserUpdated) {
                await onUserUpdated();
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
    }

    const onSubmit = (data) => {
        modifyUser(data)
    };



    const fetchUser = async () => {
        try {
            const response = await getUserById(localStorage.getItem("id"));

            console.log("User:", response.data[0]);
            setValue("firstName", response.data[0].firstName);
            setValue("lastName", response.data[0].lastName);
            setValue("email", response.data[0].email);
            setValue("id", response.data[0].id);
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Container className="py-4">

                <div className="bg-lightgray p-4 mb-4 rounded-0">
                    <p className="mb-0 text-dark fs-6">
                        The following addresses will be used on the checkout page by default.
                    </p>
                </div>

                <Row className="g-4">

                    <Col md={6}>
                        <Form.Group controlId="firstName">
                            <Form.Label>First name:</Form.Label>

                            <Form.Control
                                type="text"
                                className="bg-lightgray border-0 rounded-0 py-2"
                                {...register("firstName")}
                            />

                            {errors.firstName && (
                                <div className="text-danger">
                                    {errors.firstName.message}
                                </div>
                            )}
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="lastName">
                            <Form.Label>Last name:</Form.Label>

                            <Form.Control
                                type="text"
                                className="bg-lightgray border-0 rounded-0 py-2"
                                {...register("lastName")}
                            />

                            {errors.lastName && (
                                <div className="text-danger">
                                    {errors.lastName.message}
                                </div>
                            )}
                        </Form.Group>
                    </Col>

                    <Col md={12}>
                        <Form.Group controlId="email">
                            <Form.Label>Display Email:</Form.Label>

                            <Form.Control
                                type="email"
                                className="bg-lightgray border-0 rounded-0 py-2"
                                {...register("email")}
                            />

                            {errors.email && (
                                <div className="text-danger">
                                    {errors.email.message}
                                </div>
                            )}
                        </Form.Group>
                    </Col>
                    <Form.Control
                        type="hidden"
                        className="bg-lightgray border-0 rounded-0 py-2"
                        {...register("id")}
                    >

                    </Form.Control>

                </Row>

                <Button
                    type="submit"
                    variant="primary"
                    className="mt-4"
                >
                    update Account Details
                </Button>
                <ToastContainer />
            </Container>
        </Form>
    );
};

export default AccountDetailsForm;