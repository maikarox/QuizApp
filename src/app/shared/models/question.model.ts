import { Answer } from "./answer.model";

export class Question {
    constructor(
        public questionBody: String,
        public answers: Answer[],
        public published: boolean
    ){}
}