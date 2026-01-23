import { useState } from 'react';
import Lightbox from '../components/Lightbox';
const peru10 = '/img/peruWEB-10.jpg';
import { ContactForm } from '../components/ContactForm';
import { usePageLoad } from '../hooks/usePageLoad';


const img1 = '/img/product-1.png';
const img2 = '/img/product-14.png';
const img3 = '/img/product-3.png';
const img4 = '/img/product-4.png';
const img5 = '/img/product-9.png';
const img6 = '/img/product-10.png';
const img7 = '/img/product-7.png';
const img8 = '/img/product-8.png';
const img9 = '/img/product-5.png';
const img10 = '/img/product-6.png';
const img11 = '/img/product-11.png';
const img12 = '/img/product-12.png';
const img13 = '/img/product-13.png';
const img14 = '/img/product-2.png';
const img15 = '/img/product-15.png';


const IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];

export function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLoaded = usePageLoad();

  const openAt = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const onPrev = () => setCurrentIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  const onNext = () => setCurrentIndex((i) => (i + 1) % IMAGES.length);

  return (
    <div className="relative">
      {/* Page Loader */}
      <div className={`absolute inset-0 z-50 flex items-center justify-center bg-white loader-overlay ${isLoaded ? 'hidden' : ''}`}>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-8 border-blue-600 border-t-transparent animate-spin mb-4 shadow-lg" />
          <div className="text-blue-600 font-semibold text-lg">Loading</div>
        </div>
      </div>
      {/* Hero Section matching Services/Home style */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
             <img
               src={peru10}
               alt="Our team"
               className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-black/50" />
             <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
               <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Products</h1>
             </div>
           </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Gallery</h2>
            <p className="text-gray-600 mt-2">Click any image to view larger.</p>
          </div>

          <div className="masonry-wrapper mx-auto">
            <div className="masonry-grid">
              {IMAGES.map((src, idx) => (
                <div key={idx} className="masonry-item" onClick={() => openAt(idx)}>
                  <img src={src} alt={`Product ${idx + 1}`} className="w-full rounded-md shadow-sm hover:shadow-lg transition-shadow cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        images={IMAGES}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onPrev={onPrev}
        onNext={onNext}
      />
      <ContactForm />
    </div>
  );
  
}

export default Products;
