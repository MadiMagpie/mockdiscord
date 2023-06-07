import { FaPlus } from 'react-icons/fa'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getAllChannels } from "@/database";

function NewChannel({ closeNewChannel }) {
       const [channels, setChannels] = useState([]);
     
      //  useEffect(() => {
      //    axios.get('/api/channels').then((res) => {
      //      setChannels(res.data);
      //    });
      //  }, []);
     
       const postChannel = async (name) => {
         axios.post('/api/channels', { name }).then((res) => {
           setChannels([...channels, res.data]);
         });
       };
     
       return (
         <>
           <div className="bg-themeDarkBlue/50 backdrop-blur-md back flex items-center justify-center w-screen h-screen z-50 fixed">
             <div className="bg-themePaleBlue top-24 min-h-32 flex flex-col p-5 space-x-2 rounded-md justify-center">
               <span className="self-center pb-5 font-semibold text-lg text-themeDarkBlue">Create new channel</span>
               <form
                 style={{ margin: 0 }}
                 onSubmit={(e) => {
                   e.preventDefault();
                   const name = e.target.name.value;
                   postChannel(name);
                   e.target.name.value = '';
                 }}
               >
                 <input
                   type="text"
                   placeholder="Channel name"
                   name="name"
                   className="border-2 border-themeDarkBlue rounded-md w-full h-7 p-2"
                 />
                 <div className="flex pt-4 space-x-3 items-center justify-center">
                   <button
                     type="submit"
                     className="bg-themeRed text-white rounded-md w-40 h-7 font-bold shadow-md text-sm disabled:opacity-50"
                   >
                     Create channel
                   </button>
                   <button
                     onClick={closeNewChannel}
                     className="bg-themeRed/40 text-themeDarkBlue/50 rounded-md w-28 h-7 font-bold shadow-sm text-sm disabled:opacity-50"
                   >
                     Cancel
                   </button>
                 </div>
               </form>
             </div>
           </div>
         </>
       );
     }
     
     export default function ChannelList({channels}) {
       const [showNewChannel, setShowNewChannel] = useState(false);
       const [allChannels, setAllChannels] = useState(null);
     
      //  useEffect(() => {
      //    axios.get('/api/channels').then((res) => {
      //      setAllChannels(res.data);
      //    });
      //  }, []);
     
       function closeNewChannel() {
         setShowNewChannel(false);
       }
     
       function openNewChannel() {
         setShowNewChannel(true);
       }
     
       return (
         <>
           {showNewChannel && <NewChannel closeNewChannel={closeNewChannel} />}
           <div className="bg-themeMedBlue border-r-2 border-themeDarkBlue flex flex-col py-5 md:px-10 h-full md:w-60 w-32">
             <div className="flex space-x-5 items-center p-1 pb-5 md:flex-nowrap flex-wrap-reverse">
               <h2 className="text-2xl text-themePaleBlue font-bold">Channels</h2>
               <button
                 className="bg-themeRed p-1 rounded-md hover:bg-red-600 hover:scale-110 transition duration-300 ease-in-out shadow-md"
                 onClick={openNewChannel}
               >
                 <FaPlus className="text-white" size={18} />
               </button>
             </div>
             <ul>
               {/* {channels.map((channel) => (
                 <li key={channel.id}>
                   <Link href={`/channels/${channel.id}`}>
                     <a>{channel.name}</a>
                   </Link>
                 </li>
               ))} */}
             </ul>
           </div>
         </>
       );
     }

     export async function getServersideProps(context){
       const channels = await getAllChannels();
       const channelId = context.query.channelId; 
       return {
              props: {
                     //error serializing json data
                     channels : JSON.parse(JSON.stringify(channels))
              }
       }
}