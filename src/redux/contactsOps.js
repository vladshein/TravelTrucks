import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

const fetchContactsOp = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get();
      console.log("response.data.results", data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addContactOp = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    console.log("Name, number:", name, number);
    try {
      const { data } = await axios.post("/contacts/", {
        name,
        number,
      });
      return { name: data.name, number: data.number, id: data.id };
    } catch (error) {
      console.error("Error adding contact:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteContactOp = createAsyncThunk(
  "contacts/deleteContact",
  async function deleteContactOp(id, thunkAPI) {
    console.log("Delete id:", id);
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      console.log("Contact deleted:", data);
      return id;
    } catch (error) {
      console.error("Error adding contact:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchOneOp = createAsyncThunk(
  "contacts/fetchOne",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/${id}/`);
      console.log("response.data.results", data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { fetchContactsOp, addContactOp, deleteContactOp, fetchOneOp };
