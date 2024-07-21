import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Disable scroll when the component is mounted
    document.body.style.overflow = 'hidden';

    // Enable scroll when the component is unmounted
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleSignInWithGoogle = () => {
    // Implement sign-in with Google logic here
    alert('Signing in with Google...');
  };

  const handleSignInWithApple = () => {
    // Implement sign-in with Apple logic here
    alert('Signing in with Apple...');
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic here
    alert('Forgot password clicked...');
  };

  const handleSignUp = () => {
    // Implement sign up logic here or navigate to sign-up page
    alert('Navigate to sign up...');
    // Example: For navigation, use something like window.location.href = '/signup';
  };

  const handleSubmit = () => {
    if (!input) {
      setError('Please enter your phone, email, or username.');
    } else {
      setError('');
      alert('Proceeding to next step...');
      navigate('/dashboard'); // Navigate to the Dashboard component
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-sm bg-black p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <img 
            src="data:image/png;base64,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" 
            alt="Twitter Logo" 
            className="mx-auto mb-4 w-12 h-12"
          />
          <h1 className="text-3xl font-bold text-white mb-8">Sign in to Twitter</h1>
        </div>
        <button 
          className="w-full flex items-center justify-center rounded-full bg-white text-black font-bold py-3 px-4 mb-4 text-lg hover:bg-gray-200"
          onClick={handleSignInWithGoogle}
        >
          <img 
            src="data:image/jpeg;base64,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" 
            alt="Google Logo" 
            className="w-9 h-9 mr-2"
          />
          Sign in with Google
        </button>
        <button 
          className="w-full flex items-center justify-center rounded-full bg-white text-black font-bold py-3 px-4 mb-4 text-lg hover:bg-gray-200"
          onClick={handleSignInWithApple}
        >
          <img 
            src="data:image/png;base64,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" 
            alt="Apple Logo" 
            className="w-8 h-8 mr-2"
          />
          Sign in with Apple
        </button>
        <div className="flex items-center justify-center text-gray-400 mb-4">
          <div className="border-t border-gray-600 w-full mx-2"></div>
          <span className="px-2 text-lg">or</span>
          <div className="border-t border-gray-600 w-full mx-2"></div>
        </div>
        <input 
          type="text" 
          placeholder="Phone, email, or username" 
          className="w-full py-3 px-4 mb-4 rounded bg-black text-white border border-gray-600 focus:outline-none focus:border-blue-500 text-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button 
          className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded mb-4 text-lg hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Next
        </button>
        <button 
          className="w-full text-blue-500 font-bold py-3 px-4 mb-4 text-lg hover:underline"
          onClick={handleForgotPassword}
        >
          Forgot password?
        </button>
        <div className="text-center text-gray-400 text-lg">
          <span>Don't have an account?</span>
          <button 
            onClick={handleSignUp}
            className="text-blue-500 font-bold ml-1 hover:underline"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;



