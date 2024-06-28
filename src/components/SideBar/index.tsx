import { FC, useState } from "react";
import { ISideBarProps, IUser } from "./type";
import myAvatarPlaceHolder from "@/assets/avatar-4.png";
import "./styles.scss";
import { Icon } from "@iconify/react";
import classNames from "classnames";

const SideBar: FC<ISideBarProps> = ({ user }) => {
  const [isExtraContentVisible, setIsExtraContentVisible] =
    useState<Boolean>(true);

  const handleExtraContentVisibility = () => {
    setIsExtraContentVisible(!isExtraContentVisible);
  };

  const extraContentComputedClassName = classNames("cardWrapper", {
    extraContentVisible: isExtraContentVisible,
  });

  return (
    <div className={extraContentComputedClassName}>
      <MainContent
        user={user}
        avatarImage={myAvatarPlaceHolder}
        handleAdditionalContent={handleExtraContentVisibility}
      />
      {isExtraContentVisible && <HiddenContent user={user} />}
    </div>
  );
};

interface LMainContentProps {
  user: IUser;
  avatarImage: string;
  handleAdditionalContent: () => void;
}

interface LHiddenContentProps {
  user: IUser;
}

const MainContent: FC<LMainContentProps> = ({
  user: { name, position },
  avatarImage,
  handleAdditionalContent,
}) => {
  return (
    <div className="mainContent">
      <figure className="avatarWrapper">
        <img src={avatarImage} alt="avatar" />
      </figure>
      <section className="cardContent">
        <div className="cardContentTitle">{name}</div>
        <div className="cardContentSubtitle">{position}</div>
      </section>
      <div className="hiddenContentActivator" onClick={handleAdditionalContent}>
        <Icon icon="fa6-solid:chevron-down" className="hiddenContentActivatorIcon"/>
        <p className="hiddenContentActivatorText">Show more</p>
      </div>
    </div>
  );
};

const HiddenContent: FC<LHiddenContentProps> = ({
  user: { email, phone, address, socialLinks, birthday },
}) => {
  return (
    <div className="hiddenContent">
      <div className="separator"></div>
      <ul className="contactList">
        <li className="contactListItem">
          <div className="contactIconWrapper">
            <Icon icon="ion:mail-outline" />
          </div>
          <div className="contactInfo">
            <p className="contactTitle">Email</p>
            <a href={`mailto:${email}`} className="contactLink">
              {email}
            </a>
          </div>
        </li>
        <li className="contactListItem">
          <div className="contactIconWrapper">
            <Icon icon="ion:phone-portrait-outline" />
          </div>
          <div className="contactInfo">
            <p className="contactTitle">Phone</p>
            <a href={`tel:${phone}`} className="contactLink">
              {phone}
            </a>
          </div>
        </li>
        <li className="contactListItem">
          <div className="contactIconWrapper">
            <Icon icon="ion:calendar-outline" />
          </div>
          <div className="contactInfo">
            <p className="contactTitle">Birthday</p>
            <p className="contactLink">{birthday}</p>
          </div>
        </li>
        <li className="contactListItem">
          <div className="contactIconWrapper">
            <Icon icon="ion:location-outline" />
          </div>
          <div className="contactInfo">
            <p className="contactTitle">Address</p>
            <p className="contactLink">{address}</p>
          </div>
        </li>
      </ul>
      <div className="separator"></div>
      <div className="socialLinkList">
        {Object.entries(socialLinks).map(([key, value]) => (
          <a
            key={key}
            href={value}
            target="_blank"
            rel="noreferrer"
            className="socialLink"
            title={`${key} profile`}
          >
            <Icon icon={`ion:logo-${key}`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
