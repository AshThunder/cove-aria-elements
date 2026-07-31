import {
  Email,
  Row,
  Column,
  ColumnLayouts,
  Html,
} from '@unlayer/react-elements';
import { colors, font } from '../../tokens';
import { RSVP_URL } from './shared';

/**
 * Bold editorial Aria Preview invite — thick black frame, rotated rail,
 * verified seal, date/format + RSVP footer (matches design reference).
 */
export function InviteBoldEditorial() {
  const ink = colors.ink;
  const muted = colors.inkMuted;
  const subtle = colors.inkSubtle;
  const hairline = colors.hairline;
  const white = colors.surface1;
  const ff = font.value;

  // Outer offset mimics the hard 16px black drop shadow from the design.
  const card = `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
  <tr>
    <td style="padding:0 16px 16px 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="${ink}" style="border-collapse:collapse;background:${ink};">
        <tr>
          <td style="padding:0 16px 16px 0;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background:${white};border:14px solid ${ink};">
              <tr>
                <td width="88" valign="middle" bgcolor="${ink}" style="width:88px;background-color:${ink};padding:24px 0;text-align:center;">
                  <img src="assets/aria-preview-rail.png" width="88" alt="ARIA PREVIEW" style="display:block;margin:0 auto;width:88px;height:auto;border:0;outline:none;" />
                </td>
                <td valign="top" bgcolor="${white}" style="background-color:${white};background-image:radial-gradient(ellipse 280px 220px at 100% 0%, rgba(255,86,0,0.12), transparent 70%);padding:36px 36px 32px;font-family:${ff};">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:40px;">
                    <tr>
                      <td style="font-size:28px;font-weight:700;color:${ink};letter-spacing:-0.5px;line-height:1;">cove</td>
                      <td align="right" style="text-align:right;">
                        <img src="assets/verified-seal.png" width="30" height="30" alt="Verified" style="display:inline-block;border:0;width:30px;height:30px;" />
                      </td>
                    </tr>
                  </table>

                  <div style="font-size:13px;font-weight:500;color:${muted};letter-spacing:0.5px;text-transform:uppercase;line-height:1.3;margin:0 0 12px;">Exclusive Access</div>
                  <div style="font-size:44px;font-weight:500;color:${ink};letter-spacing:-1.4px;line-height:1.05;margin:0 0 18px;">
                    Join the<br/>Inner Circle.
                  </div>
                  <div style="font-size:17px;font-weight:400;color:${subtle};line-height:1.5;max-width:400px;margin:0;">
                    You are invited to experience the next evolution of customer intelligence. Get hands-on with Aria before the public release and shape the future of product-led growth.
                  </div>

                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:48px;border-top:1px solid ${hairline};">
                    <tr><td colspan="2" style="height:22px;font-size:0;line-height:0;">&nbsp;</td></tr>
                    <tr>
                      <td valign="bottom" style="padding-right:12px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td valign="top" style="padding-right:28px;">
                              <div style="font-size:12px;font-weight:500;color:${muted};letter-spacing:0.5px;text-transform:uppercase;margin-bottom:4px;">Date</div>
                              <div style="font-size:15px;font-weight:700;color:${ink};">October 24, 2024</div>
                            </td>
                            <td valign="top">
                              <div style="font-size:12px;font-weight:500;color:${muted};letter-spacing:0.5px;text-transform:uppercase;margin-bottom:4px;">Format</div>
                              <div style="font-size:15px;font-weight:700;color:${ink};">Virtual Briefing</div>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td valign="bottom" align="right" style="text-align:right;white-space:nowrap;">
                        <a href="${RSVP_URL}" target="_blank" style="display:inline-block;background:${ink};color:${white};font-family:${ff};font-size:15px;font-weight:500;text-decoration:none;padding:12px 26px;border-radius:9999px;line-height:1.2;">
                          RSVP Now&nbsp;→
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`;

  return (
    <Email
      backgroundColor={colors.canvas}
      contentWidth="680px"
      contentAlign="center"
      fontFamily={font}
      textColor={colors.ink}
      previewText="Join the Inner Circle — exclusive Aria Preview access."
    >
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="32px 16px">
        <Column>
          <Html html={card} />
        </Column>
      </Row>
    </Email>
  );
}
