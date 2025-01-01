import React from 'react';
import { Users, Heart, GraduationCap } from 'lucide-react';
import { Container } from '../../common/Container';
import { Section } from '../../common/Section';
import { StatCard } from './StatCard';

const stats = [
  { icon: Heart, value: '10+', label: 'Healthcare Camps' },
  { icon: GraduationCap, value: '500+', label: 'Students Educated' },
  { icon: Users, value: '100+', label: 'Women Empowered' },
];

export function Stats() {
  return (
    <Section bgColor="black">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </Container>
    </Section>
  );
}