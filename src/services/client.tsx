import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY;
export const supabaseProjectId = import.meta.env.VITE_APP_SUPABASE_PROJECT_ID;

export const client = createClient(supabaseUrl, supabaseKey);
