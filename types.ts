
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface ProjectQuery {
  area: number;
  type: 'office' | 'warehouse' | 'retail' | 'private';
  securityLevel: 'basic' | 'standard' | 'high';
}
