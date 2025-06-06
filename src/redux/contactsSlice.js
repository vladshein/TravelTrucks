import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchContactsOp,
  addContactOp,
  deleteContactOp,
  fetchOneOp,
} from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const initialState = {
  items: [],
  loading: false,
  error: null,
  item: { reviews: [], gallery: [] },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContactsOp.pending, state => {
        state.loading = true;
        console.log("state", state);
      })
      .addCase(fetchContactsOp.fulfilled, (state, { payload }) => {
        console.log("payload", payload);
        state.items = payload.items;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchContactsOp.rejected, (state, { payload }) => {
        console.log("error", payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(addContactOp.pending, state => {
        state.loading = true;
        console.log("state", state);
        state.error = null;
      })
      .addCase(addContactOp.fulfilled, (state, { payload }) => {
        console.log("payload", payload);
        state.loading = false;
        state.items.push(payload);
        state.error = null;
      })
      .addCase(addContactOp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        console.log("error", payload);
      })
      .addCase(deleteContactOp.pending, state => {
        state.loading = true;
        state.error = null;
        console.log("state", state);
      })
      .addCase(deleteContactOp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        console.log("payload", payload);
        state.items = state.items.filter(item => item.id !== payload);
      })
      .addCase(deleteContactOp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        console.log("error", payload);
      })
      .addCase(fetchOneOp.pending, state => {
        state.loading = true;
        state.error = null;
        console.log("state", state);
      })
      .addCase(fetchOneOp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        console.log("payload", payload);
        state.item = JSON.parse(JSON.stringify(payload));
        console.log("state.item", state.item);
      })
      .addCase(fetchOneOp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        console.log("error", payload);
      });
  },
});

const selectLoading = state => state.contacts.loading;
const selectError = state => state.contacts.error;
const selectContacts = state => state.contacts.items;
const selectOne = state => state.contacts.item;
// Memoized selector
const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const contactsReducer = contactsSlice.reducer;

export {
  selectLoading,
  selectError,
  selectContacts,
  selectFilteredContacts,
  selectOne,
};
