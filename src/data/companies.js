export const companies = [
  { name: "Nova Labs", logo: "nova-labs", tone: "dark", openRoles: 2 },
  { name: "Kyiv Cloud", logo: "kyiv-cloud", tone: "light", openRoles: 3 },
  { name: "Pixelforge", logo: "pixelforge", tone: "gray", openRoles: 4 },
  { name: "TestHive", logo: null, tone: "dark", openRoles: 5 },
  { name: "Cloudway", logo: "cloudway", tone: "light", openRoles: 6 },
  { name: "Startly", logo: null, tone: "gray", openRoles: 7 }
];

export const companyByName = Object.fromEntries(companies.map((company) => [company.name, company]));
