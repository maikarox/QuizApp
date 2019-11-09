import { Answer } from "./answer.model";

export class Question {
    constructor(
        public _id: String,
        public questionBody: String,
        public answers: Answer[],
        public published: boolean
    ){}
}