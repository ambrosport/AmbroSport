import { ContactForm } from '../components/ContactForm';
import { Factory, PencilLine, Truck, Headphones, Wrench, Shield } from 'lucide-react';
const peru21 = '/img/peruWEB-21.jpg';
import { usePageLoad } from '../hooks/usePageLoad';

export function Services() {
  const services = [
    {
      icon: Factory,
      title: 'Custom Manufacturing',
      description:
        'Tailored manufacturing solutions to meet your specific requirements. From prototype to production, we deliver precision and quality at scale.',
      features: [
        'Prototype development',
        'Mass production capabilities',
        'Quality assurance testing',
        'Custom design services',
      ],
    },
    {
      icon: PencilLine,
      title: 'Design & Branding',
      description:
        'High-impact design and branding services to make your products stand out in the market.',
      features: [
        'In house design team',
        'Logo creation',
        'website and packaging design',
        '2D/3D rendering & Animation',
      ],
    },
    {
      icon: Truck,
      title: 'Logistics & Distribution',
      description:
        'Efficient supply chain management ensuring timely delivery of products to your doorstep or business location.',
      features: [
        'Speedy delivery options',
        'Global shipping network',
        'Real-time tracking',
        'Bulk order handling',
      ],
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      description:
        'Dedicated support team available to assist with product selection, technical questions, and after-sales service.',
      features: [
        'Technical expertise',
        'Multiple contact channels',
        'Can answer both creative and technical questions',
      ],
    },

  ];

  const isLoaded = usePageLoad();

  return (
    <div className="relative">
      {/* Page Loader */}
      <div className={`absolute inset-0 z-50 flex items-center justify-center bg-white loader-overlay ${isLoaded ? 'hidden' : ''}`}>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-8 border-blue-600 border-t-transparent animate-spin mb-4 shadow-lg" />
          <div className="text-blue-600 font-semibold text-lg">Loading</div>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <img
          src={peru21}
          alt="Logistics operations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">
            Comprehensive solutions from manufacturing to after-sales support
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 services-intro">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl services-copy">
Ambro Sport is a multinational group of sourcing offices across the world. Our core business is sourcing  for our customer needs. In a short amount of time Ambro Sport has proven itself as a reputable buying office for large manufactures and retailers throughout the USA market. Major fashion brands such as Southern Proper, Lauren James, Brewer's Lantern, American Eagle Outfitters, FILA, National Guard, Urban Outfitters, Aeropostale, and NASCAR. The Ambro Sport team has an excellent staff worldwide with years of experience with the sourcing business and apparel design. Ambro Sport has international offices in China and Peru along with many connections with factories.             </p>
          </div>

          <div className="grid md:grid-cols-2  gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our team is ready to discuss how our services can benefit your business.
            Contact us today for a consultation.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Consultation + Consepting
              </h3>
              <p className="text-gray-600">
                We discuss your needs and requirements in detail
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Planning + Design
              </h3>
              <p className="text-gray-600">
                Custom solution tailored to your specific product. Techpacks and prototypes are created
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Development
              </h3>
              <p className="text-gray-600">
                Production begins with quality checks at every stage. Samples are shared for approval
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Delivery + Support
              </h3>
              <p className="text-gray-600">
                Final delivery is made on time with ongoing support available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm id="contact" />
    </div>
  );
}
