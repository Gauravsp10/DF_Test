const loginPage = () => {
    return (
      <div
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/Images/loginpage.png')" }} // Ensure the path is correct
      >
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-sm w-full flex flex-col items-center">
          <img src='/public/Images/digitalFlakelogo.png' alt="Logo" className="mb-4 w-30 h-20" /> 
          {/* Adjust the logo path and size */}
          
          {/* Welcome Text */}
          <h2 className="text-m font-light mb-6 text-center">
            Welcome to Digital Flake Admin
          </h2>
  
          <form className="w-full">
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Email Id
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your email"
              />
            </div>
  
            {/* Password Input */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
              
              {/* Forgot Password Link */}
              <div className="text-right mt-2">
                <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">
                  Forgot Password?
                </a>
              </div>
            </div>
  
            {/* Sign In Button */}
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default loginPage;
  