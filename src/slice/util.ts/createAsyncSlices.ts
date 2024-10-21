
import { PayloadAction } from '@reduxjs/toolkit';

export type asyncStatusTypes = "INIT" | "LOADING" | "SUCCESS" | "ERROR";

interface IAsyncState {
  status: asyncStatusTypes;
  data: any;
  error: any;
}
export const createAsyncSlices = <T>(
  builder: any,
  operations: any,
  transformer?: <V>(data: T) => V
) => {
  operations.forEach((operation: any) => {
    builder
      .addCase(operation.pending, (state: IAsyncState) => {
        state.status = "LOADING";
        state.error = null;
      })
      .addCase(
        operation.fulfilled,
        (state: IAsyncState, action: PayloadAction<T>) => {
          state.status = "SUCCESS";
          state.error = null;
          state.data =
            transformer && typeof transformer == "function"
              ? transformer(action.payload)
              : action.payload;
        }
      )
      .addCase(
        operation.rejected,
        (state: IAsyncState, action: PayloadAction) => {
          state.status = "ERROR";
          state.error = null;
        }
      );
  });
};
