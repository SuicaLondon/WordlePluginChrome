console.log('killer')

const game = document.querySelector('game-app')
const gameThemeManager = game.shadowRoot.querySelector('game-theme-manager')
const slot = gameThemeManager.shadowRoot.querySelector('slot')
const rows = slot.assignedElements()[1].querySelectorAll('game-row')
console.log(rows)