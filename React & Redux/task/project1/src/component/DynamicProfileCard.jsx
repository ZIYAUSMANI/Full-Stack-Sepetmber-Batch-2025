import { DynamicAvatar } from "./DynamicAvatar";

function DynamicProfileCard(props) {
    const {
        image,
        name = "Unknown User",
        title = "Student",
        description = "No description available."
    } = props;

    return (
        <div className="card shadow text-center py-3 px-1 card-weight border-0 rounded-3">

            <DynamicAvatar image={image} />

            <div className="card-body">
                <h4 className="card-title fw-bold mb-3">{name}</h4>

                <h6 className="fw-bold dark-primary">{title}</h6>

                <p className="card-text mt-3 lh-sm text-muted small">{description}</p>
            </div>

        </div>
    );
}

export default DynamicProfileCard;