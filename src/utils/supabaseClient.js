import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://immxnxbjsyorsrjzvwef.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltbXhueGJqc3lvcnNyanp2d2VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1MzQ2NTcsImV4cCI6MjA4NDExMDY1N30.pQlk2QYsGogZ9xeEue_1tJV5Ie9ex-1sA-qjZR3etDI'; // Get this from your Supabase dashboard
export const supabase = createClient(supabaseUrl, supabaseKey);
