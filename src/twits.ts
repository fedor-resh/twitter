export interface ITwit {
    title: string
    text: string
    id: number
    date: string
    likes: number
}

export const twits: ITwit[] = [
    {
        title: 'First twit',
        text: 'Hello, world!',
        id: 0,
        date: '2021-01-01',
        likes: 1
    },
    {
        title: 'Second twit',
        text: 'Goodbye, world!',
        id: 1,
        date: '2021-01-02',
        likes: 2
    }
]