export type CityId = 'Recife' | 'São Lourenço da Mata'
export type PropertyTier = 'medio' | 'alto'

export type GalleryImage = {
  imageUrl: string
  imageAlt: string
}

export type FloorPlan = {
  title: string
  imageUrl: string
  imageAlt: string
}

export type TechnicalSheetRow = {
  label: string
  value: string
}

export type PropertyListing = {
  id: string
  title: string
  neighborhood: string
  city: CityId
  tier: PropertyTier
  bedrooms: number
  bathrooms: number
  /** Área privativa aproximada em m² */
  areaM2: number
  parkingSpaces: number
  specs: string
  priceLabel: string
  priceValue: number
  gallery: GalleryImage[]
  floorPlans: FloorPlan[]
  technicalSheet: TechnicalSheetRow[]
}

export const LISTINGS: PropertyListing[] = [
  {
    id: '1',
    title: 'Apartamento na orla com vista',
    neighborhood: 'Boa Viagem',
    city: 'Recife',
    tier: 'alto',
    bedrooms: 3,
    bathrooms: 3,
    areaM2: 118,
    parkingSpaces: 2,
    specs: '118 m² · 3 quartos (1 suíte) · 2 vagas',
    priceLabel: 'R$ 1.250.000',
    priceValue: 1_250_000,
    gallery: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Sala iluminada de apartamento moderno com sofá e janelas amplas',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Cozinha integrada com bancada em pedra',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Suíte principal com cama e cortinas claras',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Varanda com vista para o mar ao entardecer',
      },
    ],
    floorPlans: [
      {
        title: 'Planta — térreo / living',
        imageUrl:
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80&auto=format&fit=crop',
        imageAlt: 'Planta baixa do apartamento — área social',
      },
      {
        title: 'Planta — dormitórios',
        imageUrl:
          'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1000&q=80&auto=format&fit=crop',
        imageAlt: 'Planta baixa — distribuição dos quartos',
      },
    ],
    technicalSheet: [
      { label: 'Tipo', value: 'Apartamento' },
      { label: 'Padrão', value: 'Alto' },
      { label: 'Andar', value: '12º andar' },
      { label: 'Condomínio', value: 'Piscina, academia, salão de festas' },
      { label: 'Posição', value: 'Frente mar' },
      { label: 'Elevador', value: 'Sim (2)' },
      { label: 'Área privativa', value: '118 m²' },
      { label: 'Quartos', value: '3 (1 suíte)' },
      { label: 'Banheiros', value: '3 (social + 2 suítes)' },
      { label: 'Vagas', value: '2 cobertas' },
    ],
  },
  {
    id: '2',
    title: 'Apartamento bem localizado',
    neighborhood: 'Espinheiro',
    city: 'Recife',
    tier: 'medio',
    bedrooms: 2,
    bathrooms: 2,
    areaM2: 68,
    parkingSpaces: 1,
    specs: '68 m² · 2 quartos · 1 vaga',
    priceLabel: 'R$ 520.000',
    priceValue: 520_000,
    gallery: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Ambiente integrado de cozinha e sala',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Sala de estar com mesa de jantar',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Quarto com guarda-roupa embutido',
      },
    ],
    floorPlans: [
      {
        title: 'Planta humanizada',
        imageUrl:
          'https://images.unsplash.com/photo-1518780664699-7e7bb8c4e9e8?w=1000&q=80&auto=format&fit=crop',
        imageAlt: 'Desenho da planta do apartamento de 68 m²',
      },
    ],
    technicalSheet: [
      { label: 'Tipo', value: 'Apartamento' },
      { label: 'Padrão', value: 'Médio' },
      { label: 'Andar', value: '4º andar' },
      { label: 'Elevador', value: 'Sim' },
      { label: 'Área privativa', value: '68 m²' },
      { label: 'Quartos', value: '2' },
      { label: 'Banheiros', value: '2' },
      { label: 'Vagas', value: '1' },
    ],
  },
  {
    id: '3',
    title: 'Apartamento compacto',
    neighborhood: 'Casa Amarela',
    city: 'Recife',
    tier: 'medio',
    bedrooms: 2,
    bathrooms: 1,
    areaM2: 54,
    parkingSpaces: 1,
    specs: '54 m² · 2 quartos · 1 vaga',
    priceLabel: 'R$ 385.000',
    priceValue: 385_000,
    gallery: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Sala de apartamento compacto com sofá e janela',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Cozinha compacta e funcional',
      },
    ],
    floorPlans: [
      {
        title: 'Planta baixa',
        imageUrl:
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80&auto=format&fit=crop',
        imageAlt: 'Planta do apartamento compacto',
      },
    ],
    technicalSheet: [
      { label: 'Tipo', value: 'Apartamento' },
      { label: 'Padrão', value: 'Médio' },
      { label: 'Andar', value: 'Térreo elevado' },
      { label: 'Elevador', value: 'Sim' },
      { label: 'Área privativa', value: '54 m²' },
      { label: 'Quartos', value: '2' },
      { label: 'Banheiros', value: '1' },
      { label: 'Vagas', value: '1' },
    ],
  },
  {
    id: '4',
    title: 'Casa em condomínio',
    neighborhood: 'Centro',
    city: 'São Lourenço da Mata',
    tier: 'medio',
    bedrooms: 2,
    bathrooms: 2,
    areaM2: 95,
    parkingSpaces: 2,
    specs: '95 m² · 2 quartos · 2 vagas',
    priceLabel: 'R$ 295.000',
    priceValue: 295_000,
    gallery: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Casa térrea com jardim',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Fachada da casa em condomínio fechado',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Área externa com gramado',
      },
    ],
    floorPlans: [
      {
        title: 'Planta — pavimento térreo',
        imageUrl:
          'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1000&q=80&auto=format&fit=crop',
        imageAlt: 'Planta da casa térrea',
      },
    ],
    technicalSheet: [
      { label: 'Tipo', value: 'Casa em condomínio' },
      { label: 'Padrão', value: 'Médio' },
      { label: 'Terreno', value: '~120 m² (aprox.)' },
      { label: 'Área construída', value: '95 m²' },
      { label: 'Quartos', value: '2' },
      { label: 'Banheiros', value: '2' },
      { label: 'Vagas', value: '2' },
      { label: 'Portaria', value: '24h' },
    ],
  },
  {
    id: '5',
    title: 'Casa ampla com área gourmet',
    neighborhood: 'Cidade Universitária',
    city: 'São Lourenço da Mata',
    tier: 'alto',
    bedrooms: 4,
    bathrooms: 4,
    areaM2: 185,
    parkingSpaces: 3,
    specs: '185 m² · 4 quartos (2 suítes) · 3 vagas',
    priceLabel: 'R$ 980.000',
    priceValue: 980_000,
    gallery: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Residência com área externa',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Área gourmet coberta com churrasqueira',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Piscina e deck em residência',
      },
    ],
    floorPlans: [
      {
        title: 'Planta — térreo',
        imageUrl:
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80&auto=format&fit=crop',
        imageAlt: 'Planta do térreo com living e gourmet',
      },
      {
        title: 'Planta — pavimento superior',
        imageUrl:
          'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1000&q=80&auto=format&fit=crop',
        imageAlt: 'Planta dos quartos no andar superior',
      },
    ],
    technicalSheet: [
      { label: 'Tipo', value: 'Casa' },
      { label: 'Padrão', value: 'Alto' },
      { label: 'Pavimentos', value: '2' },
      { label: 'Área construída', value: '185 m²' },
      { label: 'Quartos', value: '4 (2 suítes)' },
      { label: 'Banheiros', value: '4' },
      { label: 'Vagas', value: '3' },
      { label: 'Lazer', value: 'Área gourmet, piscina' },
    ],
  },
  {
    id: '6',
    title: 'Cobertura linear',
    neighborhood: 'Pina',
    city: 'Recife',
    tier: 'alto',
    bedrooms: 3,
    bathrooms: 4,
    areaM2: 152,
    parkingSpaces: 3,
    specs: '152 m² · 3 quartos (2 suítes) · 3 vagas',
    priceLabel: 'R$ 1.780.000',
    priceValue: 1_780_000,
    gallery: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Sala espaçosa com piso de madeira',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Terraço da cobertura com vista urbana',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600585152911-dbcbec08656f?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Cozinha gourmet na cobertura',
      },
    ],
    floorPlans: [
      {
        title: 'Planta — nível principal',
        imageUrl:
          'https://images.unsplash.com/photo-1518780664699-7e7bb8c4e9e8?w=1000&q=80&auto=format&fit=crop',
        imageAlt: 'Planta da cobertura — pavimento social',
      },
      {
        title: 'Planta — terraço',
        imageUrl:
          'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1000&q=80&auto=format&fit=crop',
        imageAlt: 'Planta do terraço',
      },
    ],
    technicalSheet: [
      { label: 'Tipo', value: 'Cobertura' },
      { label: 'Padrão', value: 'Alto' },
      { label: 'Andar', value: 'Cobertura' },
      { label: 'Elevador', value: 'Sim (privativo)' },
      { label: 'Área privativa', value: '152 m²' },
      { label: 'Quartos', value: '3 (2 suítes)' },
      { label: 'Banheiros', value: '4' },
      { label: 'Vagas', value: '3' },
    ],
  },
  {
    id: '7',
    title: 'Apartamento no Derby',
    neighborhood: 'Derby',
    city: 'Recife',
    tier: 'medio',
    bedrooms: 2,
    bathrooms: 2,
    areaM2: 62,
    parkingSpaces: 1,
    specs: '62 m² · 2 quartos · 1 vaga',
    priceLabel: 'R$ 465.000',
    priceValue: 465_000,
    gallery: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Fachada de edifício residencial',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Interior do apartamento com sofá e TV',
      },
    ],
    floorPlans: [
      {
        title: 'Planta',
        imageUrl:
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80&auto=format&fit=crop',
        imageAlt: 'Planta do apartamento de 62 m²',
      },
    ],
    technicalSheet: [
      { label: 'Tipo', value: 'Apartamento' },
      { label: 'Padrão', value: 'Médio' },
      { label: 'Andar', value: '8º andar' },
      { label: 'Elevador', value: 'Sim' },
      { label: 'Área privativa', value: '62 m²' },
      { label: 'Quartos', value: '2' },
      { label: 'Banheiros', value: '2' },
      { label: 'Vagas', value: '1' },
    ],
  },
  {
    id: '8',
    title: 'Casa em rua tranquila',
    neighborhood: 'Caetes',
    city: 'São Lourenço da Mata',
    tier: 'medio',
    bedrooms: 3,
    bathrooms: 2,
    areaM2: 110,
    parkingSpaces: 2,
    specs: '110 m² · 3 quartos · 2 vagas',
    priceLabel: 'R$ 425.000',
    priceValue: 425_000,
    gallery: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Casa com muro e portão',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Sala de casa térrea bem ventilada',
      },
    ],
    floorPlans: [
      {
        title: 'Planta baixa',
        imageUrl:
          'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1000&q=80&auto=format&fit=crop',
        imageAlt: 'Planta da casa em rua tranquila',
      },
    ],
    technicalSheet: [
      { label: 'Tipo', value: 'Casa' },
      { label: 'Padrão', value: 'Médio' },
      { label: 'Terreno', value: '~180 m² (aprox.)' },
      { label: 'Área construída', value: '110 m²' },
      { label: 'Quartos', value: '3' },
      { label: 'Banheiros', value: '2' },
      { label: 'Vagas', value: '2' },
    ],
  },
  {
    id: '9',
    title: 'Apartamento alto padrão com lazer',
    neighborhood: 'Paulista',
    city: 'Recife',
    tier: 'alto',
    bedrooms: 4,
    bathrooms: 4,
    areaM2: 168,
    parkingSpaces: 3,
    specs: '168 m² · 4 quartos (3 suítes) · 3 vagas',
    priceLabel: 'R$ 1.420.000',
    priceValue: 1_420_000,
    gallery: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Varanda gourmet de apartamento',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600607689250-0a8562d9c1a4?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Sala de estar ampla com pé-direito alto',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80&auto=format&fit=crop',
        imageAlt: 'Cozinha com ilha central',
      },
    ],
    floorPlans: [
      {
        title: 'Planta — social',
        imageUrl:
          'https://images.unsplash.com/photo-1518780664699-7e7bb8c4e9e8?w=1000&q=80&auto=format&fit=crop',
        imageAlt: 'Planta da área social',
      },
      {
        title: 'Planta — íntimo',
        imageUrl:
          'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1000&q=80&auto=format&fit=crop',
        imageAlt: 'Planta da área íntima',
      },
    ],
    technicalSheet: [
      { label: 'Tipo', value: 'Apartamento' },
      { label: 'Padrão', value: 'Alto' },
      { label: 'Andar', value: '18º andar' },
      { label: 'Condomínio', value: 'Piscina adulto/infantil, spa, rooftop' },
      { label: 'Elevador', value: 'Sim (3)' },
      { label: 'Área privativa', value: '168 m²' },
      { label: 'Quartos', value: '4 (3 suítes)' },
      { label: 'Banheiros', value: '4' },
      { label: 'Vagas', value: '3' },
    ],
  },
]

export function getListingById(id: string): PropertyListing | undefined {
  return LISTINGS.find((l) => l.id === id)
}
