import React from 'react';
import { RefHandler } from 'react-popper';
interface PopoverPropTypes {
    /**
     * Contents for the Popover. Usually a `PopoverTitle`, `PopoverBody`, and `PopoverPrimaryButton`
     */
    children: React.ReactNode;
    /**
     * A function that renders JSX and receives an object with `ref`.
     * All of these props must be added to the component within the render prop.
     */
    launcher: ({ ref }: {
        ref: RefHandler;
    }) => React.ReactNode;
    /**
     * Position of popover relative to the launcher.
     */
    position?: 'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end';
    /**
     * Whether or not the popover is visible.
     */
    isOpen?: boolean;
    /**
     * Function called when the close button is clicked. You should cause this to set `isOpen=false`
     * in your parent component.
     */
    onCloseClick: () => void;
    /**
     * By default popovers will render right before the `</body>` tag.
     * Setting the `container` to `inline` causes the tooltip to remain where it was added to the
     * DOM.
     * This option is helpful to work around z-index and positioning issues.
     */
    container?: 'inline' | 'body';
    /**
     * Accessibility title used to describe the content of the popover to screen readers.
     */
    accessibilityLabel?: string;
}
export default function Popover({ children, launcher, onCloseClick, position, isOpen, container, accessibilityLabel, }: PopoverPropTypes): JSX.Element;
interface PopoverTitlePropTypes {
    /**
     * The contents of the title.
     */
    children: React.ReactNode;
}
declare const PopoverTitle: ({ children }: PopoverTitlePropTypes) => JSX.Element;
interface PopoverBodyPropTypes {
    /**
     * The contents of the body.
     */
    children: React.ReactNode;
}
declare const PopoverBody: ({ children }: PopoverBodyPropTypes) => JSX.Element;
interface PopoverPrimaryButtonPropTypes {
    /**
     * The text of the button.
     */
    children: string;
    /**
     * The function to call when the button is clicked.
     */
    onClick: () => void;
}
declare const PopoverPrimaryButton: ({ children, onClick, }: PopoverPrimaryButtonPropTypes) => JSX.Element;
interface PopoverSecondaryButtonPropTypes {
    /**
     * The text of the button.
     */
    children: string;
    /**
     * The function to call when the button is clicked.
     */
    onClick?: () => void;
    /**
     * Link to visit when the button is clicked. It will be opened in a new tab.
     */
    to?: string;
}
declare const PopoverSecondaryButton: ({ children, onClick, to, }: PopoverSecondaryButtonPropTypes) => JSX.Element;
export { PopoverTitle, PopoverBody, PopoverPrimaryButton, PopoverSecondaryButton };
//# sourceMappingURL=index.d.ts.map