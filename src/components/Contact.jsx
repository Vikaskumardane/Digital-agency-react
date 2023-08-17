import React from 'react'

const Contact= ()=> {
  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>

        <form >
          <div>
            <label >Name:<span style={{
              color:"red"
            }}>*</span></label>
            <input type="text" required placeholder='Enter Name' />
          </div>

          <div>
            <label >Email:<span style={{
              color:"red"
            }}>*</span></label>
            <input type="email" required placeholder='Enter Mail id ' />
          </div>

          <div>
            <label >Phone No:<span style={{
              color:"red"
            }}>*</span></label>
            <input type="number" required placeholder='Enter Phone Number' />
          </div>

          <div>
            <label >Message:<span style={{
              color:"red"
            }}>*</span></label>
            <input type="test area" required placeholder='Enter Your Message......' />
          </div>


          <button type="submit">Send</button>
        </form>
      </main>
      </div>
  )
}

export default Contact 