import { Fragment } from "react";
import { Avatar } from "./Avatar";
import { Header } from "./Header";
import { Footer } from "./Footer";
function StaticProfileCard() {
    return (
        <Fragment>
            <Header />
            <div className="d-flex justify-content-center">
                <div className="card shadow text-center py-3 px-3 card-weight border-0 rounded-3">
                    <Avatar />
                    <div className="card-body">
                        <h4 className="card-title fw-bold mb-3">John Doe</h4>

                        <h6 className="fw-bold dark-primary">
                            Frontend Development Student
                        </h6>

                        <p className="card-text mt-3 lh-sm text-muted ">
                            I enjoy building clean and responsive user interfaces using React.
                        </p>
                    </div>

                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default StaticProfileCard;