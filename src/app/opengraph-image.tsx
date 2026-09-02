import { ImageResponse } from 'next/og';
import { environment } from '~/environment';

export const alt = environment.APP_TITLE;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image(): ImageResponse {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {environment.APP_TITLE}
    </div>,
    {
      ...size,
    },
  );
}
