import BreadcrumbBanner from "../component/BreadcrumbBanner";
import FromHeader from "../component/FromHeader";
import RegisterForm from "../component/Register/RegisterForm";

function Register() {
    return (<>
        <BreadcrumbBanner />
        <FromHeader title={"Register"} subtitle={"Your Account"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Sit aliquid, Non distinctio vel iste."} />
        <RegisterForm />
    </>);
}

export default Register;