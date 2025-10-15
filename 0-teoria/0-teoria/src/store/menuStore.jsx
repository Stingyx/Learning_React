import { create } from "zustand";

export const usemenuStore = create((set)=>({
    itemselect: null,
    setItemselect:(p)=>set({
        itemselect: p
    })
}))