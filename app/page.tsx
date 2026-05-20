"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Wifi,
  Dumbbell,
  Utensils,
  Mountain,
  Gamepad2,
  MapPin,
  Star,
  MessageCircle,
  ShieldCheck,
  Users,
  Coffee,
  Menu,
  X,
  Sun,
  Moon,
  CalendarDays,
  CreditCard,
  Play,
  Phone,
  Mail,
} from "lucide-react";

const phone = "918744044411";

const images = {
  hero1: "/images/hill-front.jpg",
  hero2: "/images/hill.jpg",
  hero3: "/images/hill-entrance.jpg",
  entrance: "/images/hill-entrance.jpg",
  dining: "/images/hill-dining.jpg",
  room1: "/images/hill-bed.jpg",
  room2: "/images/hill-bed.webp",
  room3: "/images/hill-bed2.jpg",
  gym: "/images/hill-gym.jpg",
  play: "/images/hill-indore-play.jpg",
  garden: "/images/hill.jpg",
  lobby: "/images/hill-lobby.jpg",
};

const heroSlides = [images.hero1, images.hero2, images.hero3];

const rooms = [
  {
    name: "Family Suite",
    price: "₹8,499",
    image: images.room3,
    desc: "Spacious family-friendly suite with comfort and premium mountain views.",
  },
  {
    name: "Deluxe Room",
    price: "₹4,999",
    image: images.room1,
    desc: "Elegant room with cozy interiors and peaceful ambience.",
  },
  {
    name: "Super Deluxe Room",
    price: "₹6,499",
    image: images.room2,
    desc: "Premium room with refined interiors and extra comfort.",
  },
  {
    name: "Luxury Room",
    price: "₹7,999",
    image: images.lobby,
    desc: "Luxury stay designed for guests who want style and comfort.",
  },
];

const features = [
  { icon: Mountain, title: "Mountain View", text: "Peaceful Himalayan surroundings." },
  { icon: Users, title: "Family Friendly", text: "Perfect for families and groups." },
  { icon: Coffee, title: "Fine Dining", text: "Warm restaurant ambience." },
  { icon: ShieldCheck, title: "Premium Care", text: "Comfortable and clean stay." },
];

const amenities = [
  { icon: Wifi, title: "Free WiFi" },
  { icon: Dumbbell, title: "Fitness Center" },
  { icon: Utensils, title: "Restaurant" },
  { icon: Gamepad2, title: "Indoor Games" },
  { icon: Mountain, title: "Mountain View" },
  { icon: MapPin, title: "Prime Location" },
];

const gallery = [
  images.hero1,
  images.entrance,
  images.room1,
  images.room2,
  images.room3,
  images.dining,
  images.lobby,
  images.gym,
  images.play,
  images.garden,
];

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  show: { opacity: 1, y: 0 },
};

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [slide, setSlide] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<(typeof rooms)[0] | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    room: "Family Suite",
  });

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 180]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const sendBooking = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      });
  
      const message = `New Booking Request%0A%0AName: ${booking.name}%0APhone: ${booking.phone}%0ARoom: ${booking.room}%0AGuests: ${booking.guests}%0ACheck In: ${booking.checkIn}%0ACheck Out: ${booking.checkOut}`;
  
      window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  
      alert("Booking request saved successfully!");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  const theme = dark
    ? "bg-[#070A14] text-white"
    : "bg-[#F8F3EA] text-[#111827]";

  return (
    <main className={`min-h-screen overflow-hidden transition ${theme}`}>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#070A14]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="font-serif text-5xl text-[#D7B46A] md:text-7xl">
                Hilltone Resort
              </h1>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.55em] text-white/60">
                Luxury Manali Stay
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={`https://wa.me/${phone}`}
        target="_blank"
        className="fixed bottom-6 right-6 z-[999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
      >
        <MessageCircle size={30} />
      </a>

      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/25 px-6 py-5 backdrop-blur-xl md:px-14">
        <a href="#" className="text-sm font-black tracking-[0.35em] text-white">
          HILLTONE
        </a>

        <div className="hidden items-center gap-9 text-sm font-medium text-white/80 md:flex">
          <a href="#about" className="hover:text-[#D7B46A]">About</a>
          <a href="#rooms" className="hover:text-[#D7B46A]">Rooms</a>
          <a href="#gallery" className="hover:text-[#D7B46A]">Gallery</a>
          <a href="#booking" className="hover:text-[#D7B46A]">Booking</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="rounded-full bg-white/10 p-3 text-white"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#booking"
            className="hidden rounded-full bg-[#D7B46A] px-6 py-3 text-xs font-black uppercase tracking-widest text-[#111827] transition hover:scale-105 hover:bg-white md:inline-flex"
          >
            Book Now
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full bg-white/10 p-3 text-white md:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            className="fixed left-4 right-4 top-20 z-40 rounded-[2rem] bg-[#070A14]/95 p-6 text-white shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-5 text-lg">
              {["about", "rooms", "gallery", "booking"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="capitalize"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative flex min-h-screen items-center justify-center px-6">
      <motion.div style={{ y: heroY }} className="absolute inset-0">
  <AnimatePresence mode="wait">
    <motion.img
      key={heroSlides[slide]}
      src={heroSlides[slide]}
      alt="Hilltone Resort"
      initial={{ opacity: 0, scale: 1.12 }}
      animate={{ opacity: 1, scale: 1.03 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1 }}
      className="h-full w-full object-cover"
    />
  </AnimatePresence>
</motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-[#070A14]" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl text-center text-white"
        >
          <motion.p
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mb-5 text-xs font-black uppercase tracking-[0.55em] text-[#D7B46A]"
          >
            Luxury Himalayan Resort
          </motion.p>

          <h1 className="font-serif text-[16vw] font-light leading-[0.85] sm:text-[14vw] md:text-[9vw]">
            HILLTONE
            <br />
            RESORT
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            Premium mountain resort experience in Manali with luxury rooms,
            fine dining, indoor recreation, and unforgettable Himalayan views.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#rooms"
              className="rounded-full bg-[#D7B46A] px-8 py-4 text-sm font-black uppercase tracking-widest text-[#111827] transition hover:scale-105 hover:bg-white"
            >
              Explore Rooms
            </a>
            <button className="flex items-center gap-3 rounded-full border border-white/25 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition hover:bg-white hover:text-[#111827]">
              <Play size={18} /> Watch Preview
            </button>
          </div>
        </motion.div>
      </section>

      <section className="relative z-20 mx-auto -mt-16 max-w-6xl px-6">
        <div className="grid gap-4 rounded-[2rem] border border-white/70 bg-white/95 p-5 text-[#111827] shadow-2xl backdrop-blur-xl sm:grid-cols-2 md:grid-cols-4">
          {["4 Room Categories", "Mountain View", "Family Friendly", "Direct Booking"].map((item) => (
            <div key={item} className="rounded-2xl bg-[#F8F3EA] p-6 text-center">
              <p className="font-serif text-3xl">★</p>
              <p className="mt-2 text-sm font-black uppercase tracking-widest text-[#B68A3A]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-2 md:px-14">
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="overflow-hidden rounded-[3rem] shadow-2xl"
        >
          <img
            src={images.entrance}
            alt="Resort"
            className="h-[560px] w-full object-cover transition duration-700 hover:scale-110"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.4em] text-[#B68A3A]">
            About Hilltone
          </p>
          <h2 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">
            A peaceful luxury stay in Manali.
          </h2>
          <p className="mt-8 text-lg leading-9 opacity-70">
            Hilltone Resort blends comfort, nature, warm hospitality, and premium
            interiors to create an unforgettable mountain experience.
          </p>
        </motion.div>
      </section>

      <section className="bg-[#EFE3CF] px-6 py-28 text-[#111827] md:px-14">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            variants={fadeUp}
            transition={{ duration: 0.9 }}
            className="mb-14 text-center"
          >
            <p className="text-sm font-black uppercase tracking-[0.4em] text-[#B68A3A]">
              Experience
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-5xl md:text-7xl">
              Designed for a memorable mountain escape.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-4">
            {features.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="rounded-[2rem] bg-white p-8 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <Icon className="text-[#B68A3A]" size={38} />
                <h3 className="mt-6 text-xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-[#666]">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="rooms" className="bg-[#0B1020] px-6 py-32 text-white md:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="text-sm font-black uppercase tracking-[0.4em] text-[#D7B46A]">
              Rooms & Suites
            </p>
            <h2 className="mt-4 font-serif text-5xl md:text-7xl">
              Stay beautifully.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {rooms.map((room, i) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                onClick={() => setSelectedRoom(room)}
                className="group cursor-pointer overflow-hidden rounded-[2rem] bg-white text-[#111827] shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-96 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-3 flex gap-1 text-[#D7B46A]">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <h3 className="font-serif text-3xl">{room.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{room.desc}</p>
                  <div className="mt-7 flex items-center justify-between">
                    <p className="text-xl font-black">
                      {room.price}
                      <span className="text-sm font-normal text-gray-500"> / night</span>
                    </p>
                    <button className="rounded-full bg-[#D7B46A] p-4 text-[#111827]">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-sm font-black uppercase tracking-[0.4em] text-[#B68A3A]">
              Amenities
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-5xl md:text-7xl">
              Everything for a comfortable stay.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="rounded-[2rem] border border-[#E5D5B8] bg-white p-8 text-[#111827] shadow-xl transition hover:-translate-y-2 hover:bg-[#111827] hover:text-white"
              >
                <Icon className="text-[#B68A3A]" size={36} />
                <h3 className="mt-6 text-xl font-black">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid overflow-hidden bg-[#EADCC7] text-[#111827] md:grid-cols-2">
        <div className="flex flex-col justify-center p-10 md:p-24">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-[#B68A3A]">
            Dining
          </p>
          <h2 className="mt-4 font-serif text-5xl md:text-7xl">
            Food, comfort, and warm ambience.
          </h2>
          <p className="mt-7 text-lg leading-9 text-[#555]">
            Enjoy delicious cuisine in a peaceful restaurant setting designed
            for families, couples, and travellers.
          </p>
        </div>
        <img src={images.dining} alt="Dining" className="h-[600px] w-full object-cover" />
      </section>

      <section id="gallery" className="px-6 py-32 md:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-black uppercase tracking-[0.4em] text-[#B68A3A]">
              Resort Gallery
            </p>
            <h2 className="mt-4 font-serif text-5xl md:text-7xl">
              Discover Hilltone.
            </h2>
          </div>

          <div className="grid auto-rows-[250px] gap-5 sm:grid-cols-2 md:grid-cols-4">
            {gallery.map((img, i) => (
              <div
                key={img + i}
                onClick={() => setSelectedImage(img)}
                className={`group cursor-pointer overflow-hidden rounded-[2rem] shadow-xl ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <img
                  src={img}
                  alt="Gallery"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="mx-6 mb-10 overflow-hidden rounded-[3rem] bg-[#0B1020] px-6 py-20 text-white md:mx-14 md:px-14">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-[0.4em] text-[#D7B46A]">
              Book Your Stay
            </p>
            <h2 className="mt-4 font-serif text-5xl md:text-7xl">
              Your Manali escape begins here.
            </h2>
            <p className="mt-6 text-white/60">
              Fill the form and your booking request will open directly on WhatsApp.
            </p>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/10 p-5">
              <p className="flex items-center gap-3 text-white/75">
                <CreditCard className="text-[#D7B46A]" /> Payment gateway coming soon.
              </p>
            </div>
          </div>

          <form onSubmit={sendBooking} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl md:p-8">
            <div className="grid gap-5">
              <input required type="text" placeholder="Your Name" value={booking.name} onChange={(e) => setBooking({ ...booking, name: e.target.value })} className="rounded-2xl bg-white px-5 py-4 text-[#111827]" />

              <input required type="tel" placeholder="Phone Number" value={booking.phone} onChange={(e) => setBooking({ ...booking, phone: e.target.value })} className="rounded-2xl bg-white px-5 py-4 text-[#111827]" />

              <div className="grid gap-5 md:grid-cols-2">
                <input type="date" value={booking.checkIn} onChange={(e) => setBooking({ ...booking, checkIn: e.target.value })} className="rounded-2xl bg-white px-5 py-4 text-[#111827]" />
                <input type="date" value={booking.checkOut} onChange={(e) => setBooking({ ...booking, checkOut: e.target.value })} className="rounded-2xl bg-white px-5 py-4 text-[#111827]" />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <select value={booking.guests} onChange={(e) => setBooking({ ...booking, guests: e.target.value })} className="rounded-2xl bg-white px-5 py-4 text-[#111827]">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>

                <select value={booking.room} onChange={(e) => setBooking({ ...booking, room: e.target.value })} className="rounded-2xl bg-white px-5 py-4 text-[#111827]">
                  {rooms.map((room) => (
                    <option key={room.name} value={room.name}>{room.name}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="rounded-2xl bg-[#D7B46A] px-8 py-4 font-black uppercase tracking-widest text-[#111827] transition hover:bg-white">
                Send Booking on WhatsApp
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="px-6 py-28 md:px-14">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.4em] text-[#B68A3A]">
              Location
            </p>
            <h2 className="mt-4 font-serif text-5xl md:text-7xl">
              Find us in Manali.
            </h2>
            <p className="mt-6 opacity-70">
              Replace this map with your exact Google Maps embed later.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d844.6968009004783!2d77.1550968!3d32.1290487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048bd05a2607e5%3A0x2acfa6c0f678186c!2sHilltone%20Resort!5e0!3m2!1sen!2sin!4v1779037704060!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="h-[450px] w-full"
  />
</div>
        </div>
      </section>

      <footer className="bg-[#070A14] px-6 py-16 text-white md:px-14">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
          <div>
            <h3 className="font-serif text-4xl text-[#D7B46A]">Hilltone Resort</h3>
            <p className="mt-5 leading-7 text-white/60">
              Experience luxury mountain stays and unforgettable hospitality in Manali.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#D7B46A]">Quick Links</h4>
            <div className="mt-6 flex flex-col gap-4 text-white/60">
              <a href="#about">About</a>
              <a href="#rooms">Rooms</a>
              <a href="#gallery">Gallery</a>
              <a href="#booking">Booking</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#D7B46A]">Contact</h4>
            <div className="mt-6 space-y-5 text-white/60">
              <p className="flex items-center gap-3"><Phone size={17} /> +91 8744044411</p>
              <p className="flex items-center gap-3"><Mail size={17} /> info@hilltoneresort.com</p>
              <p className="flex items-center gap-3"><MapPin size={17} /> Manali, Himachal Pradesh</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#D7B46A]">Follow Us</h4>
            <div className="mt-6 flex gap-4">
              <a className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-black">IG</a>
              <a className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-black">FB</a>
              <a href={`https://wa.me/${phone}`} target="_blank" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-black">WA</a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-7 text-center text-sm text-white/40">
          © 2026 Hilltone Resort. All rights reserved.
        </div>
        <div className="fixed bottom-0 left-0 z-[999] flex w-full items-center justify-between border-t border-white/10 bg-[#070A14]/95 px-5 py-4 backdrop-blur-xl md:hidden">
  <div>
    <p className="text-xs uppercase tracking-[0.3em] text-[#D7B46A]">
      Hilltone Resort
    </p>

    <p className="text-sm font-bold text-white">
      Luxury Stay in Manali
    </p>
  </div>

  <a
    href="#booking"
    className="rounded-full bg-[#D7B46A] px-6 py-3 text-xs font-black uppercase tracking-widest text-[#111827]"
  >
    Book Now
  </a>
</div>
      </footer>

      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/80 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedRoom(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl overflow-hidden rounded-[2rem] bg-white text-[#111827] shadow-2xl"
            >
              <img src={selectedRoom.image} alt={selectedRoom.name} className="h-[420px] w-full object-cover" />
              <div className="p-8">
                <h3 className="font-serif text-4xl">{selectedRoom.name}</h3>
                <p className="mt-4 text-gray-600">{selectedRoom.desc}</p>
                <p className="mt-5 text-2xl font-black">{selectedRoom.price} / night</p>
                <button
                  onClick={() => {
                    setBooking({ ...booking, room: selectedRoom.name });
                    setSelectedRoom(null);
                    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-7 rounded-full bg-[#D7B46A] px-7 py-4 font-black uppercase tracking-widest"
                >
                  Book This Room
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/90 p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute right-6 top-6 text-white">
              <X size={34} />
            </button>
            <motion.img
              src={selectedImage}
              alt="Gallery Preview"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-h-[85vh] max-w-6xl rounded-[2rem] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}