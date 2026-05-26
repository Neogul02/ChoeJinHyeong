-- ============================================================
-- Portfolio CMS Schema
-- Run this in Supabase SQL Editor
-- ============================================================

-- Projects
CREATE TABLE IF NOT EXISTS projects (
  id          SERIAL PRIMARY KEY,
  title       TEXT NOT NULL,
  period      TEXT,
  image       TEXT DEFAULT '',
  bg_dark     TEXT,
  bg_light    TEXT,
  sort_order  INT DEFAULT 0,
  content_md  TEXT DEFAULT '',
  is_active   BOOLEAN DEFAULT true,
  updated_at  TIMESTAMPTZ DEFAULT now()
);

-- Tech stack items
CREATE TABLE IF NOT EXISTS stack_items (
  id          SERIAL PRIMARY KEY,
  category    TEXT NOT NULL CHECK (category IN ('Frontend','Backend','Infra','Cooperation')),
  name        TEXT NOT NULL,
  is_learning BOOLEAN DEFAULT false,
  sort_order  INT DEFAULT 0
);

-- Education
CREATE TABLE IF NOT EXISTS education (
  id          SERIAL PRIMARY KEY,
  institution TEXT NOT NULL,
  period      TEXT,
  department  TEXT,
  content_md  TEXT DEFAULT '',
  sort_order  INT DEFAULT 0
);

-- Career
CREATE TABLE IF NOT EXISTS career (
  id          SERIAL PRIMARY KEY,
  company     TEXT NOT NULL,
  period      TEXT,
  department  TEXT,
  content_md  TEXT DEFAULT '',
  sort_order  INT DEFAULT 0
);

-- Activities
CREATE TABLE IF NOT EXISTS activities (
  id            SERIAL PRIMARY KEY,
  organization  TEXT NOT NULL,
  period        TEXT,
  role          TEXT,
  content_md    TEXT DEFAULT '',
  external_link TEXT,
  sort_order    INT DEFAULT 0
);

-- Certifications
CREATE TABLE IF NOT EXISTS certifications (
  id          SERIAL PRIMARY KEY,
  title       TEXT NOT NULL,
  date_text   TEXT,
  issuer      TEXT,
  sort_order  INT DEFAULT 0
);

-- About / bio (key-value)
CREATE TABLE IF NOT EXISTS about_content (
  id          SERIAL PRIMARY KEY,
  section_key TEXT UNIQUE NOT NULL,
  content_md  TEXT DEFAULT ''
);

-- ============================================================
-- Row Level Security
-- ============================================================
ALTER TABLE projects        ENABLE ROW LEVEL SECURITY;
ALTER TABLE stack_items     ENABLE ROW LEVEL SECURITY;
ALTER TABLE education       ENABLE ROW LEVEL SECURITY;
ALTER TABLE career          ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities      ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications  ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_content   ENABLE ROW LEVEL SECURITY;

-- Public read
CREATE POLICY "public_read_projects"       ON projects        FOR SELECT USING (true);
CREATE POLICY "public_read_stack"          ON stack_items     FOR SELECT USING (true);
CREATE POLICY "public_read_education"      ON education       FOR SELECT USING (true);
CREATE POLICY "public_read_career"         ON career          FOR SELECT USING (true);
CREATE POLICY "public_read_activities"     ON activities      FOR SELECT USING (true);
CREATE POLICY "public_read_certifications" ON certifications  FOR SELECT USING (true);
CREATE POLICY "public_read_about"          ON about_content   FOR SELECT USING (true);

-- Authenticated write (admin only)
CREATE POLICY "auth_write_projects"       ON projects        FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "auth_write_stack"          ON stack_items     FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "auth_write_education"      ON education       FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "auth_write_career"         ON career          FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "auth_write_activities"     ON activities      FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "auth_write_certifications" ON certifications  FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "auth_write_about"          ON about_content   FOR ALL USING (auth.role() = 'authenticated');
