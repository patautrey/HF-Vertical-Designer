/* ---------------------------------------------------------
   HF Vertical Designer – Shared Utility Functions
   Used by index.html, tools, and docs where needed
----------------------------------------------------------*/

/* -----------------------------
   Unit Conversion Helpers
------------------------------*/

function metersToFeet(m) {
  return m * 3.28084;
}

function feetToMeters(ft) {
  return ft / 3.28084;
}

function mhzToWavelength(freqMHz) {
  return 300 / freqMHz; // meters
}

function wavelengthToFeet(freqMHz) {
  return mhzToWavelength(freqMHz) * 3.28084;
}

/* -----------------------------
   Antenna Length Calculations
------------------------------*/

function quarterWaveFeet(freqMHz) {
  return wavelengthToFeet(freqMHz) * 0.25;
}

function halfWaveFeet(freqMHz) {
  return wavelengthToFeet(freqMHz) * 0.5;
}

function fiveEighthsFeet(freqMHz) {
  return wavelengthToFeet(freqMHz) * 0.625;
}

/* -----------------------------
   Impedance & SWR Math
------------------------------*/

function reflectionCoefficient(z) {
  return (z - 50) / (z + 50);
}

function swrFromImpedance(z) {
  const gamma = Math.abs(reflectionCoefficient(z));
  if (gamma >= 1) return Infinity;
  return (1 + gamma) / (1 - gamma);
}

function mismatchLossDb(z) {
  const gamma = Math.abs(reflectionCoefficient(z));
  return -10 * Math.log10(1 - gamma * gamma);
}

/* -----------------------------
   Coax Loss Modeling
------------------------------*/

const COAX_TABLE = {
  "LMR400": { loss30: 1.0, loss50: 1.5 },
  "RG213":  { loss30: 1.3, loss50: 2.0 },
  "RG8X":   { loss30: 2.0, loss50: 3.0 },
  "RG58":   { loss30: 2.7, loss50: 4.5 }
};

function coaxLossPer100ft(freqMHz, type) {
  const c = COAX_TABLE[type];
  if (!c) return 0;

  const f1 = 30, f2 = 50;
  const l1 = c.loss30, l2 = c.loss50;

  if (freqMHz <= f1) return l1 * (freqMHz / f1);
  if (freqMHz >= f2) return l2 * (freqMHz / f2);

  const x = (freqMHz - f1) / (f2 - f1);
  return l1 + x * (l2 - l1);
}

function totalCoaxLossDb(freqMHz, type, lengthFt) {
  const per100 = coaxLossPer100ft(freqMHz, type);
  return per100 * (lengthFt / 100);
}

/* -----------------------------
   ERP Calculation
------------------------------*/

function erpWatts(txPower, antennaGainDb, coaxLossDb, mismatchLossDb) {
  const totalLossDb = coaxLossDb + mismatchLossDb;
  const netPower = txPower * Math.pow(10, -totalLossDb / 10);
  const erp = netPower * Math.pow(10, antennaGainDb / 10);
  return erp;
}

/* -----------------------------
   Formatting Helpers
------------------------------*/

function round(value, digits = 2) {
  const factor = Math.pow(10, digits);
  return Math.round(value * factor) / factor;
}

function formatFeet(ft) {
  return `${round(ft, 1)} ft`;
}

function formatDb(db) {
  return `${round(db, 2)} dB`;
}

function formatWatts(w) {
  return `${round(w, 1)} W`;
}

/* -----------------------------
   Export (global attach)
------------------------------*/

window.HFUtils = {
  metersToFeet,
  feetToMeters,
  mhzToWavelength,
  wavelengthToFeet,
  quarterWaveFeet,
  halfWaveFeet,
  fiveEighthsFeet,
  reflectionCoefficient,
  swrFromImpedance,
  mismatchLossDb,
  coaxLossPer100ft,
  totalCoaxLossDb,
  erpWatts,
  round,
  formatFeet,
  formatDb,
  formatWatts
};

