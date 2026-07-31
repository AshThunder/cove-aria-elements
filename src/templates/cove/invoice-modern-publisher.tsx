import {
  Document,
  Row,
  Column,
  ColumnLayouts,
  Paragraph,
  Button,
  Html,
} from '@unlayer/react-elements';
import { dataTable } from '../../components/DataTable';
import { colors, documentWidth, font, radii } from '../../tokens';
import { hairlineBorder, PAY_URL } from './shared';

export function InvoiceModernPublisher() {
  return (
    <Document
      backgroundColor={colors.canvas}
      contentWidth={documentWidth}
      contentAlign="center"
      fontFamily={font}
      textColor={colors.ink}
    >
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="32px 32px 8px">
        <Column
          backgroundColor={colors.surface1}
          borderRadius={radii.xl}
          padding="0px"
          border={hairlineBorder}
        >
          <Html
            html={`
              <div style="font-family:${font.value};padding:36px 36px 0;">
                <table role="presentation" width="100%">
                  <tr>
                    <td valign="top">
                      <div style="font-size:48px;font-weight:500;letter-spacing:-1.5px;line-height:1;">cove</div>
                      <div style="font-size:12px;color:${colors.inkMuted};letter-spacing:1px;margin-top:16px;">INVOICE NO. 2049</div>
                      <div style="font-size:40px;font-weight:500;letter-spacing:-0.8px;margin-top:8px;">May 2024</div>
                    </td>
                    <td valign="top" align="right">
                      <div style="font-size:12px;color:${colors.inkMuted};letter-spacing:1px;font-family:monospace;">DUE DATE</div>
                      <div style="font-size:18px;font-weight:500;margin-top:6px;">June 15, 2024</div>
                    </td>
                  </tr>
                </table>
              </div>
              <div style="margin:24px 36px;border-top:1px solid ${colors.hairline};border-bottom:1px solid ${colors.hairline};font-family:${font.value};">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="50%" valign="top" style="padding:28px 24px 28px 0;border-right:1px solid ${colors.hairline};">
                      <div style="font-size:12px;color:${colors.inkMuted};letter-spacing:1px;font-family:monospace;">BILLED TO</div>
                      <div style="font-size:20px;font-weight:500;margin-top:10px;">Northwind Commerce</div>
                      <div style="font-size:14px;color:${colors.inkMuted};margin-top:6px;line-height:1.5;">123 Market St. Suite 400<br/>San Francisco, CA 94105</div>
                    </td>
                    <td width="50%" valign="top" style="padding:28px 0 28px 24px;">
                      <div style="font-size:12px;color:${colors.inkMuted};letter-spacing:1px;font-family:monospace;">WORKSPACE ID</div>
                      <div style="font-size:14px;font-family:monospace;margin-top:10px;">wrk_9824n8cnq9</div>
                      <div style="font-size:14px;color:${colors.inkMuted};margin-top:6px;">Enterprise Plan</div>
                    </td>
                  </tr>
                </table>
              </div>
            `}
          />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="0px 32px 0px">
        <Column
          backgroundColor={colors.surface1}
          padding="8px 36px 28px"
          border={{
            borderTopWidth: '0px',
            borderTopStyle: 'solid',
            borderTopColor: colors.hairline,
            borderRightWidth: '1px',
            borderRightStyle: 'solid',
            borderRightColor: colors.hairline,
            borderBottomWidth: '0px',
            borderBottomStyle: 'solid',
            borderBottomColor: colors.hairline,
            borderLeftWidth: '1px',
            borderLeftStyle: 'solid',
            borderLeftColor: colors.hairline,
          }}
        >
          {dataTable({
            headers: ['Description', 'Qty', 'Unit Price', 'Amount'],
            rows: [
              ['Platform License&nbsp;(Enterprise)', '1', '$999.00', '$999.00'],
              ['Additional AI Agents', '3', '$49.00', '$147.00'],
              ['Premium Support SLA', '1', '$274.00', '$274.00'],
            ],
            aligns: ['left', 'right', 'right', 'right'],
            widths: ['46%', '12%', '21%', '21%'],
          })}
          <Html
            html={`
              <div style="font-family:${font.value};margin-top:24px;max-width:300px;margin-left:auto;">
                <div style="display:flex;justify-content:space-between;font-size:13px;font-family:monospace;margin-bottom:8px;">
                  <span style="color:${colors.inkMuted};letter-spacing:0.5px;">SUBTOTAL</span><span>$1,420.00</span>
                </div>
                <div style="display:flex;justify-content:space-between;font-size:13px;font-family:monospace;margin-bottom:12px;">
                  <span style="color:${colors.inkMuted};letter-spacing:0.5px;">TAX (0%)</span><span>$0.00</span>
                </div>
                <div style="display:flex;justify-content:space-between;align-items:baseline;border-top:1px solid ${colors.hairline};padding-top:12px;">
                  <span style="font-size:12px;color:${colors.inkMuted};letter-spacing:0.5px;font-family:monospace;font-weight:700;">TOTAL DUE</span>
                  <span style="font-size:32px;font-weight:500;letter-spacing:-0.5px;">$1,420.00</span>
                </div>
              </div>
            `}
          />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="0px 32px 40px">
        <Column
          backgroundColor={colors.surface2}
          borderRadius={`0px 0px ${radii.xl} ${radii.xl}`}
          padding="28px 36px"
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
          <Paragraph fontSize="15px" color={colors.inkMuted} fontFamily={font}>
            Please remit payment by June 15, 2024.
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
            containerPadding="14px 0px 0px"
          >
            Pay Invoice Securely
          </Button>
        </Column>
      </Row>
    </Document>
  );
}
