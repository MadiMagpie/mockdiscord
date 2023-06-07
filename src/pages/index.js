import Message from '../components/Message'
import NewMessage from '../components/NewMessage'
import TopBar from '../components/TopBar'
import ChannelList from '../components/ChannelList'

export default function Home() {
  return (
    <main className = "bg-white flex flex-col w-full h-screen overflow-hidden">
      <TopBar/>
      <div className = 'flex h-full w-full' >
        <ChannelList/>
        <div className = 'bg-themePaleBlue flex flex-col justify-center items-center w-full h-full'>
          <p className = 'font-semibold text-2xl text-themeBlue'>
            Create a channel or select one to start chatting
          </p>
        </div>
      </div>
    </main>
  )
}
