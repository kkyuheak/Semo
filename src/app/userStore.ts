import { IEducation } from "@/actions/getArtList";
import getCurrentUser, { ICurrentUser } from "@/actions/getCurrentUser";

import { create } from "zustand";

interface userInfo {
  user: ICurrentUser;
  setUser: (user: ICurrentUser) => void;
  resetUser: () => void;
}

let defaultState: ICurrentUser;

export const useUserStore = create<userInfo>((set) => ({
  user: defaultState,

  setUser: (user) => set({ user: user }),
  resetUser: () => set({ user: defaultState }),
}));
