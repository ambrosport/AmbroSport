import { useState } from 'react';
import Lightbox from '../components/Lightbox';
import peru10 from '../components/img/peruWEB-10.jpg';
import { ContactForm } from '../components/ContactForm';
import { usePageLoad } from '../hooks/usePageLoad';


import img1 from '../components/products/product-1.png';
import img2 from '../components/products/product-14.png';
import img3 from '../components/products/product-3.png';
import img4 from '../components/products/product-4.png';
import img5 from '../components/products/product-9.png';
import img6 from '../components/products/product-10.png';
import img7 from '../components/products/product-7.png';
import img8 from '../components/products/product-8.png';
import img9 from '../components/products/product-5.png';
import img10 from '../components/products/product-6.png';
import img11 from '../components/products/product-11.png';
import img12 from '../components/products/product-12.png';
import img13 from '../components/products/product-13.png';
import img14 from '../components/products/product-2.png';
import img15 from '../components/products/product-15.png';


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
