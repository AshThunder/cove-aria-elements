import {
  Document,
  Row,
  Column,
  ColumnLayouts,
  Paragraph,
  Html,
} from '@unlayer/react-elements';
import { colors, documentWidth, font, radii } from '../../tokens';
import { hairlineBorder, PAY_URL } from './shared';

export function InvoiceDenseProfessional() {
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
          borderRadius={radii.lg}
          padding="0px"
          border={hairlineBorder}
        >
          <Html
            html={`
              <div style="font-family:${font.value};padding:32px;border-bottom:1px solid ${colors.hairline};">
                <table role="presentation" width="100%">
                  <tr>
                    <td style="font-size:24px;font-weight:700;color:${colors.ink};">cove</td>
                    <td align="right">
                      <div style="font-size:16px;font-weight:700;margin-bottom:8px;">INVOICE</div>
                      <div style="font-size:13px;line-height:1.7;color:${colors.inkMuted};">
                        Invoice No. <span style="color:${colors.ink};font-family:monospace;">#INV-2023-089</span><br/>
                        Issue Date <span style="color:${colors.ink};font-family:monospace;">Oct 12, 2023</span><br/>
                        Due Date <span style="color:${colors.ink};font-family:monospace;">Nov 11, 2023</span>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              <div style="font-family:${font.value};padding:28px 32px;border-bottom:1px solid ${colors.hairline};">
                <table role="presentation" width="100%">
                  <tr>
                    <td width="50%" valign="top" style="padding-right:24px;">
                      <div style="font-size:11px;font-weight:700;letter-spacing:1px;color:${colors.inkMuted};">BILLED TO</div>
                      <div style="font-size:15px;font-weight:700;margin-top:8px;">Northwind Commerce</div>
                      <div style="font-size:13px;line-height:1.55;margin-top:4px;">1890 Market Street<br/>Suite 400<br/>San Francisco, CA 94102<br/>billing@northwind.com</div>
                    </td>
                    <td width="50%" valign="top">
                      <div style="font-size:11px;font-weight:700;letter-spacing:1px;color:${colors.inkMuted};">FROM</div>
                      <div style="font-size:15px;font-weight:700;margin-top:8px;">Cove Technologies Inc.</div>
                      <div style="font-size:13px;line-height:1.55;margin-top:4px;">1200 Tech Ave<br/>Building 2<br/>Seattle, WA 98101<br/>accounts@cove.com</div>
                    </td>
                  </tr>
                </table>
              </div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-family:${font.value};font-size:13px;">
                <tr style="background:${colors.ink};color:#fff;">
                  <td style="padding:12px 32px;font-size:11px;font-weight:700;letter-spacing:0.5px;">DESCRIPTION</td>
                  <td align="right" style="padding:12px 8px;font-size:11px;font-weight:700;">QTY</td>
                  <td align="right" style="padding:12px 8px;font-size:11px;font-weight:700;">RATE</td>
                  <td align="right" style="padding:12px 32px 12px 8px;font-size:11px;font-weight:700;">AMOUNT</td>
                </tr>
                <tr style="border-bottom:1px solid ${colors.hairlineSoft};">
                  <td style="padding:16px 32px;">
                    <div style="font-weight:500;">Enterprise Workspace License</div>
                    <div style="font-size:12px;color:${colors.inkMuted};margin-top:2px;">Annual subscription (Oct 2023 - Oct 2024)</div>
                  </td>
                  <td align="right" style="padding:16px 8px;font-family:monospace;">1</td>
                  <td align="right" style="padding:16px 8px;font-family:monospace;color:${colors.inkMuted};">$4,500.00</td>
                  <td align="right" style="padding:16px 32px 16px 8px;font-family:monospace;font-weight:500;">$4,500.00</td>
                </tr>
                <tr style="background:${colors.canvas};">
                  <td style="padding:16px 32px;">
                    <div style="font-weight:500;">Aria Add-on: Custom Voice Model</div>
                    <div style="font-size:12px;color:${colors.inkMuted};margin-top:2px;">One-time setup fee</div>
                  </td>
                  <td align="right" style="padding:16px 8px;font-family:monospace;">1</td>
                  <td align="right" style="padding:16px 8px;font-family:monospace;color:${colors.inkMuted};">$1,200.00</td>
                  <td align="right" style="padding:16px 32px 16px 8px;font-family:monospace;font-weight:500;">$1,200.00</td>
                </tr>
                <tr>
                  <td style="padding:16px 32px;">
                    <div style="font-weight:500;">Additional Support Agents</div>
                    <div style="font-size:12px;color:${colors.inkMuted};margin-top:2px;">Prorated for 5 additional seats</div>
                  </td>
                  <td align="right" style="padding:16px 8px;font-family:monospace;">5</td>
                  <td align="right" style="padding:16px 8px;font-family:monospace;color:${colors.inkMuted};">$50.00</td>
                  <td align="right" style="padding:16px 32px 16px 8px;font-family:monospace;font-weight:500;">$250.00</td>
                </tr>
              </table>
              <div style="padding:24px 32px;font-family:${font.value};">
                <div style="max-width:280px;margin-left:auto;font-size:13px;">
                  <div style="display:flex;justify-content:space-between;margin-bottom:8px;"><span style="color:${colors.inkMuted};">Subtotal</span><span style="font-family:monospace;">$5,950.00</span></div>
                  <div style="display:flex;justify-content:space-between;margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid ${colors.hairline};"><span style="color:${colors.inkMuted};">Tax (8.5%)</span><span style="font-family:monospace;">$505.75</span></div>
                  <div style="background:${colors.ink};color:#fff;border-radius:12px;padding:16px;display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-weight:700;">Total Due</span>
                    <span style="font-family:monospace;font-weight:700;font-size:17px;">$6,455.75</span>
                  </div>
                </div>
              </div>
              <div style="background:${colors.canvas};padding:24px 32px;border-top:1px solid ${colors.hairline};font-family:${font.value};">
                <table role="presentation" width="100%">
                  <tr>
                    <td>
                      <div style="font-size:14px;font-weight:500;">Payment Method</div>
                      <div style="font-size:12px;color:${colors.inkMuted};font-family:monospace;margin-top:4px;">Visa ending in •••• 4242</div>
                    </td>
                    <td align="right">
                      <a href="${PAY_URL}" style="display:inline-block;background:${colors.ink};color:#fff;text-decoration:none;padding:10px 20px;border-radius:12px;font-size:14px;font-weight:500;">Pay invoice</a>
                    </td>
                  </tr>
                </table>
              </div>
            `}
          />
        </Column>
      </Row>

      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="16px 40px 40px">
        <Column>
          <Paragraph
            fontSize="12px"
            color={colors.inkSubtle}
            fontFamily={font}
            textAlign="center"
            lineHeight="160%"
            html="Cove Technologies Inc. · 1200 Tech Ave, Seattle, WA 98101<br/>If you have any questions about this invoice, please contact <a href='mailto:billing@cove.com' style='color:#7b7b78;'>billing@cove.com</a>"
          />
        </Column>
      </Row>
    </Document>
  );
}
