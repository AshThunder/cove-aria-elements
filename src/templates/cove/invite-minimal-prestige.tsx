import {
  Email,
  Row,
  Column,
  ColumnLayouts,
  Heading,
  Paragraph,
  Button,
  Html,
} from '@unlayer/react-elements';
import { colors, font, radii } from '../../tokens';
import { hairlineBorder, RSVP_URL } from './shared';

/**
 * Centered white card, orange Accept Invitation, 3-up event meta footer.
 */
export function InviteMinimalPrestige() {
  return (
    <Email
      backgroundColor={colors.canvas}
      contentWidth="560px"
      contentAlign="center"
      fontFamily={font}
      textColor={colors.ink}
      previewText="You're invited to the future of CX — Aria early-access preview."
    >
      <Row layout={ColumnLayouts.OneColumn} backgroundColor={colors.canvas} padding="32px 16px">
        <Column
          backgroundColor={colors.surface1}
          borderRadius={radii.xl}
          padding="40px 36px 0px"
          border={hairlineBorder}
        >
          <Paragraph
            fontSize="28px"
            fontWeight={700}
            color={colors.ink}
            fontFamily={font}
            textAlign="center"
            lineHeight="110%"
          >
            cove
          </Paragraph>
          <Heading
            headingType="h1"
            fontSize="36px"
            fontWeight={500}
            color={colors.ink}
            fontFamily={font}
            textAlign="center"
            lineHeight="115%"
            containerPadding="32px 0px 0px"
          >
            You&apos;re invited to the future of CX.
          </Heading>
          <Paragraph
            fontSize="17px"
            color={colors.inkMuted}
            fontFamily={font}
            textAlign="center"
            lineHeight="150%"
            containerPadding="16px 12px 0px"
          >
            Join us for an exclusive, early-access preview of Aria, our next-generation AI
            intelligence engine. Experience firsthand how autonomous agents are redefining
            customer relationships.
          </Paragraph>
          <Button
            href={RSVP_URL}
            backgroundColor={colors.accent}
            color={colors.onPrimary}
            fontSize="15px"
            fontFamily={font}
            fontWeight={500}
            borderRadius={radii.md}
            padding="12px 24px"
            textAlign="center"
            containerPadding="28px 0px 40px"
          >
            Accept Invitation
          </Button>
          <Html
            html={`
              <div style="border-top:1px solid ${colors.hairlineSoft};font-family:${font.value};">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="33%" align="center" style="padding:24px 8px;font-size:13px;color:${colors.inkMuted};border-right:1px solid ${colors.hairlineSoft};">
                      <div style="margin-bottom:6px;font-size:16px;">▢</div>
                      October 24, 2024
                    </td>
                    <td width="33%" align="center" style="padding:24px 8px;font-size:13px;color:${colors.inkMuted};border-right:1px solid ${colors.hairlineSoft};">
                      <div style="margin-bottom:6px;font-size:16px;">◷</div>
                      6:00 PM PST
                    </td>
                    <td width="33%" align="center" style="padding:24px 8px;font-size:13px;color:${colors.inkMuted};">
                      <div style="margin-bottom:6px;font-size:16px;">⌖</div>
                      The Battery, SF
                    </td>
                  </tr>
                </table>
              </div>
            `}
          />
        </Column>
      </Row>
    </Email>
  );
}
