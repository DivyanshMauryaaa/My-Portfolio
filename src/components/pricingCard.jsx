import { Check } from 'lucide-react';
import React from 'react';

const PricingCard = ({ title, price, features, buttonText, buttonLink }) => {
  return (
    <div className="shadow-md bg-white overflow-hidden border h-[880px] w-[500px] rounded-lg hover:scale-105 transition-all duration-150 cursor-pointer hover:shadow-lg">
      <div className="px-6 py-4 text-center border-b border-gray-200">
      <p className="mt-2 text-lg font-medium text-[45px] text-blue-700">₹{price}</p>
      <br />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="px-6 py-4 space-y-2 list-none h-[300px]">
        {features.map((feature) => (
          <li className="flex items-center text-slate-500" key={feature}>
            <Check className='text-blue-700'/>
            &nbsp;
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <br /><br />
      <div className="px-6 py-4 text-center">
        <a
          href={buttonLink}
        >
          <button className='px-4 py-5 rounded-md hover:bg-blue-700 border hover:text-white font-medium w-full'>
            Continue
          </button>
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
