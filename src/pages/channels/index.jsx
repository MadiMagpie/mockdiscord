import TopBar from "../../components/TopBar";
import NewMessage from "../../components/NewMessage";
import ChannelList from "../../components/ChannelList";
import Message from "@/components/Message";

export default function Channels(){
       return(
               <main className = "bg-white flex flex-col w-full h-screen overflow-hidden">
                     <TopBar/>
                     <div className = 'flex h-full w-full' >
                            <ChannelList/>
                            <div className = 'bg-themePaleBlue flex flex-col w-full h-full'>
                                   <div className = 'bg-themeMedBlue flex flex-col  p-3 items-end static'>
                                          <h2 className = 'text-lg text-theme'> Selected Channel</h2>
                                   </div>
                                   <div className = 'bg-themePaleBlue flex flex-col flex-grow overflow-auto'>
                                        <Message/>  
                                   </div>
                                   <NewMessage/>
                            </div>
                     </div>
              </main>
       )
}