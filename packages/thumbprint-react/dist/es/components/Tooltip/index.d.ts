/// <reference types="react" />
import { RefHandler } from 'react-popper';
interface ChildrenPropTypes {
    ref: RefHandler;
    onMouseEnter: () => void;
    onFocus: () => void;
    onMouseLeave: () => void;
    onBlur: () => void;
    onClick: () => void;
    ariaLabel: string;
}
interface TooltipPropTypes {
    /**
     * A function that renders JSX and receives an object with `ref`, `onMouseEnter`, `onFocus`,
     * `onMouseLeave`, `onBlur`, `onClick`, and `ariaLabel`. All of these props must be added to
     * the component within the render prop.
     */
    children: (args: ChildrenPropTypes) => JSX.Element;
    /**
     * Plain text that will appear within the tooltip. Links and formatted content are not allowed.
     */
    text: string;
    /**
     * Controls the look of the tooltip.
     */
    theme?: 'light' | 'dark';
    /**
     * Determines where the tooltip will attempt to position itself relative to the `children`. The
     * tooltip will reposition itself to fit within the contianer.
     */
    position?: 'top' | 'bottom';
    /**
     * Number in milliseconds that determines how long to wait before closing the tooltip when the
     * `onMouseLeave` event fires. A small delay prevents the tooltip from closing if the user
     * moves their cursor from the button to the tooltip. This value should only be set to `0` when
     * two or more tooltip components are used near each other.
     */
    closeDelayLength?: 0 | 200;
    /**
     * By default tooltips will render right before the `</body>` tag.
     *
     * Setting the `container` to `inline` causes the tooltip to remain where it was added to the
     * DOM.
     *
     * This option is helpful to work around z-index and positioning issues.
     */
    container?: 'inline' | 'body';
    /**
     * Adds a `z-index` to the tooltip. Before using this prop, try to use `container="inline"`.
     */
    zIndex?: number;
}
export default function Tooltip({ container, position, theme, zIndex, text, children, closeDelayLength, }: TooltipPropTypes): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map