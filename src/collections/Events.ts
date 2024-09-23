import { CollectionConfig } from 'payload/types'

const Events: CollectionConfig = {
    slug: 'events',
    fields: [
        {
            name: 'eventsName',
            type: 'text',
        },
        {
            name: 'eventYear',
            type: 'date',
        },
    ],
}

export default Events
