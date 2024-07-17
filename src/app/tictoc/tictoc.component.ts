import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tictoc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tictoc.component.html',
  styleUrls: ['./tictoc.component.css']
})
export class TictocComponent {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  winner: string | null = null;
  draw: boolean = false;
  currentPlayer: string = 'X'; // Human player
  computerPlayer: string = 'O';

  makeMove(rowIndex: number, cellIndex: number) {
    if (this.board[rowIndex][cellIndex] === '') {
      this.board[rowIndex][cellIndex] = this.currentPlayer;
      this.checkWinner();
      this.checkDraw();
      this.computerMove();
    }
  }

  computerMove() {
    if (!this.winner &&!this.draw) {
      let availableMoves = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (this.board[i][j] === '') {
            availableMoves.push({ row: i, col: j });
          }
        }
      }
      let randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
      this.board[randomMove.row][randomMove.col] = this.computerPlayer;
      this.checkWinner();
      this.checkDraw();
    }
  }

  checkWinner() {
    for (let i = 0; i < 3; i++) {
      if (this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2] && this.board[i][0]!== '') {
        this.winner = this.board[i][0];
        return;
      }
      if (this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i] && this.board[0][i]!== '') {
        this.winner = this.board[0][i];
        return;
      }
    }
    if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2] && this.board[0][0]!== '') {
      this.winner = this.board[0][0];
      return;
    }
    if (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0] && this.board[0][2]!== '') {
      this.winner = this.board[0][2];
      return;
    }
  }

  checkDraw() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] === '') {
          return;
        }
      }
    }
    this.draw = true;
  }

  resetGame() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.winner = null;
    this.draw = false;
  }
}