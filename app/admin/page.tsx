"use client";

import React, { useEffect, useState } from "react";

const ADMIN_PASSWORD = "hilltone123";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchBookings = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/bookings", {
        cache: "no-store",
      });

      const data = await res.json();
      setBookings(data.bookings || []);
    } catch (error) {
      alert("Failed to fetch bookings");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      fetchBookings();
    } else {
      alert("Wrong password");
    }
  };

  if (!isLoggedIn) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#070A14] px-6 text-white">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
        >
          <h1 className="font-serif text-5xl text-[#D7B46A]">
            Admin Login
          </h1>

          <p className="mt-4 text-white/60">
            Enter password to view Hilltone Resort bookings.
          </p>

          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-8 w-full rounded-2xl bg-white px-5 py-4 text-[#111827] outline-none"
          />

          <button
            type="submit"
            className="mt-5 w-full rounded-2xl bg-[#D7B46A] px-6 py-4 font-black uppercase tracking-widest text-[#111827]"
          >
            Login
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#070A14] p-6 text-white md:p-10">
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div>
          <h1 className="font-serif text-5xl text-[#D7B46A]">
            Hilltone Admin Panel
          </h1>

          <p className="mt-3 text-white/60">
            View all booking requests submitted from the website.
          </p>
        </div>

        <button
          onClick={fetchBookings}
          className="rounded-full bg-[#D7B46A] px-6 py-3 font-black uppercase tracking-widest text-[#111827]"
        >
          {loading ? "Loading..." : "Refresh"}
        </button>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5">
        <table className="w-full min-w-[900px]">
          <thead className="bg-white/10">
            <tr>
              <th className="p-5 text-left">Name</th>
              <th className="p-5 text-left">Phone</th>
              <th className="p-5 text-left">Room</th>
              <th className="p-5 text-left">Guests</th>
              <th className="p-5 text-left">Check In</th>
              <th className="p-5 text-left">Check Out</th>
              <th className="p-5 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td className="p-8 text-center text-white/60" colSpan={7}>
                  No bookings found.
                </td>
              </tr>
            ) : (
              bookings.map((booking) => (
                <tr key={booking._id} className="border-t border-white/10">
                  <td className="p-5">{booking.name}</td>
                  <td className="p-5">{booking.phone}</td>
                  <td className="p-5">{booking.room}</td>
                  <td className="p-5">{booking.guests || "-"}</td>
                  <td className="p-5">{booking.checkIn || "-"}</td>
                  <td className="p-5">{booking.checkOut || "-"}</td>
                  <td className="p-5">
                    {booking.createdAt
                      ? new Date(booking.createdAt).toLocaleDateString()
                      : "-"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}