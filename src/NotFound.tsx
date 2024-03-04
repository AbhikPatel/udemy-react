import { useNavigate } from "react-router-dom"

const NotFound = () => {

    const route = useNavigate();

    return (
        <div className="h-100 d-flex justify-content-center align-items-center flex-column">
            <h1 className="mb-5"> ⛔ Oops 404 Page Not Found ⛔ </h1>
            <button className="btn btn-danger btn-lg" onClick={() => route(-1)}> Go Back </button>
        </div>
    )
}

export default NotFound