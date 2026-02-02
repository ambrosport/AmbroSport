import { jsx, jsxs } from 'react/jsx-runtime';
import { renderToString } from 'react-dom/server';
import { Switch, Route, Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { useLocation, Link } from 'react-router-dom';
import { X, Menu, ArrowRight, CheckCircle, Icon, Target, Award, Globe, Users, Factory, PencilLine, Truck, Headphones } from 'lucide-react';
import { useState, useMemo, useRef, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const ambroLogo = "/img/ambroLogo.png";
function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" }
  ];
  const isActive = (path) => location.pathname === path;
  return /* @__PURE__ */ jsx("nav", { className: "absolute inset-0 z-50 bg-transparent nav-styles", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center h-full", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "text-3xl font-bold text-blue-600", children: /* @__PURE__ */ jsx("img", { src: ambroLogo, alt: "Ambro Logo", className: "header-logo" }) }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex space-x-8 items-center", children: navItems.map((item) => /* @__PURE__ */ jsx(
        Link,
        {
          to: item.path,
          className: `px-3 py-2 rounded-md transition-colors ${isActive(item.path) ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`,
          children: item.name
        },
        item.path
      )) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsMenuOpen(!isMenuOpen),
          className: "md:hidden p-2 rounded-md text-gray-700 bg-white/10 hover:bg-white/20 hamburger",
          children: isMenuOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
        }
      )
    ] }),
    isMenuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden mt-6 mobile-nav-style", children: navItems.map((item) => /* @__PURE__ */ jsx(
      Link,
      {
        to: item.path,
        onClick: () => setIsMenuOpen(false),
        className: `block px-3 py-2 rounded-md ${isActive(item.path) ? "text-blue-600 font-semibold bg-blue-50/30" : "text-gray-700 hover:bg-white/5"}`,
        children: item.name
      },
      item.path
    )) })
  ] }) });
}

function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-gray-900 text-gray-300 py-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-white text-xl font-bold mb-4", children: "Ambro" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Leading manufacturer delivering quality products and services since 2000." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-blue-400 transition-colors", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-blue-400 transition-colors", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services", className: "hover:text-blue-400 transition-colors", children: "Services" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/products", className: "hover:text-blue-400 transition-colors", children: "Products" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold mb-4", children: "Legal" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-blue-400 transition-colors", children: "Privacy Policy" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-blue-400 transition-colors", children: "Terms of Service" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-gray-800 pt-8 text-center text-sm", children: /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " AmbroSport. All rights reserved."
    ] }) })
  ] }) });
}

function ContactForm() {
  const [state, handleSubmit] = useForm("mvzaykyl");
  if (state.succeeded) {
    return /* @__PURE__ */ jsx("section", { className: "bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 min-h-[50vh] flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "max-w-2xl w-full text-white text-center", children: /* @__PURE__ */ jsx("p", { className: "text-xl font-semibold", children: "Thanks for contacting us! We'll get back to you as soon as possible." }) }) });
  }
  return /* @__PURE__ */ jsx("section", { className: "bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 min-h-[50vh] flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-2xl", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "bg-white rounded-lg p-8 shadow-[0_10px_30px_rgba(37,99,235,0.4)]", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-2", children: "Contact Us" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Fill out the form below and we'll get back to you as soon as possible." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("label", { htmlFor: "firstName", className: "block text-sm font-medium text-gray-900 mb-2", children: [
          "First Name ",
          /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "firstName",
            type: "text",
            name: "firstName",
            placeholder: "John",
            required: true,
            className: "w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("label", { htmlFor: "lastName", className: "block text-sm font-medium text-gray-900 mb-2", children: [
          "Last Name ",
          /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "lastName",
            type: "text",
            name: "lastName",
            placeholder: "Doe",
            required: true,
            className: "w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-900 mb-2", children: [
        "Email ",
        /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "email",
          type: "email",
          name: "email",
          placeholder: "john.doe@example.com",
          required: true,
          className: "w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        }
      ),
      /* @__PURE__ */ jsx(
        ValidationError,
        {
          prefix: "Email",
          field: "email",
          errors: state.errors,
          className: "text-red-500 text-sm mt-1"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-900 mb-2", children: "Phone Number" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "phone",
          type: "tel",
          name: "phone",
          placeholder: "+1 (555) 123-4567",
          className: "w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "company", className: "block text-sm font-medium text-gray-900 mb-2", children: "Company" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "company",
          type: "text",
          name: "company",
          placeholder: "Acme Inc.",
          className: "w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "country", className: "block text-sm font-medium text-gray-900 mb-2", children: [
        "Country ",
        /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
      ] }),
      /* @__PURE__ */ jsxs(
        "select",
        {
          id: "country",
          name: "country",
          required: true,
          className: "w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600",
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Select your country" }),
            /* @__PURE__ */ jsx("option", { value: "united-states", children: "United States" }),
            /* @__PURE__ */ jsx("option", { value: "canada", children: "Canada" }),
            /* @__PURE__ */ jsx("option", { value: "peru", children: "Peru" }),
            /* @__PURE__ */ jsx("option", { value: "china", children: "China" }),
            /* @__PURE__ */ jsx("option", { value: "other", children: "Other" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-900 mb-2", children: [
        "Message ",
        /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
      ] }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "message",
          name: "message",
          placeholder: "Tell us about your project...",
          required: true,
          rows: 5,
          className: "w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        }
      ),
      /* @__PURE__ */ jsx(
        ValidationError,
        {
          prefix: "Message",
          field: "message",
          errors: state.errors,
          className: "text-red-500 text-sm mt-1"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: state.submitting,
        className: "w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-md transition-colors disabled:opacity-50",
        children: "Submit Form"
      }
    )
  ] }) }) });
}

const asw = "/img/ASW-LOGO.png";
const ch = "/img/CHRLDR-LOGO.png";
const fila = "/img/Fila-logo.png";
const swb = "/img/SWB-logo.png";
const coastal = "/img/coastal-cotton.png";
const onward = "/img/onward-logo.png";
const southern = "/img/southern-proper-logo.png";
const simmons = "/img/stewartsimmons.png";
const KC = "/img/KC.png";
const logos = [asw, ch, fila, swb, coastal, onward, southern, simmons, KC];
function LogoCarousel() {
  const original = useMemo(() => logos, []);
  const items = useMemo(() => [...original, ...original], [original]);
  const trackRef = useRef(null);
  const itemRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const transitionRef = useRef(true);
  const GAP = 30;
  useEffect(() => {
    const measure = () => {
      const el = itemRef.current;
      if (el) {
        const w = el.getBoundingClientRect().width;
        setItemWidth(w);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => i + 1);
    }, 2200);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onTransitionEnd = () => {
      if (index >= original.length) {
        transitionRef.current = false;
        setIndex((i) => i - original.length);
      }
    };
    track.addEventListener("transitionend", onTransitionEnd);
    return () => track.removeEventListener("transitionend", onTransitionEnd);
  }, [index, original.length]);
  useEffect(() => {
    if (transitionRef.current === false) {
      requestAnimationFrame(() => {
        transitionRef.current = true;
      });
    }
  }, [index]);
  const step = itemWidth ? itemWidth + GAP : 0;
  const transform = `translateX(-${index * step}px)`;
  const transitionStyle = transitionRef.current ? { transition: "transform 500ms ease" } : { transition: "none" };
  return /* @__PURE__ */ jsxs("section", { className: "w-full  py-8", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4 carousel-title", children: "Our Clients " }),
    /* @__PURE__ */ jsx("div", { className: "w-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { style: { width: "100%" }, children: /* @__PURE__ */ jsx(
      "div",
      {
        ref: trackRef,
        className: "flex items-center",
        style: { gap: GAP, transform, ...transitionStyle },
        children: items.map((src, i) => /* @__PURE__ */ jsx(
          "div",
          {
            ref: i === 0 ? itemRef : null,
            className: "flex-shrink-0 flex items-center justify-center",
            style: { width: `25%`, padding: "8px 12px" },
            children: /* @__PURE__ */ jsx("img", { src, alt: `logo-${i}`, className: "max-h-[60px] w-auto object-contain" })
          },
          i
        ))
      }
    ) }) })
  ] });
}

const heroVideo = "https://ambrosport.s3.us-east-1.amazonaws.com/herovid.mp4";
const heroVideoMobile = "https://ambrosport.s3.us-east-1.amazonaws.com/herovid.mp4";
const peruImage = "/img/peruWEB-21.jpg";
function Home() {
  const features = [
    {
      Icon: CheckCircle,
      title: "Concepting",
      description: "Work with our experts to develop innovative apparel concepts tailored to your brand's needs"
    },
    {
      Icon,
      title: "Design",
      description: "Collaborate with our creative team to bring your apparel vision to life with cutting-edge designs."
    },
    {
      Icon,
      title: "Development",
      description: "Providing Techpacks, Strikeoffs, and Samples to ensure your apparel meets the highest standards."
    },
    {
      Icon,
      title: "Final Delivery",
      description: "Ensuring your apparel reaches you on time and in perfect condition, ready for the market."
    }
  ];
  const statsRef = useRef(null);
  const numberRefs = useRef([]);
  useEffect(() => {
    const gsapGlobal = window.gsap;
    const ScrollTriggerGlobal = window.ScrollTrigger;
    if (!gsapGlobal || !ScrollTriggerGlobal) return;
    gsapGlobal.registerPlugin(ScrollTriggerGlobal);
    const statsEl = statsRef.current;
    if (!statsEl) return;
    const targets = [30, 15, 1e4, 99];
    const suffixes = ["", "+", "K+", "%"];
    const trigger = ScrollTriggerGlobal.create({
      trigger: statsEl,
      start: "top 80%",
      onEnter: () => {
        numberRefs.current.forEach((el, i) => {
          if (!el) return;
          const target = targets[i] ?? 0;
          const obj = { val: 0 };
          gsapGlobal.to(obj, {
            val: target,
            duration: 2,
            ease: "power1.out",
            onUpdate: () => {
              let text = "";
              if (target >= 1e3) {
                const v = Math.round(obj.val / 1e3);
                text = `${v}${suffixes[i]}`;
              } else {
                text = `${Math.round(obj.val)}${suffixes[i]}`;
              }
              el.textContent = text;
            }
          });
        });
      },
      once: true
    });
    return () => {
      trigger.kill();
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative h-[800px] flex items-center justify-center text-white", children: [
      /* @__PURE__ */ jsx(
        "video",
        {
          src: heroVideo,
          preload: "auto",
          autoPlay: true,
          muted: true,
          loop: true,
          playsInline: true,
          poster: peruImage,
          className: "absolute inset-0 w-full h-full object-cover hidden md:block"
        }
      ),
      /* @__PURE__ */ jsx(
        "video",
        {
          src: heroVideoMobile,
          preload: "auto",
          autoPlay: true,
          muted: true,
          loop: true,
          playsInline: true,
          poster: peruImage,
          className: "absolute inset-0 w-full h-full object-cover block md:hidden"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center max-w-4xl mx-auto px-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl mb-8", children: "A multinational sourcing group powering apparel for leading U.S. brands. Backed by global offices, deep factory relationships, and decades of industry expertise." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/services",
              className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors inline-flex items-center justify-center space-x-2",
              children: [
                /* @__PURE__ */ jsx("span", { children: "Explore Services" }),
                /* @__PURE__ */ jsx(ArrowRight, { size: 20 })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/about",
              className: "bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md transition-colors",
              children: "Learn More"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Why Choose Us" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: "We combine manufacturing expertise with retail excellence to deliver exceptional value" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: features.map((feature, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: feature.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: feature.description })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-blue-600 text-white", children: /* @__PURE__ */ jsx("div", { ref: statsRef, className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-8 text-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-5xl font-bold mb-2", children: /* @__PURE__ */ jsx("span", { ref: (el) => numberRefs.current[0] = el, children: "0" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-blue-100", children: "Years of Excellence" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "text-5xl font-bold mb-2", children: [
          /* @__PURE__ */ jsx("span", { ref: (el) => numberRefs.current[1] = el, children: "0" }),
          /* @__PURE__ */ jsx("span", { className: "ml-1" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-blue-100", children: "Clients Helped" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "text-5xl font-bold mb-2", children: [
          /* @__PURE__ */ jsx("span", { ref: (el) => numberRefs.current[2] = el, children: "0" }),
          /* @__PURE__ */ jsx("span", { className: "ml-1" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-blue-100", children: "Products" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "text-5xl font-bold mb-2", children: [
          /* @__PURE__ */ jsx("span", { ref: (el) => numberRefs.current[3] = el, children: "0" }),
          /* @__PURE__ */ jsx("span", { className: "ml-1" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-blue-100", children: "Customer Satisfaction" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(LogoCarousel, {}),
    /* @__PURE__ */ jsx(ContactForm, {})
  ] });
}

const peru44 = "/img/peruWEB-44.jpg";
const peru17 = "/img/peruWEB-17.jpg";
const steveImg = "/img/steve.png";
const shariImg = "/img/SHARI.png";
const maxHeadshot = "/img/max-headshot.jpg";
const maryImg = "/img/mary.jpeg";
const averyImg = "/img/avery-39.png";
function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver exceptional products and services that exceed customer expectations while maintaining the highest standards of quality and sustainability."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We are committed to excellence in everything we do, from manufacturing to customer service, ensuring the best experience for our clients."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Operating across multiple continents, we bring our products and expertise to customers worldwide with local service and support."
    },
    {
      icon: Users,
      title: "Our People",
      description: "Our local team of dedicated professionals is the backbone of our success, bringing expertise and passion to their work every day."
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative h-[600px] flex items-center justify-center text-white", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: peru44,
          alt: "Our team",
          className: "absolute inset-0 w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center max-w-4xl mx-auto px-4", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-6xl font-bold mb-4", children: "About Ambro Sport" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl", children: "Building the future through innovation, quality, and dedication" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Our Story" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-gray-600", children: [
          /* @__PURE__ */ jsx("p", { children: "Founded in 2000, Ambro Sport is a multinational group of sourcing offices across the world. Ambro Sport has proven itself as a reputable buying office for large manufactures and retailers throughout the USA market. Our global vision is to be a leading sourcing agent with attention to detail, meeting deadlines, and most importantly superior customer service." }),
          /* @__PURE__ */ jsx("p", { children: "It was important to Steve to create a company that would provide fashion brands with personal attention to all details of a full package service. Ambro Sport handles and assists in every aspect including fabric sourcing, style design, product development, tech pack execution, salesmen samples, fittings, final production, and delivery to client distribution centers. Ambro Sport prides itself in handling every minute detail with personal attention and expertise. As the company continues to grow with its main office in Alpharetta, Georgia, buying offices in China and Peru, and sources all across the World, Steve's personal attention to every customer has not waivered." }),
          /* @__PURE__ */ jsx("p", { children: "We continue to invest in cutting-edge technology and sustainable practices, ensuring that we not only meet today's needs but also prepare for tomorrow's challenges. Our commitment to excellence has earned the trust of leading brands and a reputation as an industry leader." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative h-[400px] rounded-lg overflow-hidden shadow-xl", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: peru17,
          alt: "Warehouse facility",
          className: "w-full h-full object-cover"
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Our Values & Vision" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: "The principles that guide everything we do" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: values.map((value, index) => {
        const Icon = value.icon;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow",
            children: [
              /* @__PURE__ */ jsx("div", { className: "bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(Icon, { className: "text-blue-600", size: 32 }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-gray-900 mb-3", children: value.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: value.description })
            ]
          },
          index
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-12 text-center", children: "Our Journey" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg", children: "1992" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Steve Graduates From Fashion Institute of Technology" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "His first job was with Polo Ralph Lauren where he specialized in men’s outerwear and swim." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg", children: "1994" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "He was offered a position at Tommy Hilfiger where he quickly catapulted up the ranks" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Steve learned and excelled at every aspect of the manufacturing of all men’s apparel and accessory categories including the sourcing, design, production, sales, and logistics." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg", children: "1998" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "He left Tommy Hilfiger and went to work at Fila USA" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "It was during that time that he found his niche in the production market. He was part of an elite team that moved to FILA International in their headquarters in Biella, Italy to further develop and promote the FILA brand both internationally and in the U. S." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg", children: "2000" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Ambro Sport is Founded" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Steve created a company that would provide fashion brands with personal attention to all details of a full package service." })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900", children: "Our Team" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-3 max-w-2xl mx-auto", children: "A small, dedicated group of professionals delivering exceptional results." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white about-block p-6 rounded-lg shadow-md flex flex-col items-start", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: steveImg,
              alt: "Team member 1",
              className: "w-full h-48 object-cover rounded mb-4 about-img"
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-gray-900", children: "Steven Ambrogio" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600", children: "Founder & CEO — Industry veteran with decades of experience in apparel sourcing and production." }),
          /* @__PURE__ */ jsx("p", { children: "After graduating from the Fashion Institute of Technology with a degree in Apparel Production Management, Steve immediately went to work in the apparel industry as a Production Assistant. His first job was with Polo Ralph Lauren where he specialized in men’s outerwear and swim. He was offered a position at Tommy Hilfiger during the mid 90’s where he quickly catapulted up the ranks. During his time at Hilfiger, Steve learned and excelled at every aspect of the manufacturing of all men’s apparel and accessory categories including the sourcing, design, production, sales, and logistics. He was offered a rare opportunity to advance when he left Tommy Hilfiger and went to work at Fila USA. It was during that time that he found his niche in the production market. He was part of an elite team that moved to FILA International in their headquarters in Biella, Italy to further develop and promote the FILA brand both internationally and in the U. S. This extensive experience is what made Steve well prepared to start Ambro Sport, Inc. in February of 2000. It was important to Steve to create a company that would provide fashion brands with personal attention to all details of a full package service. Ambro Sport handles and assists in every aspect including fabric sourcing, style design, product development, tech pack execution, salesmen samples, fittings, final production, and delivery to client distribution centers. Ambro Sport prides itself in handling every minute detail with personal attention and expertise. As the company continues to grow with it’s main office in Alpharetta, Georgia, buying offices in China and Peru, and sources all across the World, Steve’s personal attention to every customer has not waivered." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white about-block p-6 rounded-lg shadow-md flex flex-col items-start", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: shariImg,
              alt: "Team member 2",
              className: "w-full h-48 object-cover rounded mb-4 about-img"
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-gray-900", children: "Shari Christiansen" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600", children: "Office Manager/Logistics Coordinator" }),
          /* @__PURE__ */ jsx("p", { children: "Graduate of Fashion Institute of Technology with degree in Apparel Production Sourcing. Shari has been with Ambro Sport, Inc. since 2006. Her attention to detail is what helps her work closely and efficiently with customers to track and handle all aspects of logistics including the production process and final delivery.Included in her roles as Logistics Manager, Shari works closely with the design team and factories to ensure products are delivered correctly and on time. Shari’s close working relationship with Steve in all sections of the business including Ambro’s human resourcing, employee scheduling, bill payment, and customs tracking, has made her in invaluable asset to Ambro Sport, Inc." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white about-block p-6 rounded-lg shadow-md flex flex-col items-start md:col-span-2", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: maxHeadshot,
              alt: "Team member 3",
              className: "w-full h-48 object-cover rounded mb-4 about-img"
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-gray-900", children: "Max Ambrogio" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600", children: "Creative Director" }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Max Ambrogio is the Creative Director at Ambro Sport, based in Atlanta. He brings a unique blend of visual storytelling, design expertise, and strategic thinking to every project, with a passion for capturing real moments and turning them into digital stories people can connect with.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "With a background in live event coverage and the music industry, Max has built a career at the intersection of creativity and technology. Before joining Ambro Sport, he spent four years at Bearpaw Partners and two years at Brownbag Marketing, where he balanced video production with front-end development—creating responsive websites, social animations, and content designed to drive engagement.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "At Ambro Sport, Max oversees the creative direction of all product lines, ensuring each piece reflects the brand’s vision while meeting the highest standards of quality and innovation. His work is rooted in authenticity, impact, and a deep understanding of how strong visuals elevate brands across video, web, and social platforms."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white about-block p-6 rounded-lg shadow-md flex flex-col items-start md:col-span-2", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: maryImg,
              alt: "Team member 3",
              className: "w-full h-48 object-cover rounded mb-4 about-img"
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-gray-900", children: "Mary Santiago" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600", children: "Office Manager / Quality Control - Ambro Sport Peru " }),
          /* @__PURE__ */ jsx("p", { children: "Mary Santiago is Ambro’s Office and Quality Control Manager, based in Ambro’s Peru office. She oversees all aspects of product development, sampling, production, and logistics for Ambro orders placed in Peru, ensuring that all goods meet Ambro’s quality standards and are delivered to port in a timely manner. With 24 years of experience in the apparel industry, Mary brings deep technical expertise and hands-on leadership to every stage of the production process. She has been an integral part of the Ambro team for the past 10 years, supporting consistent quality, efficient execution, and seamless coordination across teams and partners." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white about-block p-6 rounded-lg shadow-md flex flex-col items-start md:col-span-2", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: averyImg,
              alt: "Team member 3",
              className: "w-full h-48 object-cover rounded mb-4 about-img"
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-gray-900", children: "Avery Ambrogio" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600", children: "Production Assistant " }),
          /* @__PURE__ */ jsx("p", { children: "Avery Ambrogio is a Production Assistant at Ambro Sport, based in Atlanta. She supports the production team in managing the day-to-day operations of product development. She is currently attending the University of Georgia where she is studying journalism. " })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(ContactForm, {})
  ] });
}

const peru21 = "/img/peruWEB-21.jpg";
function Services() {
  const services = [
    {
      icon: Factory,
      title: "Custom Manufacturing",
      description: "Tailored manufacturing solutions to meet your specific requirements. From prototype to production, we deliver precision and quality at scale.",
      features: [
        "Prototype development",
        "Mass production capabilities",
        "Quality assurance testing",
        "Custom design services"
      ]
    },
    {
      icon: PencilLine,
      title: "Design & Branding",
      description: "High-impact design and branding services to make your products stand out in the market.",
      features: [
        "In house design team",
        "Logo creation",
        "website and packaging design",
        "2D/3D rendering & Animation"
      ]
    },
    {
      icon: Truck,
      title: "Logistics & Distribution",
      description: "Efficient supply chain management ensuring timely delivery of products to your doorstep or business location.",
      features: [
        "Speedy delivery options",
        "Global shipping network",
        "Real-time tracking",
        "Bulk order handling"
      ]
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Dedicated support team available to assist with product selection, technical questions, and after-sales service.",
      features: [
        "Technical expertise",
        "Multiple contact channels",
        "Can answer both creative and technical questions"
      ]
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative h-[600px] flex items-center justify-center text-white", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: peru21,
          alt: "Logistics operations",
          className: "absolute inset-0 w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center max-w-4xl mx-auto px-4", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-6xl font-bold mb-4", children: "Our Services" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl", children: "Comprehensive solutions from manufacturing to after-sales support" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 services-intro", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: "What We Offer" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl services-copy", children: "Ambro Sport is a multinational group of sourcing offices across the world. Our core business is sourcing  for our customer needs. In a short amount of time Ambro Sport has proven itself as a reputable buying office for large manufactures and retailers throughout the USA market. Major fashion brands such as Southern Proper, Lauren James, Brewer's Lantern, American Eagle Outfitters, FILA, National Guard, Urban Outfitters, Aeropostale, and NASCAR. The Ambro Sport team has an excellent staff worldwide with years of experience with the sourcing business and apparel design. Ambro Sport has international offices in China and Peru along with many connections with factories.             " })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2  gap-8", children: services.map((service, index) => {
        const Icon = service.icon;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow",
            children: [
              /* @__PURE__ */ jsx("div", { className: "bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx(Icon, { className: "text-blue-600", size: 32 }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-gray-900 mb-3", children: service.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: service.description }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: service.features.map((feature, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start text-gray-700", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-600 mr-2", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: feature })
              ] }, idx)) })
            ]
          },
          index
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-blue-600 text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-6", children: "Ready to Get Started?" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-blue-100", children: "Our team is ready to discuss how our services can benefit your business. Contact us today for a consultation." }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#contact",
          className: "inline-block bg-white text-blue-600 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors",
          children: "Contact Our Team"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Our Process" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: "A streamlined approach to delivering exceptional results" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4", children: "1" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Consultation + Consepting" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "We discuss your needs and requirements in detail" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4", children: "2" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Planning + Design" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Custom solution tailored to your specific product. Techpacks and prototypes are created" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4", children: "3" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Development" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Production begins with quality checks at every stage. Samples are shared for approval" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4", children: "4" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Delivery + Support" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Final delivery is made on time with ongoing support available" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(ContactForm, { id: "contact" })
  ] });
}

function Lightbox({ images, currentIndex, isOpen, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, onPrev, onNext]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx("div", { className: "lightbox-overlay", role: "dialog", "aria-modal": "true", onClick: onClose, children: /* @__PURE__ */ jsxs("div", { className: "lightbox-content", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsx("button", { className: "lightbox-close", onClick: onClose, "aria-label": "Close", children: "✕" }),
    /* @__PURE__ */ jsx("button", { className: "lightbox-prev", onClick: onPrev, "aria-label": "Previous", children: "‹" }),
    /* @__PURE__ */ jsx("img", { src: images[currentIndex], alt: `Product ${currentIndex + 1}`, className: "lightbox-image" }),
    /* @__PURE__ */ jsx("button", { className: "lightbox-next", onClick: onNext, "aria-label": "Next", children: "›" })
  ] }) });
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Root,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}

const peru10 = "/img/peruWEB-10.jpg";
const img1 = "/img/product-1.png";
const img2 = "/img/product-14.png";
const img3 = "/img/product-3.png";
const img4 = "/img/product-4.png";
const img5 = "/img/product-9.png";
const img6 = "/img/product-10.png";
const img7 = "/img/product-7.png";
const img8 = "/img/product-8.png";
const img9 = "/img/product-5.png";
const img10 = "/img/product-6.png";
const img11 = "/img/product-11.png";
const img12 = "/img/product-12.png";
const img13 = "/img/product-13.png";
const img14 = "/img/product-2.png";
const img15 = "/img/product-15.png";
const img16 = "/img/product-16.png";
const img17 = "/img/product-17.png";
const img18 = "/img/product-18.png";
const img19 = "/img/product-19.png";
const img20 = "/img/product-20.png";
const img21 = "/img/product-21.png";
const img22 = "/img/product-22.png";
const img23 = "/img/product-23.png";
const img24 = "/img/product-24.png";
const img25 = "/img/product-25.png";
const img26 = "/img/product-26.png";
const img27 = "/img/product-27.png";
const img28 = "/img/product-28.png";
const img29 = "/img/product-29.png";
const img30 = "/img/product-30.png";
const img31 = "/img/product-31.png";
const img32 = "/img/product-32.png";
const img33 = "/img/product-33.png";
const img34 = "/img/product-34.png";
const img35 = "/img/product-35.png";
const img36 = "/img/product-36.png";
const products = [
  { id: 1, src: img1, category: "mens" },
  { id: 2, src: img2, category: "kids" },
  { id: 3, src: img3, category: "kids" },
  { id: 4, src: img4, category: "mens" },
  { id: 5, src: img5, category: "mens" },
  { id: 6, src: img6, category: "mens" },
  { id: 7, src: img7, category: "mens" },
  { id: 8, src: img8, category: "kids" },
  { id: 9, src: img9, category: "mens" },
  { id: 10, src: img10, category: "mens" },
  { id: 11, src: img11, category: "mens" },
  { id: 12, src: img12, category: "mens" },
  { id: 13, src: img13, category: "mens" },
  { id: 14, src: img14, category: "mens" },
  { id: 15, src: img15, category: "kids" },
  { id: 16, src: img16, category: "mens" },
  { id: 17, src: img17, category: "mens" },
  { id: 18, src: img18, category: "mens" },
  { id: 19, src: img19, category: "hats" },
  { id: 20, src: img20, category: "hats" },
  { id: 21, src: img21, category: "hats" },
  { id: 22, src: img22, category: "hats" },
  { id: 23, src: img23, category: "hats" },
  { id: 24, src: img24, category: "womens" },
  { id: 25, src: img25, category: "womens" },
  { id: 26, src: img26, category: "womens" },
  { id: 27, src: img27, category: "womens" },
  { id: 28, src: img28, category: "womens" },
  { id: 29, src: img29, category: "womens" },
  { id: 30, src: img30, category: "womens" },
  { id: 31, src: img31, category: "mens" },
  { id: 32, src: img32, category: "mens" },
  { id: 33, src: img33, category: "kids" },
  { id: 34, src: img34, category: "kids" },
  { id: 35, src: img35, category: "kids" },
  { id: 36, src: img36, category: "kids" }
];
const IMAGES = products.map((p) => p.src);
function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("mens");
  const openAt = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };
  const onPrev = () => setCurrentIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  const onNext = () => setCurrentIndex((i) => (i + 1) % IMAGES.length);
  const filteredProducts = products.filter((p) => p.category === activeTab);
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative h-[400px] flex items-center justify-center text-white", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: peru10,
          alt: "Our team",
          className: "absolute inset-0 w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 text-center max-w-4xl mx-auto px-4", children: /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-6xl font-bold mb-4", children: "Our Products" }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Product Collection" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Browse our products by category. Click any image to view larger." })
      ] }),
      /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, defaultValue: "mens", className: "w-full", suppressHydrationWarning: true, children: [
        /* @__PURE__ */ jsxs(TabsList, { className: "flex justify-evenly mb-8 tab-header", children: [
          /* @__PURE__ */ jsx(TabsTrigger, { value: "mens", className: "data-[state=active]:bg-blue-600 data-[state=active]:text-white", children: "Mens" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "womens", className: "data-[state=active]:bg-blue-600 data-[state=active]:text-white", children: "Womens" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "kids", className: "data-[state=active]:bg-blue-600 data-[state=active]:text-white", children: "Kids" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "hats", className: "data-[state=active]:bg-blue-600 data-[state=active]:text-white", children: "Hats" })
        ] }),
        /* @__PURE__ */ jsx(TabsContent, { value: activeTab, className: "mt-0", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: filteredProducts.map((product) => /* @__PURE__ */ jsx("div", { className: "group cursor-pointer", onClick: () => openAt(products.findIndex((p) => p.id === product.id)), children: /* @__PURE__ */ jsx(
          "img",
          {
            src: product.src,
            alt: `Product ${product.id}`,
            "data-category": product.category,
            className: "w-full h-64 object-cover rounded-md shadow-sm hover:shadow-lg transition-shadow"
          }
        ) }, product.id)) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      Lightbox,
      {
        images: IMAGES,
        currentIndex,
        isOpen,
        onClose: () => setIsOpen(false),
        onPrev,
        onNext
      }
    ),
    /* @__PURE__ */ jsx(ContactForm, {})
  ] });
}

function App() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "h-screen" }),
    /* @__PURE__ */ jsx("main", { className: "flex-grow", children: /* @__PURE__ */ jsxs(Switch, { children: [
      /* @__PURE__ */ jsx(Route, { exact: true, path: "/", component: Home }),
      /* @__PURE__ */ jsx(Route, { path: "/about", component: About }),
      /* @__PURE__ */ jsx(Route, { path: "/services", component: Services }),
      /* @__PURE__ */ jsx(Route, { path: "/products", component: Products })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}

function render(url) {
  const history = createMemoryHistory({
    initialEntries: [url]
  });
  const html = renderToString(
    /* @__PURE__ */ jsx(Router, { history, children: /* @__PURE__ */ jsx(App, {}) })
  );
  return { html };
}

export { render };
