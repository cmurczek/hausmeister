import { RouterReducerState, SerializedRouterStateSnapshot, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface RootState {
  router: RouterReducerState<SerializedRouterStateSnapshot>;
}

export const reducers: ActionReducerMap<RootState> = {
  router: routerReducer,
};
