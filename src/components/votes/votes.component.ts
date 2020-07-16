import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})

export class VotesComponent implements OnInit {

  constructor(private data: DataService) { }

  votes: any[];
  posActive: number;
  negActive: number;
  newVotes: any[];

  ngOnInit(): void {
    this.votes = this.getData();
  }

  getData() {

    if(localStorage.getItem("votes")) {
      this.newVotes = JSON.parse(localStorage.getItem("votes"));
    } else {
      this.newVotes = this.data.sendData().slice();
      localStorage.setItem('votes', JSON.stringify(this.newVotes));
    }

    this.newVotes.map((e, i) => {
      this.newVotes[i].posPer = Math.round(e.positive * 100 / e.totalVotes);
      this.newVotes[i].negPer = Math.round(e.negative * 100 / e.totalVotes);
    });

    return this.newVotes;
  }

  voteClick(v: string, i: number) {
    if(v === "pos") {
      this.posActive = i;
      this.negActive = -1;
    } else if(v === "neg") {
      this.posActive = -1;
      this.negActive = i;
    }
  }

  sendVote(i: number, v: { hasVoted: boolean; }) {
    if(this.posActive !== undefined && this.posActive !== -1) {
      this.newVotes[i].positive++;
      this.newVotes[i].totalVotes++;
      v.hasVoted = true;
    } else if(this.negActive !== undefined && this.negActive !== -1) {
      this.newVotes[i].negative++;
      this.newVotes[i].totalVotes++;
      v.hasVoted = true;
    }

    localStorage.setItem("votes", JSON.stringify(this.newVotes));
  }

  voteAgain(v: { hasVoted: boolean; }) {
    v.hasVoted = false;
    this.negActive = -1;
    this.posActive = -1;
  }
}
