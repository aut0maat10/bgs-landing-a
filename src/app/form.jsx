import { useState } from 'react';

export default function Form() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async event => {
    event.preventDefault()
    console.log(JSON.stringify(inputs))
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    try {
      const payload = JSON.stringify(inputs)
      const response = await fetch(process.env.NEXT_PUBLIC_FORM_API_URL, {
        method: 'POST',
        body: payload,
        headers: myHeaders
      }) 
      console.log(response)
      // const response = fetch(import.meta.env.VITE_FORM_API_URL, payload, {headers: {'Content-Type': 'application/json'}})
      // formSubmitted.value = true
    } catch(error) {
      console.log(error.message)
    }  
  }
  return (
    <div className="form-container text-center py-8 px-4 w-full">
      <h2 className="text-3xl font-bold mb-12">Questions? Send a message!</h2>
      <form className="flex flex-col content-center flex-wrap" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input
            name="firstname"
            type="text"
            placeholder="First Name"
            className="input input-bordered input-primary w-full max-w-sm mb-8"
            value={inputs.firstname || ""} 
            onChange={handleChange} 
            required
          />
          <input
            name="lastname"
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-primary w-full max-w-sm mb-8"
            value={inputs.lastname || ""} 
            onChange={handleChange}  
          />
        </div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="input input-bordered input-primary w-full max-w-lg mb-8" 
          value={inputs.email || ""} 
          onChange={handleChange} 
          onInvalid={F => F.target.setCustomValidity('Please enter a valid email')} 
          onInput={F => F.target.setCustomValidity('')} 
          required
        />
        <textarea 
          className="textarea textarea-primary max-w-lg h-32 mb-8" 
          placeholder="Message" 
          required
        >
        </textarea>
        <div className='text-center'>
          <input 
            type="submit" 
            value="Send Message"
            className="btn btn-primary bg-primary max-w-xs mb-8"
          />
          </div>
        {/* <button className="btn btn-outline btn-primary">Send</button> */}
      </form>
    </div>
    
//     {/* <label className="input input-bordered flex items-center gap-2">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 16 16"
//     fill="currentColor"
//     className="h-4 w-4 opacity-70">
//     <path
//       d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//     <path
//       d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//   </svg>
//   <input type="text" className="grow" placeholder="Email" />
// </label>
// <label className="input input-bordered flex items-center gap-2">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 16 16"
//     fill="currentColor"
//     className="h-4 w-4 opacity-70">
//     <path
//       d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//   </svg>
//   <input type="text" className="grow" placeholder="Username" />
// </label>
// <label className="input input-bordered flex items-center gap-2">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 16 16"
//     fill="currentColor"
//     className="h-4 w-4 opacity-70">
//     <path
//       fillRule="evenodd"
//       d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//       clipRule="evenodd" />
//   </svg>
//   <input type="password" className="grow" value="password" />
// </label> */ }
  )
}