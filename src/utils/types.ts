type bandResponse = {
  id: number;
  name: string;
  formation_date: Date;
  location: string;
  last_name_change_date: Date;
};

type trackResponse = {
  id: number;
  name: string;
  duration: Date;
  isExplicit: boolean;
  hasSingle: boolean;
};

type artworkResponse = {
  id: number;
  url: string;
  width?: number;
  height?: number;
};

type personResponse = {
  id: number;
  name: string;
  nickname: string;
  birth_date: Date;
  passing_date: Date;
  birth_location: string;
  avatar: URL;
};

type responseConfig = {
  name?: string;
  release_date?: Date;
  duration?: Date;
  type?:
    | "full-length"
    | "ep"
    | "split"
    | "single"
    | "demo"
    | "live"
    | "compilation"
    | "collaboration";
  format?: "digital" | "cd" | "dvd" | "vinyl" | "cassette";
  isConceptual?: boolean;
  bands?: bandResponse[];
  tracks?: trackResponse[];
  producers?: personResponse[];
  artworks?: artworkResponse[];
  themes?: string[];
};

type albumResponse = {
  id: number;
  name: string;
  release_date?: Date;
  duration?: Date;
  type?:
    | "full-length"
    | "ep"
    | "split"
    | "single"
    | "demo"
    | "live"
    | "compilation"
    | "collaboration";
  format?: "digital" | "cd" | "dvd" | "vinyl" | "cassette";
  isConceptual?: boolean;
  bands?: bandResponse[] | [];
  tracks?: trackResponse[] | [];
  producers?: personResponse[] | [];
  artworks?: artworkResponse[] | [];
  themes?: string[] | [];
};
