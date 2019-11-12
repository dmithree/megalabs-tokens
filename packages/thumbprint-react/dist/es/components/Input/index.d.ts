import React from 'react';
interface InputClearButtonPropTypes {
    onClick: () => void;
}
/**
 * Accessible button that makes it easy to add a "Clear" button to a text input. It should be used
 * with the `innerRight` prop in `Input`.
 */
declare const InputClearButton: ({ onClick }: InputClearButtonPropTypes) => JSX.Element;
declare const ClearButton: ({ onClick }: InputClearButtonPropTypes) => JSX.Element;
interface InputIconPropTypes {
    /**
     * Set the icon color with a color from [Thumbprint Tokens](/tokens/).
     * @private
     */
    color?: string;
    /**
     * An icon component from [Thumbprint Icons](/icons/).
     * You should pair "Medium" icons with `large` inputs and "Small" icons with `small` inputs.
     */
    children: React.ReactNode;
}
/**
 * Component that helps position icons within inputs.
 */
declare const InputIcon: ({ color, children }: InputIconPropTypes) => JSX.Element;
interface InputPropTypes {
    /**
     * Adds a HTML `id` attribute to the input. This is used for linking the HTML with a
     * [Label](/components/label/react/).
     */
    id?: string;
    /**
     * Visually and functionally disable the input.
     */
    isDisabled?: boolean;
    /**
     * Adds `readonly` HTML attribute, allowing users to select (but not modify) the input.
     */
    isReadOnly?: boolean;
    /**
     * Adds the `required` HTML attribute.
     */
    isRequired?: boolean;
    /**
     * A regular expression that the `<input>` element's value is checked against when submitting a
     * form.
     */
    pattern?: string;
    /**
     * The maximum number of characters that a user can enter. `onChange` will not fire if a user
     * enters a character that exceeds `maxLength`.
     */
    maxLength?: number;
    /**
     * Makes the text and border color red.
     */
    hasError?: boolean;
    /**
     * Text that appears within the input when there is no `value`.
     */
    placeholder?: string;
    /**
     * Controls the height and padding of the input.
     */
    size?: 'small' | 'large';
    /**
     * Sets the `type` attribute on the input element.
     */
    type?: 'email' | 'password' | 'text' | 'search' | 'tel' | 'number';
    /**
     * A [proposed specification](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute)
     * that enables specification of virtual keyboard type in Chrome. Currently only supported in
     * Chrome and Android.
     */
    inputMode?: 'numeric';
    /**
     * The HTML `name` attribute that will be pased to the input. It is required if working with a
     * form that uses `<form action="" method="">` to submit data to a server.
     */
    name?: string;
    /**
     * The current value of the input.
     */
    value?: string | number;
    /**
     * Content that appears within the input on the left.
     */
    innerLeft?: React.ReactNode;
    /**
     * Content that appears within the input on the right.
     */
    innerRight?: React.ReactNode;
    /**
     * The function that is called when the input value changes.
     *
     * It receives two arguments: `onChange(newValue, event)`.
     *
     * The consumer of this component should use that data to update the `value` prop passed in to
     * this component.
     */
    onChange: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Function that fires when you click into the input.
     */
    onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    /**
     * Fires when the input gains focus.
     */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Fires when the input loses focus, regardless of whether the value has changed.
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Fires when a key is pressed down with the input focused.
     */
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Fires when a key press is released with the input focused.
     */
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Fires when a valid key input is made.
     */
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * This tells the browser to give the input focus when the page is loaded. This can [only be
     * used once on a page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus).
     */
    shouldFocusOnPageLoad?: boolean;
    /**
     * A selector hook into the React component for use in automated testing environments. It is
     * applied internally to the `<input />` element.
     */
    dataTest?: string;
    /**
     * This tells the browser whether to attempt autocompletion of the input.
     * [Supports all values](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).
     */
    autoComplete?: React.InputHTMLAttributes<HTMLInputElement>['autoComplete'];
}
declare const Input: React.ForwardRefExoticComponent<InputPropTypes & React.RefAttributes<HTMLInputElement>>;
export default Input;
export { InputIcon, InputClearButton, ClearButton };
//# sourceMappingURL=index.d.ts.map