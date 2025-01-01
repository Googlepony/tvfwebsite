import React from 'react';
import { Users, Heart, GraduationCap } from 'lucide-react';

export function Stats() {
  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Heart className="h-12 w-12 text-[#FFD101]" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">10+</h3>
            <p className="text-gray-400">Healthcare Camps</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <GraduationCap className="h-12 w-12 text-[#FFD101]" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
            <p className="text-gray-400">Students Educated</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-[#FFD101]" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">100+</h3>
            <p className="text-gray-400">Women Empowered</p>
          </div>
        </div>
      </div>
    </div>
  );
}