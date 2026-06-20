import type { CounterItem, WhyChooseItem } from "./chooseType";

export const whyChooseData: WhyChooseItem[] = [
  {
    id: 1,
    icon: "icon-car-insurance",
    title: "Finance Options",
    text: `We provide flexible car finance solutions to make owning your vehicle easy and affordable.`,
  },
  {
    id: 2,
    icon: "icon-range",
    title: "End-to-End Import Support",
    text: `From vehicle sourcing and inspections to shipping, compliance, and delivery, our team handles the entire process.`,
  },
  {
    id: 3,
    icon: "icon-rating",
    title: "Quality Inspected Vehicles",
    text: `Every vehicle is carefully reviewed to ensure it meets our quality standards before purchase and export.`,
  },
  {
    id: 4,
    icon: "icon-pin-2",
    title: "Local Support in Australia",
    text: `Serving customers across Brisbane and Melbourne with reliable communication and ongoing assistance.`,
  },
  {
    id: 5,
    icon: "icon-car",
    title: "Trusted Industry Experience",
    text: `Our experience in Japanese vehicle sourcing helps customers buy with confidence and peace of mind.`,
  },
  {
    id: 6,
    icon: "icon-mileage",
    title: "Competitive Wholesale Pricing",
    text: `We help customers and dealers secure Japanese cars at competitive prices without unnecessary middlemen.`,
  },
];

export const counterData: CounterItem[] = [
    {
        id: 1,
        icon: "icon-car",
        count: 1000,
        suffix: "+",
        text: "Vehicle fleet",
    },
    {
        id: 2,
        icon: "icon-mileage",
        count: 10,
        suffix: "M+",
        text: "Miles of drive",
    },
    {
        id: 3,
        icon: "icon-range",
        count: 15,
        suffix: "K+",
        text: "Booking reserved",
    },
    {
        id: 4,
        icon: "icon-pin-2",
        count: 50,
        suffix: "K+",
        text: "Pickup & drop",
    },
];