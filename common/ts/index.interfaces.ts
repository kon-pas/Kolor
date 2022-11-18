import * as TYPES from "@types";
import * as ENUMS from "@enums";

export interface Tags {
  readonly mainColors: ENUMS.MainColors[];
  readonly misc: ENUMS.MiscTags[];
}

export interface GradientScheme {
  readonly colors: TYPES.GradientHue;
  readonly title: string;
  readonly tags?: Tags;
  readonly desc?: string;
}

export interface GradientsJSON {
  readonly [key: TYPES.GradientId]: GradientScheme;
}

export interface NavItem {
  readonly label: string;
  readonly path: string | null;
}
