function App() {


    const name = "Ravi";
    const age = 20;
    const department = "CSE";


    return (
        <div>
            <h1>Student Information</h1>


            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Department: {department}</p>


            <button onClick={() => alert("Welcome " + name)}>
                Welcome
            </button>
        </div>
    );
}


export default App;

