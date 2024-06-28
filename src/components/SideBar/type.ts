export interface ISideBarProps {
    user: IUser;
}

export interface IUser {
    name: string;
    position: string;
    email: string;
    avatar: string;
    phone: string;
    birthday: string;
    address: string;
    socialLinks: Record<string, string>;
}