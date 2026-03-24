import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null

function getClient(): SupabaseClient {
  if (!_client) {
    const url = process.env.SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_KEY
    if (!url || !key) {
      throw new Error("SUPABASE_URL and SUPABASE_SERVICE_KEY are required")
    }
    _client = createClient(url, key)
  }
  return _client
}

export const supabaseServer = {
  from(table: string) {
    return getClient().from(table)
  },
  auth: {
    getSession() {
      return getClient().auth.getSession()
    }
  }
}
