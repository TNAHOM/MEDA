export interface FormData extends TournamentType {
    TeamName?: string;
    PlayerNum?: string;
    Fname: string;
    Lname: string;
    Pnumber: number;
    tornament: string;
}

export interface TournamentType {
    id: string;
    // tournament name
    name: string;
    location: string;
    locationLink: string;
    Date: Date;
    ClosingDate: Date;
}