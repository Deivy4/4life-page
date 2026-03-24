export const dynamic = "force-dynamic"

import { NextRequest, NextResponse } from 'next/server'
import { MercadoPagoPreferenceService } from "@/infrastructure/mercado-pago/MercadoPagoPreferenceService"
import { CreatePaymentPreference } from '@/application/use-cases/CreatePaymentPreference'
import { ProductsLocalRepository } from '@/infrastructure/repositories/ProductsLocalRepository'
import { SavePendingPayment } from '@/application/use-cases/SavePendingPayment'
import { SupabaseMPPreferenceRepository } from '@/infrastructure/repositories/SupabaseMPPreferenceRepository'
import { CreateOrder } from '@/application/use-cases/CreateOrder'
import { SupabaseOrderRepository } from '@/infrastructure/repositories/SupabaseOrderRepository'
import { StartPaymentProcess } from '@/application/use-cases/StartPaymentProcess'
export async function POST(request: NextRequest) {
  const body = await request.json()

  const startPayment = new StartPaymentProcess(
    new CreatePaymentPreference(
      new ProductsLocalRepository(),
      new MercadoPagoPreferenceService()
    ),
    new SavePendingPayment(new SupabaseMPPreferenceRepository()),
    new CreateOrder(new SupabaseOrderRepository())
  )

  const result = await startPayment.execute(body)

  return NextResponse.json(result)
}

