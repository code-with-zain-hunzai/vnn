const Stats = () => {
  const stats = [
    {
      value: "12+",
      label: "countries served",
    },
    {
      value: "99.9%",
      label: "System Uptime",
    },
    {
      value: "50k",
      label: "Registered Users",
    },
    {
      value: "4.9",
      label: "Average rating",
    },
  ];

  return (
    <section className="absolute z-50  bottom-0 w-full">
      <div className="section-container">
        <div className="flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group bg-white px-20 py-10 rounded-xl shadow-lg">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-semibold text-black mb-1 text-nowrap">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
