/*
  # Add display order to services table

  1. Changes
    - Add `display_order` column to `services` table (integer type)
    - Set initial display order values to group items by category
    - Place Hummus and Greek Salad next to each other
  
  2. Notes
    - Uses IF NOT EXISTS to safely add column
    - Sets default order based on current data
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'services' AND column_name = 'display_order'
  ) THEN
    ALTER TABLE services ADD COLUMN display_order integer;
  END IF;
END $$;

-- Set display order with Hummus and Greek Salad next to each other
UPDATE services SET display_order = 1 WHERE name = 'Greek Salad';
UPDATE services SET display_order = 2 WHERE name = 'Hummus and pita bread';
UPDATE services SET display_order = 3 WHERE name = 'Mediterranean Mezze';
UPDATE services SET display_order = 4 WHERE name = 'Falafel Wrap';
UPDATE services SET display_order = 5 WHERE name = 'Shawarma Wrap';
UPDATE services SET display_order = 6 WHERE name = 'Beef Wrap';
UPDATE services SET display_order = 7 WHERE name = 'Chicken Kebab';
UPDATE services SET display_order = 8 WHERE name = 'Beef Kebab';
UPDATE services SET display_order = 9 WHERE name = 'Prime Beef Tenderloin';
UPDATE services SET display_order = 10 WHERE name = 'Vegetarian Pasta Primavera';
UPDATE services SET display_order = 11 WHERE name = 'Fresh Fruit Tart';
UPDATE services SET display_order = 12 WHERE name = 'Premium Beverage Package';
UPDATE services SET display_order = 13 WHERE name = 'Full Wedding Package';