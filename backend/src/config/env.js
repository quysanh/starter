import dotenv from 'dotenv';

dotenv.config();

const env = {
  port: process.env.PORT || 4000,
  corsOrigin: process.env.CORS_ORIGIN || '',
  supabaseUrl: process.env.SUPABASE_URL || '',
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY || '',
  jwtSecret: process.env.JWT_SECRET || '',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1d'
};

export default env;

