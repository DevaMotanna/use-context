
import { createContext, useState } from "react";
import { Profile } from "./Profile";
import { EditUser } from "./EditUser";

export const UserContext = createContext({});

export function UserDashboard() {
  const [user, setUser] = useState({ name: "Deva", age: 29 });
  return (
    <div>
      <UserContext.Provider value={user}>
        <Profile />
        <EditUser user={user} setUser={setUser} />
      </UserContext.Provider>
    </div>
  );
}
