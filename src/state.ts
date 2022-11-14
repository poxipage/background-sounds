import { state, type State } from "poxi";

type Schema = { url: string, active: boolean, volume: number };
export const getState = () => state<Schema>();

export function onCreate(state: State<Schema>) {
  state.set({
    url: "",
    active: false,
    volume: 50
  });
}
