import { Header } from './Header';
import { Footer } from './Footer';
import DynamicProfileCard from './DynamicProfileCard';
import image1 from '../assets/profileimage1.svg'
import image2 from '../assets/profileimage2.svg'
import image3 from '../assets/profile3.svg'
import { Fragment } from 'react';

function DynamicProfilecomponent() {
    return (
        <Fragment>

            <Header />

            <div className="d-flex justify-content-around row-gap-4 flex-wrap">
                <DynamicProfileCard
                    image={image2}
                    name="John Doe"
                    title="Frontend Development Student"
                    description="I enjoy building clean and responsive user interfaces using React."
                />
                <DynamicProfileCard
                    image={image1}
                    name="Jennifer Martin"
                    title="Backend Development Student"
                    description="I enjoy building fast api using python and fastapi"
                />
                <DynamicProfileCard
                    image={image3}
                    name="Thomas Smith"
                    title="Full stack Development Student"
                    description="I enjoy building clean and responsive user interfaces and api using React."
                />

            </div>

            <Footer />
        </Fragment>
    )
}

export default DynamicProfilecomponent