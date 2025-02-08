import { toSvg, toPng } from 'html-to-image';
import { saveAs } from 'file-saver';

export const saveAsSVG = async (element: HTMLElement) => {
  try {
    const dataUrl = await toSvg(element, {
      quality: 1,
      backgroundColor: 'white',
      width: 1600,
      height: 900,
      style: {
        transform: 'scale(1)',
        borderRadius: '0',
        boxShadow: 'none',
      },
    });

    const blob = await fetch(dataUrl).then((res) => res.blob());
    saveAs(blob, 'paper.svg');
  } catch (error) {
    console.error('SVG 저장 중 오류 발생:', error);
  }
};

export const saveAsPNG = async (element: HTMLElement) => {
  try {
    const dataUrl = await toPng(element, {
      quality: 1,
      pixelRatio: window.devicePixelRatio,
      backgroundColor: 'white',
      width: 1600,
      height: 900,
      style: {
        transform: 'scale(1)',
        borderRadius: '0',
        boxShadow: 'none',
      },
    });

    const blob = await fetch(dataUrl).then((res) => res.blob());
    saveAs(blob, 'paper.png');
  } catch (error) {
    console.error('PNG 저장 중 오류 발생:', error);
  }
};
