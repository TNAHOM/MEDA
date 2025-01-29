export interface FormData extends TournamentType {
  TeamName: string;
  PlayerNum: string;
  Fname: string;
  Lname: string;
  Pnumber: number;
  tornament: string;
}

export interface TournamentType {
  id: string
  // tournament name
  name: string;
  location: string;
  locationLink: string;
  Date: Date;
  ClosingDate: Date;
}

export interface FilterType {
    name?: { mode: "insensitive" } | string;
    phoneNumber?: number;
    tournamentId: string;
    AND?: { name?: string; phoneNumber?: number }[];
}