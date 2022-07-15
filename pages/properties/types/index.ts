export interface PropertySummary {
  id: number;
  attributes: PropertyData;
}
export interface PropertyData {
  name: string;
  summary: string;
  heroImage: HeroImage;
}
export interface HeroImage {
  data?: StoredImage | null;
}
export interface StoredImage {
  id: number;
  attributes: StoredImageData;
}
export interface StoredImageData {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: string;
  updatedAt: string;
}
export interface Formats {
  large: LargeOrSmallOrMediumOrThumbnail;
  small: LargeOrSmallOrMediumOrThumbnail;
  medium: LargeOrSmallOrMediumOrThumbnail;
  thumbnail: LargeOrSmallOrMediumOrThumbnail;
}
export interface LargeOrSmallOrMediumOrThumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
}
export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}
