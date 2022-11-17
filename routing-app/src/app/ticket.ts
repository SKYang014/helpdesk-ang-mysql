export interface Ticket {
    id: number;
    title: string;
    description: string;
    submittedBy: string;
    bookmarked: boolean;
    resolved: boolean;
    resolvedInfo: string;
    resolvedBy: string;
}
