import {
  Row,
  Column,
  ColumnLayouts,
  Paragraph,
} from '@unlayer/react-elements';
import type { ReactElement } from 'react';
import { colors, font } from '../tokens';

type QuoteStripProps = {
  quote: string;
  author: string;
  role: string;
};

/** Inverse-canvas testimonial strip — deepest accent surface in the system. */
export function quoteStrip({ quote, author, role }: QuoteStripProps): ReactElement {
  return (
    <Row
      layout={ColumnLayouts.OneColumn}
      backgroundColor={colors.inverseCanvas}
      padding="36px 40px"
    >
      <Column>
        <Paragraph
          fontSize="18px"
          fontWeight={400}
          color={colors.inverseInk}
          fontFamily={font}
          lineHeight="150%"
        >
          {`“${quote}”`}
        </Paragraph>
        <Paragraph
          fontSize="13px"
          fontWeight={500}
          color={colors.inverseInk}
          fontFamily={font}
          lineHeight="140%"
          containerPadding="16px 0px 0px"
        >
          {author}
        </Paragraph>
        <Paragraph
          fontSize="12px"
          color={colors.inverseInkMuted}
          fontFamily={font}
          lineHeight="140%"
          containerPadding="2px 0px 0px"
        >
          {role}
        </Paragraph>
      </Column>
    </Row>
  );
}
