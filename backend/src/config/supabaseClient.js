import { createClient } from '@supabase/supabase-js';
import env from './env.js';

const shouldInitClient = env.supabaseUrl && env.supabaseAnonKey;

export const supabase = shouldInitClient
  ? createClient(env.supabaseUrl, env.supabaseAnonKey)
  : null;

