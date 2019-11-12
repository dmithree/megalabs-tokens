import React from 'react';
interface PropTypes {
    /**
     * `Button` components to render.
     */
    children?: React.ReactNode;
    /**
     * Controls the horizontal alignment of buttons within the container.
     */
    justify?: 'center' | 'left' | 'right';
    /**
     * Stack items below the small breakpoint. This pairs well with `width="full-below-small"`
     * for buttons
     */
    isStackedBelowSmall?: boolean;
    /**
     * A selector hook into the React component for use in automated testing environments.
     */
    dataTest?: string;
}
export default function ButtonRow({ children, justify, dataTest, isStackedBelowSmall, }: PropTypes): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map