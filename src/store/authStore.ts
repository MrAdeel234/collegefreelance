import { create } from "zustand";

type UserType = "student" | "client" | null;

interface AuthState {
  isLoggedIn: boolean;
  userType: UserType;
  login: (type: UserType) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: localStorage.getItem("userType") ? true : false,
  userType: (localStorage.getItem("userType") as UserType) || null,
  login: (type) => set({ isLoggedIn: true, userType: type }),
  logout: () => {
    // Clear the localStorage
    localStorage.removeItem("userType");

    // Update the state
    set({ isLoggedIn: false, userType: null });

    window.location.href = '/';
  },
}));
