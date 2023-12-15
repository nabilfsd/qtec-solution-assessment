import Header from "./Header"
import Sidebar from "./Sidebar"

const MainLayout = ({ children }) => {
  return (
    <div id='main-layout' className="h-screen">
      <Header />
      <div className="h-full w-full flex bg-container-bg overflow-hidden">
        <Sidebar />
        <div id="main-content" className="h-full w-full flex flex-col pt-9 pl-[236px] overflow-hidden">
        {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayout