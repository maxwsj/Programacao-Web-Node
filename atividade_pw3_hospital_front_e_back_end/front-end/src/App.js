import { Fragment } from 'react';
import './App.css';
import FormScreen from './screens/FormScreen';

function App() {
   return (
      <Fragment>
         <body>
            <div className='flex justify-center'>
               <FormScreen />
            </div>
         </body>
      </Fragment>
   );
}

export default App;
