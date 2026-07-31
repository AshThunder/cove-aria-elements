import { colors } from '../../tokens';

export const hairlineBorder = {
  borderTopWidth: '1px' as const,
  borderTopStyle: 'solid' as const,
  borderTopColor: colors.hairline,
  borderRightWidth: '1px' as const,
  borderRightStyle: 'solid' as const,
  borderRightColor: colors.hairline,
  borderBottomWidth: '1px' as const,
  borderBottomStyle: 'solid' as const,
  borderBottomColor: colors.hairline,
  borderLeftWidth: '1px' as const,
  borderLeftStyle: 'solid' as const,
  borderLeftColor: colors.hairline,
};

/** Hero illustration path (copied to output/assets on build). */
export const ARIA_INTEGRATION_SRC = 'assets/aria-integration.png';

export const RSVP_URL = 'https://app.cove.example/rsvp/aria-preview';
export const PAY_URL = 'https://app.cove.example/billing/pay';
