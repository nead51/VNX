import { LucideIcon } from 'lucide-react';

export enum Category {
  DASHBOARD = 'Dashboard',
  VARSENDAGGER = 'Varsendagger',
  FINANCE = 'Financial',
  ART = 'Art',
  HOBBY = 'Hobbies'
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  description: string;
  category: Category;
  icon: LucideIcon;
  colorClass: string; // Tailwind text color class for the icon
  bgClass: string; // Tailwind bg color class for the icon container
}

export interface UserStats {
  domains: number;
  accounts: number;
  projects: number;
}