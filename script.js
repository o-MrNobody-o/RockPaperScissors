let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses : 0,
  ties : 0
}

updateScoreElement ()

function pickComputerMove() 
{
  const randomNumber = (Math.random());
  let computerMove = '' ;

  if ( randomNumber < 1/3 )
  {
      computerMove = 'rock';
  }
  else if ( randomNumber > 1/3 && randomNumber < 2/3 )
  {
      computerMove = 'paper';
  }
  else 
  {
      computerMove = 'scissor';
  }
  return computerMove;
}

function playGame (playerMove) 
{
  const computerMove = pickComputerMove();
  let result = '' ;
  if (playerMove === 'scissor')
  {
      if (computerMove === 'rock') 
      {
          result = 'You loose.' ;
      }
      else if (computerMove === 'paper')
      {
          result = 'You win.' ;
      }
      else if (computerMove === 'scissor')
      {
          result = 'Tie.';
      }
  }
  else if (playerMove === 'paper')
  {
      if (computerMove === 'rock') 
      {
          result = 'You win.' ;
      }
      else if (computerMove === 'paper')
      {
          result = 'Tie.' ;
      }
      else if (computerMove === 'scissor')
      {
          result = 'You loose.';
      }              
  }
  else if (playerMove === 'rock')
  {
      if (computerMove === 'rock') 
      {
          result = 'Tie.' ;
      }
      else if (computerMove === 'paper')
      {
          result = 'You loose.' ;
      }
      else if (computerMove === 'scissor')
      {
          result = 'You win.';
      }
  } 

  if (result === 'You win.')
  {
      score.wins = score.wins + 1 ;
  }
  else if (result === 'You loose.')
  {
      score.losses = score.losses + 1 ; 
  }
  else if (result === 'Tie.')
  {
      score.ties = score.ties + 1 ;
  }

  localStorage.setItem('score',JSON.stringify(score));

  updateScoreElement ()

   document.querySelector('.js-result').innerHTML = result;
   document.querySelector('.js-moves').innerHTML = `You <img class="move-icon" src="images/${playerMove}-emoji.png"> - <img class="move-icon" src="images/${computerMove}-emoji.png"> computer`;
}

function reseting ()
{
  score.wins = 0 ;
  score.losses = 0 ;
  score.ties = 0 ;
  localStorage.removeItem('score');
  updateScoreElement ()
}

function updateScoreElement ()
{
  document.querySelector('.js-score').innerHTML = `Wins : ${score.wins} , Losses : ${score.losses} , Ties : ${score.ties}`
}

