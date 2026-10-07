export const site = {
  name: "Bell & Cross Investments Ltd",
  shortName: "Bell & Cross",
  description:
    "Enterprise systems integration, network infrastructure, cybersecurity and digital services for businesses in Kenya.",
  url: "https://bell-cross.com",
  email: "info@bell-cross.com",
  phone: "+254 716 375 309",
  phoneHref: "+254716375309",
  location: "Nairobi, Kenya",
  founded: "2022",
  socials: {
    instagram: "https://www.instagram.com/bell.and.cross/",
    linkedin: "https://www.linkedin.com/company/bell-and-cross-investments/",
  },
};

export const primaryLinks = [
  { label: "Home", href: "/#header" },
  { label: "Services", href: "/#details" },
  { label: "Strengths", href: "/#strengths" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const digitalServices = [
  {
    number: "01",
    name: "Web Development",
    summary:
      "Purpose-built websites, applications and e-commerce experiences, with hosting, maintenance and search optimization.",
    icon: "web",
  },
  {
    number: "02",
    name: "Mobile App Development",
    summary:
      "iOS, Android and cross-platform applications, from product design through testing and ongoing support.",
    icon: "mobile",
    detailLink: true,
  },
  {
    number: "03",
    name: "Digital Marketing",
    summary:
      "Search, paid advertising, social and email campaigns supported by analytics and clear reporting.",
    icon: "marketing",
  },
  {
    number: "04",
    name: "Data Analysis",
    summary:
      "Data preparation, statistical analysis, visualisation and machine learning to support business decisions.",
    icon: "data",
  },
  {
    number: "05",
    name: "ICT Consultation",
    summary:
      "Practical advice on technology investments, cybersecurity risk and disaster recovery planning.",
    icon: "consulting",
  },
  {
    number: "06",
    name: "Apple Products",
    summary:
      "Mac computers, iPads, iPhones, Apple Watch and accessories for personal and business use.",
    icon: "apple",
  },
] as const;

export const enterpriseCapabilities = [
  {
    title: "Enterprise systems and cloud",
    summary:
      "Plan and integrate the platforms businesses rely on.",
    details: [
      "Virtualisation and converged infrastructure",
      "Storage and data management",
      "Cloud enablement services",
      "Facilities and relocation",
    ],
  },
  {
    title: "Enterprise networks",
    summary:
      "Connect offices, data centres and people securely.",
    details: [
      "SD-WAN, routing and switching",
      "Wireless and mobility",
      "Data-centre networking",
      "Network performance optimisation",
    ],
  },
  {
    title: "Databases and applications",
    summary:
      "Support data management and the applications around it.",
    details: [
      "Database and data-management solutions",
      "Business application development and integration",
    ],
  },
  {
    title: "Security",
    summary:
      "Address risk across infrastructure, information and operations.",
    details: [
      "Network access control and ClearPass",
      "Governance, risk and compliance",
      "Data leakage prevention",
      "Security event information management",
      "Managed security services",
    ],
  },
  {
    title: "Services portfolio",
    summary:
      "Support technology throughout its working life.",
    details: [
      "Systems integration",
      "IT uptime support and managed services",
      "IT as a service (ITaaS)",
      "Consulting, assessment and professional services",
    ],
  },
] as const;

export const strengths = [
  {
    title: "Reliability",
    copy: "Consistent service, delivered at the right time and place.",
  },
  {
    title: "Integrity",
    copy: "Fair competition and a steady commitment to quality.",
  },
  {
    title: "Professionalism",
    copy: "Careful, ethical work and clear responsibility.",
  },
  {
    title: "Dedication",
    copy: "Committed people who take pride in the work.",
  },
  {
    title: "Excellence",
    copy: "High standards built through everyday practice.",
  },
] as const;
