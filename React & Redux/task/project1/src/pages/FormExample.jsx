import { useForm } from "react-hook-form";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { useState, useRef } from "react";

const FormExample = () => {
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
        joindate: "2024-01-01",
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


    const { formState: { errors }, register, reset, handleSubmit, } = useForm({ defaultValues: currentDefaults.current, });

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
            <Form /* key={formKey} */ onSubmit={handleSubmit(handleOnSubmit)}>
                <fieldset disabled={loading}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="firstname">
                                <Form.Label>First name</Form.Label>

                                <Form.Control
                                    type="text"
                                    {...register("firstname", {
                                        required: "First name is required",
                                        validate: (value) => {
                                            return /^[A-Za-z]+( [A-Za-z]+)*$/.test(value) || "Only alphabets allowed";
                                        },
                                    })}
                                />
                                <div className="text-danger">{errors.firstname?.message}</div>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="lastname">
                                <Form.Label>Last name</Form.Label>

                                <Form.Control
                                    type="text"
                                    {...register("lastname", {
                                        required: "last name is required",
                                        validate: (value) => {
                                            return /^[A-Za-z]+( [A-Za-z]+)*$/.test(value) || "Only alphabets allowed";
                                        },
                                    })}
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
                                    {...register("age", {
                                        required: "age is required",
                                        min: { value: 18, message: "Age must be greater than 18" },
                                        max: { value: 40, message: "Age must be less than 40" }
                                    })}
                                />
                                <div className="text-danger">{errors.age?.message}</div>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>

                                <Form.Control
                                    type="password"
                                    {...register("password", {
                                        required: "passsword is required",
                                        minLength: { value: 6, message: "Password must be more than 4 characters" },
                                        maxLength: { value: 10, message: "Password must be less than 10 characters" }

                                    })}
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
                                    {...register("phone", {
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: "Enter valid 10 digit number",
                                        },
                                    })}
                                />

                                <div className="text-danger">{errors.phone?.message}</div>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email Address</Form.Label>

                                <Form.Control
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+\.\S+$/,
                                            message: "Enter a valid email address",
                                        },
                                    })}
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
                                    {...register("country", {
                                        required: "Country is required",
                                    })}
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
                                    {...register("state", {
                                        required: "State is required",
                                    })}
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
                                    {...register("city", {
                                        required: "City is required",
                                        validate: (value) => {
                                            return value.length >= 2 || "Select at least two countries";
                                        }
                                    })}
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
                                    {...register("address", {
                                        required: "address is required",
                                    })}
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
                                    {...register("zip", {
                                        required: "PIN Code is required",
                                        pattern: {
                                            value: /^[1-9][0-9]{5}$/,
                                            message: "Enter a valid 6-digit PIN Code"
                                        }
                                    })}
                                />

                                <div className="text-danger">{errors.zip?.message}</div>
                            </Form.Group>

                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="joindate">
                                <Form.Label>Joindate</Form.Label>

                                <Form.Control type="date"
                                    rows={4}
                                    {...register("joindate", {
                                        required: "joindate is required",
                                        validate: (value) => {
                                            const today = new Date();
                                            const selectedDate = new Date(value);
                                            return (selectedDate < today || "Joining date must be less than today's date");
                                        },
                                    })}
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
                                            {...register("gender", {
                                                required: "Please select your gender",
                                            })}
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
                                            {...register("hobby", {
                                                required: "Please select your hobby",
                                                validate: (value) => {
                                                    return value.length >= 2 || "Please select at least tow"
                                                }
                                            })}
                                        />);
                                })}
                                <div className="text-danger">{errors?.hobby?.message}</div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Control type="file"
                                {...register("profilePicture", {
                                    required: "Profile picture is required.",
                                    validate: {
                                        acceptedFormats: (value) => {
                                            if (!value || value.length === 0) return true;
                                            const file = value[0];
                                            const acceptedFormatList = ["image/jpeg", "image/png", "image/gif"];
                                            return (acceptedFormatList.includes(file.type) || "Only JPEG, PNG, and GIF images are allowed.");
                                        },
                                        fileSize: (value) => {
                                            if (!value || value.length === 0) return true;
                                            const file = value[0];
                                            const maxSize = 6 * 1024 * 1024;

                                            return (file.size <= maxSize || "File size must be less than 6MB.");
                                        }
                                    }
                                })}
                            />
                            <div className="text-danger">{errors?.profilePicture?.message}</div>


                        </Col>
                        <Col md={6}>
                            <Form.Control type="file"
                                {...register("document", {
                                    required: "Document is required.",
                                    validate: {
                                        acceptedFormats: (value) => {
                                            if (!value || value.length === 0) return true;
                                            const file = value[0];
                                            const acceptedFormatList = [
                                                "application/pdf",
                                                "application/msword",
                                                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                            ];

                                            return (
                                                acceptedFormatList.includes(file.type) ||
                                                "Only PDF and Word files (.doc, .docx) are allowed."
                                            );
                                        },
                                        fileSize: (value) => {
                                            if (!value || value.length === 0) return true;
                                            const file = value[0];
                                            const maxSize = 8 * 1024 * 1024;

                                            return (file.size <= maxSize || "File size must be less than 8MB.");
                                        }
                                    }
                                })}
                            />
                            <div className="text-danger">{errors?.document?.message}</div>


                        </Col>
                    </Row>
                    <Col md={6}>
                        <Form.Group className="mb-3 mt-3" controlId="terms">
                            <Form.Check
                                type="checkbox"
                                label="Agree to terms and conditions"
                                {...register("terms", {
                                    required: "You must agree before submitting"
                                })}
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

export default FormExample;