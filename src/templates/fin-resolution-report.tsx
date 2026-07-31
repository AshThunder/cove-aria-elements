import {
  Document,
  Row,
  Column,
  ColumnLayouts,
  Heading,
  Paragraph,
  Divider,
  Button,
} from '@unlayer/react-elements';
import { brandHeader } from '../components/BrandHeader';
import { metricPair } from '../components/MetricTile';
import { briefFooter } from '../components/BriefFooter';
import { dataTable } from '../components/DataTable';
import {
  BriefData,
  brand,
  colors,
  documentWidth,
  font,
  radii,
  sampleBrief,
} from '../tokens';

type Props = {
  data?: BriefData;
};

/**
 * Matching print/PDF report — same tokens + shared row helpers as the email.
 * Demonstrates Elements' write-once, multi-output promise (Email ↔ Document).
 */
export function FinResolutionReport({ data = sampleBrief }: Props) {
  const intentRows = data.topIntents.map((row) => [
    row.intent,
    String(row.count),
    row.delta,
    row.count > 300 ? 'Priority' : 'Monitor',
  ]);

  const summaryRows = [
    ['Workspace', data.workspaceName],
    ['Reporting period', data.weekLabel],
    ['Total conversations', data.conversations.toLocaleString()],
    [`Resolved by ${brand.agent}`, data.resolvedByAgent.toLocaleString()],
    ['Resolution rate', data.resolutionRate],
    [`CSAT after ${brand.agent}`, `${data.csat} / 5.0`],
    ['Avg. handle time', data.avgHandleSeconds],
    ['Prepared for', data.recipientName],
  ];

  return (
    <Document
      backgroundColor={colors.canvas}
      contentWidth={documentWidth}
      contentAlign="center"
      fontFamily={font}
      textColor={colors.ink}
    >
      {brandHeader({
        eyebrow: `Internal CX report · ${brand.agent} analytics`,
        title: 'Weekly resolution report',
        subtitle: `${data.workspaceName} · ${data.weekLabel}`,
      })}

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="16px 40px 8px">
        <Column>
          <Paragraph
            fontSize="14px"
            fontWeight={500}
            color={colors.ink}
            fontFamily={font}
            lineHeight="130%"
          >
            Executive summary
          </Paragraph>
        </Column>
      </Row>

      {metricPair({
        left: {
          label: `Resolved by ${brand.agent}`,
          value: data.resolvedByAgent.toLocaleString(),
          hint: `${data.resolutionRate} resolution rate`,
        },
        right: {
          label: 'Customer satisfaction',
          value: data.csat,
          hint: `${data.avgHandleSeconds} avg. handle time`,
        },
      })}

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="24px 40px 8px">
        <Column
          backgroundColor={colors.surface1}
          borderRadius={radii.xl}
          padding="28px"
        >
          <Heading
            headingType="h2"
            fontSize="20px"
            fontWeight={500}
            color={colors.ink}
            fontFamily={font}
            lineHeight="125%"
          >
            Report details
          </Heading>
          <Paragraph
            fontSize="14px"
            color={colors.inkMuted}
            fontFamily={font}
            lineHeight="150%"
            containerPadding="8px 0px 16px"
          >
            Key figures for leadership review and quarterly board packs.
          </Paragraph>
          {dataTable({
            headers: ['Field', 'Value'],
            rows: summaryRows,
            aligns: ['left', 'left'],
            widths: ['40%', '60%'],
          })}
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="16px 40px">
        <Column
          backgroundColor={colors.surface1}
          borderRadius={radii.xl}
          padding="28px"
        >
          <Heading
            headingType="h2"
            fontSize="20px"
            fontWeight={500}
            color={colors.ink}
            fontFamily={font}
            lineHeight="125%"
          >
            Intent breakdown
          </Heading>
          <Paragraph
            fontSize="14px"
            color={colors.inkMuted}
            fontFamily={font}
            lineHeight="150%"
            containerPadding="8px 0px 16px"
          >
            Volume, week-over-week change, and suggested ops focus.
          </Paragraph>
          {dataTable({
            headers: ['Intent', 'Volume', 'Δ WoW', 'Focus'],
            rows: intentRows,
            aligns: ['left', 'right', 'right', 'left'],
            widths: ['40%', '18%', '18%', '24%'],
          })}
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="8px 40px 0px">
        <Column>
          <Divider
            borderTopWidth="1px"
            borderTopStyle="solid"
            borderTopColor={colors.hairline}
            width="100%"
          />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="28px 40px 8px">
        <Column
          backgroundColor={colors.surface2}
          borderRadius={radii.lg}
          padding="28px"
        >
          <Heading
            headingType="h2"
            fontSize="22px"
            fontWeight={500}
            color={colors.ink}
            fontFamily={font}
            lineHeight="125%"
          >
            Recommended actions
          </Heading>
          <Paragraph
            fontSize="15px"
            color={colors.inkMuted}
            fontFamily={font}
            lineHeight="150%"
            containerPadding="12px 0px 0px"
            html={`1. Tune ${brand.agent} answers for <strong>Order status</strong> (+8% volume).<br/>2. Expand the refund knowledge article — second-highest intent this week.<br/>3. Share CSAT ${data.csat} with the wider product team.`}
          />
          <Button
            href={data.inboxUrl}
            backgroundColor={colors.ink}
            color={colors.onPrimary}
            fontSize="15px"
            fontFamily={font}
            fontWeight={500}
            borderRadius={radii.md}
            padding="12px 20px"
            textAlign="left"
            containerPadding="20px 0px 0px"
          >
            {`Open ${brand.agent} inbox`}
          </Button>
        </Column>
      </Row>

      {briefFooter({
        settingsUrl: data.settingsUrl,
        unsubscribeUrl: data.unsubscribeUrl,
        variant: 'document',
      })}
    </Document>
  );
}
