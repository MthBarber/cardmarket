import { cards, card, createCard, updateCard, deleteCard } from './cards'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('cards', () => {
  scenario('returns all cards', async (scenario) => {
    const result = await cards()

    expect(result.length).toEqual(Object.keys(scenario.card).length)
  })

  scenario('returns a single card', async (scenario) => {
    const result = await card({ id: scenario.card.one.id })

    expect(result).toEqual(scenario.card.one)
  })

  scenario('creates a card', async () => {
    const result = await createCard({
      input: {
        name: 'String463653',
        setName: 'String',
        startingFromPrice: 9478104.280881636,
        cardImage: 'String',
        color: 'String',
        cardType: 'String',
        manaValue: 8274500,
      },
    })

    expect(result.name).toEqual('String463653')
    expect(result.setName).toEqual('String')
    expect(result.startingFromPrice).toEqual(9478104.280881636)
    expect(result.cardImage).toEqual('String')
    expect(result.color).toEqual('String')
    expect(result.cardType).toEqual('String')
    expect(result.manaValue).toEqual(8274500)
  })

  scenario('updates a card', async (scenario) => {
    const original = await card({ id: scenario.card.one.id })
    const result = await updateCard({
      id: original.id,
      input: { name: 'String70782052' },
    })

    expect(result.name).toEqual('String70782052')
  })

  scenario('deletes a card', async (scenario) => {
    const original = await deleteCard({ id: scenario.card.one.id })
    const result = await card({ id: original.id })

    expect(result).toEqual(null)
  })
})
