import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const backendURL = 'http://localhost:3000/api';

export const quoteData = createAsyncThunk(
  'quote',
  async (
    {
      deliveryFrom,
      deliveryTo,
      quantity,
      weight,
      value,
      category,
      address,
      city,
      zipcode,
      packageType,
    },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${backendURL}/quote`,
        {
          deliveryFrom,
          deliveryTo,
          quantity,
          weight,
          value,
          category,
          address,
          city,
          zipcode,
          packageType,
        },
        config
      );

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
