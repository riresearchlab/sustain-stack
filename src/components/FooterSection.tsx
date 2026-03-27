const FooterSection = () => (
  <footer id="contact" className="bg-foreground py-16">
    <div className="container mx-auto px-6 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
        Ready to Transform Your Facility?
      </h2>
      <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8 text-base">
        Whether you're optimizing waste streams or integrating living architecture, our team is ready to help you build a sustainable future.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#ecovision"
          className="gradient-leaf text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Start with EcoVision AI
        </a>
        <a
          href="#bioenvelope"
          className="gradient-bio text-accent-foreground font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Explore BioEnvelope
        </a>
      </div>
      <p className="text-primary-foreground/30 text-xs mt-12">
        © 2026 SustainStack. All rights reserved.
      </p>
    </div>
  </footer>
);

export default FooterSection;
