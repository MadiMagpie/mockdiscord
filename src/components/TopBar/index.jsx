import { SiDiscord } from 'react-icons/si'
import { useRouter } from 'next/router'

export default function TopBar() {
       const r = useRouter();
       return(
              <div className = 'bg-themeDarkBlue w-full pl-9'>
                     <div className = ' hoverEffect w-52 space-x-3  flex p-1 justify-start items-center' onClick = {() => r.push('/')}>
                            <SiDiscord className = 'text-themePaleBlue' size = {22}/>
                            <h1 className = 'text-themePaleBlue font-bold text-2xl'> Mock Discord </h1>
                     </div>
              </div>
       )
}