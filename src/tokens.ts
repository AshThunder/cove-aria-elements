/**
 * Design tokens for fictional Cove / Aria templates.
 * Cream canvas, charcoal ink, single warm accent for Aria CTAs.
 */

export const colors = {
  ink: '#111111',
  onPrimary: '#ffffff',
  inkMuted: '#626260',
  inkSubtle: '#7b7b78',
  inkTertiary: '#9c9fa5',
  canvas: '#f5f1ec',
  surface1: '#ffffff',
  surface2: '#ebe7e1',
  inverseCanvas: '#000000',
  inverseInk: '#ffffff',
  inverseInkMuted: '#9c9fa5',
  hairline: '#d3cec6',
  hairlineSoft: '#ebe7e1',
  /** Accent reserved for Aria AI CTAs only */
  accent: '#ff5600',
} as const;

/** Hanken Grotesk from Cove Narrative System, with email-safe fallbacks */
export const font = {
  label: 'Hanken Grotesk',
  value: "'Hanken Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif",
} as const;

export const monoFont = {
  label: 'JetBrains Mono',
  value: "'JetBrains Mono', 'SF Mono', Consolas, monospace",
} as const;

export const radii = {
  md: '8px',
  lg: '12px',
  xl: '16px',
} as const;

export const contentWidth = '600px';
export const documentWidth = '720px';

export const brand = {
  name: 'cove',
  product: 'Aria Brief',
  agent: 'Aria',
} as const;

export type BriefData = {
  recipientName: string;
  workspaceName: string;
  weekLabel: string;
  resolvedByAgent: number;
  resolutionRate: string;
  csat: string;
  avgHandleSeconds: string;
  conversations: number;
  topIntents: Array<{ intent: string; count: number; delta: string }>;
  highlightQuote: string;
  quoteAuthor: string;
  quoteRole: string;
  inboxUrl: string;
  settingsUrl: string;
  unsubscribeUrl: string;
};

/** Sample data for local preview / challenge screenshots */
export const sampleBrief: BriefData = {
  recipientName: 'Maya',
  workspaceName: 'Northwind Commerce',
  weekLabel: 'Jul 21 – Jul 27, 2026',
  resolvedByAgent: 1842,
  resolutionRate: '68%',
  csat: '4.7',
  avgHandleSeconds: '42s',
  conversations: 2710,
  topIntents: [
    { intent: 'Order status', count: 612, delta: '+8%' },
    { intent: 'Refund eligibility', count: 398, delta: '+3%' },
    { intent: 'Shipping delays', count: 274, delta: '−5%' },
    { intent: 'Account access', count: 191, delta: '+12%' },
  ],
  highlightQuote:
    'Aria closed the refund loop before our agents even saw the queue — customers felt helped, not handed off.',
  quoteAuthor: 'Jordan Lee',
  quoteRole: 'Head of Support, Northwind',
  inboxUrl: 'https://app.cove.example/inbox',
  settingsUrl: 'https://app.cove.example/settings/notifications',
  unsubscribeUrl: 'https://app.cove.example/unsubscribe',
};

export type InviteData = {
  recipientName: string;
  headline: string;
  subhead: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  eventFormat: string;
  rsvpUrl: string;
  settingsUrl: string;
  unsubscribeUrl: string;
};

export const sampleInvite: InviteData = {
  recipientName: 'Maya',
  headline: 'A conversation with Aria.',
  subhead:
    'Join us for an exclusive early-access preview of Aria — Cove’s AI intelligence engine. Discover how silent signals become profound insights.',
  eventDate: 'October 24, 2026',
  eventTime: '18:00 — 21:00 PST',
  eventLocation: 'The Archive Room, SFMOMA',
  eventFormat: 'In-person briefing',
  rsvpUrl: 'https://app.cove.example/rsvp/aria-preview',
  settingsUrl: 'https://app.cove.example/settings/notifications',
  unsubscribeUrl: 'https://app.cove.example/unsubscribe',
};

export type InvoiceLine = {
  description: string;
  qty: string;
  rate: string;
  amount: string;
};

export type InvoiceData = {
  invoiceNumber: string;
  issued: string;
  due: string;
  status: string;
  billToName: string;
  billToContact: string;
  billToEmail: string;
  billToAddress: string[];
  fromName: string;
  fromAddress: string[];
  fromEmail: string;
  lines: InvoiceLine[];
  totalDue: string;
  payUrl: string;
};

export const sampleInvoice: InvoiceData = {
  invoiceNumber: 'INV-2026-0142',
  issued: 'Jul 31, 2026',
  due: 'Aug 14, 2026',
  status: 'Due',
  billToName: 'Northwind Commerce',
  billToContact: 'Maya Chen',
  billToEmail: 'billing@northwind.example',
  billToAddress: ['1402 Trade Way, Suite 400', 'San Francisco, CA 94107'],
  fromName: 'Cove, Inc.',
  fromAddress: ['88 Market St', 'San Francisco, CA 94107'],
  fromEmail: 'finance@cove.example',
  lines: [
    {
      description: 'Aria resolutions',
      qty: '1,842',
      rate: '$0.20',
      amount: '$368.40',
    },
    {
      description: 'Aria seats (Enterprise)',
      qty: '12',
      rate: '$85.00',
      amount: '$1,020.00',
    },
    {
      description: 'Knowledge sync add-on',
      qty: '1',
      rate: '$31.60',
      amount: '$31.60',
    },
  ],
  totalDue: '$1,420.00',
  payUrl: 'https://app.cove.example/billing/invoices/INV-2026-0142',
};
