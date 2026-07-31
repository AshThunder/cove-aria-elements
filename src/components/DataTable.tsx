import { Html } from '@unlayer/react-elements';
import type { ReactElement } from 'react';
import { colors, font } from '../tokens';

export type CellAlign = 'left' | 'center' | 'right';

type DataTableProps = {
  headers: string[];
  rows: string[][];
  /** Per-column alignment for header + body. Default: left */
  aligns?: CellAlign[];
  /** Per-column widths, e.g. ['52%', '16%', '16%', '16%'] */
  widths?: string[];
};

/**
 * Returns an Elements <Html> table with matching header/body alignment + padding.
 * Call as {dataTable({...})} so renderToJson sees a real Html item.
 */
export function dataTable({
  headers,
  rows,
  aligns,
  widths,
}: DataTableProps): ReactElement {
  const cols = headers.length;
  const colAligns =
    aligns ?? Array.from({ length: cols }, () => 'left' as CellAlign);
  const colWidths =
    widths ?? Array.from({ length: cols }, () => `${Math.floor(100 / cols)}%`);

  const renderCell = (text: string, i: number, header: boolean) => {
    const align = colAligns[i] ?? 'left';
    const weight = header ? 600 : 400;
    const size = header ? '12px' : '14px';
    const bg = header ? '#faf8f5' : colors.surface1;
    const color = header ? colors.inkMuted : colors.ink;
    return `<td style="width:${colWidths[i]};padding:12px 14px;border:1px solid ${colors.hairline};text-align:${align};vertical-align:middle;font-family:${font.value};font-size:${size};font-weight:${weight};color:${color};background:${bg};line-height:1.45;">${text}</td>`;
  };

  const head = headers.map((h, i) => renderCell(h, i, true)).join('');
  const body = rows
    .map(
      (row) =>
        `<tr>${row.map((c, i) => renderCell(c, i, false)).join('')}</tr>`,
    )
    .join('');
  const colgroup = colWidths
    .map((w) => `<col style="width:${w};" />`)
    .join('');

  return (
    <Html
      html={`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;table-layout:fixed;width:100%;font-family:${font.value};">
      <colgroup>${colgroup}</colgroup>
      <thead><tr>${head}</tr></thead>
      <tbody>${body}</tbody>
    </table>
  `}
    />
  );
}
