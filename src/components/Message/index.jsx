export default function Message({ message, user }) {
       return (
       <div className = 'flex flex-col px-10 py-5 border-b-themeBlue/30 border-b-2'>
              <span className = 'text-sm font-bold pb-2'>Username</span>
              <p className = 'text-xl'>Message</p>
       </div>
       );
}