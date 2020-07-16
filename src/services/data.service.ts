import { Injectable } from '@angular/core';

const voteData = [
  {
    person: "Kanye West",
    description: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
    timeAgo: "1 Month",
    categoy: "Entertainment",
    positive: 10,
    negative: 20,
    totalVotes: 30,
    photo: "kenye.jpg"
  },
  {
    person: "Mark Zuckerberg",
    description: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
    timeAgo: "1 Month",
    categoy: "Business",
    positive: 30,
    negative: 20,
    totalVotes: 50,
    photo: "mark.jpg"
  },
  {
    person: "Cristina Fernández de Kirchner",
    description: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
    timeAgo: "1 Month",
    categoy: "Politics",
    positive: 120,
    negative: 180,
    totalVotes: 300,
    photo: "kristina.jpg"
  },
  {
    person: "Malala Yousafzai",
    description: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
    timeAgo: "1 Month",
    categoy: "Entertainment",
    positive: 60,
    negative: 20,
    totalVotes: 80,
    photo: "malala.jpg"
  }
];

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() {}

  sendData() {
    return voteData;
  }
}
