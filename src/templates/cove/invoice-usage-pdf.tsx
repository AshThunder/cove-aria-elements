import {
  Document,
  Row,
  Column,
  ColumnLayouts,
  Heading,
  Paragraph,
  Divider,
  Html,
} from '@unlayer/react-elements';
import { dataTable } from '../../components/DataTable';
import { colors, documentWidth, font, radii } from '../../tokens';
import { hairlineBorder, PAY_URL } from './shared';

export function InvoiceUsagePdf() {
  return (
    <Document
      backgroundColor={colors.canvas}
      contentWidth={documentWidth}
      contentAlign="center"
      fontFamily={font}
      textColor={colors.ink}
    >
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={colors.canvas} padding="36px 40px 8px">
        <Column>
          <Paragraph fontSize="12px" color={colors.inkMuted} fontFamily={font} lineHeight="140%">
            INVOICE
          </Paragraph>
          <Heading
            headingType="h1"
            fontSize="28px"
            fontWeight={700}
            color={colors.ink}
            fontFamily={font}
            lineHeight="110%"
            containerPadding="4px 0px 0px"
          >
            cove
          </Heading>
        </Column>
        <Column>
          <Html
            html={`
              <div style="text-align:right;font-family:${font.value};">
                <span style="display:inline-block;border:1px solid ${colors.ink};border-radius:9999px;padding:4px 12px;font-size:13px;margin-bottom:12px;">Due</span>
                <div style="font-size:13px;line-height:1.7;">
                  <span style="color:${colors.inkMuted};">Invoice number</span>
                  <span style="float:right;font-family:monospace;">INV-2026-0142</span><br/>
                  <span style="color:${colors.inkMuted};">Issued</span>
                  <span style="float:right;">Jul 31, 2026</span><br/>
                  <span style="color:${colors.inkMuted};">Due</span>
                  <span style="float:right;font-weight:700;">Aug 14, 2026</span>
                </div>
              </div>
            `}
          />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={colors.canvas} padding="28px 32px 8px">
        <Column
          backgroundColor={colors.surface1}
          borderRadius={radii.xl}
          padding="20px"
          border={hairlineBorder}
        >
          <Paragraph fontSize="12px" color={colors.inkMuted} fontFamily={font}>
            BILL TO
          </Paragraph>
          <Paragraph
            fontSize="15px"
            fontWeight={700}
            color={colors.ink}
            fontFamily={font}
            containerPadding="8px 0px 0px"
          >
            Northwind Commerce
          </Paragraph>
          <Paragraph
            fontSize="14px"
            color={colors.ink}
            fontFamily={font}
            lineHeight="150%"
            containerPadding="4px 0px 0px"
            html="1402 Trade Way, Suite 400<br/>San Francisco, CA 94107<br/><span style='color:#626260'>billing@northwind.com</span>"
          />
        </Column>
        <Column
          backgroundColor={colors.surface1}
          borderRadius={radii.xl}
          padding="20px"
          border={hairlineBorder}
        >
          <Paragraph fontSize="12px" color={colors.inkMuted} fontFamily={font}>
            FROM
          </Paragraph>
          <Paragraph
            fontSize="15px"
            fontWeight={700}
            color={colors.ink}
            fontFamily={font}
            containerPadding="8px 0px 0px"
          >
            Cove, Inc.
          </Paragraph>
          <Paragraph
            fontSize="14px"
            color={colors.ink}
            fontFamily={font}
            lineHeight="150%"
            containerPadding="4px 0px 0px"
            html="88 Colin P Kelly Jr St<br/>San Francisco, CA 94107<br/><span style='color:#626260'>finance@cove.com</span>"
          />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="20px 40px 8px">
        <Column
          backgroundColor={colors.surface1}
          borderRadius={radii.xl}
          padding="20px"
          border={hairlineBorder}
        >
          {dataTable({
            headers: ['Description', 'Qty', 'Rate', 'Amount'],
            rows: [
              ['Aria resolutions', '1,842', '$0.20', '$368.40'],
              ['Aria seats&nbsp;(Enterprise)', '12', '$85.00', '$1,020.00'],
              ['Knowledge sync&nbsp;add-on', '1', '$31.60', '$31.60'],
            ],
            aligns: ['left', 'right', 'right', 'right'],
            widths: ['46%', '14%', '20%', '20%'],
          })}
          <Paragraph
            fontSize="14px"
            color={colors.inkMuted}
            fontFamily={font}
            textAlign="right"
            containerPadding="20px 0px 0px"
          >
            Total Due
          </Paragraph>
          <Heading
            headingType="h2"
            fontSize="24px"
            fontWeight={700}
            color={colors.ink}
            fontFamily={font}
            textAlign="right"
            containerPadding="4px 0px 0px"
          >
            $1,420.00
          </Heading>
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="16px 40px 8px">
        <Column backgroundColor={colors.surface2} borderRadius={radii.xl} padding="20px 24px">
          <Html
            html={`
              <table role="presentation" width="100%" style="font-family:${font.value};">
                <tr>
                  <td style="font-size:14px;color:${colors.ink};">Pay by ACH or credit card to settle this invoice.</td>
                  <td align="right">
                    <a href="${PAY_URL}" style="display:inline-block;background:${colors.ink};color:#fff;text-decoration:none;padding:10px 18px;border-radius:8px;font-size:15px;font-weight:500;">Pay invoice</a>
                  </td>
                </tr>
              </table>
            `}
          />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="16px 40px 0px">
        <Column>
          <Divider borderTopWidth="1px" borderTopStyle="solid" borderTopColor={colors.hairline} width="100%" />
        </Column>
      </Row>
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={colors.canvas} padding="16px 40px 40px">
        <Column>
          <Paragraph
            fontSize="12px"
            color={colors.inkMuted}
            fontFamily={font}
            html={`Questions? Contact <a href="mailto:finance@cove.com" style="color:${colors.inkMuted};">finance@cove.com</a>`}
          />
        </Column>
        <Column>
          <Paragraph fontSize="11px" color={colors.inkMuted} fontFamily={font} textAlign="right">
            CONFIDENTIAL
          </Paragraph>
        </Column>
      </Row>
    </Document>
  );
}
