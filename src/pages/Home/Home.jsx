import './Home.css';


const Home  =() => {
    return (
        <div className="root">
            <div className="title-wrapper">
                <h4 className="intro">AP Calculus</h4>
                <h1 className="title">Dr.Peterson's personal class poll service</h1>
                <h3 className="description">This is a web application created by John Murphy, and serves as my final project</h3>
                <button className="teacher-button">I'm Dr.Peterson</button>
                <button className="student-button">I'm a Student</button>
            </div>
        </div>
    )
}

export default Home;