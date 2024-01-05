function Task3() {
    let name = "Mr. Svin";
    let job = "Professional Sunduchok player";
    let skillsArray = ["Sunduchock", "Business", "Poedanie edi", "Lyubov k suveniram"];
    let joinDate = "Joined on Aug 30, 2020"

    return (
        <div id="task3">
            <img src="./images/svin.jpeg" alt="svin"/>

            <h3>{name}</h3>
            <p>{job}</p>
            
            <h4>Skills</h4>
            <ul>
                {skillsArray.map((value) => {
                    return <li>{value}</li>
                })}
            </ul>

            <small>{joinDate}</small>
        </div>
    );
}

export default Task3;