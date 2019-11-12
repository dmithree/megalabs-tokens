/// <reference types="react" />
interface AnchorProps {
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    href?: string;
    target: string;
    rel?: string;
}
/**
 * Enable plain and themed `<a>` elements to share the same props.
 */
declare const getAnchorProps: ({ isDisabled, shouldOpenInNewTab, to, onClick, }: {
    isDisabled?: boolean | undefined;
    shouldOpenInNewTab?: boolean | undefined;
    to?: string | undefined;
    onClick?: ((event: import("react").MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
}) => AnchorProps;
export default getAnchorProps;
//# sourceMappingURL=get-anchor-props.d.ts.map