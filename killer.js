console.log('killer')

const game = document.querySelector('game-app')
const gameThemeManager = game.shadowRoot.querySelector('game-theme-manager')
const slot = gameThemeManager.shadowRoot.querySelector('slot')
console.log(slot)
console.log(slot.assignedElements()[1])
const board = slot.assignedElements()[1].querySelector('#board')
const rows = slot.assignedElements()[1].querySelectorAll('game-row')
console.log(board)
const grid = []
for (let i = 0; i < rows.length; i++) {
    grid.push([])
    const tiles = rows[i].shadowRoot.querySelectorAll('game-tile')
    for (let j = 0; j < tiles.length; j++) {
        const tile = tiles[j]
        grid[i].push({
            letter: tile.attributes[0]?.value || '',
            evalution: tile.attributes[1]?.value || ''
        })
    }
}
console.log(grid)

// MutationObserver

// const mutationObserver = new MutationObserver(entries => {
//     console.log(entries)
// })
// rows.forEach(row => {
//     mutationObserver.observe(row, {
//         attributes: true,
//         attributeFilter: ['letters']
//     })
// })

// mutationObserver.observe(board, {
//     subtree: true,
//     attributes: true,
//     attributeFilter: ['letters']
// })