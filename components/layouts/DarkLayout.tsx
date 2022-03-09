import { FC } from "react"

export const DarkLayout:FC = ({children}) => {
  return (
    <div style={{
        backgroundColor:'rgba(0,0,0,0.3)',
        borderRadius: '15px',
        padding: '10px'
    }}>
        <h3>Dark-layout</h3>
        <div>
           {children} 
        </div>
        
        </div>
  )
}
