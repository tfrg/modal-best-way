'use client';

import React from 'react';
import { create } from 'zustand';
import { Dialog } from '@/components/ui/dialog';

interface ModalState {
  isOpen: boolean;
  children: React.ReactNode;
  openModal: ({ children }: { children: React.ReactNode }) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  isOpen: false,
  children: null,
  openModal: ({ children }) => set({ children, isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export default function Modal() {
  const isOpen = useModalStore((state) => state.isOpen);
  const closeModal = useModalStore((state) => state.closeModal);
  const children = useModalStore((state) => state.children);

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      {children}
    </Dialog>
  );
}
