import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <Icon className="h-12 w-12 text-[#FFD101]" />
      </div>
      <h3 className="text-4xl font-bold text-white mb-2">{value}</h3>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}