import {
  Email,
  Row,
  Column,
  ColumnLayouts,
  Heading,
  Paragraph,
  Button,
  Image,
  Divider,
  Html,
} from '@unlayer/react-elements';
import { colors, font, radii } from '../../tokens';
import { ARIA_INTEGRATION_SRC, RSVP_URL } from './shared';

/** Cove invite / invoice template. */
export function InviteNarrativeLuxe() {
  return (
    <Email
      backgroundColor={colors.canvas}
      contentWidth="640px"
      contentAlign="center"
      fontFamily={font}
      textColor={colors.ink}
      previewText="A conversation with Aria — confirm your attendance."
    >
      <Row layout={ColumnLayouts.TwoEqual} backgroundColor={colors.canvas} padding="0px">
        <Column backgroundColor={colors.canvas} padding="36px 28px 36px 32px">
          <Paragraph
            fontSize="22px"
            fontWeight={700}
            color={colors.ink}
            fontFamily={font}
            lineHeight="130%"
            html={`cove <span style="color:${colors.accent}">·</span> <span style="color:${colors.inkMuted};font-size:12px;font-weight:500;letter-spacing:1px;">INVITATION</span>`}
          />
          <Heading
            headingType="h1"
            fontSize="40px"
            fontWeight={500}
            color={colors.ink}
            fontFamily={font}
            lineHeight="105%"
            containerPadding="28px 0px 0px"
          >
            A conversation
          </Heading>
          <Paragraph
            fontSize="34px"
            fontWeight={300}
            color={colors.inkMuted}
            fontFamily={font}
            lineHeight="110%"
            containerPadding="4px 0px 0px"
            html="<em>with Aria.</em>"
          />
          <Paragraph
            fontSize="16px"
            color={colors.inkMuted}
            fontFamily={font}
            lineHeight="150%"
            containerPadding="20px 0px 0px"
          >
            Join us for an exclusive, intimate exploration of the next evolution in customer
            intelligence. Discover how silent signals become profound insights.
          </Paragraph>
          <Paragraph
            fontSize="11px"
            fontWeight={500}
            color={colors.accent}
            fontFamily={font}
            lineHeight="140%"
            containerPadding="28px 0px 0px"
            html={`<span style="display:inline-block;border:1px solid rgba(255,86,0,0.35);background:${colors.surface1};border-radius:9999px;padding:6px 12px;">✦ POWERED BY ARIA</span>`}
          />
        </Column>

        <Column backgroundColor={colors.surface1} padding="0px 0px 28px">
          <Image
            src={ARIA_INTEGRATION_SRC}
            alt="AI Integration: Data Synthesis"
            textAlign="center"
          />
          <Paragraph
            fontSize="10px"
            color={colors.inkMuted}
            fontFamily={font}
            textAlign="center"
            lineHeight="140%"
            containerPadding="4px 16px 0px"
          >
            AI Integration: Data Synthesis · Narrative Lens
          </Paragraph>
          <Divider
            borderTopWidth="1px"
            borderTopStyle="solid"
            borderTopColor={colors.hairline}
            width="100%"
            containerPadding="16px 0px 0px"
          />
          <Html
            html={`
              <div style="padding:20px 24px 0;font-family:${font.value};">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="50%" valign="top" style="padding-bottom:14px;">
                      <div style="font-size:11px;color:${colors.inkMuted};letter-spacing:0.6px;">DATE</div>
                      <div style="font-size:13px;font-weight:500;color:${colors.ink};margin-top:4px;">October 24, 2024</div>
                    </td>
                    <td width="50%" valign="top" style="padding-bottom:14px;">
                      <div style="font-size:11px;color:${colors.inkMuted};letter-spacing:0.6px;">TIME</div>
                      <div style="font-size:13px;font-weight:500;color:${colors.ink};margin-top:4px;">18:00 — 21:00 PST</div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" valign="top" style="padding-bottom:18px;">
                      <div style="font-size:11px;color:${colors.inkMuted};letter-spacing:0.6px;">LOCATION</div>
                      <div style="font-size:13px;font-weight:500;color:${colors.ink};margin-top:4px;line-height:1.4;">The Archive Room,<br/>SF Museum of Modern Art</div>
                    </td>
                  </tr>
                </table>
              </div>
            `}
          />
          <Button
            href={RSVP_URL}
            backgroundColor={colors.ink}
            color={colors.onPrimary}
            fontSize="15px"
            fontFamily={font}
            fontWeight={500}
            borderRadius={radii.md}
            padding="12px 20px"
            textAlign="center"
            containerPadding="0px 24px"
            values={{ size: { autoWidth: false, width: '100%' } }}
          >
            Confirm Attendance →
          </Button>
        </Column>
      </Row>
    </Email>
  );
}
