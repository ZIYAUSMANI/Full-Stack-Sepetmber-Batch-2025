import { useForm } from "react-hook-form";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { useState, useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
const FormYupExample = () => {
    const [loading, setLoading] = useState(false);

    const defaultValues = {
        firstname: "Ziya",
        lastname: "Usmani",
        age: 20,
        phone: "9876543210",
        email: "ziya@gmail.com",
        country: "India",
        state: "Rajasthan",
        city: ["Jaipur", "Mumbai"],
        address: "Jodhpur, Rajasthan",
        zip: "342001",
        gender: "Female",
        hobby: ["Singing", "Dancing"],
        password: "123456",
        joindate: new Date().toISOString().split("T")[0],
        terms: true
    };
    const emptyValues = {
        firstname: "",
        lastname: "",
        age: "",
        phone: "",
        email: "",
        country: "",
        state: "",
        city: [],
        address: "",
        zip: "",
        gender: "",
        hobby: [],
        password: "",
        joindate: "",
        profilePicture: null,
        document: null,
        terms: false
    };

    const currentDefaults = useRef(defaultValues);

    const validationSchema = yup.object({
        firstname: yup
            .string()
            .required("First name is required")
            .matches(/^[A-Za-z]+( [A-Za-z]+)*$/, "Only alphabets allowed"),

        lastname: yup
            .string()
            .required("Last name is required")
            .matches(/^[A-Za-z]+( [A-Za-z]+)*$/, "Only alphabets allowed"),
        age: yup
            .number()
            .typeError("Enter valide Age")
            .required("Age is required")
            .min(18, "Age must be greater than 18")
            .max(40, "Age must be less than 40"),
        password: yup
            .string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters")
            .max(10, "Password must be at most 10 characters"),
        phone: yup
            .string()
            .required("Phone number is required")
            .matches(/^[0-9]{10}$/, "Enter valid 10 digit number"),
        email: yup
            .string()
            .required("Email is required")
            .matches(/^\S+@\S+\.\S+$/, "Enter a valid email address"),
        country: yup
            .string()
            .required("Country is required"),
        state: yup
            .string()
            .required("State is required"),
        city: yup
            .array()
            .min(2, "Select at least 2 cities")
            .required("City is required"),
        address: yup
            .string()
            .required("Address is required"),
        zip: yup
            .string()
            .required("PIN Code is required")
            .matches(/^[1-9][0-9]{5}$/, "Enter a valid 6-digit PIN Code"),
        joindate: yup
            .date()
            .typeError("Joining date is required")
            .required("Joining date is required")
            .max(new Date(), "Joining date must be less than today's date"),
        gender: yup
            .string()
            .required("Please select your gender"),
        hobby: yup
            .array()
            .required("Please select your hobby")
            .min(2, "Please select at least two hobbies"),

        profilePicture: yup
            .mixed()
            .required("Profile picture is required.")
            .test(
                "fileType",
                "Only JPEG, PNG, and GIF images are allowed.",
                (value) => {
                    if (!value || value.length === 0) return false;

                    const file = value[0];
                    const acceptedFormats = ["image/jpeg", "image/png", "image/gif"];

                    return acceptedFormats.includes(file.type);
                }
            )
            .test(
                "fileSize",
                "File size must be less than 6MB.",
                (value) => {
                    if (!value || value.length === 0) return false;

                    const file = value[0];
                    const maxSize = 6 * 1024 * 1024;

                    return file.size <= maxSize;
                }
            ),
        document: yup
            .mixed()
            .required("Document is required.")
            .test(
                "fileType",
                "Only PDF and Word files (.doc, .docx) are allowed.",
                (value) => {
                    if (!value || value.length === 0) return false;

                    const file = value[0];
                    const acceptedFormats = [
                        "application/pdf",
                        "application/msword",
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    ];

                    return acceptedFormats.includes(file.type);
                }
            )
            .test(
                "fileSize",
                "File size must be less than 8MB.",
                (value) => {
                    if (!value || value.length === 0) return false;

                    const file = value[0];
                    const maxSize = 8 * 1024 * 1024;

                    return file.size <= maxSize;
                }
            ),
        terms: yup
            .boolean()
            .oneOf([true], "You must agree before submitting"),
    })

    const { formState: { errors }, register, reset, handleSubmit, } = useForm({
        defaultValues: currentDefaults.current,
        resolver: yupResolver(validationSchema)
    });


    const handleOnSubmit = (data) => {
        setLoading(true);

        setTimeout(() => {
            console.log(data);
            toast.success("form submitted successfully");

            currentDefaults.current = emptyValues;
            reset(emptyValues);

            setLoading(false);
        }, 1000);
    };




    return (
        <>
            <Form onSubmit={handleSubmit(handleOnSubmit)}>
                <fieldset disabled={loading}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="firstname">
                                <Form.Label>First name</Form.Label>

                                <Form.Control
                                    type="text"
                                    {...register("firstname")}
                                />
                                <div className="text-danger">{errors.firstname?.message}</div>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="lastname">
                                <Form.Label>Last name</Form.Label>

                                <Form.Control
                                    type="text"
                                    {...register("lastname")}
                                />
                                <div className="text-danger">{errors.lastname?.message}</div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="age">
                                <Form.Label>Age</Form.Label>

                                <Form.Control
                                    type="number"
                                    {...register("age")}
                                />
                                <div className="text-danger">{errors.age?.message}</div>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>

                                <Form.Control
                                    type="password"
                                    {...register("password")}
                                />
                                <div className="text-danger">{errors.password?.message}</div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="phone">
                                <Form.Label>Phone Number</Form.Label>

                                <Form.Control
                                    type="text"
                                    {...register("phone")}
                                />

                                <div className="text-danger">{errors.phone?.message}</div>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email Address</Form.Label>

                                <Form.Control
                                    type="email"
                                    {...register("email")}
                                />

                                <div className="text-danger">{errors.email?.message} </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="country">
                                <Form.Label>Country</Form.Label>

                                <Form.Select
                                    {...register("country")}
                                >
                                    <option value="">Select Country</option>
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                    <option value="Canada">Canada</option>
                                </Form.Select>

                                <div className="text-danger">
                                    {errors.country?.message}
                                </div>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="state">
                                <Form.Label>State</Form.Label>

                                <Form.Select
                                    {...register("state")}
                                >
                                    <option value="">Select State</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                </Form.Select>

                                <div className="text-danger">
                                    {errors.state?.message}
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="city">
                                <Form.Label>City</Form.Label>

                                <Form.Select multiple
                                    {...register("city")}
                                >
                                    <option value="Ahmedabad">Ahmedabad</option>
                                    <option value="Jaipur">Jaipur</option>
                                    <option value="Mumbai">Mumbai</option>
                                </Form.Select>

                                <div className="text-danger">
                                    {errors.city?.message}
                                </div>
                            </Form.Group>

                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="Address">
                                <Form.Label>Your complete Address</Form.Label>

                                <Form.Control as="textarea"
                                    rows={4}
                                    {...register("address")}
                                >
                                </Form.Control>

                                <div className="text-danger">{errors.address?.message}
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="zip">
                                <Form.Label>ZIP/PIN Code</Form.Label>

                                <Form.Control
                                    type="text"
                                    placeholder="Enter PIN Code"
                                    maxLength={6}
                                    {...register("zip")}
                                />

                                <div className="text-danger">{errors.zip?.message}</div>
                            </Form.Group>

                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="joindate">
                                <Form.Label>Joindate</Form.Label>

                                <Form.Control type="date"
                                    rows={4}
                                    {...register("joindate")}
                                >
                                </Form.Control>

                                <div className="text-danger">{errors.joindate?.message}
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="gender">
                                <Form.Label>Gender</Form.Label>
                                <br />
                                {["Male", "Female", "Transgender"].map((gender, index) => {
                                    return (
                                        <Form.Check
                                            key={index} inline label={gender} id={gender} value={gender}
                                            type="radio"
                                            {...register("gender")}
                                        />);
                                })}
                                <div className="text-danger">{errors?.gender?.message}</div>
                            </Form.Group>

                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="hobby">
                                <Form.Label>Hobbies</Form.Label>
                                <br />
                                {["Drawing", "Singing", "Dancing"].map((hobby, index) => {
                                    return (
                                        <Form.Check
                                            key={index} inline label={hobby} id={hobby} value={hobby}
                                            type="checkbox"
                                            {...register("hobby")}
                                        />);
                                })}
                                <div className="text-danger">{errors?.hobby?.message}</div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Control type="file"
                                {...register("profilePicture")}
                            />
                            <div className="text-danger">{errors?.profilePicture?.message}</div>


                        </Col>
                        <Col md={6}>
                            <Form.Control type="file"
                                {...register("document")}
                            />
                            <div className="text-danger">{errors?.document?.message}</div>


                        </Col>
                    </Row>
                    <Col md={6}>
                        <Form.Group className="mb-3 mt-3" controlId="terms">
                            <Form.Check
                                type="checkbox"
                                label="Agree to terms and conditions"
                                {...register("terms")}
                            />

                            <div className="text-danger">
                                {errors.terms?.message}
                            </div>
                        </Form.Group>
                    </Col>
                    <Button type="submit" disabled={loading}>
                        {loading ? (
                            <>
                                <Spinner animation="border" size="sm" className="me-2" />
                                Submitting...
                            </>
                        ) : (
                            "Submit form"
                        )}
                    </Button>
                </fieldset>
            </Form>
            <ToastContainer />
        </>
    );
};

export default FormYupExample;