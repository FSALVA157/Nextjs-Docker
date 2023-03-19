
interface IProps{
  children: JSX.Element | JSX.Element[]
}


export const DarkLayout = ({children}: IProps) => {
  return (
    <div
        style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: '10px',
            borderRadius: '5px'
        }}
    >
        {children}
    </div>
  )
}
