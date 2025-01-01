export interface NavItem {
  label: string;
  href: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface CampStats {
  count: number;
  patientsServed: number;
  volunteers: number;
}