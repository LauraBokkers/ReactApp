import "./CoreConcept.css";


// Components typically only accept ONE parameter (the convention is props, but you can pick whatever)
// The parameter that is passed will always be an object (react does this)
export default function CoreConcept({ image, title, description }) {
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}