import Header from "./Header"
import Sidebar from "./Sidebar"

const MainLayout = ({ children }) => {
  return (
    <div id='main-layout' className="h-screen">
      <Header />
      <div className="h-full w-full flex bg-container-bg">
        <Sidebar />
        <div id="main-content" className="h-full w-full flex flex-col pt-9 pl-[236px]">
        {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayout