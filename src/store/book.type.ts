export type TBookItem={
    PRICE:number,
    COUNT:number,
    AMOUNT:number
};

export type TPairBook={
    asks:TBookItem[],
    bids:TBookItem[]
}

export type TBook = {
    [key: string]: TPairBook
}

export type TBookData={
    pair:string,
    chanelId:number,
    tips:TBookItem[]
}
