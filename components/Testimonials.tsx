
import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import type { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <div className="aspect-square">
      <img
        src={testimonial.imageUrl}
        alt={`Testimoni dari ${testimonial.name}`}
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
    </div>
    <div className="p-6">
      <p className="text-xl font-semibold text-suzuki-blue">{testimonial.name}</p>
      <p className="text-gray-600 mt-1">Pembeli {testimonial.carModel}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-suzuki-blue">Apa Kata Pelanggan Kami</h2>
          <p className="text-lg text-gray-600 mt-2">Kepuasan Anda adalah prioritas kami.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
