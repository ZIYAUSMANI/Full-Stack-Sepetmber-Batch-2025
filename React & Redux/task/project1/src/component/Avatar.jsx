import image from "../assets/profileimage2.svg"
export function Avatar() {
    return (
        <img
            src={image}
            className="mx-auto mb-3 "
            width="120"
            height="120"
            alt="profile"
        />
    )
}