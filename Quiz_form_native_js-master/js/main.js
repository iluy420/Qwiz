document.addEventListener("DOMContentLoaded", function () {

    // MODAL START
    let modalItemBtn = document.querySelectorAll('[data-trigger-modal]');
    if (modalItemBtn) {
        let window = document.body;
        let modal = document.querySelectorAll('[data-modal]');
        let modal_content = document.querySelectorAll('.modal_content');
        let closeMode = document.querySelectorAll('[data-close]');
        let targetBtn;

        function openModal() {

            modalItemBtn.forEach(element => {
                element.addEventListener('click', function (e) {
                    e.preventDefault();
                    targetBtn = element.getAttribute('data-label-modal');

                    modal.forEach(element => {

                        let modalId = element.id;

                        if (targetBtn === modalId) {
                            element.classList.add('active');
                            window.style.overflow = 'hidden';
                        }
                    });
                })
            });
        }

        closeMode.forEach(element => {
            element.addEventListener('click', function () {
                modal.forEach(element => {
                    element.classList.remove('active')
                    window.style.overflow = 'initial';
                });
                if (element.getAttribute('data-trigger-modal')) {
                    openModal();
                }
            })
        })

        for (let i = 0; i < modal.length; i++) {
            let elemAttr = modal_content[i].getAttribute('data-important');

            if (elemAttr === 'true') {
                document.addEventListener('mousedown', function (e) {
                    let target = e.target;

                    let currentModal = target === modal_content[i] || modal_content[i].contains(target);

                    if (!currentModal) {
                        modal_content[i].style.transform = 'scale(.99)'
                    }
                })
                document.addEventListener('mouseup', function () {
                    modal_content[i].style.transform = 'scale(1)'
                })
            }
            if (elemAttr === 'false') {
                modal[i].addEventListener('click', function (e) {
                    let target = e.target;
                    let currentModal_content = target === modal_content[i] || modal_content[i].contains(target);
                    let currentModalBtn = target === modalItemBtn[i];

                    if (!currentModal_content && !currentModalBtn) {
                        this.classList.remove('active')
                        window.style.overflow = 'initial';
                    }
                })
            }
        }

        openModal();
    }
    // MODAL THE END

    // RESET PLACEHOLDER INPUT ON CLICK START
    let form_input = document.querySelectorAll('.input_frm');
    if (form_input) {
        for (let i = 0; i < form_input.length; i++) {
            form_input[i].addEventListener('click', function () {
                let thisElement = this;

                let savePlaceholder = this.getAttribute('placeholder');

                this.setAttribute('placeholder', ' ');
                document.addEventListener('mouseup', function () {
                    thisElement.setAttribute('placeholder', savePlaceholder);
                });
            });
        }
    }
    // REST PLACEHOLDER INPUT ON CLICK THE END


    //QUIZ START
    let quiz_form = document.querySelector('.quiz_form');
    if (quiz_form) {
        let PrevBtn = quiz_form.querySelector('.btnPrev');
        let nextBtn = quiz_form.querySelector('.btnNext');
        let quizAll = quiz_form.querySelectorAll('.quiz_block');
        let currentQ = quiz_form.querySelector('.currentQ');
        let progressQ = quiz_form.querySelector('.progress');
        let progress = 0;
        let count = 0;
        let progressPercent = 100 / (quizAll.length - 1);
        console.log(progressPercent)

        initProgress();
        removeBtn();

        quiz_form.querySelector('.allQ').textContent = `${quizAll.length}`;

        nextBtn.addEventListener('click', function () {
            currentQ.textContent++;
            count++
            progress += Number(progressPercent.toFixed(3));
            console.log(progress)
            initQuiz();
            initProgress();
            removeBtn();
        })


        PrevBtn.addEventListener('click', function () {
            count--
            currentQ.textContent--;
            progress -= Number(progressPercent.toFixed(3));
            console.log(progress)
            initQuiz();
            initProgress();
            removeBtn();
        })

        function initQuiz() {
            quizAll.forEach((element, i) => {
                element.classList.remove('active')
                if (i === count) {
                    element.classList.add('active')
                }
            })
        }

        function initProgress() {
            progressQ.style.width = `${progress}%`;
        }

        function removeBtn() {
            if (count === 0) {
                PrevBtn.style.display = 'none'
            } else if (count !== 0) {
                PrevBtn.style.display = 'block'
            }
            if (count === quizAll.length - 1) {
                nextBtn.style.display = 'none'
            } else if (count !== quizAll.length) {
                nextBtn.style.display = 'block'
            }
        }
    }
    // QUIZ THE END

});