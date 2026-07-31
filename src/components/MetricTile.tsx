import {
  Row,
  Column,
  ColumnLayouts,
  Heading,
  Paragraph,
} from '@unlayer/react-elements';
import type { ReactElement } from 'react';
import { colors, font, radii } from '../tokens';

export type Metric = {
  label: string;
  value: string;
  hint?: string;
};

type MetricPairProps = {
  left: Metric;
  right: Metric;
};

function tile(metric: Metric) {
  return (
    <Column
      backgroundColor={colors.surface1}
      borderRadius={radii.lg}
      padding="20px 16px"
      border={{
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: colors.hairline,
        borderRightWidth: '1px',
        borderRightStyle: 'solid',
        borderRightColor: colors.hairline,
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: colors.hairline,
        borderLeftWidth: '1px',
        borderLeftStyle: 'solid',
        borderLeftColor: colors.hairline,
      }}
    >
      <Paragraph
        fontSize="12px"
        fontWeight={500}
        color={colors.inkSubtle}
        fontFamily={font}
        lineHeight="140%"
      >
        {metric.label}
      </Paragraph>
      <Heading
        headingType="h2"
        fontSize="36px"
        fontWeight={500}
        color={colors.ink}
        fontFamily={font}
        lineHeight="110%"
        containerPadding="6px 0px 0px"
      >
        {metric.value}
      </Heading>
      {metric.hint ? (
        <Paragraph
          fontSize="13px"
          color={colors.inkMuted}
          fontFamily={font}
          lineHeight="140%"
          containerPadding="6px 0px 0px"
        >
          {metric.hint}
        </Paragraph>
      ) : null}
    </Column>
  );
}

/** Two white metric tiles lifted off the cream canvas. */
export function metricPair({ left, right }: MetricPairProps): ReactElement {
  return (
    <Row
      layout={ColumnLayouts.TwoEqual}
      backgroundColor={colors.canvas}
      padding="8px 32px"
    >
      {tile(left)}
      {tile(right)}
    </Row>
  );
}
