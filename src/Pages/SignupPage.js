import React from 'react';
import Signup from '../Components/Signup'


const SignupPage = ({ onSignup }) => {
  return (
    <div>
      <h1>Signup Page</h1>
      <Signup onSignup={onSignup} />
    </div>
  );
};

export default SignupPage;
