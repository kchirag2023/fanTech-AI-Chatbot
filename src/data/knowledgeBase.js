// FanTech Knowledge Base
// Raw knowledge chunks consumed by retriever.js

export const KB = [
  // WARRANTY
  {
    id: "W1", category: "warranty",
    tags: ["warranty", "guarantee", "cover", "defect", "manufacturing", "2 year", "two year"],
    content: "FanTech provides a 2-year comprehensive warranty on all ceiling fans from the date of purchase. The warranty covers manufacturing defects, motor failure, electrical component faults, and blade assembly issues arising under normal use. To claim warranty, the original purchase invoice is mandatory. Warranty claims can be initiated at fantech.in/warranty or by calling 1800-200-FANS.",
  },
  {
    id: "W2", category: "warranty",
    tags: ["extended warranty", "apex pro", "zephyr elite", "5 year", "five year", "premium"],
    content: "The Apex Pro Smart BLDC and Zephyr Elite series carry an extended 5-year warranty on the motor. Other electrical components and blades remain covered for 2 years. The extended warranty is automatically activated upon product registration at fantech.in/register within 30 days of purchase. Unregistered products default to the standard 2-year policy.",
  },
  {
    id: "W3", category: "warranty",
    tags: ["warranty void", "not covered", "exclusion", "damage", "water", "improper installation"],
    content: "Warranty does not apply to: physical damage from impact or mishandling, water ingress or moisture damage, damage from voltage fluctuations, improper installation by uncertified persons, use of non-FanTech spare parts, cosmetic damage like scratches or paint fading, and fans purchased from unauthorised dealers. Using counterfeit spare parts immediately voids the warranty.",
  },
  {
    id: "W4", category: "warranty",
    tags: ["claim warranty", "service request", "warranty process", "raise ticket", "replacement"],
    content: "To raise a warranty claim: (1) Visit fantech.in/warranty or open the FanTech app and go to My Products > Raise Claim. (2) Submit your invoice, model number, and a description of the issue. (3) A FanTech engineer will contact you within 48 working hours to schedule an inspection. (4) If the fault is covered, the component is repaired or replaced at no charge. Turnaround is typically 3-5 working days.",
  },

  // INSTALLATION
  {
    id: "I1", category: "installation",
    tags: ["install", "installation", "electrician", "mounting", "ceiling", "bracket", "joist", "setup"],
    content: "FanTech fans must be installed by a qualified and licensed electrician. The ceiling mounting bracket must be fastened to a structural ceiling joist or a dedicated fan-rated brace box rated for a minimum of 35 kg dynamic load. Standard wooden or POP ceilings require additional backing. Never install into drywall alone. All necessary mounting hardware and canopy kits are included in the box.",
  },
  {
    id: "I2", category: "installation",
    tags: ["ceiling height", "downrod", "rod length", "low ceiling", "high ceiling", "flush mount"],
    content: "Minimum recommended ceiling height is 8 feet (2.4 m). Downrod length options: 30 cm for 8-9 ft ceilings, 45 cm for 9-10 ft, 60 cm for 10-12 ft, and 90 cm for 12+ ft (available as accessories). The fan's lowest point (blade) should be at least 7 feet from the floor. For ceilings under 8.5 ft, flush-mount canopy kits are available for the Breeze and Zephyr Base series.",
  },
  {
    id: "I3", category: "installation",
    tags: ["wiring", "electrical", "earthing", "neutral", "live", "wire", "voltage", "mcb"],
    content: "FanTech fans operate on 220-240V AC, 50 Hz. Always ensure proper earthing at the installation point. Wiring colours in India: Red/Brown = Live, Black/Blue = Neutral, Green/Yellow-Green = Earth. Each fan should be on a dedicated MCB (5A rating is sufficient). Scan the QR code inside the box for a complete wiring diagram video.",
  },
  {
    id: "I4", category: "installation",
    tags: ["blade pitch", "direction", "summer mode", "winter mode", "reverse", "airflow", "clockwise"],
    content: "FanTech blades are factory-set at a 14-degree pitch, optimised for Indian summer conditions. For summer use, the fan should spin counter-clockwise (when viewed from below) to push air straight down. In winter, reversing to clockwise circulates warm air trapped near the ceiling back down. Smart fans can be reversed via app or remote. Non-smart fans require an electrician to reverse the direction.",
  },

  // TROUBLESHOOTING
  {
    id: "T1", category: "troubleshooting",
    tags: ["not starting", "not working", "dead", "no power", "wont turn on", "stopped", "not spinning"],
    content: "If your FanTech fan does not start: (1) Check if the MCB/circuit breaker for that circuit has tripped and reset it. (2) Test the wall switch using another appliance. (3) Check the capacitor — a fan that hums but does not spin almost always has a failed capacitor. (4) Check all wiring connections at the ceiling rose — a loose neutral wire is the most common installation fault. (5) For smart fans: check if the fan is paired to the app and Wi-Fi is active.",
  },
  {
    id: "T2", category: "troubleshooting",
    tags: ["slow", "low speed", "speed reduced", "weak airflow", "capacitor", "regulator", "rpm"],
    content: "A fan running slower than usual is almost always caused by a degraded capacitor — a normal wear item after 3-5 years. Signs: fan starts slowly, speed setting 5 feels like setting 2. Replacement capacitors cost Rs 180-350 and are available at fantech.in/spares. If using an old resistive regulator (the ones that get warm), replacing it with an electronic regulator often restores full speed.",
  },
  {
    id: "T3", category: "troubleshooting",
    tags: ["noise", "wobble", "vibration", "humming", "rattling", "shaking", "loud", "unstable", "clicking"],
    content: "Noise and wobble fixes: (1) Loose blade screws — tighten all blade-to-flywheel screws with a Phillips screwdriver. (2) Unbalanced blades — use the blade balancing clip kit included in the box. (3) Loose canopy cover — tighten the canopy screws. (4) Downrod too short for ceiling height causing resonance — upgrade to a longer rod. (5) Worn motor bearings after 8+ years require motor replacement under extended warranty.",
  },
  {
    id: "T4", category: "troubleshooting",
    tags: ["light not working", "bulb", "led not working", "light flicker", "light kit", "dim light"],
    content: "If the light kit is not working: (1) Check if the bulb is seated correctly. (2) Test with a new E27 LED bulb (max 15W). (3) If using Glow+ integrated LED, factory reset by switching off at wall, waiting 10 seconds, then switching on and off 3 times rapidly — the light will flash to confirm reset. (4) Flickering usually means an incompatible bulb is being used — always use FanTech approved LED bulbs.",
  },
  {
    id: "T5", category: "troubleshooting",
    tags: ["remote not working", "remote dead", "wall control", "regulator", "switch", "unresponsive"],
    content: "If your remote is not responding: (1) Replace the CR2032 battery in the remote. (2) Check for RF interference from nearby wireless routers. (3) Re-pair the remote: hold the PAIR button on the receiver inside the canopy for 5 seconds until LED blinks rapidly, then press any button on the remote. (4) Remote range is up to 10 metres in open space. (5) Wall-mounted electronic regulators: if fan does not respond, the triac inside may have failed.",
  },
  {
    id: "T6", category: "troubleshooting",
    tags: ["trips mcb", "trips breaker", "short circuit", "electrical fault", "burning smell", "shock"],
    content: "If the fan trips the MCB repeatedly: immediately stop using the fan and do not reset the MCB. This indicates a short circuit or ground fault. Common causes: water ingress into the motor, damaged wiring insulation, or a shorted capacitor. If you smell burning from the motor housing, the motor winding may have failed. This is covered under warranty. Book a service visit immediately via fantech.in or 1800-200-FANS.",
  },

  // SMART FEATURES
  {
    id: "S1", category: "smart",
    tags: ["app", "fantech app", "smart", "wifi", "wi-fi", "mobile app", "ios", "android", "connect"],
    content: "The FanTech app (available on iOS App Store and Google Play) controls all smart-enabled FanTech fans. Features: 5-speed control, on/off scheduling, sleep timer, EcoSync mode (auto-adjusts speed based on room temperature), light colour temperature adjustment for Glow+ models, fan direction reversal, and usage analytics. The app requires Wi-Fi 2.4 GHz (5 GHz is not supported). Setup: Download app > Create account > Add Device > Follow on-screen pairing.",
  },
  {
    id: "S2", category: "smart",
    tags: ["alexa", "google home", "voice control", "google assistant", "smart home", "iot", "voice command"],
    content: "FanTech Smart fans are compatible with Amazon Alexa and Google Home. To link with Alexa: open Alexa app > Skills & Games > search FanTech > Enable Skill > log in > Discover Devices. To link with Google Home: open Google Home app > + > Set up device > Works with Google > search FanTech > sign in. Voice commands: 'Alexa, set FanTech to speed 3', 'Hey Google, turn off the fan'.",
  },
  {
    id: "S3", category: "smart",
    tags: ["ecosync", "auto speed", "temperature", "automatic", "smart mode", "energy saving mode"],
    content: "EcoSync is FanTech's smart auto-speed mode available on Apex Pro and Zephyr Elite Smart series. When enabled, the fan's built-in temperature sensor reads ambient room temperature and automatically adjusts speed: below 22C = speed 1, 22-26C = speed 2-3, 26-30C = speed 4, above 30C = speed 5. EcoSync can be enabled via the FanTech app or by triple-pressing the MODE button on the remote.",
  },
  {
    id: "S4", category: "smart",
    tags: ["wifi not connecting", "pairing failed", "wi-fi issue", "reconnect", "network", "2.4ghz"],
    content: "Common Wi-Fi pairing issues: (1) Ensure your phone and router are on 2.4 GHz — FanTech smart fans do not support 5 GHz networks. (2) Keep the phone within 2 metres of the fan during pairing. (3) If pairing fails, factory reset the fan receiver: switch off at MCB, wait 30 seconds, turn on and press the RESET pinhole on the receiver module inside canopy for 5 seconds. (4) Disable mobile data during pairing.",
  },

  // PRODUCTS
  {
    id: "P1", category: "products",
    tags: ["blade sweep", "fan size", "room size", "which size", "sq ft", "room area", "recommend"],
    content: "Choosing the right fan size: Up to 80 sq ft (small bedroom/study) use 900 mm (36 inch). 80-150 sq ft (standard bedroom) use 1050 mm (42 inch) or 1200 mm (48 inch). 150-250 sq ft (living room/dining) use 1200 mm or 1400 mm (56 inch). 250-350 sq ft (large hall) use 1400 mm or 1500 mm (60 inch). Above 350 sq ft use 1500 mm or consider two fans.",
  },
  {
    id: "P2", category: "products",
    tags: ["models", "product range", "breeze", "zephyr", "apex", "lineup", "series", "variants", "price"],
    content: "FanTech product lineup: (1) Breeze Base — entry-level induction motor, 900/1200 mm, no remote, Rs 1,499-1,899. (2) Breeze Plus — induction motor with remote, 1200 mm, Rs 2,199-2,599. (3) Zephyr Standard — mid-range BLDC, 1200/1400 mm, remote included, Rs 2,999-3,499. (4) Zephyr Elite — premium BLDC with smart Wi-Fi, Glow+ LED, EcoSync, Rs 3,999-4,499. (5) Apex Pro — flagship smart BLDC, 5-year motor warranty, ultra-silent, Rs 6,499-8,999.",
  },
  {
    id: "P3", category: "products",
    tags: ["bldc", "induction", "motor type", "difference", "comparison", "energy", "noise level"],
    content: "BLDC vs Induction motors: Energy use — BLDC: 28-35W vs Induction: 65-80W (up to 50% savings). Noise — BLDC motors run near-silently. Speed control — BLDC uses precise electronic control; induction uses capacitor/resistor-based regulator. Lifespan — BLDC lasts 10-15 years; induction 6-10 years. Cost — BLDC fans cost 40-60% more upfront but recover the difference in electricity savings within 2-3 years at 8hr/day usage.",
  },

  // ENERGY
  {
    id: "E1", category: "energy",
    tags: ["energy", "electricity", "watt", "bee", "star rating", "5 star", "power consumption", "bill", "saving"],
    content: "All FanTech BLDC fans carry a BEE 5-star energy rating. The Apex Pro consumes just 28W at full speed compared to 75W for a typical induction fan. At 8 hours/day use and Rs 7/unit, annual savings are approximately Rs 975 per fan per year. Over 5 years, savings on electricity alone exceed the price difference vs an induction fan. Induction Breeze models carry BEE 3-star ratings.",
  },
  {
    id: "E2", category: "energy",
    tags: ["stabiliser", "voltage", "fluctuation", "low voltage", "surge", "protect", "stabilizer"],
    content: "FanTech fans are designed to operate between 180V-260V AC. In areas with severe voltage instability, using a 500VA voltage stabiliser is strongly recommended to protect the motor and capacitor. Damage from voltage fluctuation is not covered under warranty. BLDC fans are more tolerant of voltage variation than induction fans due to their electronic drive circuit, but extreme spikes can still damage the PCB.",
  },

  // MAINTENANCE
  {
    id: "M1", category: "maintenance",
    tags: ["spare parts", "order parts", "capacitor", "blade", "remote", "receiver", "motor", "buy parts"],
    content: "Genuine FanTech spare parts are available through: fantech.in/spares (ships within 2-3 days), Amazon and Flipkart (search model number), and authorised FanTech service centres. Parts pricing: Capacitor Rs 180-350, Blade set Rs 450-900, Remote + receiver kit Rs 650-950, Canopy cover Rs 220, Downrod (45cm) Rs 380, Light kit Rs 680, Glow+ LED module Rs 1,200. Always order by model number on the motor housing sticker.",
  },
  {
    id: "M2", category: "maintenance",
    tags: ["clean", "cleaning", "maintenance", "dust", "lubricate", "oil", "service", "annual"],
    content: "Maintenance routine: Monthly — wipe blades with a dry microfibre cloth. Every 6 months — clean the motor housing vent slots with a soft brush. Annually — check all screws (blade, canopy, mounting bracket) for tightness. FanTech BLDC motors are permanently lubricated (sealed bearings) and do not require oiling. Older induction motors have oil ports on the motor housing — apply 2 drops of sewing machine oil once a year.",
  },

  // RETURNS
  {
    id: "R1", category: "returns",
    tags: ["return", "refund", "exchange", "policy", "30 day", "unopened", "unused", "cancel order"],
    content: "FanTech return policy: (1) Unopened, unused fans can be returned within 30 days for a full refund. Original packaging must be intact. (2) Defective fans (Dead on Arrival) are eligible for free replacement within 7 days of delivery. (3) Fans installed and found defective within warranty period are handled through warranty service. (4) To initiate a return: fantech.in/returns or call 1800-200-FANS. Refunds processed within 7-10 business days.",
  },
  {
    id: "R2", category: "returns",
    tags: ["price", "cost", "how much", "buy", "purchase", "amazon", "flipkart", "dealer", "emi"],
    content: "FanTech fans are available at: fantech.in (official store), Amazon, Flipkart, Croma, Reliance Digital, and authorised dealers. Price range: Breeze Base Rs 1,499, Breeze Plus Rs 2,199-2,599, Zephyr Standard Rs 2,999-3,499, Zephyr Elite Rs 3,999-4,499, Apex Pro Rs 6,499-8,999. EMI available on orders above Rs 3,000. Festival offers (Diwali, Independence Day) can bring prices down by 10-20%.",
  },
  {
    id: "R3", category: "returns",
    tags: ["service", "technician", "engineer", "repair visit", "on site", "book service", "paid service"],
    content: "FanTech home service: (1) Warranty service — free on-site inspection and repair/replacement. Engineer contacts you within 48 working hours. (2) Out-of-warranty paid service — Rs 249 inspection fee + cost of spare parts. (3) Installation service — Rs 349 per fan, includes mounting, wiring, and function test. Book via FanTech app > Service > Book Visit, or call 1800-200-FANS. Available in 200+ cities, Monday-Saturday, 9 AM-6 PM.",
  },

  // SAFETY
  {
    id: "SF1", category: "safety",
    tags: ["safety", "safe", "precaution", "dangerous", "risk", "child safe", "overheating", "fire"],
    content: "Important safety information: (1) Always switch off the fan at the MCB before any maintenance. (2) Do not operate fan if blades are visibly cracked or bent. (3) Keep fan blades at least 60 cm away from walls. (4) Do not hang objects from fan blades or motor housing. (5) FanTech fans are rated for indoor use only — not suitable for bathrooms or areas exposed to moisture. (6) In case of burning smell or smoke, switch off MCB immediately and call 1800-200-FANS.",
  },

  // CONTACT
  {
    id: "C1", category: "contact",
    tags: ["contact", "phone", "email", "support", "helpline", "call", "reach", "human", "agent", "talk to someone"],
    content: "FanTech customer support channels: (1) Helpline: 1800-200-FANS (toll-free, Mon-Sat 9 AM-8 PM). (2) Email: support@fantech.in (response within 24 hours). (3) Live chat: fantech.in (Mon-Sat 9 AM-8 PM). (4) WhatsApp: +91-98765-43210. (5) FanTech app: raise tickets, track service status. (6) Service centres: fantech.in/locate-service-centre in 200+ cities. For urgent issues like sparking or MCB trips, call the helpline directly.",
  },
];
