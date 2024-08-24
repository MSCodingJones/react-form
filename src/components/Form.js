import { useId } from "react";

const Form =(props)=> {

    const id = useId()

    return (
        <div className="container">
            <form className="form" onSubmit={props.handleSubmit}>
                <h1 className="text-center">Enter the information below:</h1>
                <div className="mb-3 row">
                    <div className="col-auto">
                    <label
                        htmlFor={id + '-firstName'}
                        className="form-label text-capitalize">
                        first name
                    </label>
                    <input
                        type="text"
                        id={id + '-firstName'}
                        name="firstName"
                        value={props.firstName}
                        onChange={props.handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="col-auto">
                    <label
                        htmlFor={id + '-lastName'}
                        className="form-label text-capitalize">
                        last name
                    </label>
                    <input
                        type="text"
                        id={id + '-lastName'}
                        name="lastName"
                        value={props.lastName}
                        onChange={props.handleChange}
                        className="form-control"
                        required
                    />
                </div>
            </div>
                <div className="mb-3 row">
                    <div className="col-auto">
                    <label
                        htmlFor={id + '-email'}
                        className="form-label text-capitalize">
                        email
                    </label>
                    <input
                        type="text"
                        id={id + '-email'}
                        name="email"
                        value={props.email}
                        onChange={props.handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="col-auto">               
                    <label
                        htmlFor={id + '-username'}
                        className="form-label text-capitalize">
                        username
                    </label>
                    <input
                        type="text"
                        id={id + '-username'}
                        name="username"
                        value={props.username}
                        onChange={props.handleChange}
                        className="form-control"
                        required
                        />
                    </div> 
                    <div className="col-auto">
                    <label
                        htmlFor={id + '-password'}
                        className="form-label text-capitalize">
                       password 
                    </label>
                    <input
                        type="password"
                        id={id + '-password'}
                        name="password"
                        value={props.password}
                        onChange={props.handleChange}
                        className="form-control"
                        required
                    />
                </div>
            </div>
            <div className="mb-3 row">
                    <div className="col-auto">
                    <label
                        htmlFor={id + '-phone'}
                        className="form-label text-capitalize">
                        telephone number
                    </label>
                    <input
                        type="tel"
                        id={id + '-phone'}
                        name="phone"
                        value={props.phone}
                        onChange={props.handleChange}
                        className="form-control"
                        required
                    />
                </div> 
                <div className="col-auto form-check">
                    <label
                        htmlFor={id + '-dayClass'}
                        className="form-check-label text-capitalize">
                        Day Class?
                    </label>
                    <input
                        type="checkbox"
                        id={id + '-dayClass'}
                        name="dayClass"
                        value={props.dayClass}
                        onChange={props.handleChange}
                        className="form-check-input"
                        required
                    />
                </div>
                <div className="col-auto form-check">
                    <label
                        htmlFor={id + '-eveningClass'}
                        className="form-check-label text-capitalize">
                        Evening Class?
                    </label>
                    <input
                        type="checkbox"
                        id={id + '-eveningClass'}
                        name="eveningClass"
                        value={props.eveningClass}
                        onChange={props.handleChange}
                        className="form-check-input"
                    />
                </div>
                <div className="col-auto form-check">
                    <label
                        htmlFor={id + '-bothClasses'}
                        className="form-check-label text-capitalize">
                        Both Classes?
                    </label>
                    <input
                        type="checkbox"
                        id={id + '-bothClasses'}
                        name="bothClass"
                        value={props.eveningClass}
                        onChange={props.handleChange}
                        className="form-check-input"
                    />
                </div>
                </div>
                <div className="mb-3">
                    <textarea 
                        id={id + '-comments'}
                        name="comments"
                        value={props.comments}
                        onChange={props.handleChange}
                        className="form-comments"
                        placeholder="Enter comments here..."
                        cols="50"
                        rows="10"
                    />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" type="submit">Confirm</button>
                </div>       
            </form>
        </div>
    )
}

export default Form