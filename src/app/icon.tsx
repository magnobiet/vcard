import { ImageResponse } from 'next/og';
import { environment } from '~/environment';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon(): ImageResponse {
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: 'black',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      {environment.APP_TITLE.charAt(0)}
    </div>,
    {
      ...size,
    },
  );
}
