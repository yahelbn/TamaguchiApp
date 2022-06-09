import classNames from 'classnames';
import * as React from 'react';
import './column.scss';
import {ColumnStyle} from '../Column/ColumnElements'

type SpanRange = 1|2|3|4|5|6|7|8|9|10|11|12;

type IColumn<P> = React.FunctionComponent<P> & {
    Spread: typeof Spread;
  
}

export enum Spread {
    FULL = 'full',
    AUTO = 'auto',
    NONE = 'none',
}

export interface Props {
    /**
     * Set the columns width.
     * @doxDisplayName Span Size
     * @default 2 
     */
    spanSize?: SpanRange;

     /**
     * Set column as per content.
     * @doxDisplayName Spread
     */
      spread?: Spread;

      /**
     * Set the children content of the column component.
     * @doxDisplayName Children Content
     */
    children?: React.ReactNode;
}


export type ColumnProps = Props;

export const Column: IColumn<ColumnProps> = (props: ColumnProps) => {
    const {
        spanSize,
        spread = Spread.FULL,
        children
    } = props;


    return (
        <ColumnStyle
            className={classNames(
                'dxc-column',
                {[`dxc-column-span-${spanSize}`]: spanSize},
                {[`dxc-column-spread-${spread}`]: spread},
            )}>
            {children}
        </ColumnStyle>
    );
};

Column.Spread = Spread;


export default Column;
