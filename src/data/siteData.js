import {
  Globe2,
  LayoutDashboard,
  RefreshCcw,
  Settings,
  CalendarCheck,
  Headphones,
  ShieldCheck,
  Smartphone,
  Gauge,
  Code,
  Dumbbell,
  Building2,
  Camera,
  Hotel,
  Rocket,
  Store,
  Stethoscope,
  Utensils,
  Scissors,
  Handshake,
  LifeBuoy,
} from "lucide-react";






export const techStack = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "Tailwind CSS",
  "REST API",
  "Firebase",
];

export const navLinks = [
  { name: "Services", path: "#services" },
  { name: "Industries", path: "#industries" },
  { name: "Solutions", path: "#solutions" },
  { name: "Work", path: "#work" },
  { name: "Process", path: "#process" },
  { name: "Pricing", path: "#pricing" },
  { name: "Contact", path: "#contact" },
];

export const stats = [
  { value: "4+", label: "Major Projects" },
  { value: "100%", label: "Custom Built" },
  { value: "Full-Stack", label: "Expertise" },
  { value: "2026", label: "Founded" },
];

export const audiences = [
  { name: "Gyms", icon: Dumbbell },
  { name: "Salons", icon: Scissors },
  { name: "Restaurants", icon: Utensils },
  { name: "Hotels", icon: Hotel },
  { name: "Clinics", icon: Stethoscope },
  { name: "Coaching Centers", icon: Building2 },
  { name: "Photographers", icon: Camera },
  { name: "Startups", icon: Rocket },
  { name: "Local Businesses", icon: Store },
  { name: "Growing Companies", icon: Gauge },
];




export const services = [
  {
    icon: Globe2,
    title: "Business Websites",
    description:
      "Professional, mobile-first websites that help businesses build trust, explain services clearly, and generate enquiries.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    description:
      "Custom dashboards to manage users, leads, bookings, attendance, content, and business data from one clean system.",
  },
  {
    icon: Settings,
    title: "Automation Tools",
    description:
      "Smart workflows that reduce repetitive manual work and make daily business operations easier to track.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Systems",
    description:
      "Appointment, enquiry, and booking systems for service-based businesses that need a smoother customer flow.",
  },
  {
    icon: RefreshCcw,
    title: "Website Redesign",
    description:
      "Upgrade old websites with stronger positioning, better mobile responsiveness, speed, and clearer conversion paths.",
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    description:
      "Ongoing updates, bug fixes, deployment help, and technical support so your digital systems stay reliable after launch.",
  },
];




export const solutions = [
  {
    title: "For Local & Small Businesses",
    description:
      "Professional websites and enquiry systems for gyms, salons, restaurants, hotels, shops, photographers, and service providers.",
    features: [
      "Business website",
      "Service showcase",
      "WhatsApp enquiry flow",
      "Google Map integration",
    ],
  },
  {
    title: "For Clinics & Professional Services",
    description:
      "Clean and trustworthy websites for doctors, clinics, consultants, lawyers, educators, and professional service providers.",
    features: [
      "Appointment enquiry form",
      "Service information pages",
      "Patient/client contact system",
      "Mobile-friendly design",
    ],
  },
  {
    title: "For Growing Companies & Startups",
    description:
      "Custom web applications, dashboards, admin panels, and automation tools for businesses that need more than a simple website.",
    features: [
      "Admin dashboard",
      "Lead management system",
      "Custom web app",
      "Automation workflow",
    ],
  },
];




export const projects = [
  {
    title: "Smart Attendance Management Platform",
    category: "Education / Institution System",
    imageSrc: "https://swarnadip-sarkar-portfolio.netlify.app/assets/projects/chronomark.png",
    platformUrl: "https://chronomark-frontend.netlify.app/",
    description:
      "A digital attendance platform designed for institutions to manage students, classes, and attendance records through a secure dashboard.",
    challenge:
      "Manual attendance tracking is time-consuming, difficult to organize, and hard to review date-wise.",
    solution:
      "Built a dashboard-based system with secure login, teacher/student access, QR-based attendance, and organized attendance records.",
    outcome:
      "Reduced manual work and created a faster, cleaner attendance management workflow.",
    services: ["Dashboard Development", "Authentication", "Database System"],
  },
  {
    title: "Tamohan Magazine Publication Platform",
    category: "Publication / CMS Platform",
    imageSrc: "https://swarnadip-sarkar-portfolio.netlify.app/assets/projects/tamohan-collage.svg",
    description:
      "A full-stack content platform for managing magazine issues, submissions, members, and editorial workflows from one admin dashboard.",
    challenge:
      "Magazine content, submissions, and team details were difficult to manage manually across separate channels.",
    solution:
      "Created a public magazine platform with an admin system for managing magazines, submissions, members, seasons, and settings.",
    outcome:
      "Improved content organization and made the publication workflow more structured and scalable.",
    services: ["CMS Development", "Admin Dashboard", "Content Workflow"],
  },
  {
    title: "Travel Listing & Review Platform",
    platformUrl: "https://wanderlust-2kif.onrender.com/listings",
    category: "Travel / Listing Platform",
    imageSrc:"https://swarnadip-sarkar-portfolio.netlify.app/assets/projects/wanderlust.png",
    description:
      "A travel listing platform where users can browse listings, create posts, upload images, and share reviews.",
    challenge:
      "Travel listings need trust, clean browsing, user accounts, and review-based interaction.",
    solution:
      "Developed a listing system with authentication, listing management, image support, user reviews, and structured backend flow.",
    outcome:
      "Created a functional marketplace-style platform with user-generated listings and review features.",
    services: ["Web App Development", "User System", "Listing Platform"],
  },
  {
    title: "AI Vehicle Monitoring & Control Dashboard",
    category: "AI / IoT / Control System",
    imageSrc: "https://swarnadip-sarkar-portfolio.netlify.app/assets/projects/self-driving-car.png",
    description:
      "A monitoring and control dashboard for an AI-assisted vehicle prototype using real-time communication and computer vision.",
    challenge:
      "The hardware system needed a clear interface to monitor status, control movement, and connect with the AI backend.",
    solution:
      "Designed a dashboard flow connected with backend decision-making, WebSocket communication, and ESP32-based control.",
    outcome:
      "Enabled real-time monitoring and control for an AI/IoT prototype through a web interface.",
    services: ["IoT Dashboard", "Real-Time Control", "System Integration"],
  },
];







export const reasons = [
  {
    icon: ShieldCheck,
    title: "Business-first approach",
    description:
      "We focus on what the website or system should achieve for your business, not just how it looks.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first design",
    description:
      "Every website is designed to work smoothly on phones, tablets, and desktops.",
  },
  {
    icon: Gauge,
    title: "Fast and clean experience",
    description:
      "We build lightweight, fast-loading interfaces that feel modern and easy to use.",
  },
  {
    icon: Code,
    title: "Custom development",
    description:
      "No random template copy-paste. Your design and features are built around your actual needs.",
  },
  {
    icon: Handshake,
    title: "Clear communication",
    description:
      "We explain the process simply so clients understand what is being built and why.",
  },
  {
    icon: LifeBuoy,
    title: "Support after launch",
    description:
      "Deployment, small updates, bug fixes, and basic maintenance support are available after delivery.",
  },
];








export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We understand your business, target users, goals, and what problem the website or system should solve.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "We decide the pages, features, user flow, timeline, and best structure before starting development.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "We create a clean, professional interface focused on clarity, trust, and user experience.",
  },
  {
    step: "04",
    title: "Develop",
    description:
      "We build the website or web app with responsive design, clean code, and proper functionality.",
  },
  {
    step: "05",
    title: "Test & Launch",
    description:
      "We test responsiveness, forms, links, performance, and deploy the project live.",
  },
  {
    step: "06",
    title: "Support",
    description:
      "We help with small updates, fixes, improvements, and maintenance after launch.",
  },
];






export const pricingPlans = [
  {
    name: "Starter Website",
    tag: "For simple online presence",
    regularPrice: "₹3,999",
    offerPrice: "₹1,999",
    description:
      "Best for individuals, freelancers, photographers, small shops, and service providers.",
    features: [
      "Single-page website",
      "Mobile responsive design",
      "Contact form",
      "WhatsApp integration",
      "Basic SEO setup",
      "Deployment support",
    ],
    highlighted: false,
  },
  {
    name: "Business Website",
    tag: "For growing businesses",
    regularPrice: "₹9,999",
    offerPrice: "₹6,499",
    description:
      "Best for gyms, salons, restaurants, hotels, clinics, coaching centers, and local businesses.",
    features: [
      "4–6 custom pages",
      "Professional custom design",
      "Contact & enquiry system",
      "Google Maps integration",
      "WhatsApp integration",
      "Basic SEO setup",
      "Deployment support",
    ],
    highlighted: true,
  },
  {
    name: "Custom Web App",
    tag: "For dashboards & systems",
    regularPrice: "₹19,999",
    offerPrice: "₹14,999",
    description:
      "Best for booking systems, attendance systems, CRM dashboards, admin panels, and startup MVPs.",
    features: [
      "Login system",
      "Admin dashboard",
      "Database integration",
      "Custom functionality",
      "User/data management",
      "Deployment support",
    ],
    highlighted: false,
  },
];










export const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "A starter website usually takes 2–4 days. A business website may take 5–10 days depending on pages, content, and features.",
  },
  {
    question: "Do you provide hosting and deployment support?",
    answer:
      "Yes. We help deploy the website on platforms like Netlify, Render, or other suitable hosting services.",
  },
  {
    question: "Can you redesign my old website?",
    answer:
      "Yes. We can improve the design, mobile responsiveness, speed, layout, and contact flow of an existing website.",
  },
  {
    question: "Do you build custom dashboards or web apps?",
    answer:
      "Yes. We build custom systems like admin dashboards, booking systems, attendance systems, CRM tools, and business management platforms.",
  },
  {
    question: "Will I get support after launch?",
    answer:
      "Yes. We provide basic support after launch. Ongoing maintenance can be discussed based on project needs.",
  },
];
