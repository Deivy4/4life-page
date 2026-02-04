import { Preference } from 'mercadopago'
import { IPaymentGateway } from '@/domain/services/IPaymentGateway'
import { mpClient } from './MercadoPagoClient'

export class MercadoPagoPreferenceService implements IPaymentGateway {
  async createPreference(input: any) {
    const preferenceBody = {
      external_reference: input.external_reference,
      items: input.items,
      back_urls: {
        success: `${process.env.SITE_URL}/`,
        failure: `${process.env.SITE_URL}/`,
        pending: `${process.env.SITE_URL}/`,
      },
      shipments: { cost: 6000, mode: 'not_specified' },
    }

    const preference = await new Preference(mpClient).create({
      body: preferenceBody,
    })
    
    if (!preference.id || !preference.init_point) {
      throw new Error("Mercado Pago no devolvió id o init_point")
    }

    return {
      id: preference.id,
      link: preference.init_point,
    }
  }
}
