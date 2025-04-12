/*
  # Create strategy call submissions table

  1. New Tables
    - `strategy_call_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email_address` (text)
      - `phone_number` (text)
      - `company_name` (text)
      - `automation_goal` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on strategy_call_submissions table
    - Add policy for public insert access
*/

-- Create new table with proper naming
CREATE TABLE IF NOT EXISTS strategy_call_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email_address text NOT NULL,
  phone_number text NOT NULL,
  company_name text NOT NULL,
  automation_goal text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE strategy_call_submissions ENABLE ROW LEVEL SECURITY;

-- Add policy for public insert access
CREATE POLICY "Allow public to insert strategy call submissions"
  ON strategy_call_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);