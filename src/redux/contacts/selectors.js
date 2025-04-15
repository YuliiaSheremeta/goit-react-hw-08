import { selectNameFilter } from '../filters/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectIsFormVisible = (state) => state.contacts.isFormVisible;

export const selectIsSearchVisible = (state) => state.contacts.isSearchVisible;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);