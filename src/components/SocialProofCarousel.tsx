'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Jen',
    role: 'Frequent Traveler',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&q=80',
    quote: 'This app saved me 2 million IDR on my Japan trip. I booked a flash deal that wasn’t even showing up on other sites.',
  },
  {
    id: 2,
    name: 'Michael T.',
    role: 'Digital Nomad',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&q=80',
    quote: 'The AI Insight feed is a game changer. I set my budget and it told me exactly when the Marina Bay Sands prices dropped.',
  },
  {
    id: 3,
    name: 'Elena R.',
    role: 'Family Vacationer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&q=80',
    quote: 'I used to spend hours comparing flights. Lelungo does it instantly and the “Rare Deal” tag is incredibly accurate.',
  },
  {
    id: 4,
    name: 'David K.',
    role: 'Business Consultant',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&q=80',
    quote: 'Clean interface, zero ads, and straight to the point. It’s like having a private travel agent in my pocket.',
  },
  {
    id: 5,
    name: 'Amanda S.',
    role: 'Backpacker',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&q=80',
    quote: 'Booked my flights to Bangkok exactly when it hit a 6-month low. Unbelievable tool for budget travelers.',
  },
];

// Duplicate for infinite scroll loop
const LOOPED_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS];

export function SocialProofCarousel() {
  return (
    <div className="w-full py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Rating Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-4 bg-card border border-border rounded-2xl p-4 shadow-sm"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
            <Star className="w-6 h-6 fill-primary" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-black text-xl tracking-tight">
              4.8/5
              <div className="flex gap-0.5 text-primary">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary" />
                ))}
                <Star className="w-4 h-4 fill-primary/30" />
              </div>
            </div>
            <p className="text-sm font-semibold text-foreground/60 mt-0.5">from 10,000+ authentic users</p>
          </div>
        </motion.div>

      </div>

      {/* Carousel Track */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="relative w-full flex overflow-hidden"
      >
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap py-4 px-6 w-[200%]">
          {LOOPED_TESTIMONIALS.map((t, idx) => (
            <div
              // Use index in key because we duplicated the array
              key={`${t.id}-${idx}`}
              className="glass-card inline-flex flex-col flex-shrink-0 w-[320px] sm:w-[400px] p-6 hover:shadow-card-hover transition-shadow duration-300 whitespace-normal cursor-default"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border">
                  <Image src={t.image} alt={t.name} fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <h4 className="font-bold text-base leading-tight text-foreground">{t.name}</h4>
                  <p className="text-xs font-semibold text-foreground/50 mt-0.5">{t.role}</p>
                </div>
              </div>
              <p className="text-sm font-medium leading-relaxed text-foreground/70 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
