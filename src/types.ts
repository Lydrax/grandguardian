import React from 'react';

export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  liveUrl?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: React.ElementType;
}

export interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export interface LiveProjectButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  label?: string;
}
