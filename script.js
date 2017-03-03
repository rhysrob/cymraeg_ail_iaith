$(function(){
            var correctWords = ["Bore", "y", "nos Fercher", "o'r gloch", "hwyl"];

            $('.word').click(function() {
                $(this).addClass('active');
            })

            $('#myModal').on('show.bs.modal', function(e) {
                var thisWord = $(e.relatedTarget);

                var word = $(thisWord).attr('data-title');
                var help = $(thisWord).attr('data-help-content');;
                $('#myModal h1.active-word').html(word);
                $('#myModal .help').html(help);

                $('#helpBtn').click(function() {
                    $('.help').show();
                    $(thisWord).attr('data-help', 1);
                    //deduct points;
                })

                $('h1.active-word').focusout(function() {
                    var newWord = $(this).text().trim().replace(/\s\s+/g, ' ');
                    $('.word.active').text(newWord);
                    $('.word.active').attr('data-title', newWord);
                })

                $('#myModal').on('hidden.bs.modal', function(e) {
                    $('.word').removeClass('active');
                    $('.help').hide();
                })
            })

            $('#checkBtn').click(function() {
                var score = 0;
                $('.word').each(function(index, value) {

                    var guess = $(value).text();
                    var answer = correctWords[index];
                    var help = $(value).attr('data-help');
                    console.log(guess, answer, help);

                    if (guess == answer && help == 0) {
                        score += 2;
                    } else if (guess == answer && help == 1) {
                        score++;
                    }
                })
                $('#score').text('Your score: ' + score + ' out of a possible ' + $('.word').length * 2);
            })



            $('#answersBtn').click(function() {
                $('#answers').toggle();
                $('#answers').is(":visible") ? $(this).text('Hide Answers') : $(this).text('Show Answers');

            })


        })// end (doc).ready