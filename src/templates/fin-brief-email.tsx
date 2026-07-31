import {
  Email,
  Row,
  Column,
  ColumnLayouts,
  Heading,
  Paragraph,
  Button,
  Divider,
} from '@unlayer/react-elements';
import { brandHeader } from '../components/BrandHeader';
import { metricPair } from '../components/MetricTile';
import { quoteStrip } from '../components/QuoteStrip';
import { briefFooter } from '../components/BriefFooter';
import { dataTable } from '../components/DataTable';
import {
  BriefData,
  brand,
  colors,
  contentWidth,
  font,
  radii,
  sampleBrief,
} from '../tokens';

type Props = {
  data?: BriefData;
};

/**
 * Aria Brief — weekly AI support digest email for fictional CX product Cove.
 * Cream canvas, charcoal type, accent orange only on the Aria CTA.
 */
export function FinBriefEmail({ data = sampleBrief }: Props) {
  const intentRows = data.topIntents.map((row) => [
    row.intent,
    String(row.count),
    row.delta,
  ]);

  return (
    <Email
      backgroundColor={colors.canvas}
      contentWidth={contentWidth}
      contentAlign="center"
      fontFamily={font}
      textColor={colors.ink}
      previewText={`${brand.agent} resolved ${data.resolvedByAgent.toLocaleString()} conversations for ${data.workspaceName} this week.`}
      linkStyle={{
        body: true,
        linkColor: colors.inkMuted,
        linkHoverColor: colors.ink,
        linkUnderline: true,
        linkHoverUnderline: true,
      }}
    >
      {brandHeader({
        eyebrow: `${brand.product} · ${data.weekLabel}`,
        title: `Good morning, ${data.recipientName}.`,
        subtitle: `${data.workspaceName} — here’s how ${brand.agent} handled support this week, without the spreadsheet archaeology.`,
      })}

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="24px 40px 8px">
        <Column>
          <Paragraph
            fontSize="14px"
            fontWeight={500}
            color={colors.ink}
            fontFamily={font}
            lineHeight="130%"
          >
            This week at a glance
          </Paragraph>
        </Column>
      </Row>

      {metricPair({
        left: {
          label: `Resolved by ${brand.agent}`,
          value: data.resolvedByAgent.toLocaleString(),
          hint: `${data.conversations.toLocaleString()} total conversations`,
        },
        right: {
          label: 'Resolution rate',
          value: data.resolutionRate,
          hint: 'Fully closed without a handoff',
        },
      })}

      {metricPair({
        left: {
          label: `CSAT after ${brand.agent}`,
          value: data.csat,
          hint: 'Out of 5.0',
        },
        right: {
          label: 'Avg. handle time',
          value: data.avgHandleSeconds,
          hint: 'Time to first resolution',
        },
      })}

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="28px 40px 8px">
        <Column
          backgroundColor={colors.surface1}
          borderRadius={radii.xl}
          padding="24px"
        >
          <Heading
            headingType="h2"
            fontSize="20px"
            fontWeight={500}
            color={colors.ink}
            fontFamily={font}
            lineHeight="125%"
          >
            {`Top intents ${brand.agent} handled`}
          </Heading>
          <Paragraph
            fontSize="14px"
            color={colors.inkMuted}
            fontFamily={font}
            lineHeight="150%"
            containerPadding="8px 0px 16px"
          >
            Where customers needed help — and how volume moved week over week.
          </Paragraph>
          {dataTable({
            headers: ['Intent', 'Volume', 'Δ WoW'],
            rows: intentRows,
            aligns: ['left', 'right', 'right'],
            widths: ['50%', '25%', '25%'],
          })}
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="20px 40px">
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopStyle="solid"
            borderTopColor={colors.hairlineSoft}
            width="100%"
          />
        </Column>
      </Row>

      {quoteStrip({
        quote: data.highlightQuote,
        author: data.quoteAuthor,
        role: data.quoteRole,
      })}

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="36px 40px 8px">
        <Column
          backgroundColor={colors.surface1}
          borderRadius={radii.lg}
          padding="32px 28px"
        >
          <Heading
            headingType="h2"
            fontSize="24px"
            fontWeight={500}
            color={colors.ink}
            fontFamily={font}
            lineHeight="120%"
          >
            Dig into the inbox
          </Heading>
          <Paragraph
            fontSize="15px"
            color={colors.inkMuted}
            fontFamily={font}
            lineHeight="150%"
            containerPadding="10px 0px 20px"
          >
            {`Review escalations, tune ${brand.agent}’s answers, and share this brief with your team.`}
          </Paragraph>
          <Button
            href={data.inboxUrl}
            backgroundColor={colors.accent}
            color={colors.onPrimary}
            fontSize="15px"
            fontFamily={font}
            fontWeight={500}
            borderRadius={radii.md}
            padding="12px 20px"
            textAlign="left"
          >
            {`Open ${brand.agent} inbox`}
          </Button>
          <Paragraph
            fontSize="13px"
            color={colors.inkSubtle}
            fontFamily={font}
            lineHeight="150%"
            containerPadding="14px 0px 0px"
            html={`Prefer the printable pack? Export the weekly resolution report from the same Elements tree.`}
          />
        </Column>
      </Row>

      {briefFooter({
        settingsUrl: data.settingsUrl,
        unsubscribeUrl: data.unsubscribeUrl,
        variant: 'email',
      })}
    </Email>
  );
}
