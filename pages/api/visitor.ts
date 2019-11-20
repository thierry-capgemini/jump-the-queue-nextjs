import {environment} from '../../environments/environment'
import fetch from 'isomorphic-unfetch'


 export default async (req, res) => {
     // Get data from your database
    
         const { visitor } = await req.body
     console.log('visitor was here', visitor)
     const baseUrl = environment.baseUrlRestServices;
     const url = `${baseUrl}/visitormanagement/v1/visitor`

     //try {
          //  const response = await fetch(url)
            const response = await fetch(url,{
             method: 'POST',
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
           }, 
           body: JSON.stringify(visitor)
    
           })

           if (response.status === 200) {
            // const { token } = await response.json()
             console.log('got here')
            // console.log(token);
            console.log(response);
      
            // await login({ token })  ok next step
            res.status(200).json(response)
          } else{
            console.log('not 200')
          }
      
         //  if (response.ok) {
      //       const { id } = await response.json()
      //       return res.status(200).json({ token: id })
      //     } else {
      //       // https://github.com/developit/unfetch#caveats
      //       // const error = new Error(response.statusText)
      //       // error.response = response
      //       // throw error
      //     }
       // } catch (error) {
      //     const { response } = error
      //     return response
      //       ? res.status(response.status).json({ message: response.statusText })
      //       : res.status(400).json({ message: error.message })
       //  }
     
     //res.status(200).json({token: '1'})
   }

  // export default (req, res) => {
  //   const {
  //     query: { id, name },
  //     method
  //   } = req

  //   const baseUrl = environment.baseUrlRestServices;

  //   `${baseUrl}/visitormanagement/v1/visitor`

  
  //   switch (method) {
  //     case 'GET':
  //       // Get data from your database
  //       res.status(200).json({ id, name: `User ${id}` })
  //       break
  //     case 'PUT':
  //       // Update or create data in your database
  //       res.status(200).json({ id, name: name || `User ${id}` })
  //       break
  //     default:
  //       res.setHeader('Allow', ['GET', 'PUT'])
  //       res.status(405).end(`Method ${method} Not Allowed`)
  //   }
  // }


  

// export default async (req, res) => {
//   const { visitor } = await req.body
//   console.log('visitor', visitor)
//   // const url = `https://api.github.com/users/${username}`
//   const baseUrl = environment.baseUrlRestServices;
//   const url = `${baseUrl}/visitormanagement/v1/visitor`

//   try {
//     const response = await fetch(url)

//     if (response.ok) {
//       const { id } = await response.json()
//       return res.status(200).json({ token: id })
//     } else {
//       // https://github.com/developit/unfetch#caveats
//       // const error = new Error(response.statusText)
//       // error.response = response
//       // throw error
//     }
//   } catch (error) {
//     const { response } = error
//     return response
//       ? res.status(response.status).json({ message: response.statusText })
//       : res.status(400).json({ message: error.message })
//   }
// }