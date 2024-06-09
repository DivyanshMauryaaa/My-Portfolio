import React from 'react';
import PricingCard from './components/pricingCard';

const PricingSection = () => {
  const pricingData = [
    {
      title: 'Gold',
      price: 800,
      features: ['7 Days Delivery', '2 Pages', "Responsive Design", "Website copy"],
      buttonText: 'Continue',
      buttonLink: '#',
    },
    {
      title: 'Diamond',
      price: 1200,
      features: ['21 Days Delivery' ,'5 Pages', 'Website Design', 'Responsive Design', 'Website copy','Security Feautres', 'SEO Optimization'],
      buttonText: 'Continue',
      buttonLink: '#',
    },
    {
      title: 'Emerald',
      price: 1300,
      features: ['30 Days Delivery' ,'8 Pages', 'Website Design', 'Responsive Design', 'Website copy', 'Hosting Setup', 'Payment Processing', 'E-commerce Functionallity', 'Security Feautres', 'SEO Optimization'],
      buttonText: 'Continue',
      buttonLink: '#',
    },
  ];

  return (
    <div className="container mx-auto px-4 ">
      <h2 className="text-3xl font-semibold mb-8 text-center text-slate-400">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
        {pricingData.map((plan) => (
          <PricingCard key={plan.title} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
