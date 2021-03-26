export class Quote {
  showDescription: boolean;
  constructor(public quote: string,public author: string,public submittedBy: string,public date: Date,public upvote?: number,public downvote?: number) {
    this.showDescription=false;
  }
}
