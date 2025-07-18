import React from 'react'
import Header from './components/Header'
import Counter from './components/Counter'
import Controlled_Component from './components/Controlled_Component'

const App = () => {
  return (
    <>
 {/* <Header/> */}
 {/* <Counter/> */}
 <Controlled_Component/>
    </>
  )
}

export default App















// import React, { useState } from 'react'

// const App = () => {
//   const [username, setusername] = useState('');
//   const submithandler = (e) => {
//     e.preventDefault()
//     console.log(username)
//     setusername('')
//   }
//   // const changeUser = () => {
//   //   setuser('user2')
//   // }
//   return (
//     <div className="container">
//       {/* <h1>user name is {user}</h1>
//       <button onClick={changeUser}>change</button>
//       <h1 class="text-3xl font-bold underline">
//         Hello world!
//       </h1> */}
//       <form onSubmit={(e) => {
//         submithandler(e)
//       }}>
//         <input value={username} onChange={(e) => {
//           setusername(e.target.value)
//         }} type="text" className='px-4 py-3 rounded text-xl m-5 bg-white text-black' />
//         <button className="px-4 text-xl bg-emerald-600">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App