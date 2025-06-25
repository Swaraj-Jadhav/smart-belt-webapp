
import {
  MapPin,
  HeartPulse,
  Bell,
  BatteryFull
} from "lucide-react";

export const features = [
  {
    title: "Real-time GPS Tracking",
    description: "Monitor your pet's location in real-time with precision up to 10 meters.",
    icon: MapPin
  },
  {
    title: "Health Monitoring",
    description: "Track vital signs including heart rate, temperature, and activity levels.",
    icon: HeartPulse
  },
  {
    title: "Instant Alerts",
    description: "Receive notifications when your pet leaves designated safe zones.",
    icon: Bell
  },
  {
    title: "Long Battery Life",
    description: "Enjoy up to 7 days of continuous use on a single charge.",
    icon: BatteryFull
  }
];


export const pricing = {
  originalPrice: 4500,
  discountPercentage: 15
};

export const productSpecs = {
  physical: [
    { name: "Weight", value: "28g (Small), 42g (Medium), 56g (Large)" },
    { name: "Dimensions", value: "Adjustable to fit neck sizes" },
    { name: "Water Resistance", value: "IP67 (Waterproof up to 1m)" },
    { name: "Materials", value: "Hypoallergenic silicone, aluminum clasp" }
  ],
  battery: [
    { name: "Battery Type", value: "Rechargeable Li-ion" },
    { name: "Battery Life", value: "Up to 7 days (normal use)" },
    { name: "Charging Time", value: "2 hours to full charge" },
    { name: "Charging Method", value: "USB-C" }
  ],
  connectivity: [
    { name: "GPS", value: "High-precision GPS + GLONASS" },
    { name: "Connectivity", value: "Bluetooth 5.2, WiFi, Cellular (LTE)" },
    { name: "Health Sensors", value: "Heart rate, temperature, motion" },
    { name: "Range", value: "Unlimited (with cellular connection)" }
  ]
};

export const sizeGuide = [
  {
    size: "Small",
    neck: "6-12 inches (15-30 cm)",
    weight: "5-15 lbs (2.3-6.8 kg)"
  },
  {
    size: "Medium",
    neck: "10-18 inches (25-45 cm)",
    weight: "15-40 lbs (6.8-18 kg)"
  },
  {
    size: "Large",
    neck: "16-24 inches (40-60 cm)",
    weight: "40-70 lbs (18-32 kg)"
  },
  {
    size: "X-Large",
    neck: "20-30 inches (50-75 cm)",
    weight: "70+ lbs (32+ kg)"
  }
];

export const faqs = [
  {
    question: "How accurate is the GPS tracking?",
    answer: "The PetTrack Smart Belt uses a combination of GPS, GLONASS, and WiFi positioning to provide accuracy within 10 meters in optimal conditions..."
  },
  {
    question: "Is there a monthly subscription fee?",
    answer: "The PetTrack Smart Belt comes with a free Basic Plan that includes location tracking..."
  },
  {
    question: "How waterproof is the device?",
    answer: "The PetTrack Smart Belt has an IP67 rating, meaning it's fully protected against dust..."
  },
  {
    question: "When will my pre-order ship?",
    answer: "We expect to begin shipping pre-orders in August 2025..."
  },
  {
    question: "How do I measure my pet for the correct size?",
    answer: "To measure your pet for the correct size, use a soft measuring tape..."
  },
  {
    question: "Can I change my order details after placing a pre-order?",
    answer: "Yes, you can modify your pre-order details (size, color, quantity, shipping address)..."
  }
];

export const trustIndicators = [
  {
    icon: "fa-solid fa-shield-halved",
    title: "Secure Payment",
    description: "Your payment information is encrypted and secure. We never store your full card details."
  },
  {
    icon: "fa-solid fa-rotate-left",
    title: "30-Day Returns",
    description: "Not satisfied? Return within 30 days of delivery for a full refund, no questions asked."
  },
  {
    icon: "fa-solid fa-truck-fast",
    title: "Free Shipping",
    description: "All pre-orders include free standard shipping to addresses in the United States."
  },
  {
    icon: "fa-solid fa-headset",
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist with any questions."
  }
];

export const footerLinks = {
  quickLinks: [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Pre-order", href: "#booking" },
    { name: "Support", href: "#support" },
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" }
  ],
  supportLinks: [
    { name: "FAQs", href: "#" },
    { name: "Shipping Policy", href: "#" },
    { name: "Returns & Refunds", href: "#" },
    { name: "Warranty Information", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" }
  ],
  contactInfo: [
    { icon: "fa-solid fa-location-dot", text: "123 Innovation Way, Tech Park, CA 94103, USA" },
    { icon: "fa-solid fa-envelope", text: "support@pettrack.com" },
    { icon: "fa-solid fa-phone", text: "+1 (800) 123-4567" },
    { icon: "fa-solid fa-clock", text: "Monday-Friday: 9am-6pm EST" }
  ]
};

export const socialLinks = [
  { icon: "fa-brands fa-facebook-f", href: "#" },
  { icon: "fa-brands fa-twitter", href: "#" },
  { icon: "fa-brands fa-instagram", href: "#" },
  { icon: "fa-brands fa-youtube", href: "#" }
];

export const paymentMethods = [
  "fa-brands fa-cc-visa",
  "fa-brands fa-cc-mastercard",
  "fa-brands fa-cc-amex",
  "fa-brands fa-cc-paypal",
  "fa-brands fa-apple-pay"
];