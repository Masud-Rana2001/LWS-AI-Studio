
function WelcomeLogin({submitted, setSubmitted,name, setName}) {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      setSubmitted(true);
    }
    localStorage.setItem("user-name",name)
  };

  return (
    <div className="relative flex items-center justify-center h-svh bg-[url('https://picsum.photos/1200/800')] bg-cover">
      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>

      {/* Centered Form / Welcome */}
      <div className="relative z-10 bg-white/60 backdrop-blur-md py-10 px-6 rounded-2xl shadow-lg w-88  text-center">
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4 text-[#230D17]">Welcome to LWS AI Studio </h2>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-lg mb-4 text-[#230D17] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        ) : (
          <h2 className="text-2xl font-bold text-gray-800">
            👋 Welcome, {name}!
          </h2>
        )}
      </div>
    </div>
  );
}

export default WelcomeLogin;
