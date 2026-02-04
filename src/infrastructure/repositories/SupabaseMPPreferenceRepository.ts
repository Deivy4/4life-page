import { MPPreferenceRepository } from "@/domain/repositories/MPPreferenceRepository"
import { supabaseServer } from "@/lib/supabase/server"

export const runtime = "nodejs"

export class SupabaseMPPreferenceRepository
  implements MPPreferenceRepository
{
  async create(input: {
    mp_preference_id: string
    product_id: string
    quantity: number
    status: "pending" | "approved" | "rejected" | "cancelled"
  }): Promise<{
    id: string
    mp_preference_id: string
    status: string
  }> {
    const { data, error } = await supabaseServer
      .from("mp_preferencias")
      .insert({
        mp_preference_id: input.mp_preference_id,
        product_id: input.product_id,
        quantity: input.quantity,
        status: input.status,
        total_amount : 0
      })
      .select("id, mp_preference_id, status")
      .single()

    if (error) {
      throw new Error(`Error creando mp_preferencia: ${error.message}`)
    }

    return data
  }

  async findByPreferenceId(mp_preference_id: string): Promise<{
    id: string
    status: string
  } | null> {
    const { data, error } = await supabaseServer
      .from("mp_preferencias")
      .select("id, status")
      .eq("mp_preference_id", mp_preference_id)
      .maybeSingle()

    if (error) {
      throw new Error(`Error buscando mp_preferencia: ${error.message}`)
    }

    return data
  }

  async updateStatus(input: {
    mp_preference_id: string
    mp_payment_id?: string
    mp_merchant_order_id?: string
    status: string
    status_detail?: string,
    transaction_amount?: number
  }): Promise<void> {
    const { error } = await supabaseServer
      .from("mp_preferencias")
      .update({
        mp_payment_id: input.mp_payment_id,
        mp_merchant_order_id: input.mp_merchant_order_id,
        status: input.status,
        status_detail: input.status_detail,
        updated_at: new Date().toISOString(),
        total_amount : input.transaction_amount
      })
      .eq("mp_preference_id", input.mp_preference_id)

    if (error) {
      throw new Error(`Error actualizando estado MP: ${error.message}`)
    }
  }
}
