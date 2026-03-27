import { motion } from "framer-motion";
import { Camera, BarChart3, Recycle, Cpu, AlertTriangle, TrendingUp } from "lucide-react";
import ecovisionHero from "@/assets/ecovision-hero.jpg";

const features = [
  {
    icon: Camera,
    title: "Object Detection",
    desc: "Custom CNN identifies individual items on moving conveyors with real-time bounding boxes.",
  },
  {
    icon: Cpu,
    title: "Semantic Segmentation",
    desc: "Determines exact material boundaries to estimate volume and weight for every piece of waste.",
  },
  {
    icon: AlertTriangle,
    title: "Contamination Alerts",
    desc: "Detects non-target items and triggers immediate alerts for floor leads to intervene.",
  },
  {
    icon: BarChart3,
    title: "Confidence Scoring",
    desc: "Every identification rated with confidence. Below 85%? Flagged for Human-in-the-Loop review.",
  },
  {
    icon: TrendingUp,
    title: "Financial Analytics",
    desc: "Calculates avoided landfill costs, CO₂ savings, and rebate values earned from diversion.",
  },
  {
    icon: Recycle,
    title: "Marketplace API",
    desc: "Automatically triggers recycler pickup when Clean Waste thresholds are met.",
  },
];

const techStack = [
  { label: "AI", items: "PyTorch · ONNX Runtime · NVIDIA Jetson Orin" },
  { label: "Backend", items: "FastAPI · PostgreSQL + PostGIS · Docker/K8s" },
  { label: "Cloud", items: "AWS S3 · SageMaker · Edge Computing" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const EcoVisionSection = () => {
  return (
    <section id="ecovision" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="inline-block gradient-leaf text-primary-foreground text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Part 1
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="text-gradient-leaf">EcoVision</span> AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Computer-Vision-as-a-Service that transforms standard facility cameras into intelligent sorters—ensuring high-value recyclables never reach a landfill.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden mb-20 shadow-2xl shadow-leaf/10"
        >
          <img
            src={ecovisionHero}
            alt="EcoVision AI computer vision system detecting materials on industrial conveyor belt"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex gap-3 flex-wrap">
              {["OCC – 98%", "LDPE – 95%", "PET – 91%", "Metal – 97%"].map((label) => (
                <span
                  key={label}
                  className="gradient-leaf text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Vision Pipeline Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-surface-elevated rounded-2xl border border-border p-6 hover:shadow-lg hover:shadow-leaf/5 transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl gradient-leaf flex items-center justify-center mb-4">
                <f.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
          <h3 className="font-display text-2xl font-bold text-center mb-8 text-foreground">Software Stack</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {techStack.map((t) => (
              <div
                key={t.label}
                className="bg-leaf-light rounded-2xl p-6 border border-leaf/10"
              >
                <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
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

export default EcoVisionSection;
