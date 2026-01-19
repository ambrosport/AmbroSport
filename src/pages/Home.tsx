import { ContactForm } from '../components/ContactForm';
import { ArrowRight, CheckCircle, Icon } from 'lucide-react';
import { Link } from 'react-router-dom';
// ImageWithFallback removed; no direct image used in this page
import heroVideo from '../components/logos/herovid.mp4';
import LogoCarousel from '../components/LogoCarousel';
import { useEffect, useRef, useState } from 'react';

export function Home() {
  const features = [
    {
      Icon: CheckCircle,
      title: 'Concepting',
      description: 'Work with our experts to develop innovative apparel concepts tailored to your brand\'s needs',
    },
    {
      Icon: Icon,
      title: 'Design',
      description: 'Collaborate with our creative team to bring your apparel vision to life with cutting-edge designs.',
    },
    {
      Icon: Icon,
      title: 'Development',
      description: 'Providing Techpacks, Strikeoffs, and Samples to ensure your apparel meets the highest standards.',
    },
    {
      Icon: Icon,
      title: 'Final Delivery',
      description: 'Ensuring your apparel reaches you on time and in perfect condition, ready for the market.',
    },
  ];

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const numberRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const onLoaded = () => setIsVideoLoaded(true);
    vid.addEventListener('canplaythrough', onLoaded);
    vid.addEventListener('loadeddata', onLoaded);

    // Fallback: reveal after 6s in case events don't fire
    const fallback = setTimeout(() => setIsVideoLoaded(true), 6000);

    return () => {
      vid.removeEventListener('canplaythrough', onLoaded);
      vid.removeEventListener('loadeddata', onLoaded);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    const gsapGlobal = (window as any).gsap;
    const ScrollTriggerGlobal = (window as any).ScrollTrigger;
    if (!gsapGlobal || !ScrollTriggerGlobal) return;

    gsapGlobal.registerPlugin(ScrollTriggerGlobal);
    const statsEl = statsRef.current;
    if (!statsEl) return;

    const targets = [30, 15, 10000, 99];
    const suffixes = ['', '+', 'K+', '%'];

    const trigger = ScrollTriggerGlobal.create({
      trigger: statsEl,
      start: 'top 80%',
      onEnter: () => {
        numberRefs.current.forEach((el, i) => {
          if (!el) return;
          const target = targets[i] ?? 0;
          const obj = { val: 0 };
          gsapGlobal.to(obj, {
            val: target,
            duration: 2,
            ease: 'power1.out',
            onUpdate: () => {
              let text = '';
              if (target >= 1000) {
                const v = Math.round(obj.val / 1000);
                text = `${v}${suffixes[i]}`;
              } else {
                text = `${Math.round(obj.val)}${suffixes[i]}`;
              }
              el.textContent = text;
            },
          });
        });
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div>
      {/* Preload overlay */}
      {!isVideoLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-8 border-blue-600 border-t-transparent animate-spin mb-4 shadow-lg" />
            <div className="text-blue-600 font-semibold text-lg">Loading</div>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className={`relative h-[800px] flex items-center justify-center text-white transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <video
          ref={videoRef}
          src={heroVideo}
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ambro Sport
          </h1> */}
          <p className="text-xl md:text-2xl mb-8">
              A multinational sourcing group powering apparel for leading U.S. brands. Backed by global offices, deep factory relationships, and decades of industry expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Explore Services</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/about"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine manufacturing expertise with retail excellence to deliver
              exceptional value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div ref={statsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">
                <span ref={(el) => (numberRefs.current[0] = el!)}>0</span>
              </div>
              <p className="text-blue-100">Years of Excellence</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">
                <span ref={(el) => (numberRefs.current[1] = el!)}>0</span>
                <span className="ml-1"></span>
              </div>
              <p className="text-blue-100">Clients Helped</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">
                <span ref={(el) => (numberRefs.current[2] = el!)}>0</span>
                <span className="ml-1"></span>
              </div>
              <p className="text-blue-100">Products</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">
                <span ref={(el) => (numberRefs.current[3] = el!)}>0</span>
                <span className="ml-1"></span>
              </div>
              <p className="text-blue-100">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

             {/* Logo carousel */}
      <LogoCarousel />

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
