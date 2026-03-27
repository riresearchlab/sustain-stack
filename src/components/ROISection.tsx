import { motion } from "framer-motion";

const rows = [
  { feature: "Primary Goal", eco: "Waste Diversion & Revenue", bio: "Carbon Capture & Thermal Savings" },
  { feature: "Primary User", eco: "Operations & Waste Managers", bio: "Sustainability & Facility Directors" },
  { feature: "Payback Period", eco: "12–18 Months (via Rebates)", bio: "5–7 Years (via Energy/Carbon Credits)" },
  { feature: "Installation", eco: "Non-Invasive (Software/Camera)", bio: "Structural (Exterior Retrofit)" },
  { feature: "Core Technology", eco: "Computer Vision / CNN", bio: "Photobioreactors / IoT" },
  { feature: "Data Output", eco: "Material classification, financial logs", bio: "Carbon metrics, thermal analytics" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const ROISection = () => {
  return (
    <section id="roi" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="inline-block gradient-ocean text-secondary-foreground text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Strategic Comparison
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            ROI at a Glance
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Side-by-side breakdown for facility managers and sustainability directors.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="overflow-x-auto rounded-2xl border border-border shadow-lg"
        >
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface">
                <th className="px-6 py-4 font-display text-sm font-semibold text-muted-foreground tracking-wide">Feature</th>
                <th className="px-6 py-4 font-display text-sm font-semibold text-primary tracking-wide">EcoVision AI</th>
                <th className="px-6 py-4 font-display text-sm font-semibold text-accent tracking-wide">BioEnvelope</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.feature}
                  className={`border-t border-border ${i % 2 === 0 ? "bg-surface-elevated" : "bg-surface"}`}
                >
                  <td className="px-6 py-4 font-semibold text-sm text-foreground">{r.feature}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{r.eco}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{r.bio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default ROISection;
