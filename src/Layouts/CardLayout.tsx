import SideBar from "@/components/SideBar";
import { ISideBarProps } from "@/components/SideBar/type";
import { Outlet } from "react-router-dom";

const Payload: ISideBarProps = {
  user: {
    name: "Zuhail Khan",
    position: "Software Engineer",
    email: "zuhail@gmail.com",
    avatar: "https://via.placeholder.com/150",
    phone: "+923000000000",
    birthday: "1990-01-01",
    address: "123 Main St, Anytown, USA",
    socialLinks: {
      facebook: "https://www.facebook.com/zuhail",
      twitter: "https://www.twitter.com/zuhail",
      instagram: "https://www.instagram.com/zuhail",
      linkedin: "https://www.linkedin.com/in/zuhail",
    },
  },
};

const CardLayout = () => {
  return (
    <div className="CardLayoutWrapper">
      <aside className="SideBarWrapper">
        <SideBar user={Payload.user} />
      </aside>
      <section className="OutletWrapper">
        <Outlet />
      </section>
    </div>
  );
};

export default CardLayout;
