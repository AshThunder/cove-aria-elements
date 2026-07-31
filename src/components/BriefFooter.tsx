import {
  Row,
  Column,
  ColumnLayouts,
  Paragraph,
  Divider,
  Social,
} from '@unlayer/react-elements';
import type { ReactElement } from 'react';
import { colors, font } from '../tokens';

type BriefFooterProps = {
  settingsUrl: string;
  unsubscribeUrl: string;
  variant?: 'email' | 'document';
  /** Override default “Aria Brief” email reason line */
  emailReason?: string;
};

/** Footer rows as a flat array for Email/Document children. */
export function briefFooter({
  settingsUrl,
  unsubscribeUrl,
  variant = 'email',
  emailReason = 'You’re receiving Aria Brief because you manage AI support for your workspace.',
}: BriefFooterProps): ReactElement[] {
  return [
    <Row
      key="footer-rule"
      layout={ColumnLayouts.OneColumn}
      backgroundColor={colors.canvas}
      padding="8px 40px 0px"
    >
      <Column>
        <Divider
          borderTopWidth="1px"
          borderTopStyle="solid"
          borderTopColor={colors.hairline}
          width="100%"
        />
      </Column>
    </Row>,
    <Row
      key="footer-body"
      layout={ColumnLayouts.OneColumn}
      backgroundColor={colors.canvas}
      padding="24px 40px 40px"
    >
      <Column>
        <Paragraph
          fontSize="12px"
          color={colors.inkSubtle}
          fontFamily={font}
          lineHeight="150%"
        >
          Built with Unlayer Elements · #BuiltWithElements
        </Paragraph>
        {variant === 'email' ? (
          <Paragraph
            fontSize="12px"
            color={colors.inkSubtle}
            fontFamily={font}
            lineHeight="150%"
            containerPadding="8px 0px 0px"
            html={`${emailReason} <a href="${settingsUrl}" style="color:${colors.inkMuted};text-decoration:underline;">Notification settings</a> · <a href="${unsubscribeUrl}" style="color:${colors.inkMuted};text-decoration:underline;">Unsubscribe</a>`}
          />
        ) : (
          <Paragraph
            fontSize="12px"
            color={colors.inkSubtle}
            fontFamily={font}
            lineHeight="150%"
            containerPadding="8px 0px 0px"
          >
            Confidential — for internal CX leadership. Generated from Aria inbox analytics.
          </Paragraph>
        )}
        <Social
          align="left"
          iconType="circle"
          iconSize={28}
          spacing={8}
          icons={[
            { name: 'x', url: 'https://x.com/covehq' },
            { name: 'linkedin', url: 'https://www.linkedin.com/company/covehq' },
            { name: 'facebook', url: 'https://www.facebook.com/covehq' },
          ]}
          containerPadding="16px 0px 0px"
        />
      </Column>
    </Row>,
  ];
}
