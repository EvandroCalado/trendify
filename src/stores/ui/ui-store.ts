import { create } from 'zustand';

type MenuState = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export const useUiStore = create<MenuState>()((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));
