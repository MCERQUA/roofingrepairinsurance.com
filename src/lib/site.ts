// Centralized site data — used across nav, footer, schema, CTAs
// Roofing Repair Insurance — insurance for roofing repair specialists and storm damage restoration

export const SITE = {
  name: "Roofing Repair Insurance",
  legalName: "Roofing Repair Insurance (by Contractors Choice Agency)",
  domain: "roofingrepairinsurance.com",
  url: "https://roofingrepairinsurance.com",
  tagline: "Coverage for Roofing Repair & Storm Damage Contractors",
  description:
    "Specialized commercial insurance for roofing repair contractors and storm damage restoration specialists — general liability with completed operations, workers' compensation, commercial auto, tools and equipment, storm damage restoration coverage, commercial umbrella, and contractors pollution liability. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const BRAND = {
  brandShort: "Roofing Repair",
  brandSub: "Insurance",
  nicheShort: "roofing repair contractor",
  nicheShortCap: "Roofing Repair Contractor",
  nichePlural: "roofing repair contractors",
  nichePluralCap: "Roofing Repair Contractors",
  operator: "roofing repair operation",
  operatorCap: "Roofing Repair Operation",
  industry: "roofing repair and storm restoration",
  industryCap: "Roofing Repair and Storm Restoration",
  audience: "roofing repair specialists",
  audienceCap: "Roofing Repair Specialists",
  ownerTitle: "roofing repair contractor",
  regionPill: "Texas · Florida · Southeast",
  serviceSuffix: "Roofing Repair Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "GL with completed operations for repair specialists",
    description:
      "Third-party bodily injury and property damage coverage for roofing repair and re-roofing operations — including the completed-operations tail that covers latent water-intrusion and defect claims arising after a repair job is done.",
    icon: "ShieldCheck",
    keywords: ["roofing repair general liability", "roof repair contractor GL", "storm damage contractor liability", "roofing repair completed operations"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "For roofing repair crews and laborers",
    description:
      "High-hazard roofing repair work creates real fall exposure and injury risk for your crews. We place workers' comp with carriers that understand storm-season surges, varying crew sizes, and the injury patterns of repair and restoration roofing.",
    icon: "HardHat",
    keywords: ["roofing repair workers comp", "storm damage contractor workers compensation", "roofer injury insurance", "roofing crew workers comp"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto Insurance",
    short: "Work trucks, vans, and trailers for repair crews",
    description:
      "Coverage for the trucks, vans, and trailers your repair crews drive to every job — including hired and non-owned auto when employees use personal vehicles for roofing repair business. Built for contractors with storm-season surge capacity.",
    icon: "Truck",
    keywords: ["roofing repair commercial auto", "storm contractor truck insurance", "roofer van coverage", "repair contractor auto insurance"],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Equipment Coverage",
    short: "Tools and equipment for roofing repair work",
    description:
      "Inland marine coverage for nail guns, compressors, generators, tarps, ladders, and repair equipment — covering theft, accidental damage, and mysterious disappearance at job sites, in transit, and in storage between storm calls.",
    icon: "Wrench",
    keywords: ["roofing repair tools coverage", "storm contractor equipment insurance", "roofer tools theft", "repair contractor inland marine"],
  },
  {
    slug: "storm-damage-restoration",
    title: "Storm Damage Restoration Coverage",
    short: "Specialized for storm-season surge operations",
    description:
      "Insurance programs designed for the unique risk profile of storm damage restoration roofing — covering surge-capacity crews, elevated volume periods, and the documentation-intensive claims process that follows hail, wind, or hurricane events.",
    icon: "Award",
    keywords: ["storm damage roofing insurance", "storm restoration contractor coverage", "hail damage roofer insurance", "hurricane roofing contractor insurance"],
  },
  {
    slug: "commercial-umbrella",
    title: "Commercial Umbrella Insurance",
    short: "Excess limits above GL and auto",
    description:
      "An umbrella extends your GL and auto limits for storm damage restoration contractors who bid commercial repairs or work under GC certificate requirements that demand $5M or more in total coverage.",
    icon: "Umbrella",
    keywords: ["roofing repair umbrella", "storm contractor umbrella", "roofer excess liability", "repair contractor umbrella policy"],
  },
  {
    slug: "commercial-property",
    title: "Commercial Property Insurance",
    short: "Office, storage, and repair equipment",
    description:
      "Covers your office, warehouse, and storage yard — including tarp inventory, repair materials, and business equipment. Especially important for roofing repair contractors who carry significant material inventory through storm season.",
    icon: "Building2",
    keywords: ["roofing repair property insurance", "storm contractor office coverage", "repair contractor property", "roofing business property insurance"],
  },
  {
    slug: "contractors-pollution-liability",
    title: "Contractors Pollution Liability",
    short: "Asphalt, solvents, and material exposure",
    description:
      "CPL for roofing repair contractors covers bodily injury and property damage from asphalt, solvents, adhesives, and asbestos disturbed during tear-off of old roofing — pollution exposures that standard GL policies exclude.",
    icon: "Droplets",
    keywords: ["roofing repair CPL", "storm contractor pollution liability", "roofer asphalt coverage", "repair contractor pollution insurance"],
  },
] as const;

export const LOCATIONS = [
  { slug: "texas", name: "Texas", region: "Dallas · Houston · San Antonio", blurb: "Texas's hail corridor and Gulf Coast generate enormous roofing repair and storm restoration volume. We insure Texas roofing repair contractors with programs built for storm-season surge capacity and year-round repair operations." },
  { slug: "florida", name: "Florida", region: "Miami · Tampa · Orlando", blurb: "Hurricane and tropical storm activity make Florida one of the highest-volume roofing repair markets in the country. We build insurance programs for Florida storm damage restoration contractors and year-round repair specialists." },
  { slug: "southeast", name: "Southeast", region: "GA · SC · NC · TN", blurb: "Southeast roofing repair contractors manage storm seasons, hurricane remnants, and high residential repair volume. We place programs for SE repair specialists across Georgia, the Carolinas, and Tennessee." },
  { slug: "midwest", name: "Midwest", region: "IL · OH · MI · IN", blurb: "Midwest hail and severe weather events drive significant roofing repair volume. We insure roofing repair contractors across the Midwest with programs suited for seasonal storm damage work and year-round residential repair." },
  { slug: "southwest", name: "Southwest", region: "AZ · NV · NM · CO", blurb: "Southwest monsoon and hail events create surge repair demand for roofing contractors. We build programs for Arizona and Southwest repair specialists who manage both storm-damage restoration and year-round repair work." },
  { slug: "mountain-west", name: "Mountain West", region: "CO · UT · ID · MT", blurb: "Mountain-region hail and wind events drive roofing repair demand. We insure roofing repair contractors across Colorado and the Mountain West with programs that reflect seasonal storm exposure and steep-pitch repair work." },
  { slug: "northeast", name: "Northeast", region: "NY · PA · NJ · MA", blurb: "Northeast roofing repair contractors handle nor'easter damage, ice damming, and high-value residential and commercial repair. We build comprehensive programs for repair specialists across the Northeast corridor." },
  { slug: "pacific-west", name: "Pacific West", region: "CA · OR · WA", blurb: "West Coast roofing repair contractors manage wind, rain, and wildfire-adjacent repair work. We insure Pacific-region repair specialists with programs that reflect California's strict contractor licensing requirements." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Storm restoration specialists", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 280, suffix: "+", label: "Roofing repair contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring trade contractors", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "Storm season hit and we tripled our crew size overnight. Our old carrier cancelled mid-season. Roofing Repair Insurance placed a program that accommodated our surge payroll and kept us covered through the busiest weeks of the year. That's the kind of agency you want in your corner.", name: "Derek W.", role: "Storm Damage Contractor", location: "Texas" },
  { quote: "A completed-operations claim came in eight months after a repair job — the homeowner said the flashing wasn't properly sealed. The coverage was in place because this agency structured it right the first time. Other agents just give you a cheap GL; these guys build the real program.", name: "Alicia T.", role: "Roofing Repair Owner", location: "Florida" },
  { quote: "We had a tools trailer stolen at a storm-damage site. The inland marine paid within days — no fight, no argument about whether it was covered off-premises. I've had that fight with other agents. Not here.", name: "Marcus J.", role: "Repair Crew Supervisor", location: "Georgia" },
] as const;
