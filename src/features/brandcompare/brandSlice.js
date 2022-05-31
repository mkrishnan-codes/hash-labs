import { createSlice } from "@reduxjs/toolkit";
const getBrand = (id) => ({
    id,
    brand: String.fromCharCode(97 + id),
    weightUnits: 0,
    price: 0,
    pricePerUnit: ''
}
)
const initialState = [getBrand(0)];
const calc = (w, p) => w !== 0 && p !== 0 ? (p / w).toFixed(2) : "";

export const brandSlice = createSlice({
    name: 'brands', initialState, reducers: {
        add: (state) => {
            state.length < 100 && state.push(getBrand(state.length))
        },
        update: (state, { payload }) => {
            const { weightUnits, id, price, brand } = payload;
            const pricePerUnit = calc(weightUnits, price);
            const index = state.findIndex(itm => itm.id === id);
            state[index] = { id, price, pricePerUnit, weightUnits, brand };
        },
        sort: (state) => {
            state.sort((a, b) => a.pricePerUnit - b.pricePerUnit);
        },
        save: (state) => {
            const str = JSON.stringify(state);
            localStorage.setItem('brands', str);
        },
        restore: (state) => {
            let brs = localStorage.getItem('brands');
            if (brs) {
                brs = JSON.parse(brs)
                state = brs;
            }
        }
    }
})
export const { add, update, sort } = brandSlice.actions;
export const selectBrands = (state) => state.brands;
export default brandSlice.reducer;
