-- ============================================================
-- Lelungo — Supabase Database Schema
-- Run this in: Supabase Dashboard → SQL Editor
-- ============================================================

-- Enable UUID extension
create extension if not exists "pgcrypto";

-- ── clicks table ──────────────────────────────────────────
-- Stores every affiliate click for analytics & attribution
create table if not exists public.clicks (
  id           uuid primary key default gen_random_uuid(),
  product_type text        not null check (product_type in ('flight', 'hotel', 'package')),
  destination  text        not null,
  deal_id      text,
  price        numeric,
  user_agent   text,
  referrer     text,
  created_at   timestamptz not null default now()
);

-- Index for fast analytics queries
create index if not exists clicks_created_at_idx on public.clicks (created_at desc);
create index if not exists clicks_product_type_idx on public.clicks (product_type);
create index if not exists clicks_destination_idx on public.clicks (destination);

-- ── Row Level Security ────────────────────────────────────
-- clicks table: anyone can insert (affiliate tracking)
-- but only service role can read (admin dashboard)
alter table public.clicks enable row level security;

-- Allow API route (service role) to insert clicks
create policy "Allow insert from API"
  on public.clicks
  for insert
  with check (true);

-- Allow reading only with service role (dashboard queries)
-- No SELECT policy = only service role can read
-- (Frontend dashboard fetches via API route with service role key)

-- ── user_preferences table (optional) ────────────────────
create table if not exists public.user_preferences (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid references auth.users(id) on delete cascade,
  favorite_dests  text[]      default '{}',
  preferred_types text[]      default '{"flight","hotel"}',
  price_ceiling   numeric,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

alter table public.user_preferences enable row level security;

create policy "Users can manage own preferences"
  on public.user_preferences
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ── Useful analytics views ─────────────────────────────────
create or replace view public.clicks_by_destination as
select
  destination,
  count(*)         as total_clicks,
  count(*) filter (where product_type = 'flight') as flight_clicks,
  count(*) filter (where product_type = 'hotel')  as hotel_clicks,
  max(created_at)  as last_click_at
from public.clicks
group by destination
order by total_clicks desc;

create or replace view public.clicks_daily as
select
  date_trunc('day', created_at) as day,
  product_type,
  count(*)                       as clicks
from public.clicks
group by 1, 2
order by 1 desc;
