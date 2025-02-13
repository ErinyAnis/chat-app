// export const host = import.meta.env.VITE_BACKEND_ROUTE_URL;
// export const host = "http://localhost:5000";
// export const host = import.meta.env.VITE_BACKEND_ROUTE_URL.replace(/\/$/, "");
export const host = import.meta.env.VITE_BACKEND_ROUTE_URL;

export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/api/auth/login`;
export const setAvatarRoute = `${host}/api/auth/setAvatar`;
export const allUsersRoute = `${host}/api/auth/allusers`;
export const sendMessageRoute= `${host}/api/messages/addmsg`;
export const getAllMessagesRoute= `${host}/api/messages/getmsg`;


