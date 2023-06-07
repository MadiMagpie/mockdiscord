export default function SendMessageForm({
  handleSubmit = (e) => {},
  handleChange = (e) => {},
  handleValue,
}) {
  return (
    <>
      <form
        action=""
        className=" w-full bg-themeDarkBlue fixed bottom-0 shadow-lg"
        onSubmit={handleSubmit}>
          <div className = 'flex flex-col space-y-5 p-5'>
            <div>
              <input 
              type = 'text'
              className = 'border-6 border-gray-300 rounded-lg px-2 py-1  mx-6'
              placeholder = 'Username'
              />
            </div>
            <div>
              <input
                type="text"
                className="border-6 border-gray-300 rounded-lg px-2 py-1 mx-6 lg:w-8/12 md:w-5/12"
                placeholder="Send a Message"
                value={handleValue}
                onChange={handleChange}
              />
              <button
                className = ' bg-themeRed text-white font-semibold tracking-wider px-5 py-1 rounded-lg mr-2'
                type="submit">
                Send
              </button>
            </div>
          </div>
        
      </form>
    </>
  );
}
