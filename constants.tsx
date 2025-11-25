import { 
  Globe, 
  Server, 
  ShieldCheck, 
  CreditCard, 
  TrendingUp, 
  Palette, 
  Brush, 
  Image as ImageIcon,
  Gamepad2, 
  Music, 
  BookOpen,
  DollarSign,
  Briefcase,
  LayoutGrid,
  Headphones,
  MessageCircle,
  Video,
  ShoppingBag,
  Github,
  Zap,
  Cloud,
  Mail
} from 'lucide-react';
import { Category, LinkItem } from './types';

export const APP_NAME = "VARSENDAGGER";

export const CATEGORIES = [
  { id: Category.DASHBOARD, label: 'Overview', icon: LayoutGrid },
  { id: Category.VARSENDAGGER, label: 'Varsendagger Business', icon: Globe },
  { id: Category.FINANCE, label: 'Personal Finance', icon: DollarSign },
  { id: Category.ART, label: 'Art', icon: Palette },
  { id: Category.HOBBY, label: 'Hobbies & Misc', icon: Gamepad2 },
];

export const LINKS: LinkItem[] = [
  // Varsendagger (Domains & Business)
  {
    id: 'vd-1',
    title: 'Hostinger',
    url: '#',
    description: 'Web hosting and main server management.',
    category: Category.VARSENDAGGER,
    icon: Server,
    colorClass: 'text-purple-400',
    bgClass: 'bg-purple-400/10'
  },
  {
    id: 'vd-2',
    title: 'AWS Console',
    url: '#',
    description: 'Cloud infrastructure and Route53.',
    category: Category.VARSENDAGGER,
    icon: Cloud,
    colorClass: 'text-orange-400',
    bgClass: 'bg-orange-400/10'
  },
  {
    id: 'vd-3',
    title: 'PorkBun',
    url: '#',
    description: 'Domain portfolio management.',
    category: Category.VARSENDAGGER,
    icon: Globe,
    colorClass: 'text-pink-400',
    bgClass: 'bg-pink-400/10'
  },
  {
    id: 'vd-4',
    title: 'Vercel',
    url: '#',
    description: 'Frontend deployment and edge network.',
    category: Category.VARSENDAGGER,
    icon: Zap,
    colorClass: 'text-white',
    bgClass: 'bg-slate-700/50'
  },
  {
    id: 'vd-5',
    title: 'GitHub',
    url: 'https://github.com/nead51',
    description: 'Source code repositories.',
    category: Category.VARSENDAGGER,
    icon: Github,
    colorClass: 'text-slate-200',
    bgClass: 'bg-slate-700/50'
  },
  {
    id: 'vd-6',
    title: 'Business Email',
    url: '#',
    description: 'Hostinger Webmail access.',
    category: Category.VARSENDAGGER,
    icon: Mail,
    colorClass: 'text-indigo-400',
    bgClass: 'bg-indigo-400/10'
  },

  // Financial
  {
    id: 'fin-1',
    title: 'Chase Private Client',
    url: '#',
    description: 'Primary checking and savings.',
    category: Category.FINANCE,
    icon: ShieldCheck,
    colorClass: 'text-emerald-400',
    bgClass: 'bg-emerald-400/10'
  },
  {
    id: 'fin-2',
    title: 'Vanguard',
    url: '#',
    description: 'Retirement and index fund investments.',
    category: Category.FINANCE,
    icon: TrendingUp,
    colorClass: 'text-red-400',
    bgClass: 'bg-red-400/10'
  },
  {
    id: 'fin-3',
    title: 'American Express',
    url: '#',
    description: 'Credit card management and points.',
    category: Category.FINANCE,
    icon: CreditCard,
    colorClass: 'text-blue-400',
    bgClass: 'bg-blue-400/10'
  },

  // Art
  {
    id: 'art-1',
    title: 'ArtStation',
    url: '#',
    description: 'Professional portfolio and community.',
    category: Category.ART,
    icon: ImageIcon,
    colorClass: 'text-pink-400',
    bgClass: 'bg-pink-400/10'
  },
  {
    id: 'art-2',
    title: 'DeviantArt',
    url: '#',
    description: 'Community gallery and prints.',
    category: Category.ART,
    icon: Brush,
    colorClass: 'text-green-400',
    bgClass: 'bg-green-400/10'
  },
  {
    id: 'art-3',
    title: 'Behance',
    url: '#',
    description: 'Design projects and case studies.',
    category: Category.ART,
    icon: Palette,
    colorClass: 'text-blue-500',
    bgClass: 'bg-blue-500/10'
  },
  {
    id: 'art-4',
    title: 'Pinterest',
    url: '#',
    description: 'Visual discovery and mood boards.',
    category: Category.ART,
    icon: ShoppingBag,
    colorClass: 'text-red-500',
    bgClass: 'bg-red-500/10'
  },

  // Hobbies & Misc
  {
    id: 'hob-1',
    title: 'Steam',
    url: '#',
    description: 'Game library and community.',
    category: Category.HOBBY,
    icon: Gamepad2,
    colorClass: 'text-indigo-300',
    bgClass: 'bg-indigo-300/10'
  },
  {
    id: 'hob-2',
    title: 'Spotify',
    url: '#',
    description: 'Music streaming and podcasts.',
    category: Category.HOBBY,
    icon: Music,
    colorClass: 'text-green-500',
    bgClass: 'bg-green-500/10'
  },
  {
    id: 'hob-3',
    title: 'Discord',
    url: '#',
    description: 'Communities and chat.',
    category: Category.HOBBY,
    icon: MessageCircle,
    colorClass: 'text-indigo-500',
    bgClass: 'bg-indigo-500/10'
  },
  {
    id: 'hob-4',
    title: 'YouTube Studio',
    url: '#',
    description: 'Content creation dashboard.',
    category: Category.HOBBY,
    icon: Video,
    colorClass: 'text-red-500',
    bgClass: 'bg-red-500/10'
  },
  {
    id: 'hob-5',
    title: 'Goodreads',
    url: '#',
    description: 'Book tracking and reviews.',
    category: Category.HOBBY,
    icon: BookOpen,
    colorClass: 'text-amber-700',
    bgClass: 'bg-amber-700/10'
  }
];