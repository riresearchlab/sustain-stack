import { motion } from "framer-motion";
import { Leaf, Thermometer, Droplets, Sun, Gauge, Globe } from "lucide-react";
import bioHero from "@/assets/bioenvelope-hero.jpg";

const specs = [
  {
    icon: Leaf,
    title: "Active Carbon Capture",
    desc: "Algae in photobioreactor panels grows 10x faster than terrestrial plants, scrubbing CO₂ from surrounding air.",
  },
  {
    icon: Thermometer,
    title: "Dynamic Insulation",
    desc: "Fluid-filled panels absorb solar radiation, reducing Urban Heat Island effect and interior cooling demands.",
  },
  {
    icon: Gauge,
    title: "LCA Module",
    desc: "Tracks Carbon Payback Period—how long panels must be active to offset manufacturing energy.",
  },
  {
    icon: Droplets,
    title: "Harvesting Alerts",
    desc: "Alerts Bio-Maintenance teams when algae density reaches peak saturation for biofuel or fertilizer harvest.",
  },
  {
    icon: Sun,
    title: "Sun-Tracking ANDS",
    desc: "Automated Nutrient Delivery adjusts flow rate based on UV intensity, pH, and nitrate levels.",
  },
  {
    icon: Globe,
    title: "Thermal Dashboard",
    desc: "Integrates with HVAC via BACnet/Modbus, visualizing real-time kWh savings during peak hours.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const BioEnvelopeSection = () => {
  return (
    <section id="bioenvelope" className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="inline-block gradient-bio text-accent-foreground text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Part 2
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Bio<span className="text-gradient-leaf">Envelope</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Buildings that breathe—biotech-integrated architectural panels that capture carbon and regulate temperature through living algae systems.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden mb-20 shadow-2xl shadow-emerald/10"
        >
          <img
            src={bioHero}
            alt="Futuristic warehouse with glowing green algae photobioreactor panels at dusk"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="text-primary-foreground font-display text-2xl md:text-3xl font-bold drop-shadow-lg">
              Buildings That Breathe
            </p>
            <p className="text-primary-foreground/80 text-sm mt-1">
              Photobioreactor panels · Active carbon capture · Dynamic thermal regulation
            </p>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {specs.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-surface-elevated rounded-2xl border border-border p-6 hover:shadow-lg hover:shadow-emerald/5 transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl gradient-bio flex items-center justify-center mb-4">
                <s.icon size={20} className="text-accent-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
          <h3 className="font-display text-2xl font-bold text-center mb-8 text-foreground">IoT & Software Stack</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Frontend", items: "Next.js · Mapbox · Real-time dashboards" },
              { label: "IoT", items: "Raspberry Pi 4/5 · BACnet/Modbus · Sensors" },
              { label: "Data Science", items: "Python · Pandas/NumPy · Climate Modeling" },
            ].map((t) => (
              <div key={t.label} className="bg-emerald-light rounded-2xl p-6 border border-emerald/10">
                <span className="text-xs font-bold tracking-widest uppercase text-accent mb-2 block">
                  {t.label}
                </span>
                <p className="text-sm text-foreground font-medium">{t.items}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BioEnvelopeSection;
