 export interface MessageEntry {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    createdAt: Date;
    isTable?: boolean; // Optional property to indicate if the content is a table
}