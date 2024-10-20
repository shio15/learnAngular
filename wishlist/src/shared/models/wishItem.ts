export class WishItem {
    constructor(public wishText: string, public isComplete: boolean = false) {
        wishText = this.wishText;
        isComplete = this.isComplete;
    }
}