export const companies = [
  { name: "Nova Labs", logo: "nova-labs", tone: "dark", openRoles: 2, type: "Product startup", size: "25–50 people" },
  { name: "Kyiv Cloud", logo: "kyiv-cloud", tone: "light", openRoles: 3, type: "Cloud infrastructure", size: "50–100 people" },
  { name: "Pixelforge", logo: "pixelforge", tone: "gray", openRoles: 4, type: "Design studio", size: "10–25 people" },
  { name: "TestHive", logo: null, tone: "dark", openRoles: 5, type: "QA services", size: "25–50 people" },
  { name: "Cloudway", logo: "cloudway", tone: "light", openRoles: 6, type: "DevOps platform", size: "50–100 people" },
  { name: "Startly", logo: null, tone: "gray", openRoles: 7, type: "Product startup", size: "10–25 people" }
];

export const companyByName = Object.fromEntries(companies.map((company) => [company.name, company]));
