import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from './hotels/hotelsSlice';

const localStorageMiddleware = ({ getState }) => {
    return next => action => {
        const result = next(action);
        localStorage.setItem('hotels', JSON.stringify(getState()));
        return result;
    };
};

const reHydrateStore = () => {
    if (localStorage.getItem('hotels') !== null) {
        return JSON.parse(localStorage.getItem('hotels'));
    }
};

export const store = configureStore({
    reducer: {
        hotels: hotelsReducer
    },
    preloadedState: reHydrateStore(),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(localStorageMiddleware),
});
