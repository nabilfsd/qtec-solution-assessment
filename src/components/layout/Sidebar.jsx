// images source
import chatIcon from "../../assets/images/sidebar/chat-icon.svg";
import calendarIcon from "../../assets/images/sidebar/calendar-icon.svg";
import dashboardIcon from "../../assets/images/sidebar/dashboard-icon.svg";
import googleMeetIcon from "../../assets/images/sidebar/google-meet-icon.svg";
import projectIcon from "../../assets/images/sidebar/project-icon.svg";
import settingIcon from "../../assets/images/sidebar/settings-icon.svg";
import supportIcon from "../../assets/images/sidebar/support-ticket-icon.svg";
import todoListIcon from "../../assets/images/sidebar/todo-list-icon.svg";
import userIcon from "../../assets/images/sidebar/user-icon.svg";
import themeChangeIcon from "../../assets/images/sidebar/theme-change-icon.svg";
import sidebarResizeBtn from "../../assets/images/sidebar/sidebar-resize-btn.svg";
import togglerIcon from "../../assets/images/sidebar/toggler-icon.svg";


const sidebarItemList = [
  {
    id: crypto.randomUUID(),
    title: "Dashboard",
    icon: dashboardIcon,
    hasChild: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Projects",
    icon: projectIcon,
    hasChild: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Todo List",
    icon: todoListIcon,
    hasChild: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Support Tickets",
    icon: supportIcon,
    hasChild: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Chat",
    icon: chatIcon,
    hasChild: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Appointments",
    icon: calendarIcon,
    hasChild: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Meet Generator",
    icon: googleMeetIcon,
    hasChild: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Users",
    icon: userIcon,
    hasChild: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Settings",
    icon: settingIcon,
    hasChild: true,
  }
];

const Sidebar = () => {
  return (
    // sidebar list
    <aside className="h-screen w-[236px] max-w-[236px] min-w-[236px] pt-9 border-r bg-card-bg border-border-bg overflow-auto fixed left-0 ">
      <nav className="h-full flex flex-col justify-between gap-3">
        {/* sidebar list */}
        <ul className="min-h-[450px] max-h-[450px] pt-[18px] overflow-auto">
          {sidebarItemList.map((item) => (
            <li
              key={item.id}
              className={`h-7 flex items-center gap-3 pl-4.5 pr-5.5 py-3 cursor-pointer hover:bg-active-bg-opacity ${item.title === "Chat"
                ? " bg-active-bg-opacity relative isolate z-5 after:absolute after:h-full after:w-1 after:content['*'] after:bg-active-bg after:right-0"
                : ""
                }`}
            >
              <img src={item.icon} alt={item.title} />
              <a
                href="#"
                className={`flex w-full justify-between items-center font-sora ${item.title === "Chat" ? "text-active-fg" : "text-primary-fg"
                  } leading-3 text-dashboard`}
              >
                {item.title}

                {item.hasChild && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="#141B34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>}
              </a>
            </li>
          ))}
        </ul>

        {/* sidebar-action-controller */}
        <div id="sidebar-action"
          className="h-[158px] flex flex-col justify-between pl-4.5 pr-5 bg-card-bg z-10"
        >
          <div id="theme-controller"
            className="flex flex-col justify-between gap-4.5">
            <div className="flex gap-6 items-center">
              <div className="flex gap-3 py-3">
                <img src={themeChangeIcon} alt="current-theme" />
                <span className="font-sora text-dashboard text- text-primary-fg">Dark Mode</span>
              </div>

              <div id="theme-toggler" className="">
                <img className="cursor-pointer" src={togglerIcon} alt="toggler" />
              </div>
            </div>

            <button className="h-[44px] w-[44px] mx-auto">
              <img src={sidebarResizeBtn} alt="sidebar-resize-btn" />
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
