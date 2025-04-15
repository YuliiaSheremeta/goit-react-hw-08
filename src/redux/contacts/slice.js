import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from '../contacts/operations';



const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null,
        isFormVisible: false,
        isSearchVisible: false,
    }, reducers: {
        toggleFormVisibility(state) {
      state.isFormVisible = !state.isFormVisible;
    },
        toggleSearchVisibility(state) {
      state.isSearchVisible = !state.isSearchVisible;
        },
        hideForm(state) {
            state.isFormVisible = false;
        },
        hideSearch(state) {
            state.isSearchVisible = false;
        },
    },
        
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        }).addCase(fetchContacts.rejected, (state) => {
            state.loading = false;
            state.error = true;
        }).addCase(addContact.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items.push(action.payload);
        }).addCase(addContact.rejected, (state) => {
            state.loading = false;
            state.error = true;
        }).addCase(deleteContact.fulfilled, (state,action) => {
            state.loading = false;
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        });
    },
    
}
);
export const { toggleFormVisibility, toggleSearchVisibility,hideForm,hideSearch } = slice.actions;
export default slice.reducer;

