import { createClient } from '@supabase/supabase-js'

//@ts-ignore
const supabase = createClient('https://vccfvufbutjhjfuefnmb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTkwNTczMSwiZXhwIjoxOTUxNDgxNzMxfQ.MoxB6tg7B1Niqx1GpB1jryFFtb6eudHjiHrxeJl5cSo')

export { supabase }