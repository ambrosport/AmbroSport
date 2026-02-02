import React from 'react';
import { useState } from 'react';
import Lightbox from '../components/Lightbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
const peru10 = '/img/peruWEB-10.jpg';
import { ContactForm } from '../components/ContactForm';

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
const img16 = '/img/product-16.png';
const img17 = '/img/product-17.png';
const img18 = '/img/product-18.png';
const img19 = '/img/product-19.png';
const img20 = '/img/product-20.png';
const img21 = '/img/product-21.png';
const img22 = '/img/product-22.png';
const img23 = '/img/product-23.png';
const img24 = '/img/product-24.png';
const img25 = '/img/product-25.png';
const img26 = '/img/product-26.png';
const img27 = '/img/product-27.png';
const img28 = '/img/product-28.png';
const img29 = '/img/product-29.png';
const img30 = '/img/product-30.png';
const img31 = '/img/product-31.png';
const img32 = '/img/product-32.png';
const img33 = '/img/product-33.png';
const img34 = '/img/product-34.png';
const img35 = '/img/product-35.png';
const img36 = '/img/product-36.png';

const products = [
  { id: 1, src: img1, category: 'mens' },
  { id: 2, src: img2, category: 'kids' },
  { id: 3, src: img3, category: 'kids' },
  { id: 4, src: img4, category: 'mens' },
  { id: 5, src: img5, category: 'mens' },
  { id: 6, src: img6, category: 'mens' },
  { id: 7, src: img7, category: 'mens' },
  { id: 8, src: img8, category: 'kids' },
  { id: 9, src: img9, category: 'mens' },
  { id: 10, src: img10, category: 'mens' },
  { id: 11, src: img11, category: 'mens' },
  { id: 12, src: img12, category: 'mens' },
  { id: 13, src: img13, category: 'mens' },
  { id: 14, src: img14, category: 'mens' },
  { id: 15, src: img15, category: 'kids' },
  { id: 16, src: img16, category: 'mens' },
  { id: 17, src: img17, category: 'mens' },
  { id: 18, src: img18, category: 'mens' },
  { id: 19, src: img19, category: 'hats' },
  { id: 20, src: img20, category: 'hats' },
  { id: 21, src: img21, category: 'hats' },
  { id: 22, src: img22, category: 'hats' },
  { id: 23, src: img23, category: 'hats' },
  { id: 24, src: img24, category: 'womens' },
  { id: 25, src: img25, category: 'womens' },
  { id: 26, src: img26, category: 'womens' },
  { id: 27, src: img27, category: 'womens' },
  { id: 28, src: img28, category: 'womens' },
  { id: 29, src: img29, category: 'womens' },
  { id: 30, src: img30, category: 'womens' },
  { id: 31, src: img31, category: 'mens' },
  { id: 32, src: img32, category: 'mens' },
  { id: 33, src: img33, category: 'kids' },
  { id: 34, src: img34, category: 'kids' },
  { id: 35, src: img35, category: 'kids' },
  { id: 36, src: img36, category: 'kids' },
];

const IMAGES = products.map(p => p.src);

export function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('mens');

  const openAt = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const onPrev = () => setCurrentIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  const onNext = () => setCurrentIndex((i) => (i + 1) % IMAGES.length);

  const filteredProducts = products.filter(p => p.category === activeTab);

  return (
    <div className="relative">
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
            <h2 className="text-3xl font-bold text-gray-900">Product Collection</h2>
            <p className="text-gray-600 mt-2">Browse our products by category. Click any image to view larger.</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="mens" className="w-full" suppressHydrationWarning>
            <TabsList className="flex justify-evenly mb-8 tab-header">
              <TabsTrigger value="mens" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Mens</TabsTrigger>
              <TabsTrigger value="womens" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Womens</TabsTrigger>
              <TabsTrigger value="kids" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Kids</TabsTrigger>
              <TabsTrigger value="hats" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Hats</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group cursor-pointer" onClick={() => openAt(products.findIndex(p => p.id === product.id))}>
                    <img
                      src={product.src}
                      alt={`Product ${product.id}`}
                      data-category={product.category}
                      className="w-full h-64 object-cover rounded-md shadow-sm hover:shadow-lg transition-shadow"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
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
