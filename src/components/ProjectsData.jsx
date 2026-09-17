// ============================================================
// PAWLYTICS ASSETS
// ============================================================

import pawlyticsLogo from "../assets/pawlytics/Pawlytics-Logo.png";

import p1 from "../assets/pawlytics/P1.jpg";
import p2 from "../assets/pawlytics/P2.jpg";
import p3 from "../assets/pawlytics/P3.jpg";
import p4 from "../assets/pawlytics/P4.jpg";
import p5 from "../assets/pawlytics/P5.jpg";

import p6 from "../assets/pawlytics/P6.png";
import p7 from "../assets/pawlytics/P7.png";
import p8 from "../assets/pawlytics/P8.png";
import p9 from "../assets/pawlytics/P9.png";


// ============================================================
// BUYZAAR ASSETS
// ============================================================

import buyzaarLogo from "../assets/buyzaar/buyzaar-logo.png";


import b1 from "../assets/buyzaar/B1.png";
import b2 from "../assets/buyzaar/B2.png";
import b3 from "../assets/buyzaar/B3.png";
import b4 from "../assets/buyzaar/B4.png";
import b5 from "../assets/buyzaar/B5.png";
import b6 from "../assets/buyzaar/B6.png";
import b7 from "../assets/buyzaar/B7.png";
import b8 from "../assets/buyzaar/B8.png";
import b9 from "../assets/buyzaar/B9.png";
import b10 from "../assets/buyzaar/B10.png";
import b11 from "../assets/buyzaar/B11.png";
import b12 from "../assets/buyzaar/B12.png";



// Later, when you have screenshots, add them like this:
//
// import b1 from "../assets/buyzaar/B1.png";
// import b2 from "../assets/buyzaar/B2.png";
// import b3 from "../assets/buyzaar/B3.png";
// import b4 from "../assets/buyzaar/B4.png";
// import b5 from "../assets/buyzaar/B5.png";


// ============================================================
// PROJECT DATA
// ============================================================

const projects = [
  // ==========================================================
  // PROJECT 01 — PAWLYTICS
  // ==========================================================

  {
    id: 1,

    number: "01",

    title: "PAWLYTICS",

    subtitle:
      "A Mobile App for Pet Care Support Tracking in Davao City Shelters Using a Content-Based Recommendation Algorithm",

    category: "FULL-STACK DEVELOPMENT",

    year: "2026",

    role: "Developer",

    description:
      "A mobile donation and campaign management platform for Bantay Hayop Davao that improves transparency, streamlines shelter operations, and connects donors with relevant pets and campaigns through personalized recommendations.",

    technologies: [
      "Flutter",
      "Dart",
      "Supabase",
      "Android Studio",
      "PayMongo API",
      "Content-Based Recommendation Algorithm",
    ],

    overview:
      "PAWLYTICS is a mobile-based donation and campaign management application developed for Bantay Hayop Davao. It provides a centralized platform for managing donations, pet profiles, campaigns, donor engagement, and shelter-related information.",

    problem:
      "Bantay Hayop Davao faced challenges related to manual donation tracking, pet profiling, and limited communication between the shelter and donors. These processes made it more difficult to maintain accurate records, provide transparent updates, and keep donors engaged with ongoing shelter needs and campaigns.",

    solution:
      "PAWLYTICS provides a centralized mobile platform that allows donors and shelter staff to manage donations, pet information, campaigns, and communication more efficiently. The application also uses a content-based recommendation algorithm to match donor preferences with relevant pets and campaigns, creating a more personalized donation experience.",

    features: [
      "Donor Registration and Authentication",
      "Pet Profiles",
      "Donation Management",
      "Campaign Management",
      "Digital Certificate Issuance",
      "In-App Notifications",
      "Content-Based Recommendations",
      "Real-Time Data Updates",
      "Transparent Donation Tracking",
    ],

    challenges:
      "One of the key challenges was integrating multiple application features such as donation tracking, campaign management, pet profiling, real-time data updates, and personalized recommendations into a unified mobile experience while maintaining accurate and consistent data across the system.",

    learnings:
      "Developing PAWLYTICS strengthened my experience in mobile application development using Flutter and Dart, backend and database integration with Supabase, payment integration, authentication, real-time data management, and implementing a content-based recommendation algorithm for personalized user experiences.",

    securityFeatures: [],

    objectives: null,

    modules: [],

    image: pawlyticsLogo,

    gallery: [
      p1,
      p2,
      p3,
      p4,
      p5,
      p6,
      p7,
      p8,
      p9,
    ],

    github: "",

    liveUrl: "",
  },


  // ==========================================================
  // PROJECT 02 — BUYZAAR
  // ==========================================================

  {
    id: 2,

    number: "02",

    title: "BUYZAAR",

    subtitle:
      "A Web-Based E-Commerce & Digital Sales Platform with Secure Online Payments, Order Processing, and Inventory Management",

    category: "FULL-STACK WEB DEVELOPMENT",

    year: "2026",

    role: "Developer",

    description:
      "A secure web-based e-commerce platform designed to provide a complete online shopping experience, from product discovery and checkout to payment processing, order tracking, and inventory management.",

    technologies: [
      ".NET C#",
      "ASP.NET",
      "SQL",
      "HTML",
      "CSS",
      "JavaScript",
      "PayMongo API",
    ],

    overview:
      "BUYZAAR is a web-based e-commerce and digital sales platform developed to provide customers with a convenient and secure way to browse products, manage their shopping cart, complete online purchases, and track their orders. The system also provides administrative tools for managing products, customer accounts, transactions, orders, and inventory.",

    problem:
      "Managing online sales requires multiple processes to work together reliably, including customer authentication, product management, shopping carts, payments, order processing, and inventory updates. Without a centralized system, these processes can become difficult to manage and may lead to inconsistent inventory records, inefficient order processing, and a poor customer shopping experience.",

    solution:
      "BUYZAAR centralizes the e-commerce workflow into a single web platform. Customers can create accounts, browse and search products, manage their carts, securely complete checkout through PayMongo, and monitor their orders. Administrators can manage the product catalog, user access, orders, payments, and inventory while maintaining synchronized stock information throughout the purchasing process.",

    features: [
      "User Registration & Authentication",
      "Email Verification",
      "Password Reset & Recovery",
      "Role-Based Access Control",
      "Product Catalog Management",
      "Product Search & Filtering",
      "Product Reviews & Ratings",
      "Shopping Cart Management",
      "Persistent Shopping Cart",
      "Checkout System",
      "Shipping Information Management",
      "Discount & Coupon Management",
      "PayMongo Payment Integration",
      "Payment Validation & Confirmation",
      "Transaction History",
      "Order Placement & Tracking",
      "Order Status Management",
      "Inventory Tracking",
      "Stock Synchronization",
      "Low Stock Alerts",
      "Order Fulfillment & Delivery",
      "Returns & Refund Management",
    ],

    challenges:
      "One of the main development challenges was connecting multiple e-commerce processes into a consistent transaction flow. Product availability, cart data, payment status, orders, and inventory records needed to remain synchronized while handling failed payments, cancelled transactions, stock changes, and other possible interruptions during checkout.",

    learnings:
      "Developing BUYZAAR strengthened my experience in full-stack web development, ASP.NET and C#, relational database design, API integration, authentication and authorization, transaction handling, inventory management, and designing secure e-commerce workflows. The project also provided practical experience integrating PayMongo for online payment processing and handling different payment outcomes.",


    // ========================================================
    // SECURITY FEATURES
    // ========================================================

    securityFeatures: [
      "Authentication & Authorization",
      "Role-Based Access Control",
      "Input Validation",
      "Secure Session Management",
      "Session Timeout",
      "Account Lockout After Repeated Failed Logins",
      "Sensitive Data Encryption",
      "Secure API & Secret Key Storage",
      "Logging & Monitoring",
      "Multi-Factor Authentication",
    ],


    // ========================================================
    // OBJECTIVES
    // ========================================================

    objectives: {
      general:
        "To develop a secure, efficient, and user-friendly web-based e-commerce platform that enables online product browsing, purchasing, and management of transactions.",

      specific: [
        "Develop a web-based e-commerce platform that allows users to browse and purchase products online.",

        "Implement secure user authentication and authorization for administrators and customers.",

        "Provide a seamless shopping experience through a functional shopping cart and checkout system.",

        "Integrate PayMongo for secure and reliable online payment transactions.",

        "Manage orders and inventory efficiently through synchronized updates and tracking.",
      ],
    },


    // ========================================================
    // SYSTEM MODULES
    // ========================================================

    modules: [
      {
        title: "USER AUTHENTICATION & ACCOUNT MANAGEMENT",

        items: [
          "User Registration",
          "User Login & Logout",
          "Password Reset & Recovery",
          "Email Verification",
          "Profile Management",
          "Role & Permission Management",
          "Account Security",
        ],
      },

      {
        title: "PRODUCT CATALOG MANAGEMENT",

        items: [
          "Product Listing",
          "Product Category Management",
          "Product Search & Filtering",
          "Product Details",
          "Product Reviews & Ratings",
          "Product Image Management",
          "Admin Product CRUD",
        ],
      },

      {
        title: "SHOPPING CART & CHECKOUT",

        items: [
          "Add to Cart",
          "Update & Remove Cart Items",
          "Cart Persistence",
          "Checkout Process",
          "Shipping Information",
          "Order Summary & Review",
          "Discount & Coupon Management",
        ],
      },

      {
        title: "PAYMENT INTEGRATION",

        items: [
          "Payment Method Selection",
          "PayMongo Payment Processing",
          "Payment Validation",
          "Payment Confirmation",
          "Transaction History",
          "Refund & Cancellation",
          "Payment Error Handling",
        ],
      },

      {
        title: "ORDER & INVENTORY MANAGEMENT",

        items: [
          "Order Placement",
          "Order Tracking",
          "Order Status Management",
          "Inventory Tracking",
          "Stock Synchronization",
          "Low Stock Alerts",
          "Order Fulfillment & Delivery",
          "Returns & Refund Handling",
        ],
      },
    ],


    // ========================================================
    // BUYZAAR COVER IMAGE
    // ========================================================

    image: buyzaarLogo,


    // ========================================================
    // BUYZAAR GALLERY
    // ========================================================

    // Keep this as an ARRAY.
    //
    // Once you add screenshots:
    //
    // gallery: [
    //   b1,
    //   b2,
    //   b3,
    //   b4,
    //   b5,
    // ],

    gallery: [
      b1,
      b2,
      b3,
      b4,
      b5,
      b6,
      b7,
      b8,
      b9,
      b10, 
      b11,
      b12
    ],


    // ========================================================
    // PROJECT LINKS
    // ========================================================

    github: "",

    liveUrl: "https://mybuyzaar.runasp.net/",
  },
];


// ============================================================
// EXPORT
// ============================================================

export default projects;