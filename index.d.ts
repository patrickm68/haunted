import { html, render, TemplateResult } from 'lit-html';    
export { html, render, TemplateResult }    

export function component(renderer: (el: HTMLElement) => TemplateResult, BaseElement?: Function, options?: {
    useShadowDOM: boolean
}): Function;

export function useCallback(fn: Function, inputs: any[]): Function;

export function useEffect(fn: () => Function | void): void;

export function useState(intialValue?: any): [any, Function];

export function useReducer(reducer: (state: any, action: any) => any, initialState: any): [any, Function];

export function useMemo(fn: Function, values: any[]): any;

export function withHooks(renderer: Function): Function;
export function virtual(renderer: Function): Function;

interface Context {
    Provider: Function;
    Consumer: Function;
    defaultValue: any;
}
export function createContext(defaultValue: any): Context
export function useContext(Context: Context): any

export function hook(Hook: Function): Function;
export class Hook {
    id: number;
    el: HTMLElement;
}