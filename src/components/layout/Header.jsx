// images source
import catalogueImg from "../../assets/images/header/catalogue.svg";
import ChevronDown from "../../assets/images/header/chevron-down.svg";
import userAvatar from "../../assets/images/header/user-avatar.svg";
import userInfoDivider from "../../assets/images/header/user-info-divider.svg";
import userNotification from "../../assets/images/header/user-notification.svg";

const Header = () => {
  return (
    <header className="w-full h-9 flex items-center align-middle bg-card-bg fixed top-0 overflow-hidden isolate z-10">
    
    <div
        id="header-placeholder"
        className="w-[236px] min-w-[236px] bg-container-bg h-full"
      />

      <div
        id="header-wrapper"
        className="w-full h-full p-4 overflow-hidden flex items-center align-middle justify-between border-b border-border-bg "
      >
        <div
          id="menu-panel"
          className="flex items-center align-middle justify-between gap-2.5 cursor-pointer"
        >
          <img className="h-5 w-5" src={catalogueImg} alt="catalogue" />

          <h4 className="font-sora font-semibold leading-5 text-base">
            Solar Power Revolution
          </h4>

          <img className="h-4.5 w-4.5" src={ChevronDown} alt="arrow-down" />
        </div>

        <div
          id="user-panel"
          className="flex gap-3 justify-between items-center"
        >
          <img className="h-5 w-5" src={userNotification} alt="notification" />

          <img src={userInfoDivider} alt="divider" />

          <div id="user-info" className="flex flex-col">
            <strong className="font-sora text-base text-primary-fg">
              Mr Admin
            </strong>

            <span className="font-inter text-xs text-primary-fg">
              Electric Motor Repairer
            </span>
          </div>

          <img
            className="h-6.5 w-6.5 rounded-full"
            src={userAvatar}
            alt="user-avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
