interface SideBarProps{
  children:React.ReactNode;
}

export function SideBar(props : SideBarProps) {
  // Complete aqui
  return(

  <nav className="sidebar">
  <span>Watch<p>Me</p></span>
  {props.children}
  </nav>
  )

  
}