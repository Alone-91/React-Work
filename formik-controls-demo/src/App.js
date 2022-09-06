import logo from './logo.svg';
import './App.css';
import FormikContainer from './components/FormikContainer';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import EnrollmentForm from './components/EnrollmentForm';
import { theme, ChakraProvider } from '@chakra-ui/react';
function App() {
  return (
    <div className="App">
      {/* <ChakraProvider theme={theme}> */}
      {/* <FormikContainer /> */}
      {/* <LoginForm /> */}
      <RegistrationForm />
      {/* <EnrollmentForm /> */}
      {/* </ChakraProvider> */}
    </div>
  );
}

export default App;
