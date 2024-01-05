function Task2() { 
    let title = "SUBSCRIBE";
    let text = "Sign in with your address to receive news and updates.";
    let textButton = "Subscribe";

    return (
        <div id="task2">
            <h1>{title}</h1>

            <p>{text}</p>

            <div className="form-group">
                <input type="text" placeholder="First name"></input>
                <input type="text" placeholder="Last name"></input>
                <input type="email" placeholder="Email"></input>

                <div className="button-holder">
                    <button type="button">{textButton}</button>
                </div>
            </div>
        </div>
    );
}

export default Task2;