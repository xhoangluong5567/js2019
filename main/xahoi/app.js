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
    new Question("Ngôn ngữ nào được nhiều quốc gia sử dụng chính thức nhất ?", ["Tiếng Anh", "Tiếng Tây Ban Nha","Tiếng Pháp", "Tiếng Đức"], "Tiếng Tây Ban Nha"),
    new Question("Tác giả bài thơ: Người đi tìm hình cứu nước ?", ["Chế Lan Viên", "Tố Hữu", "Nguyễn Lữ", "Phạm Tiến Duật"], "Chế Lan Viên"),
    new Question("Ai là người đã dâng vua THẤT TRẢM SỚ chém 7 nịnh thần ?", ["Chu Văn An", "Cao Bá Quát","Phùng Hưng", "Nguyễn Hiền"], "Chu Văn An"),
    new Question("Nước nào sau đây có đất liền thấp hơn mực nước biển ?", ["Hà Lan", "Philippine", "Italya", "Bồ Đào Nha"], "Hà Lan"),
    new Question("Ngọn núi nào được coi là cổng của thiên đường ?", ["Olympus", "Phú Sỹ", "Phan Xi Păng", "Đáp án khác"], "Olympus"),
    new Question("Nơi sinh của Beethoven ?", ["Đức", "Pháp", "Bỉ", "Italya"], "Đức"),
    new Question("Đại vương ếch trong tác phẩm DẾ MÈN PHIÊU LƯU KÝ có tên là gì ?", ["Ếch Ương", "Ếch Cốm", "Ếch Đồng", "Ếch Rừng"], "Ếch cốm"),
    new Question("Vũ điệu truyền thống của đảo Hawaii là ?", ["Điệu nhảy Hula", "Điệu nhảy cha cha cha", "Vũ điệu SamBa", "Vũ điệu Tango"], "Điệu nhảy Hula"),
    new Question("Vịnh nào của Việt Nam được coi là 1 trong 3 vịnh đẹp nhất thế giới ?", ["Vịnh Hạ Long", "Vịnh Lăng Cô", "Vịnh Xuân Đài", "Vịnh Cam Ranh"], "Vịnh Cam Ranh"),
    new Question("Người sinh ra đầu tiên từ ống nghiệm là người nước nào ?", ["Nước Anh", "Nước Đức", "Nước Mỹ", "Nước Pháp"], "Nước Anh"),
    new Question("Việt Nam có bao nhiêu di sản thế giới ?", ["6 di sản", "7 di sản", "8 di sản", "9 di sản"], "7 di sản"),
    new Question("Đại dương nào nhỏ nhất thế giới ? ", ["Thái Bình Dương", "Đại Tây Dương", "Ấn Độ Dương", "Bắc Băng Dương"], "Bắc Băng Dương"),
    new Question("Tỉnh nào sau đây không có một ngọn núi nào ?", ["Thái Bình", "Nam Định", "Quảng Nam", "Quảng Ninh"], "Thái Bình"),
    new Question("Tuyến đường sắt nào cao nhất thế giới ?", ["Nga", "Tây Ban Nha", "Trung Quốc", "Nhật Bản"], "Trung Quốc"),
    new Question("Loài động vật nào sau đây không có đuôi?", ["Khỉ đuôi lợn", "Vooc ngũ sắc", "Vượn đen má trắng", "Cu – li"], "Cu – li"),
    new Question("Quốc hiệu đầu tiên của nước ta là gì ?", ["Văn Lang", "Đại Việt", "Đại Nam", "Đáp án khác"], "Văn Lang"),
    new Question("Trong tác phẩm NHỚ RỪNG của Thế Lữ khi say con hổ uống cái gì ?", ["Ánh trăng tan", "Nước suối", "Rượu", "Không uống gì"], "Ánh trăng tan"),
    new Question("Ở người có bao nhiêu cặp nhiễm sắc thể?", ["23 cặp", "22 cặp", "13 cặp", "12 cặp"], "23 cặp"),
    new Question("Tỉnh nào có đường biên giới dài nhất nước ta ?", ["Sơn La", "Cà Mau", "Quảng Ninh", "Lai Châu"], "Ễnh ương"),
    new Question("Thế vận hội thế giới được tổ chức tại Bắc Kinh khai mạc vào ngày nào ?", ["07/07/2007", "08/08/2008", "08/08/2007", "07/07/2008"], "08/08/2008"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





