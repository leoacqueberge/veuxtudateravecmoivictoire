const activityMessages: Record<string, string> = {
  'prince-princesses': 'Prépare les couvertures, on binge-watch royal !! 👑',
  'cooking-lasagnes': 'Je promets de pas brûler les lasagnes (cette fois) 🍝',
  cinema: 'Popcorn, plaid, et toi à côté de moi 🎬',
  orsay: 'Culture + main dans la main, combo parfait 🎨',
  'petit-palais': 'On va être trop beaux devant le Petit Palais 🏛️',
  'notre-dame': 'Notre-Dame nous attend (et moi aussi) ⛪',
  kebab: 'Le meilleur kebab de Paris t\'attend (source : moi) 🥙',
  versailles: 'Versailles va être notre royaume à nous 🌸',
  'pere-lachaise': 'Balade romantique au Père Lachaise 🌿',
  all: 'On va tout faire. Absolument TOUT. ✨',
}

export function getActivityRecapMessage(activityId: string) {
  return activityMessages[activityId] ?? "J'ai tellement hâte !! 🥰💖"
}
