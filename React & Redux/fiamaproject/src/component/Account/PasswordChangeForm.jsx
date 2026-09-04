import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formValidationSchema from "../../FromSchema/formValidationSchema";
import { toast, ToastContainer } from "react-toastify";
import { getUserById, updateUser } from "../../api/Services";
import { useNavigate } from "react-router-dom";

const PasswordChangeForm = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const defaultFormValues = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",

    }
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: defaultFormValues,

        resolver: yupResolver(
            formValidationSchema.pick([
                "currentPassword",
                "newPassword",
                "confirmPassword",
            ])
        ),

        mode: "onSubmit",
    });
    const fetchUser = async () => {
        try {
            const id = localStorage.getItem("id");
            const response = await getUserById(id);
            const currentUser = response.data[0];
            console.log("User:", currentUser);
            setUser(currentUser);

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong while fetching user");
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const currentDefaults = useRef(defaultFormValues);
    const onSubmit = async (data) => {
        try {
            if (!user) {
                toast.error("User not found");
                return;
            }
            if (data.currentPassword !== user.password) {
                toast.error("Current password is incorrect");
                return;
            }
            await updateUser({
                ...user,
                password: data.newPassword,
            });
            navigate("/login");
            localStorage.removeItem("login");
            localStorage.removeItem("id");

            currentDefaults.current = defaultFormValues;
            reset(defaultFormValues);

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="py-4">

            <Form onSubmit={handleSubmit(onSubmit)}>

                <Card className="p-4 border-0 shadow-sm rounded-0 mb-4 bg-white">

                    <h5 className="fw-normal mb-4 text-dark text-uppercase">
                        Password Change
                    </h5>

                    <Row className="g-4">

                        {/* Current Password */}
                        <Col md={12}>
                            <Form.Group controlId="currentPassword">
                                <Form.Label>
                                    Current password:
                                </Form.Label>

                                <Form.Control
                                    type="password"
                                    className="bg-light border-0 rounded-0 py-2"
                                    {...register("currentPassword")}
                                />

                                {errors.currentPassword && (
                                    <div className="text-danger mt-1">
                                        {errors.currentPassword.message}
                                    </div>
                                )}
                            </Form.Group>
                        </Col>

                        {/* New Password */}
                        <Col md={12}>
                            <Form.Group controlId="newPassword">
                                <Form.Label>
                                    New password:
                                </Form.Label>

                                <Form.Control
                                    type="password"
                                    className="bg-light border-0 rounded-0 py-2"
                                    {...register("newPassword")}
                                />

                                {errors.newPassword && (
                                    <div className="text-danger mt-1">
                                        {errors.newPassword.message}
                                    </div>
                                )}
                            </Form.Group>
                        </Col>

                        {/* Confirm Password */}
                        <Col md={12}>
                            <Form.Group controlId="confirmPassword">
                                <Form.Label>
                                    Confirm new password:
                                </Form.Label>

                                <Form.Control
                                    type="password"
                                    className="bg-light border-0 rounded-0 py-2"
                                    {...register("confirmPassword")}
                                />

                                {errors.confirmPassword && (
                                    <div className="text-danger mt-1">
                                        {errors.confirmPassword.message}
                                    </div>
                                )}
                            </Form.Group>
                        </Col>

                        <Col md={12}>
                            <Button
                                type="submit"
                                variant="primary"
                                className="mt-2"
                            >
                                Change Password
                            </Button>
                        </Col>

                    </Row>

                </Card>

            </Form>

            <ToastContainer />

        </div>
    );
};

export default PasswordChangeForm;