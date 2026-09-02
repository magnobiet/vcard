import type {
  FaviconSettings,
  MasterIcon,
} from '@realfavicongenerator/generate-favicon';
import faviconGenerator from '@realfavicongenerator/generate-favicon';
import imageAdapterNode from '@realfavicongenerator/image-adapter-node';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const {
  generateFaviconFiles,
  initFaviconIconSettings,
  IconTransformationType,
} = faviconGenerator;
const { getNodeImageAdapter, loadAndConvertToSvg } = imageAdapterNode;
const publicDirectory = new URL('../public/', import.meta.url);
const logoPath = fileURLToPath(new URL('logo.svg', import.meta.url));

const imageAdapter = await getNodeImageAdapter();

const masterIcon: MasterIcon = {
  icon: await loadAndConvertToSvg(logoPath),
};

const iconSettings = initFaviconIconSettings();

iconSettings.desktop.regularIconTransformation = {
  ...iconSettings.desktop.regularIconTransformation,
  type: IconTransformationType.Background,
  backgroundColor: '#000000',
  backgroundRadius: 0.7,
  imageScale: 0.7,
};

iconSettings.webAppManifest = {
  ...iconSettings.webAppManifest,
  backgroundColor: '#000000',
  themeColor: '#000000',
  name: 'Next.js Template',
  shortName: 'Next.js',
};

const faviconSettings: FaviconSettings = {
  icon: iconSettings,
  path: '/',
  skipMetadataInjection: false,
  version: new Date().toISOString(),
};

const files = await generateFaviconFiles(
  masterIcon,
  faviconSettings,
  imageAdapter,
);

await Promise.all(
  Object.entries(files).map(async ([fileName, content]) => {
    const fileContent =
      content instanceof Blob
        ? Buffer.from(await content.arrayBuffer())
        : content;

    await writeFile(new URL(fileName, publicDirectory), fileContent);
  }),
);

console.log('Generated files:', Object.keys(files));
