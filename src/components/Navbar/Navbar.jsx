import {
  NavbarTop,
  NavbarCenter,
  NavbarEnd,
  NavbarAnnouncement,
} from "./index";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    // START NAVBAR COMPONENT
    <div className="navbar">
      <NavbarAnnouncement />
      <NavbarTop />
      <NavbarCenter session={session} />
      <NavbarEnd />
    </div>
    // END NAVBAR COMPONENT
  );
};

export default Navbar;
