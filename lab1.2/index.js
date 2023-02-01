const game={
    team1:'bayen Munich',
    team2:'Borrussia Dortmund',
    players:[
        [
            'cr7',
            'neuver',
            'messi',
            'davies',
            'coman',


    
    ],
    [
        'chiến lược 1',
        'chiến lược 2',

        


],
    ],
    score:'4.0',
    scored:['Lewandowski','Gnarby','Lewandowski','Munmels'],
    Date:'Now 9th,2037',
    odd:{
        team1:1.33,
        x:3.25,
        team2:6.25,
    },

};
// 1. Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi (Ví 
//     dụ: "Goal 1: Lewandowski")
// 2. Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console (Chúng ta đã 
//     học cách tính trung bình tổng ở phần trước, các bạn có thể xem lại nếu không 
//     nhớ)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//      Tỉ lệ thắng của Bayern Munich: 1.33
//      Tỉ lệ hòa of draw: 3.25
//      Tỉ lệ thắng của Borrussia Dortmund: 6.5
//     Lấy ra tên đội bóng trực tiếp từ object 'game', bạn không nên "hardcode" tỉ lệ
//     thắng của mỗi đội (ngoại trừ trường hợp 2 đội hòa nhau).
//     Chú ý: Lưu ý cách tỷ lệ cược và đối tượng trò chơi có tên thuộc tính giống nhau �
//     �
//     Thêm: Tạo ra 1 đối tướng là 'scorers', đối tượng này gồm các thuộc tính với key 
//     (tên thuộc tính) là tên cầu thủ đã ghi bàn, value (giá trị) là số bàn thắng đã ghi.
//     Ví dụ:
//      {
//     Gnarby:1,
//     Hummels:1,
//     Lewandowski: 2
//      }
//----------------------------------------------------------
//1.
for( const [i,player] of game.scored.entries())
console.log(`Goal ${ i + 1}: ${player}`);
// 2.
const odds = Object.values(game.odd);
let average=0;
for(const odd of odds) average +=odd
 average /= odds.length;
 console.log(average);

 //3.
for(const[team,odd] of Object.entries(game.odd)){
    const teamStr = team === 'x' ?'dram':`victory ${game[team]}`;
    console.log(`odd of ${teamStr}${odd}`);
 };
