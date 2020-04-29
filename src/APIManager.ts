import data from "./data.json";

export interface MusicJSON {
  id: string;
  lyrics: string[];
  times: number[];
}

class APIManager {

  static getAllMusic(): MusicJSON[] {
    return data.music;
  }
}

export default APIManager;
