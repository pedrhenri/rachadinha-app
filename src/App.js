/* src/App.js */
import React, { useEffect } from 'react'
import { Amplify } from 'aws-amplify'
//import { createTodo } from './graphql/mutations'
//import { listTodos } from './graphql/queries'
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from "./aws-exports";
import BottomNavBar from './custom-components/BottomNavBar';
import NavigationContextProvider from './contexts/NavigationContext';
import PageContent from './custom-components/PageContent';

// import {
// import { MdOutlineAccountCircle } from 'react-icons/md';
//Timport { NavigationContext } from './contexts/NavigationContext';

//  } from './ui-components';
Amplify.configure(awsExports);

//const initialState = { name: '', description: '' }

const App = ({ signOut, user }) => {
  //const [formState, setFormState] = useState(initialState)
  //const [todos, setTodos] = useState([])

  useEffect((  ) => {  }, [  ])

  return (
    <div className='flex flex-col h-screen w-full'>
      <NavigationContextProvider>        
        <PageContent/>        
        <BottomNavBar/>
      </NavigationContextProvider>
    </div>
  )
}

// const styles = {
//   container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
//   todo: { marginBottom: 15 },
//   input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
//   todoName: { fontSize: 20, fontWeight: 'bold' },
//   todoDescription: { marginBottom: 0 },
//   button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
// }

export default withAuthenticator(App);