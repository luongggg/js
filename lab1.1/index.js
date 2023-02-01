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
// Giả sử chúng ta có dữ liệu lấy được từ API bao gồm những trận đấu như phía 
// dưới. Trong thử thách lần này, chúng ta sẽ làm việc với dữ liệu. Và đây là những 
// nhiệm vụ cho bạn:
// 1. Tạo ra 1 mảng cầu thủ cho mỗi đội (variables 'players1' and 'players2')
// 2. Phần tử đầu tiên trong mảng là Thủ môn, các phần tử còn lại sẽ là các cầu thủ ở
// các vị trí khác. Ví dụ, Bayern Munich (team 1) bạn sẽ tạo 1 biến ('gk') với tên của 
// thủ môn, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân
// 4. Trong trận đấu, Bayern Munich (team 1) sử dụng 3 quyền thay người. Hãy tạo 1 
// mảng mới ('players1Final') gôm các cầu thủ ban đầu của Bayern rồi thêm vào 
// 'Thiago', 'Coutinho' và 'Perisic'
// 5. Dựa vào object game.odds, tạo một biến thể hiện tỉ lệ kết quả trận đấu (gọi là 
// 'team1', 'draw' và 'team2')
// 6. Viết 1 hàm ('printGoals') nhận vào 1 số tên cầu thủ đã ghi bàn (sử dụng toán tử
// spread) và in ra console tên những cầu thủ đó cùng với số cầu thủ đã ghi bàn
// 7. Đội có tỷ lệ chấp thấp hơn sẽ dành chiến thắng . In ra đội chiến thắng đó mà 
// không sử dụng if/else hoặc toán tử 3 ngôi.
// LAB	1
// LẬP TRÌNH JAVASCRIPT NÂNG CAO TRANG 2
// Dữ liệu test: Sử dụng players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Sau 
// đó chạy hàm từ game.scored
//1.
const [play1,play2]= game.players;
console.log(play1,play2);
document.querySelector('h1').innerHTML= [play1,play2];
//2.
const [gk,...fielplay]=play1;
console.log(gk,fielplay);
// 3.
 const allplayer=[...play1,...play2];
 console.log(allplayer);
//4.
const players1Final= [...play1,'Thiago','Countinho','Periscic'];
//5
const {odd:{team1,x:dram,team2}}=game;
console.log(team1,dram,team2);
//6.
const printGoals= function(...players){
    console.log(players);
 console.log(`${players.length}goals were scored`);
}
    // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
    // printGoals('Davies', 'Muller');
    printGoals(...game.scored);
//7.
team1< team2 && console.log('team 1 is more likeky to win');
team1> team2 && console.log('team 1 is more likeky to win');