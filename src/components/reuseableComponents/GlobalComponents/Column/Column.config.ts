import {pick} from '../../../utils/index.ts';
import {Alignment, ValueOf} from '../../../index';

// Exports the common enum
export {Paddings, Margins, Gaps, FlexWrap, FlexDirection, Spread} from '../../../index';

// Pick component specific defintions 
export const Alignments = pick(Alignment, ['RIGHT', 'LEFT', 'CENTER', 'STRETCH', 'SPACE_BETWEEN']);
export const ContentAlignment = pick(Alignment, ['TOP', 'BOTTOM', 'CENTER']);
export const VerticalAlignments = pick(Alignment, ['TOP', 'BOTTOM', 'CENTER', 'BASELINE', 'STRETCH']);

// Type definitions to restrict values
export type Alignments = ValueOf<typeof Alignments>;
export type ContentAlignment = ValueOf<typeof ContentAlignment>;
export type VerticalAlignments = ValueOf<typeof VerticalAlignments>;
