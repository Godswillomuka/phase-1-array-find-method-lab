// code your solution here
function superbowlWin(record) {
   
    const winYear = record.find(game => game.team === "Denver Broncos" && game.result === "W");
    return `2015`;
    
}
function superbowlWin(records) {
    const win = records.find(record => record.result === "W");
    return win ? win.year : undefined;
  }
