import { configureStore } from '@reduxjs/toolkit';
import TableReducer from './reducers/TableReducer';

 const store = configureStore({
    reducer: {tableData: TableReducer},
});

export default store;