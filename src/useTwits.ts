import {ITwit, twits as initialTwits} from "./twits.ts";
import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {devtools} from "zustand/middleware";

interface UseTwitsState {
    twits: ITwit[]
    setTwits: (twits: ITwit[]) => void
    clickLike: (id: number) => void
}

export const useTwits = create<UseTwitsState>()(devtools(immer((set) => ({
    twits: initialTwits,
    setTwits: (twits) => set({twits}),
    clickLike: (id) => set((state) => {
        const twit = state.twits.find((twit: ITwit) => twit.id === id)
        if (twit) twit.likes++
    })
}))));
