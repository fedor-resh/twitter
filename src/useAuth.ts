import {create} from "zustand";

type IUser = {
    name: string;
    email: string;
};

interface AuthState {
    user: IUser | null;
    login: (user: IUser) => void;
    logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
    user: null,
    login: (user: IUser) => set({user}),
    logout: () => set({user: null}),
}));