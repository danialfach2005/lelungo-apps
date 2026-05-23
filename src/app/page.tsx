'use client';

import { Navbar } from '@/components/Navbar';
import { DealGrid } from '@/components/DealGrid';
import { Plane, TrendingDown, Zap, Globe, Users, CheckCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useInViewAnimation, revealVariants } from '@/hooks/use-in-view-animation';
import { SmartSearchBar } from '@/components/SmartSearchBar';
import { AIInsightFeed } from '@/components/AIInsightFeed';
import { SocialProofCarousel } from '@/components/SocialProofCarousel';
import { FloatingCTA } from '@/components/FloatingCTA';

export default function HomePage() {
  const { scrollY, scrollYProgress } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 150]);
  
  // Background shifts
  const bgOpacity = useTransform(scrollY, [0, 1000], [1, 0.3]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Floating AI suggestion parallax
  const aiFloat = useTransform(scrollY, [0, 500], [0, -50]);

  const { ref: howItWorksRef, isInView: howItWorksInView } = useInViewAnimation();
  const { ref: ctaRef, isInView: ctaInView } = useInViewAnimation();

  return (
    <>
      <Navbar />

      <main>
        {/* ════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-gradient-hero min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-16 pb-24">
          {/* Dot pattern */}
          <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 dot-pattern" />

          {/* Ambient orbs with Parallax */}
          <motion.div style={{ y: y1, scale: orbScale }} className="orb w-[480px] h-[480px] bg-primary/15 -top-32 left-1/2 -translate-x-1/2" />
          <motion.div style={{ y: y2, scale: orbScale }} className="orb w-72 h-72 bg-purple-500/15 bottom-10 left-10" />
          <motion.div style={{ y: y3, scale: orbScale }} className="orb w-64 h-64 bg-primary/10 bottom-5 right-10" />

          {/* Floating AI Suggestion */}
          <motion.div
            style={{ y: aiFloat }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, type: 'spring' }}
            className="hidden lg:flex absolute top-32 right-[10%] bg-card/60 backdrop-blur-xl border border-border shadow-glow-sm rounded-2xl p-4 items-center gap-3 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
              🔥
            </div>
            <div className="text-left">
              <p className="text-xs text-foreground/50 font-bold uppercase tracking-wider mb-0.5">AI Suggestion</p>
              <p className="text-sm font-semibold text-foreground">Flights to Tokyo dropped 32% today</p>
            </div>
          </motion.div>

          <div className="relative z-10 w-full max-w-5xl mx-auto">
            {/* Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span className="text-sm font-medium text-primary">
                Smart Deal Engine — Real-time tracking
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
            >
              Find Hidden Travel Deals
              <br />
              <span className="text-gradient">Before Everyone Else.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto mb-12 font-medium"
            >
              AI-powered insights for smarter trips. We scan thousands of sources to score the true value of every flight and hotel.
            </motion.p>

            {/* Smart Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <SmartSearchBar />
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center gap-6 sm:gap-10"
            >
              <div className="flex items-center gap-2 text-foreground/60">
                <Users className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide">10,000+ users</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 hidden sm:block" />
              <div className="flex items-center gap-2 text-foreground/60">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide">AI verified deals</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            HOW IT WORKS
        ════════════════════════════════════════════ */}
        <section ref={howItWorksRef} className="bg-card border-y border-border py-20 px-4">
          <motion.div 
            variants={revealVariants}
            initial="hidden"
            animate={howItWorksInView ? "visible" : "hidden"}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-14">
              <p className="section-label mb-2">How it works</p>
              <h2 className="text-3xl font-black tracking-tight">Deal intelligence, not just listings</h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: 'We aggregate deals',
                  desc: 'Pulls live prices from Traveloka, Agoda, Tiket.com, AirAsia, Booking.com.',
                },
                {
                  icon: <TrendingDown className="w-6 h-6" />,
                  title: 'Insight engine scores them',
                  desc: 'Each deal gets tagged: Rare Deal, Hot Deal, Good Deal, or Fair Price — based on historical prices.',
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: 'You book in one click',
                  desc: 'Click View Deal, we track your click, and send you straight to the partner booking page.',
                },
              ].map((step, i) => (
                <motion.div 
                  key={step.title} 
                  whileHover={{ y: -4 }}
                  className="glass-card p-8 group hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                    {step.icon}
                  </div>
                  <p className="text-xs text-foreground/40 mb-1.5 font-bold uppercase tracking-wider">STEP {i + 1}</p>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ════════════════════════════════════════════
            AI INSIGHT FEED
        ════════════════════════════════════════════ */}
        <section className="bg-background py-20 px-4">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <p className="section-label mb-2">Live Feed</p>
            <h2 className="text-3xl font-black tracking-tight mb-3">AI Travel Insights</h2>
            <p className="text-foreground/60">Our engine scans millions of data points to find anomalies.</p>
          </div>
          
          <AIInsightFeed />
        </section>

        {/* ════════════════════════════════════════════
            EXPLORE DEALS
        ════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <p className="section-label mb-1">Live Deals</p>
              <h2 className="text-3xl font-black tracking-tight">
                Today&apos;s best picks
              </h2>
            </div>

            {/* Deal tags legend */}
            <div className="hidden sm:flex items-center gap-2.5 flex-wrap justify-end">
              <Badge variant="rare">Rare Deal</Badge>
              <Badge variant="hot">Hot Deal</Badge>
              <Badge variant="good">Good Deal</Badge>
            </div>
          </div>

          <DealGrid />
        </section>

        {/* ════════════════════════════════════════════
            SOCIAL PROOF CAROUSEL
        ════════════════════════════════════════════ */}
        <section className="bg-background border-t border-border pt-10">
          <SocialProofCarousel />
        </section>

        {/* ════════════════════════════════════════════
            CTA FOOTER BANNER
        ════════════════════════════════════════════ */}
        <section ref={ctaRef} className="mx-4 sm:mx-6 mb-20 max-w-7xl lg:mx-auto">
          <motion.div 
            variants={revealVariants}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            className="relative overflow-hidden bg-card border border-border shadow-card p-10 sm:p-16 text-center rounded-3xl"
          >
            <div className="orb w-96 h-96 bg-primary/10 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <Plane className="w-12 h-12 text-primary mx-auto mb-5" strokeWidth={1.5} />
              <h2 className="text-4xl font-black tracking-tight mb-4">Never miss a Rare Deal</h2>
              <p className="text-foreground/70 mb-10 max-w-xl mx-auto text-lg">
                Our insight engine tags the top 5% of deals as &ldquo;Rare&rdquo; — these sell out within hours.
                Check back daily.
              </p>
              <Button size="lg" onClick={() => window.scrollTo({ top: document.body.scrollHeight / 2, behavior: 'smooth' })}>
                Explore Deals Now
              </Button>
            </div>
          </motion.div>
        </section>
        {/* ════════════════════════════════════════════
            FLOATING CTA
        ════════════════════════════════════════════ */}
        <FloatingCTA />
      </main>
    </>
  );
}
