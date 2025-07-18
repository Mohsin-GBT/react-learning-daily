import React, { useState } from 'react'

const Controlled_Component = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState(null); // new state to show submitted result

  function Submit(event) {
    event.preventDefault(); // Prevent form reload
    setSubmittedData({
      name,
      password,
      email
    });}
  return (
    <>
    <div className="container m-5">
    <h1>Controlled Component</h1>
    <form action="">
      <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='name' /> <br /><br />
      <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder='password' /><br /><br />
      <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='email' /><br /><br />

      <button className='' onClick={Submit}>Submit</button> <br /><br />
      <button onClick={()=>{setName('');setPassword('');setEmail('');setSubmittedData(null)}}>Clear</button>
    </form>
     {/* Show result below after submission */}
        {submittedData && (
          <div style={{ marginTop: '20px' }}>
            <h1>Submitted Data:</h1>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Password:</strong> {submittedData.password}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default Controlled_Component;