export type Activity = {
  id: string
  label: string
  emoji: string
  isAll?: boolean
}

export const activities: Activity[] = [
  {
    id: 'prince-princesses',
    label: 'Regarder ensemble Prince et Princesses',
    emoji: '👑',
  },
  {
    id: 'cooking-lasagnes',
    label: 'Soirée cooking — on cuisine des lasagnes',
    emoji: '🍝',
  },
  {
    id: 'cinema',
    label: 'Soirée cinéma',
    emoji: '🎬',
  },
  {
    id: 'orsay',
    label: "Musée d'Orsay",
    emoji: '🎨',
  },
  {
    id: 'petit-palais',
    label: 'Petit Palais',
    emoji: '🏛️',
  },
  {
    id: 'notre-dame',
    label: 'Visiter Notre-Dame de Paris',
    emoji: '⛪',
  },
  {
    id: 'kebab',
    label: 'Aller manger le meilleur kebab de Paris',
    emoji: '🥙',
  },
  {
    id: 'versailles',
    label: 'Aller à Versailles',
    emoji: '🌸',
  },
  {
    id: 'pere-lachaise',
    label: 'Aller au Père Lachaise',
    emoji: '🌿',
  },
  {
    id: 'all',
    label: 'JE VEUX TOUT FAIRE',
    emoji: '✨',
    isAll: true,
  },
]
