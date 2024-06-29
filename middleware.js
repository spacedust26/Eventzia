export {default} from "next-auth/middleware";
export const config = {matcher : ["/dashboard", "/cancel", "/sucess", "/dashboard/:path*"]};