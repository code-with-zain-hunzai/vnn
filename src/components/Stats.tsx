const Stats = () => {
  const stats = [
    {
      value: "500+",
      label: "Enterprise Clients",
      description: "Trusted by leading organizations worldwide",
    },
    {
      value: "50TB+",
      label: "Data Processed Daily",
      description: "High-capacity infrastructure",
    },
    {
      value: "99.99%",
      label: "Network Reliability",
      description: "Industry-leading uptime guarantee",
    },
    {
      value: "15+",
      label: "Years Experience",
      description: "Proven track record in media technology",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our global infrastructure and expertise deliver exceptional results
            for clients across every sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stats-card text-center group">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
