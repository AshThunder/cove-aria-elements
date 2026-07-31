import {
  Row,
  Column,
  ColumnLayouts,
  Heading,
  Paragraph,
} from '@unlayer/react-elements';
import type { ReactElement } from 'react';
import { brand, colors, font } from '../tokens';

type BrandHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone?: 'cream' | 'inverse';
};

/**
 * Returns a Row (not a custom component) so renderToJson round-trips cleanly.
 */
export function brandHeader({
  eyebrow,
  title,
  subtitle,
  tone = 'cream',
}: BrandHeaderProps): ReactElement {
  const bg = tone === 'inverse' ? colors.inverseCanvas : colors.canvas;
  const ink = tone === 'inverse' ? colors.inverseInk : colors.ink;
  const muted = tone === 'inverse' ? colors.inverseInkMuted : colors.inkMuted;

  return (
    <Row layout={ColumnLayouts.OneColumn} backgroundColor={bg} padding="32px 40px 8px 40px">
      <Column>
        <Paragraph
          fontSize="13px"
          fontWeight={500}
          color={ink}
          fontFamily={font}
          lineHeight="130%"
        >
          {brand.name}
        </Paragraph>
        <Paragraph
          fontSize="14px"
          fontWeight={500}
          color={muted}
          fontFamily={font}
          lineHeight="130%"
          containerPadding="16px 0px 0px"
        >
          {eyebrow}
        </Paragraph>
        <Heading
          headingType="h1"
          fontSize="32px"
          fontWeight={500}
          color={ink}
          fontFamily={font}
          lineHeight="115%"
          containerPadding="8px 0px 0px"
        >
          {title}
        </Heading>
        {subtitle ? (
          <Paragraph
            fontSize="16px"
            fontWeight={400}
            color={muted}
            fontFamily={font}
            lineHeight="150%"
            containerPadding="12px 0px 0px"
          >
            {subtitle}
          </Paragraph>
        ) : null}
      </Column>
    </Row>
  );
}
