function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>KẾT QUẢ</h1>";
    gameOverHTML += "<h2 id='score'> Điểm Bạn là: " + quiz.score + "/20 </h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Loài vật nào sau đây có thể thở bằng mông ?", ["Kangaroo", "Rùa","Cá Mập", "Chồn Hương"], "Rùa"),
    new Question("Loài chim nào có khả năng bay ngược ?", ["Chim Én", "Chim Ruồi", "Chim Hải Âu", "Chim Gõ Kiến"], "Chim Ruồi"),
    new Question("Loài cá nước ngọt nào là động vật ăn thịt?", ["Cá Piranha", "Cá Chép","Cá Nóc", "Cá Sấu"], "Cá Piranha"),
    new Question("Bộ phận nào trên người cá voi xanh nặng xấp xỉ một con voi châu Á ?", ["Vây Cá", "Não Cá", "Lưỡi Cá", "Mắt Cá"], "Lưỡi Cá"),
    new Question("Cơ quan khứu giác của loài ong mật nằm ở đâu ?", ["Đầu", "Bụng", "Râu", "Chân"], "Chân"),
    new Question("Loài vật nào sau đây đạt được khoái cảm khi giao phối ?", ["Ong", "Ếch", "Bạch Tuộc", "Cá Heo"], "Cá Heo"),
    new Question("Con người sẽ chết nếu ăn phải gan của loài động vật nào sau đây ?", ["Chim cánh cụt", "Gấu Bắc Cực", "Rắn hổ mang", "Gấu xám"], "Gấu Bắc Cực"),
    new Question("Bạch tuộc có tất cả bao nhiêu quả tim ?", ["1", "2", "3", "4"], "3"),
    new Question("Sản phẩm nào của động vật có hạn sử dụng vĩnh viễn ?", ["Mật ong", "Vỏ ốc", "Tơ nhện", "Sữa bò"], "Mật ong"),
    new Question("Thức ăn nào sau đây không nên cho Voọc chà vá ăn?", ["Lá cây rừng", "Quả chuối chín", "Quả đắng, chát", "Cỏ rừng"], "Quả chuối chín"),
    new Question("Loài nào sau đây là loài linh trưởng trưởng thành có đôi tay dài nhất so với cơ thể", ["Loài khỉ", "Loài voọc", "Loài vượn", "Loài tinh tinh"], "Loài vượn"),
    new Question(" Đâu là loài động vật duy nhất có sừng không nằm trên đỉnh đầu ?", ["Voi", "Nai", "Tê Giác", "Bò"], "Voi"),
    new Question("Loài gấu trúc là biểu tượng của tổ chức nào ?", ["WHO", "IUCN", "WCS", "WWF"], "WWF"),
    new Question("Loài nào sau đây không phải là nhóm động vật không có móng guốc ?", ["Sao La", "Tê giác", "Nai", "Hổ"], "Hổ"),
    new Question("Loài động vật nào sau đây không có đuôi?", ["Khỉ đuôi lợn", "Vooc ngũ sắc", "Vượn đen má trắng", "Cu – li"], "Cu – li"),
    new Question("Một con gà có thể bay trong thời gian dài nhất là bao nhiêu cho đến thời điểm này ?", ["5s", "13s", "24s", "30s"], "13s"),
    new Question("Loài vật nào sau đây sẽ chết khi đổ rượu cồn lên người nó ?", ["Ong", "Châu chấu", "Rết", "Bọ cạp"], "Bò cạp"),
    new Question("Mắt lạc đà có tất cả bao nhiêu mí ?", ["2", "3", "4", "6"], "3"),
    new Question("Loài vật nào sau đây không bao giờ ngủ?", ["Ễnh ương", "Ếch cây", "Cóc", "Chim ruồi"], "Ễnh ương"),
    new Question("Một giấc ngủ của ốc sên kéo dài bao lâu ?", ["1 Ngày", "2 Tuần", "6 Tháng", "3 Năm"], "3 Năm"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





