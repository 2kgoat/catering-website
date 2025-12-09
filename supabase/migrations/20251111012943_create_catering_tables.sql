/*
  # Catering Business Database Schema

  ## Overview
  This migration creates the core tables for a catering business website, including services/menu items and customer inquiries.

  ## New Tables
  
  ### `services`
  - `id` (uuid, primary key) - Unique identifier for each service
  - `name` (text) - Service/menu item name
  - `description` (text) - Detailed description
  - `category` (text) - Category (appetizers, mains, desserts, beverages, packages)
  - `price_from` (numeric) - Starting price
  - `image_url` (text) - Image URL for the service
  - `popular` (boolean) - Featured/popular item flag
  - `created_at` (timestamptz) - Creation timestamp

  ### `inquiries`
  - `id` (uuid, primary key) - Unique identifier for each inquiry
  - `name` (text) - Customer name
  - `email` (text) - Customer email
  - `phone` (text) - Customer phone number
  - `event_date` (date) - Preferred event date
  - `guest_count` (integer) - Number of guests
  - `event_type` (text) - Type of event
  - `message` (text) - Additional details/message
  - `status` (text) - Inquiry status (new, contacted, booked, completed)
  - `created_at` (timestamptz) - Inquiry submission timestamp

  ## Security
  - Enable RLS on all tables
  - `services` table: Public read access, no write access (managed by admin)
  - `inquiries` table: Public can insert only, no read access (privacy)
*/

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  price_from numeric(10,2) NOT NULL,
  image_url text DEFAULT '',
  popular boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  event_date date NOT NULL,
  guest_count integer NOT NULL,
  event_type text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- RLS Policies for services table
-- Allow everyone to view services
CREATE POLICY "Anyone can view services"
  ON services FOR SELECT
  USING (true);

-- RLS Policies for inquiries table
-- Allow anyone to submit an inquiry (insert only)
CREATE POLICY "Anyone can submit inquiries"
  ON inquiries FOR INSERT
  WITH CHECK (true);

-- Insert sample services data
INSERT INTO services (name, description, category, price_from, popular) VALUES
('Classic Appetizer Platter', 'Assorted cheese, crackers, fresh fruits, and gourmet dips', 'appetizers', 150.00, true),
('Mediterranean Mezze', 'Hummus, baba ganoush, falafel, pita bread, and olives', 'appetizers', 180.00, false),
('Grilled Chicken Entree', 'Herb-marinated chicken breast with seasonal vegetables', 'mains', 25.00, true),
('Pan-Seared Salmon', 'Fresh Atlantic salmon with lemon butter sauce', 'mains', 32.00, true),
('Vegetarian Pasta Primavera', 'Fresh pasta with seasonal vegetables in light cream sauce', 'mains', 22.00, false),
('Prime Beef Tenderloin', 'Premium beef with roasted garlic and red wine reduction', 'mains', 45.00, true),
('Chocolate Decadence Cake', 'Rich chocolate layer cake with ganache frosting', 'desserts', 75.00, true),
('Fresh Fruit Tart', 'Seasonal fruits on vanilla custard in buttery crust', 'desserts', 65.00, false),
('Premium Beverage Package', 'Unlimited soft drinks, coffee, and tea service', 'beverages', 8.00, false),
('Full Wedding Package', 'Complete catering for 100 guests including appetizers, mains, and desserts', 'packages', 3500.00, true);
