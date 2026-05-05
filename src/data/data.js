export const PALETTE = {
  source:    "#C94B2C",
  sink:      "#1F6B5C",
  boreal:    "#2A6496",
  tundra:    "#5BA3A0",
  temperate: "#B07D3A",
  accent:    "#7EC8C8",
  grid:      "#1A3045",
  text:      "#C8D8E4",
  bg:        "#0B1C26",
};

export const axisStyle = { fill: "#C8D8E4", fontSize: 11 };

export function neeToColor(value) {
  if (value === null || value === undefined) return "#1A3045";
  const maxAbs = 55;
  const clamped = Math.max(-maxAbs, Math.min(maxAbs, value));
  if (clamped < 0) {
    const t = Math.abs(clamped) / maxAbs;
    const r = Math.round(31  + (10  - 31)  * t);
    const g = Math.round(107 + (160 - 107) * t);
    const b = Math.round(92  + (120 - 92)  * t);
    return `rgb(${r},${g},${b})`;
  } else {
    const t = clamped / maxAbs;
    const r = Math.round(31  + (201 - 31)  * t);
    const g = Math.round(107 + (75  - 107) * t);
    const b = Math.round(92  + (44  - 92)  * t);
    return `rgb(${r},${g},${b})`;
  }
}

export const DATA_BALANCE = [
  { year: 2000, pct_source: 60.8, pct_sink: 39.2, nee_median: 4.078,  n: 125 },
  { year: 2001, pct_source: 66.9, pct_sink: 33.1, nee_median: 5.492,  n: 175 },
  { year: 2002, pct_source: 57.7, pct_sink: 42.3, nee_median: 2.825,  n: 246 },
  { year: 2003, pct_source: 52.7, pct_sink: 47.3, nee_median: 1.636,  n: 332 },
  { year: 2004, pct_source: 53.2, pct_sink: 46.8, nee_median: 1.275,  n: 479 },
  { year: 2005, pct_source: 52.8, pct_sink: 47.2, nee_median: 1.021,  n: 468 },
  { year: 2006, pct_source: 55.0, pct_sink: 45.0, nee_median: 2.128,  n: 409 },
  { year: 2007, pct_source: 47.7, pct_sink: 52.3, nee_median: -1.577, n: 438 },
  { year: 2008, pct_source: 52.5, pct_sink: 47.5, nee_median: 1.274,  n: 463 },
  { year: 2009, pct_source: 53.8, pct_sink: 46.2, nee_median: 1.680,  n: 359 },
  { year: 2010, pct_source: 55.8, pct_sink: 44.2, nee_median: 2.073,  n: 330 },
  { year: 2011, pct_source: 55.7, pct_sink: 44.3, nee_median: 2.587,  n: 357 },
  { year: 2012, pct_source: 59.1, pct_sink: 40.9, nee_median: 2.624,  n: 557 },
  { year: 2013, pct_source: 51.7, pct_sink: 48.3, nee_median: 0.700,  n: 673 },
  { year: 2014, pct_source: 50.6, pct_sink: 49.4, nee_median: 0.103,  n: 745 },
  { year: 2015, pct_source: 58.1, pct_sink: 41.9, nee_median: 1.848,  n: 663 },
  { year: 2016, pct_source: 59.9, pct_sink: 40.1, nee_median: 2.844,  n: 613 },
  { year: 2017, pct_source: 55.9, pct_sink: 44.1, nee_median: 1.662,  n: 726 },
  { year: 2018, pct_source: 59.8, pct_sink: 40.2, nee_median: 2.922,  n: 674 },
  { year: 2019, pct_source: 57.2, pct_sink: 42.8, nee_median: 2.745,  n: 720 },
  { year: 2020, pct_source: 64.3, pct_sink: 35.7, nee_median: 4.412,  n: 695 },
  { year: 2021, pct_source: 68.4, pct_sink: 31.6, nee_median: 3.032,  n: 728 },
  { year: 2022, pct_source: 65.1, pct_sink: 34.9, nee_median: 2.250,  n: 661 },
  { year: 2023, pct_source: 60.3, pct_sink: 39.7, nee_median: 3.201,  n: 287 },
  { year: 2024, pct_source: 70.8, pct_sink: 29.2, nee_median: 2.344,  n:  48 },
];

const MONTHS = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

export const DATA_HEATMAP = [
  {
    biome: "Bosque Boreal",
    Ene: 10.43, Feb: 8.07,  Mar: 7.25,  Abr: 2.00,  May: -17.71, Jun: -37.81,
    Jul: -32.73, Ago: -14.04, Sep: 3.54, Oct: 16.28, Nov: 15.49,  Dic: 12.45,
  },
  {
    biome: "Tundra",
    Ene: 4.27,  Feb: 3.39,  Mar: 2.27,  Abr: 1.82,  May: 2.67,  Jun: -14.63,
    Jul: -37.13, Ago: -17.91, Sep: 9.28, Oct: 9.79,  Nov: 7.34,  Dic: 5.92,
  },
  {
    biome: "Templado",
    Ene: 16.25, Feb: 10.11, Mar: 0.91,  Abr: -8.62, May: -23.27, Jun: -51.40,
    Jul: -38.48, Ago: -48.45, Sep: -25.77, Oct: 3.62, Nov: 10.87, Dic: 14.31,
  },
];

export const DATA_HEATMAP_LONG = DATA_HEATMAP.flatMap(row =>
  MONTHS.map((mes, i) => ({
    biome: row.biome,
    month: i + 1,
    mes,
    nee: row[mes],
  }))
);

export const DATA_GPP_RECO = [
  { year: 2000, gpp: 20.40, reco: 34.21 },
  { year: 2001, gpp: 19.09, reco: 27.02 },
  { year: 2002, gpp: 16.39, reco: 27.04 },
  { year: 2003, gpp: 26.40, reco: 24.05 },
  { year: 2004, gpp: 19.67, reco: 22.96 },
  { year: 2005, gpp: 26.87, reco: 28.62 },
  { year: 2006, gpp: 27.21, reco: 24.90 },
  { year: 2007, gpp: 38.49, reco: 32.81 },
  { year: 2008, gpp: 26.30, reco: 29.32 },
  { year: 2009, gpp: 17.70, reco: 25.96 },
  { year: 2010, gpp: 25.09, reco: 29.90 },
  { year: 2011, gpp: 20.61, reco: 27.04 },
  { year: 2012, gpp: 31.74, reco: 29.14 },
  { year: 2013, gpp: 26.81, reco: 29.55 },
  { year: 2014, gpp: 23.45, reco: 24.86 },
  { year: 2015, gpp: 25.63, reco: 31.40 },
  { year: 2016, gpp: 17.51, reco: 28.78 },
  { year: 2017, gpp: 32.30, reco: 35.85 },
  { year: 2018, gpp: 29.44, reco: 34.59 },
  { year: 2019, gpp: 35.90, reco: 40.22 },
  { year: 2020, gpp: 19.92, reco: 35.24 },
  { year: 2021, gpp: 18.65, reco: 34.23 },
  { year: 2022, gpp: 42.14, reco: 40.80 },
  { year: 2023, gpp: 48.18, reco: 46.24 },
].map(d => ({ ...d, balance: parseFloat((d.reco - d.gpp).toFixed(2)) }));

export const DATA_BAWLD = [
  { ecosystem: "Turbera Permafrost", nee_median: -4.98, pct_source: 43.8, n: 532  },
  { ecosystem: "Turbera",            nee_median: -2.29, pct_source: 44.2, n: 1576 },
  { ecosystem: "Tundra Seca",        nee_median:  0.91, pct_source: 57.1, n: 1591 },
  { ecosystem: "Tundra Húmeda",      nee_median:  2.07, pct_source: 60.6, n: 1756 },
  { ecosystem: "Tundra Mésica",      nee_median:  3.00, pct_source: 59.0, n: 485  },
  { ecosystem: "Ciénaga",            nee_median:  3.23, pct_source: 63.1, n: 1348 },
  { ecosystem: "Bosque Boreal",      nee_median:  5.93, pct_source: 60.7, n: 5055 },
];

export const DATA_AQUATIC = [
  { year: 1986, Lentico: 11.78 },
  { year: 1988, Lentico:  1.99, Lotico:  0.69 },
  { year: 1994, Lentico:  4.22 },
  { year: 1996, Lentico: 36.54 },
  { year: 1998, Lentico: 17.53 },
  { year: 1999, Lentico: 12.65 },
  { year: 2000, Lentico: 10.11 },
  { year: 2001, Lentico: 11.78, Lotico: 74.65 },
  { year: 2003, Lentico: 10.80 },
  { year: 2004, Lentico:  8.68 },
  { year: 2005, Lentico:  6.24 },
  { year: 2006, Lentico:  6.87 },
  { year: 2007, Lentico:  8.37 },
  { year: 2008, Lentico:  7.27 },
  { year: 2009, Lentico:  3.35, Lotico: 338.28 },
  { year: 2010, Lentico:  3.10, Lotico:   1.98 },
  { year: 2011, Lentico:  6.98, Lotico: 122.78 },
  { year: 2012, Lentico: 13.48, Lotico:  54.45 },
  { year: 2013, Lentico: 16.53, Lotico:  53.53 },
  { year: 2014, Lentico: 18.12, Lotico:  57.70 },
  { year: 2015, Lentico: 10.66, Lotico:  65.08 },
  { year: 2016, Lentico: 15.34, Lotico:  88.48 },
  { year: 2017, Lentico: 12.13, Lotico: 138.59 },
  { year: 2018, Lentico:  7.91, Lotico:  26.04 },
  { year: 2019, Lentico:  7.87, Lotico:  52.75 },
  { year: 2020, Lentico: 17.91, Lotico:  44.60 },
  { year: 2021, Lentico: 16.62, Lotico:  13.49 },
  { year: 2022, Lentico:  2.61, Lotico:   3.68 },
  { year: 2023, Lentico:  6.59, Lotico:  26.66 },
  { year: 2024, Lentico:  0.93, Lotico:  22.46 },
];