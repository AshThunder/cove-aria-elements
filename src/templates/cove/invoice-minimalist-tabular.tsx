import {
  Document,
  Row,
  Column,
  ColumnLayouts,
  Heading,
  Paragraph,
  Button,
  Divider,
  Html,
} from '@unlayer/react-elements';
import { dataTable } from '../../components/DataTable';
import { colors, documentWidth, font, radii } from '../../tokens';
import { hairlineBorder, PAY_URL } from './shared';

export function InvoiceMinimalistTabular() {
  return (
    <Document
      backgroundColor={colors.canvas}
      contentWidth={documentWidth}
      contentAlign="center"
      fontFamily={font}
      textColor={colors.ink}
    >
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={colors.canvas} padding="40px 40px 8px">
        <Column>
          <Paragraph fontSize="12px" color={colors.inkMuted} fontFamily={font}>
            INVOICE
          </Paragraph>
          <Heading
            headingType="h1"
            fontSize="40px"
            fontWeight={700}
            color={colors.ink}
            fontFamily={font}
            lineHeight="100%"
            containerPadding="4px 0px 0px"
          >
            cove
          </Heading>
        </Column>
        <Column>
          <Html
            html={`
              <div style="text-align:right;font-family:${font.value};">
                <div style="margin-bottom:6px;">
                  <span style="font-family:monospace;font-size:13px;font-weight:500;">INV-2026-0142</span>
                  <span style="display:inline-block;margin-left:8px;border:1px solid ${colors.ink};border-radius:9999px;padding:2px 10px;font-size:11px;letter-spacing:0.5px;">DUE</span>
                </div>
                <div style="font-size:13px;color:${colors.inkMuted};line-height:1.6;">Issued Jul 31, 2026<br/>Due Aug 14, 2026</div>
              </div>
            `}
          />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={colors.canvas} padding="28px 32px 8px">
        <Column
          backgroundColor={colors.surface1}
          borderRadius={radii.lg}
          padding="20px"
          border={hairlineBorder}
        >
          <Paragraph fontSize="12px" color={colors.inkMuted} fontFamily={font}>
            BILL TO
          </Paragraph>
          <Paragraph fontSize="15px" fontWeight={500} color={colors.ink} fontFamily={font} containerPadding="8px 0px 0px">
            Northwind Commerce
          </Paragraph>
          <Paragraph fontSize="14px" color={colors.inkMuted} fontFamily={font} lineHeight="150%" containerPadding="4px 0px 0px" html="Maya Chen<br/>billing@northwind.example" />
        </Column>
        <Column
          backgroundColor={colors.surface1}
          borderRadius={radii.lg}
          padding="20px"
          border={hairlineBorder}
        >
          <Paragraph fontSize="12px" color={colors.inkMuted} fontFamily={font}>
            FROM
          </Paragraph>
          <Paragraph fontSize="15px" fontWeight={500} color={colors.ink} fontFamily={font} containerPadding="8px 0px 0px">
            Cove, Inc.
          </Paragraph>
          <Paragraph fontSize="14px" color={colors.inkMuted} fontFamily={font} lineHeight="150%" containerPadding="4px 0px 0px" html="88 Market St<br/>San Francisco<br/>support@cove.example" />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="20px 40px 8px">
        <Column
          backgroundColor={colors.surface1}
          borderRadius={radii.lg}
          padding="20px"
          border={hairlineBorder}
        >
          {dataTable({
            headers: ['Description', 'Qty', 'Rate', 'Amount'],
            rows: [
              ['Aria resolutions', '1,842', '$0.50', '$921.00'],
              ['Aria seats', '12', '$29.00', '$348.00'],
              ['Knowledge sync&nbsp;add-on', '1', '$151.00', '$151.00'],
            ],
            aligns: ['left', 'right', 'right', 'right'],
            widths: ['46%', '14%', '20%', '20%'],
          })}
          <Paragraph fontSize="15px" color={colors.inkMuted} fontFamily={font} textAlign="right" containerPadding="20px 0px 0px">
            Total Due
          </Paragraph>
          <Heading headingType="h2" fontSize="28px" fontWeight={500} color={colors.ink} fontFamily={font} textAlign="right" containerPadding="4px 0px 0px">
            $1,420.00
          </Heading>
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="16px 40px 8px">
        <Column backgroundColor={colors.surface2} borderRadius={radii.lg} padding="20px 24px">
          <Paragraph fontSize="15px" fontWeight={500} color={colors.ink} fontFamily={font}>
            Pay by ACH or card
          </Paragraph>
          <Button
            href={PAY_URL}
            backgroundColor={colors.ink}
            color={colors.onPrimary}
            fontSize="15px"
            fontFamily={font}
            fontWeight={500}
            borderRadius={radii.md}
            padding="12px 20px"
            textAlign="left"
            containerPadding="12px 0px 0px"
          >
            Pay invoice
          </Button>
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="16px 40px 0px">
        <Column>
          <Divider borderTopWidth="1px" borderTopStyle="solid" borderTopColor={colors.hairline} width="100%" />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.ThreeEqual} backgroundColor={colors.canvas} padding="16px 40px 40px">
        <Column>
          <Paragraph fontSize="12px" color={colors.inkMuted} fontFamily={font}>
            Questions? billing@cove.example
          </Paragraph>
        </Column>
        <Column>
          <Paragraph fontSize="12px" color={colors.inkMuted} fontFamily={font} textAlign="center">
            Confidential
          </Paragraph>
        </Column>
        <Column>
          <Paragraph fontSize="12px" color={colors.inkMuted} fontFamily={font} textAlign="right">
            #BuiltWithElements
          </Paragraph>
        </Column>
      </Row>
    </Document>
  );
}
