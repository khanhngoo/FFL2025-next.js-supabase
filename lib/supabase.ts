/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createClient } from '@supabase/supabase-js'

// Check for required environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Mock Supabase client for development/demonstration
const createMockClient = () => {
  console.warn('Using mock Supabase client. No actual database operations will be performed.');
  
  return {
    from: (table: string) => ({
      insert: (data: any) => {
        console.log(`MOCK DB: Would insert into ${table}:`, data);
        return { data: { id: `mock_${Date.now()}` }, error: null };
      },
      update: (data: any) => ({
        eq: (field: string, value: any) => {
          console.log(`MOCK DB: Would update ${table} where ${field}=${value}:`, data);
          return { data: null, error: null };
        }
      }),
      select: (columns: string) => ({
        eq: (field: string, value: any) => {
          console.log(`MOCK DB: Would select ${columns} from ${table} where ${field}=${value}`);
          return { data: [], error: null };
        }
      })
    }),
    storage: {
      from: (bucket: string) => ({
        upload: (path: string, file: any) => {
          console.log(`MOCK STORAGE: Would upload to ${bucket}/${path}`);
          return { data: { path }, error: null };
        }
      })
    }
  };
};

// Determine if we should use the mock client
const shouldUseMockClient = !supabaseUrl || !supabaseAnonKey || process.env.MOCK_SUPABASE === 'true';

// Log warnings for missing environment variables
if (!supabaseUrl && process.env.NODE_ENV !== 'production') {
  console.warn('Missing NEXT_PUBLIC_SUPABASE_URL environment variable');
}
if (!supabaseAnonKey && process.env.NODE_ENV !== 'production') {
  console.warn('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable');
}

// Create and export the appropriate client
export const supabase = shouldUseMockClient
  ? createMockClient() as any
  : createClient(supabaseUrl!, supabaseAnonKey!, {
      auth: {
        persistSession: false // Since you're not using auth features
      }
    });
