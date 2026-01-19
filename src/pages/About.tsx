import { ContactForm } from '../components/ContactForm';
import { Users, Target, Award, Globe } from 'lucide-react';
import peru44 from '../components/img/peruWEB-44.jpg';
import peru17 from '../components/img/peruWEB-17.jpg';
import steveImg from '../components/img/steve.png';
import shariImg from '../components/img/SHARI.png';
import maxHeadshot from '../components/img/max-headshot.jpg';
import maryImg from '../components/img/mary.jpeg';
import averyImg from '../components/img/avery-39.png';
import { usePageLoad } from '../hooks/usePageLoad';


export function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To deliver exceptional products and services that exceed customer expectations while maintaining the highest standards of quality and sustainability.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'We are committed to excellence in everything we do, from manufacturing to customer service, ensuring the best experience for our clients.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description:
        'Operating across multiple continents, we bring our products and expertise to customers worldwide with local service and support.',
    },
    {
      icon: Users,
      title: 'Our People',
      description:
        'Our local team of dedicated professionals is the backbone of our success, bringing expertise and passion to their work every day.',
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
          src={peru44}
          alt="Our team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Ambro Sport</h1>
          <p className="text-xl">
            Building the future through innovation, quality, and dedication
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2000, Ambro Sport is a multinational group of sourcing offices across the world. Ambro Sport has proven itself as a reputable buying office for large manufactures and retailers throughout the USA market. Our global vision is to be a leading sourcing agent with attention to detail, meeting deadlines, and most importantly superior customer service.
                </p>
                <p>
                  It was important to Steve to create a company that would provide fashion brands with personal attention to all details of a full package service. Ambro Sport handles and assists in every aspect including fabric sourcing, style design, product development, tech pack execution, salesmen samples, fittings, final production, and delivery to client distribution centers. Ambro Sport prides itself in handling every minute detail with personal attention and expertise. As the company continues to grow with its main office in Alpharetta, Georgia, buying offices in China and Peru, and sources all across the World, Steve's personal attention to every customer has not waivered.
                </p>
                <p>
                  We continue to invest in cutting-edge technology and sustainable
                  practices, ensuring that we not only meet today's needs but also
                  prepare for tomorrow's challenges. Our commitment to excellence
                  has earned the trust of leading brands and a reputation as an industry leader.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={peru17}
                alt="Warehouse facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Journey
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg">
                  1992
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                   Steve Graduates From Fashion Institute of Technology
                </h3>
                <p className="text-gray-600">
His first job was with Polo Ralph Lauren where he specialized in men’s outerwear and swim. 
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg">
                  1994
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  He was offered a position at Tommy Hilfiger where he quickly catapulted up the ranks
                </h3>
                <p className="text-gray-600">
                  Steve learned and excelled at every aspect of the manufacturing of all men’s apparel and accessory categories including the sourcing, design, production, sales, and logistics.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg">
                  1998
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  He left Tommy Hilfiger and went to work at Fila USA
                </h3>
                <p className="text-gray-600">
                 It was during that time that he found his niche in the production market. He was part of an elite team that moved to FILA International in their headquarters in Biella, Italy to further develop and promote the FILA brand both internationally and in the U. S.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg">
                  2000
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ambro Sport is Founded
                </h3>
                <p className="text-gray-600">
                  Steve created a company that would provide fashion brands with personal attention to all details of a full package service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      {/* Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Our Team</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              A small, dedicated group of professionals delivering exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white about-block p-6 rounded-lg shadow-md flex flex-col items-start">
              <img
                src={steveImg}
                alt="Team member 1"
                className="w-full h-48 object-cover rounded mb-4 about-img"
              />
              <h3 className="text-2xl font-semibold text-gray-900">Steven Ambrogio</h3>
              <p className="mt-2 text-gray-600">Founder &amp; CEO — Industry veteran with decades of experience in apparel sourcing and production.</p>
              <p>After graduating from the Fashion Institute of Technology with a degree in Apparel Production Management, Steve immediately went to work in the apparel industry as a Production Assistant. His first job was with Polo Ralph Lauren where he specialized in men’s outerwear and swim. He was offered a position at Tommy Hilfiger during the mid 90’s where he quickly catapulted up the ranks. During his time at Hilfiger, Steve learned and excelled at every aspect of the manufacturing of all men’s apparel and accessory categories including the sourcing, design, production, sales, and logistics. He was offered a rare opportunity to advance when he left Tommy Hilfiger and went to work at Fila USA. It was during that time that he found his niche in the production market. He was part of an elite team that moved to FILA International in their headquarters in Biella, Italy to further develop and promote the FILA brand both internationally and in the U. S. This extensive experience is what made Steve well prepared to start Ambro Sport, Inc. in February of 2000. It was important to Steve to create a company that would provide fashion brands with personal attention to all details of a full package service. Ambro Sport handles and assists in every aspect including fabric sourcing, style design, product development, tech pack execution, salesmen samples, fittings, final production, and delivery to client distribution centers. Ambro Sport prides itself in handling every minute detail with personal attention and expertise. As the company continues to grow with it’s main office in Alpharetta, Georgia, buying offices in China and Peru, and sources all across the World, Steve’s personal attention to every customer has not waivered.</p>
            </div>

            <div className="bg-white about-block p-6 rounded-lg shadow-md flex flex-col items-start">
              <img
                src={shariImg}
                alt="Team member 2"
                className="w-full h-48 object-cover rounded mb-4 about-img"
              />
              <h3 className="text-2xl font-semibold text-gray-900">Shari Christiansen</h3>
              <p className="mt-2 text-gray-600">Office Manager/Logistics Coordinator</p>
              <p>Graduate of Fashion Institute of Technology with degree in Apparel Production Sourcing. Shari has been with Ambro Sport, Inc. since 2006. Her attention to detail is what helps her work closely and efficiently with customers to track and handle all aspects of logistics including the production process and final delivery.Included in her roles as Logistics Manager, Shari works closely with the design team and factories to ensure products are delivered correctly and on time. Shari’s close working relationship with Steve in all sections of the business including Ambro’s human resourcing, employee scheduling, bill payment, and customs tracking, has made her in invaluable asset to Ambro Sport, Inc.</p>
            </div>

            <div className="bg-white about-block p-6 rounded-lg shadow-md flex flex-col items-start md:col-span-2">
              <img
                src={maxHeadshot}
                alt="Team member 3"
                className="w-full h-48 object-cover rounded mb-4 about-img"
              />
              <h3 className="text-2xl font-semibold text-gray-900">Max Ambrogio</h3>
              <p className="mt-2 text-gray-600">Creative Director</p>
              <p>Max Ambrogio is the Creative Director at Ambro Sport, based in Atlanta. He brings a unique blend of visual storytelling, design expertise, and strategic thinking to every project, with a passion for capturing real moments and turning them into digital stories people can connect with.
<br></br>
<br></br>
            With a background in live event coverage and the music industry, Max has built a career at the intersection of creativity and technology. Before joining Ambro Sport, he spent four years at Bearpaw Partners and two years at Brownbag Marketing, where he balanced video production with front-end development—creating responsive websites, social animations, and content designed to drive engagement.

<br></br>
<br></br>
            At Ambro Sport, Max oversees the creative direction of all product lines, ensuring each piece reflects the brand’s vision while meeting the highest standards of quality and innovation. His work is rooted in authenticity, impact, and a deep understanding of how strong visuals elevate brands across video, web, and social platforms.</p>
            </div>

            <div className="bg-white about-block p-6 rounded-lg shadow-md flex flex-col items-start md:col-span-2">
              <img
                src={maryImg}
                alt="Team member 3"
                className="w-full h-48 object-cover rounded mb-4 about-img"
              />
              <h3 className="text-2xl font-semibold text-gray-900">Mary Santiago</h3>
              <p className="mt-2 text-gray-600">Office Manager / Quality Control - Ambro Sport Peru </p>
              <p>Mary Santiago is Ambro’s Office and Quality Control Manager, based in Ambro’s Peru office. She oversees all aspects of product development, sampling, production, and logistics for Ambro orders placed in Peru, ensuring that all goods meet Ambro’s quality standards and are delivered to port in a timely manner. With 24 years of experience in the apparel industry, Mary brings deep technical expertise and hands-on leadership to every stage of the production process. She has been an integral part of the Ambro team for the past 10 years, supporting consistent quality, efficient execution, and seamless coordination across teams and partners.</p>
            </div>

            <div className="bg-white about-block p-6 rounded-lg shadow-md flex flex-col items-start md:col-span-2">
              <img
                src={averyImg}
                alt="Team member 3"
                className="w-full h-48 object-cover rounded mb-4 about-img"
              />
              <h3 className="text-2xl font-semibold text-gray-900">Avery Ambrogio</h3>
              <p className="mt-2 text-gray-600">Production Assistant </p>
              <p>Avery Ambrogio is a Production Assistant at Ambro Sport, based in Atlanta. She supports the production team in managing the day-to-day operations of product development. She is currently attending the University of Georgia where she is studying journalism. </p>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </div>
  );
}
