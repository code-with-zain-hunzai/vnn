
import logo from "../../public/logo.svg";

const Hero = () => {

  return (
    <section className='hero-background relative min-h-[80vh] flex flex-col overflow-hidden'>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/heroImage.png)',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            About Global Media And Connectivity
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Cutting-edge satellite technology solutions for global connectivity,
            delivering reliable communication services across industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-custom-red text-black hover:text-white cursor-pointer px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Let’s connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;