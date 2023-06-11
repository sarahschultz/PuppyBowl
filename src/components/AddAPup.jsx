function AddAPup() {
  
    const [allPuppies, setAllPuppies] = useState([]);
    const [newName, setNewName] = useState("");
    const [newBreed, setNewBreed] = useState("");
    const [newImage, setNewImage] = useState("");
    const [newStatus, setNewStatus] = useState("");
  
    // STEP F: (Fetching the data for our state)
    useEffect(() => {
      async function fetchPuppies() {
        try {
            const response = await fetch(
              'https://fsa-puppy-bowl.herokuapp.com/api/2304-FTB-ET-WEB-FT/players'
            );
            const result = await response.json();
            console.log(result);
          } catch (error) {
            console.error(error);
          }
      }
  
      fetchPuppies(); 
    }, [])
  
    async function sendPostRequest(event) {
      event.preventDefault(); 
      try {
        const response = await fetch(
          'https://fsa-puppy-bowl.herokuapp.com/api/2304-FTB-ET-WEB-FT/players',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name:'Rufus',
                breed:'Irish Setter',
            }),
          }
        );
        const result = await response.json();
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    }
  
    return (
      <>
  
        <PuppyCard />
  
        {/* <PuppyCard myKey="myValue" aaa="bbb" myBoolean={true} myArray={[1, 2, 3]}/>
  
        <PuppyCard otherKey={false} /> */}
  
        {/* STEP R: (Render the state data) */}
        {
          allPuppies.length ? allPuppies.map((puppy) => {
            return (
              // <div key={puppy.id}>
              //   <h4>Name: {puppy.title}</h4>
              //   <p>Description: {puppy.description}</p>
              // </div>
              <SinglePup 
                key={puppy.id} 
                puppy={puppy}
                allPuppies={allPuppies}
                setAllPuppies={setAllPuppies}
              />
            )
          }) : <p>Loading...</p>
        }
  
        <form onSubmit={sendPostRequest}>
          <label htmlFor="puppy-name">Enter New Product Name Below:</label>
          <br/>
          <input 
            name="puppy-name" 
            type="text" 
            placeholder="New Puppy Name Goes Here"
            value={newName}
            onChange={(event) => {
              setNewName(event.target.value)
            }}
          ></input>
  
          <label htmlFor="puppy-breed">Enter New Product Description Below:</label>
          <br/>
          <input 
            name="puppy-breed" 
            type="text" 
            placeholder="New Puppy Name Goes Here"
            value={newBreed}
            onChange={(event) => {
              setNewBreed(event.target.value)
            }}
          ></input>

          <label htmlFor="puppy-image">Enter New Product Description Below:</label>
          <br/>
          <input 
            name="puppy-image" 
            type="text" 
            placeholder="New Puppy Image Goes Here"
            value={newImage}
            onChange={(event) => {
              setNewImage(event.target.value)
            }}
          ></input>

          <label htmlFor="puppy-status">Enter New Product Description Below:</label>
          <br/>
          <input 
            name="puppy-status" 
            type="text" 
            placeholder="New Puppy Bench Status Goes Here"
            value={newStatus}
            onChange={(event) => {
              setNewStatus(event.target.value)
            }}
          ></input>
  
          <button type="submit"> Create New Puppy </button>
        </form>
      </>
    )
  }
  
  
  export default AddAPup