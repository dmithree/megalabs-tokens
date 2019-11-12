import React from 'react';
interface ColumnPropTypes {
    /**
     * Column contents.
     */
    children?: React.ReactNode;
    /**
     * Default width of the column as a fraction of the grid out of 12, to be shown at all
     * breakpoints except those covered by the three optional props below.
     */
    base?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    /**
     * Width of the column as a fraction of the grid out of 12, to be shown in viewports wider
     * than `small`.
     */
    aboveSmall?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    /**
     * Width of the column as a fraction of the grid out of 12, to be shown in viewports wider
     * than `medium`.
     */
    aboveMedium?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    /**
     * Width of the column as a fraction of the grid out of 12, to be shown in viewports wider
     * than `large`.
     */
    aboveLarge?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    /**
     * A selector hook into the React component for use in automated testing environments.
     */
    dataTest?: string;
}
export declare function GridColumn({ children, base, aboveSmall, aboveMedium, aboveLarge, dataTest, }: ColumnPropTypes): JSX.Element;
interface GridPropTypes {
    /**
     * Grid contents.
     */
    children?: React.ReactNode;
    /**
     * Controls the amount of space between columns in the grid.
     */
    gutter?: 'normal' | 'wide' | 'flush';
    /**
     * A selector hook into the React component for use in automated testing environments.
     */
    dataTest?: string;
}
export declare function Grid({ children, gutter, dataTest }: GridPropTypes): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map