
import logo from '../logo.svg'

export const ReactLogo = () => {
  return (
    <img
       style={{
        position:'fixed',
        bottom: '20px',
        right: '20px',
        width:'100px',
        zIndex:999
       }}  
       src={logo} alt='Logo react'/>
  )
}
