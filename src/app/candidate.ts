export class Candidate {
    // Resume JSON Schema:
    // https://jsonresume.org/schema/
    constructor(
        public name: string,
        public label: string,
        public email: string,
        public phone: string,
        public website: string,
        public github: string,
        public twitter: string,
        public educationLevel: string,
        public schoolName: string
    ) {  }
}
