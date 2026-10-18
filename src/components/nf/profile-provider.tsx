"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { DATA, type Profile } from "@/data/resume";

type ProfileId = Profile["id"];

interface ProfileContextType {
  profile: Profile | null;
  hydrated: boolean;
  setProfile: (id: ProfileId) => void;
  clearProfile: () => void;
}

const STORAGE_KEY = "nf-profile";
const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [id, setId] = useState<ProfileId | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ProfileId | null;
      if (saved && DATA.profiles.some((p) => p.id === saved)) setId(saved);
    } catch {}
    setHydrated(true);
  }, []);

  const setProfile = (next: ProfileId) => {
    setId(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  };

  const clearProfile = () => {
    setId(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const profile = DATA.profiles.find((p) => p.id === id) ?? null;

  return (
    <ProfileContext.Provider value={{ profile, hydrated, setProfile, clearProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used within ProfileProvider");
  return ctx;
}
