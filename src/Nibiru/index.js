import React, {useContext, useEffect} from 'react'
import Navbar from '../components/Navbar'
import { NibiruContainer } from './NibiruStyles'
import Menu from '../components/Menu/Menu' 
import OpenMenu from '../components/Menu/OpenMenu'
import { Context } from '../components/Context/Context'
import NavbarOpen from '../components/Navbar/NavbarOpen'
import Scramble from 'text-scrambler'
import Akirapages from '../components/akirapages'

const  Nibiru = () => {
    const {tooglemenu} = useContext(Context);
    console.log("current tooglemenu -->", tooglemenu)
  
    return (
        <>
            <NibiruContainer>
                {tooglemenu ? <> <NavbarOpen/> <OpenMenu/> </>:  <> <Navbar/> <Menu/> </>}
            </NibiruContainer>

         {/*    <Scramble
            autoStart
            text="Scramble me!"
            steps={[
            {
                roll: 10,
                action: '+',
                type: 'all',
            },
            {
                action: '-',
                type: 'forward',
            },
            ]}
        /> */}
        </>
    )
}

export default  Nibiru
