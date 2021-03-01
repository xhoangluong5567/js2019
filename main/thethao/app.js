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
    var gameOverHTML = "<h1 style = 'font-family: Arial, Helvetica, sans-serif' >Kết Quả!</h1>";
    gameOverHTML += "<h2 id='score' style = 'font-family: Arial, Helvetica, sans-seriff'> Điểm Bạn Là: " + quiz.score + "/20 câu" + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("HLV Van Gaal sinh năm bao nhiêu?", ["1950", "1951","1952", "1953"], "1951"),
    new Question("Quốc gia nào sở hữu nhiều Quả bóng Vàng nhất trong lịch sử?", ["Bồ Đào Nha", "Pháp", "Brazil", "Argentina"], "Brazil"),
    new Question("Những trận bóng đá được phép thay thế tối đa ___ cầu thủ", ["3", "4","5", "2"], "3"),
    new Question("Trong trận bóng đá quốc tế do FIFA tổ chức, thời gian nghỉ giữa 2 hiệp chính là bao nhiêu phút?", ["20 phút.", "25 phút.", "15 phút.", "10 phút."], "15 phút."),
    new Question("Cầu thủ đứng ở vị trí việt vị sẽ bị phạt nếu nhận bóng trực tiếp từ:", ["Quả phát bóng.", "Quả ném biên", "Quả phạt góc.", "Từ cầu thủ cùng đội"], "Từ cầu thủ cùng đội"),
    new Question("Cầu thủ có biệt hiệu 'chiếc chân trái ma thuật' bạn có biết cầu thủ này là ai?", ["Rivaldo", "Romário", "Zinédine Zidane", "Thierry Henry"], "Rivaldo"),
    new Question("Bóng bàn - nguồn gốc của môn thể thao này từ nước nào?", ["Pháp", "Trung Quốc", "Anh", "Mỹ"], "Anh"),
    new Question("Tour de France - giải đua xe đạp nổi tiếng nhất thế giới. Bạn cho biết giải này có từ khi nào?", ["1890", "1903", "1918", "1927"], "1903"),
    new Question("Sea Games đầu tiên được tổ chức vào năm nào?", ["1955", "1959", "1963", "1969"], "1959"),
    new Question("Loại cờ hiệu nào trong F1 báo hiệu xe bị loại khỏi cuộc đua?", ["Cờ trắng", "Cờ đỏ", "Cờ đen", "Cờ vàng"], "Cờ đen"),
    new Question("Bạn cho biết Thẻ vàng, thẻ đỏ được sử dụng lần đầu tiên tại World Cup vào năm nào?", ["1930", "1950", "1970", "1982"], "1970"),
    new Question("Môn thể thao nào được coi là môn thể thao vua?", ["Môn Điền kinh", "Môn Bóng chuyền", "Môn Bóng đá", "Môn Bơi lội"], "Môn Bóng đá"),
    new Question("Bàn Cờ vua có bao nhiêu quân cờ ?", ["28 quân", "30 quân", "32 quân", "34 quân"], "32 quân"),
    new Question("Seagam lần thứ 26 năm 2011 được tổ chức ở đâu?", ["Việt Nam", "Thái Lan", "Indonisia", "Lào"], "Indonisia"),
    new Question("Mỗi đội Bóng chuyền thi đấu trên sân có bao nhiêu cầu thủ?", ["4", "5", "6", "7"], "6"),
    new Question("Một trận bóng đá có bao nhiêu hiệp chính?", ["1", "2", "3", "4"], "2"),
    new Question("Môn thể thao nào được coi là môn thể thao Nữ hoàng?", ["Bơi lội", "Cờ vua", "Võ thuật", "Điền kinh"], "Điền kinh"),
    new Question("Môn thể thao nào vận động viên không được đi giày để thi đấu?", ["Bóng đá", "Vật", "Bóng chuyền", "Cầu lông"], "Vật"),
    new Question("World Cup 2014 được tổ chức tại quốc gia nào?", ["Hà Lan", "Pháp", "Argentina", "Brazil"], "Brazil"),
    new Question("Thế vận hội mùa đông 2018 sẽ được tổ chức tại quốc gia nào?", ["Việt Nam", "Hàn Quốc", "Anh", "Nga"], "Hàn Quốc"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





