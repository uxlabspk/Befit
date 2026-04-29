"use client";

import { useState } from "react";
import { useAuth } from "@/lib/useAuth";

const navLinks = ["Programs", "Features", "Pricing", "About"];

function getInitials(name: string | null): string {
  if (!name) return "U";
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function Navigation() {
  const { user, isLoading, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-white/[0.95] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="block text-lg font-bold tracking-tighter">
          BE-FIT
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--foreground)]/[0.6]">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-[var(--foreground)] after:transition-all after:duration-200 hover:text-[var(--foreground)] hover:after:w-full transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-sm font-medium">
          {isLoading ? (
            <div className="h-8 w-8 animate-pulse rounded-full bg-[var(--foreground)]/10" />
          ) : user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 rounded-full p-1 transition hover:bg-[var(--foreground)]/5"
              >
                {user.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt={user.fullName ?? user.email}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--foreground)] text-xs font-medium text-white">
                    {getInitials(user.fullName)}
                  </div>
                )}
              </button>

              {dropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setDropdownOpen(false)}
                  />
                  <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-md border border-[var(--border)] bg-white py-1 shadow-lg">
                    <div className="px-4 py-2 text-xs text-[var(--foreground)]/50 border-b border-[var(--border)]">
                      {user.fullName ?? user.email}
                    </div>
                    <a
                      href="/profile"
                      className="block px-4 py-2 text-sm text-[var(--foreground)]/70 hover:bg-[var(--foreground)]/5"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </a>
                    <a
                      href="/settings"
                      className="block px-4 py-2 text-sm text-[var(--foreground)]/70 hover:bg-[var(--foreground)]/5"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Settings
                    </a>
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        logout();
                      }}
                      className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-[var(--foreground)]/5"
                    >
                      Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <>
              <a
                href="/login"
                className="rounded px-4 py-2 text-[var(--foreground)]/[0.6] transition hover:text-[var(--foreground)]"
              >
                Login
              </a>
              <a
                href="/signup"
                className="rounded-md bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--foreground)]/[0.9]"
              >
                <span className="text-white">Join Now</span>
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
