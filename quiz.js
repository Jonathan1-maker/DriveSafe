const quizData = [
    {
        question: "1. Ikinyabiziga cyose cyangwa ibinyabiziga bigenda bigomba kugira:",
        a: "Umuyobozi",
        b: "Umuherekeza",
        c: "A na B ni ibisubizo by'ukuri",
        d: "Nta gisubizo cy'ukuri kirimo",
        correct: "a",
    },
    {
        question: " 2. Ijambo 'akayira' bivuga inzira nyabagendwa ifunganye yagenewe gusa:",
        a: "Abanyamaguru",
        b: "Ibinyabiziga bigendera ku biziga bibiri",
        c: "A na B ni ibisubizo by'ukuri",
        d: "Nta gisubizo cy'ukuri kirimo",
        correct: "c",
    },
      {
        question: " 3. Amatara maremare y'ikinyabiziga agomba kuzimwa mu bihe bikurikira:",
        a: "Iyo umuhanda umurikiye umuyobozi abasha kureba muri metero 20",
        b: "Iyo ikinyabiziga kigiye kubisikana n'ibindi",
        c: "Iyo ari mu nsisiro",
        d: "Ibisubizo byose ni ukuri",
        correct: "b",
    },
     {
        question: "4. Ibinyabiziga bikoreshwa nka tagisi, bitegerereza abantu mu nzira nyabagendwa, bishobora gushyirwaho itara ryerekana ko ikinyabiziga kitakodeshejwe. Iryo tara rishyirwaho ku buryo bukurikira:",
        a: "Ni itara ry'icyatsi rishyirwa imbere ku kinyabiziga",
        b: "Ni itara ry'icyatsi rishyirwa ibumoso",
        c: "Ni itara ry'umuhondo rishyirwa inyuma",
        d: "A na C ni ibisubizo by'ukuri",
        correct: "a",
    },
    {
        question: "5. Za otobisi zagenewe gutwara abanyeshuri zishobora gushyirwaho amatara abiri asa n'icunga rihishije amyasa kugirango yerekane ko zihagaze no kwerekana ko bagomba kwitonda, ayo matara ashyirwaho ku buryo bukurikira :",
        a: "Amatara abiri ashyirwa inyuma",
        b: "Amatara abiri ashyirwa imbere",
        c: "Rimwe rishyirwa imbere irindi inyuma",
        d: "B na C ni ibisubizo by'ukuri",
        correct: "c",
    },
     {
        question: "6. Ubugari bwa romoruki ntiburenza ubugari bw'ikinyabiziga kiyikurura iyo ikuruwe n'ibinyabiziga bikurikira:",
        a: "Igare",
        b: "Velomoteri",
        c: "Ipikipiki ifite akanyabiziga kometse ku ruhande rwayo",
        d: "Nta gisubizo cy'ukuri kirimo",
        correct: "c",
    },
     {
        question: "7.Iyo hatarimo indi myanya birabujijwe gutwara ku ntebe y'imbere y'imodoka abana badafite imyaka:",
        a: "Imyaka 10",
        b: "Imyaka 12",
        c: "Imyaka 7",
        d: "Nta gisubizo cy'ukuri kirimo",
        correct: "b",
    },
     {
        question: "8.Icyapa kivuga gutambuka mbere y'ibinyabiziga biturutse imbere gifite amabara akurikira:",
        a: "Ubuso ni umweru",
        b: "Ikirango ni umutuku n'umukara",
        c: "Ikirango ni umweru n'umukara",
        d: "Nta gisubizo cy'ukuri kirimo",
        correct: "d",
    },
    {
        question: "9.Iyo kuyobya umuhanda ari ngombwa bigaragazwa kuva aho uhera no kuburebure bwawo n'icyapa gifite ubuso bw'amabara akurikira:",
        a: "Ubururu",
        b: "Umweru",
        c: "Umutuku",
        d: "Nta gisubizo cy'ukuri kirimo",
        correct: "a",
    },
      {
        question: "10.Uturebanyuma dukoreshwa:",
        a: "Kwireba",
        b: "Kugenzura ibigendera mu muhanda inyuma",
        c: "Kureba abicaye inyuma",
        d: "Nta gisubizo cy'ukuri kirimo",
        correct: "b",
    },
    {
        question: "11.Ikinyabiziga kibujijwe guhagarara akanya kanini aha hakurikira :",
        a: "Imbere y'ahantu hinjirwa hakasohokerwa n'abantu benshi",
        b: "Mu muhanda aho ugabanyijemo ibisate bigaragazwa n'imirongo idacagaguye",
        c: "A na B ni ibisubizo by'ukuri",
        d: "Nta gisubizo cy'ukuri kirimo",
        correct: "c",
    },
    {
        question: "12.Ibinyabiziga bikurikira bigomba kugira itara ry'ubururu rimyatsa riboneka mu mpande zose:",
        a: "ibinyabiziga bifite ubugari burenga m 2 na cm 10",
        b: "ibinyabiziga ndakumirwa",
        c: "ibinyabiziga bya police y'igihugu",
        d: "ibisubizo byose ni ukuri",
        correct: "b",
    },
    {
        question: "13.Utugarurarumuri turi mu mbavu z'ikinyabiziga tugomba kugira ibara rikurikira:",
        a: "umweru",
        b: "umuhondo",
        c: "umutuku",
        d: "Nta gisubizo cy'ukuri kirimo",
        correct: "b",
    },
    {
        question: "14.Itara ndanganyuma rigomba gushyirwa aha hakurikira:",
        a: "ahagereye inguni y'ibumoso y'ikinyabiziga",
        b: "ahagereye inguni y'iburyo bw'ikinyabiziga",
        c: "inyuma kandi y'impera y'ibumoso bw'ikinyabiziga",
        d: "Nta gisubizo cy'ukuri kirimo",
        correct: "a",
    },
     {
        question: "15.Icyapa kivuga ko hatanyurwa mu byerekezo byombi kirangwa n'ubuso bw'ibara rikurikira:",
        a: "umukara",
        b: "umweru",
        c: "ubururu",
        d: "umutuku",
        correct: "b",
    },
     {
        question: "16.Amatara ndangaburumbarare agomba kubonwa nijoro igihe ijuru rikeye n'umuyobozi w'ikinyabiziga kiri mu ntera ya :",
        a: "m 50 nibura",
        b: "m 100",
        c: "m 150",
        d: "m 200 nibura",
        correct: "d",
    },
     {
        question: "17.Icyapa cyerekana ko inzira giteyeho mu ntangiriro idakomeza kigaragazwa n'ikirango (ikimenyetso) cy'amabara akurikira:",
        a: "umukara n'umutuku",
        b: "umukara n'umweru",
        c: "umweru n'umutuku",
        d: "Nta gisubizo cy'ukuri kirimo",
        correct: "c",
    },
     {
        question: "18.Kunyuranaho bikorerwa:",
        a: "mu ruhande rw'iburyo gusa",
        b: "igihe cyose ni ibumoso",
        c: "iburyo iyo unyura ku nyamaswa",
        d: "Nta gisubizo cy'ukuri kirimo",
        correct: "d",
    },
    {
        question: "19.Itara ndanganyuma rigomba gushyirwa aha hakurikira:",
        a: "ku nguni y'iburyo y'ikinyabiziga",
        b: "ku gice cy'inyuma ku kinyabiziga",
        c: "ahegereye inguni y'ibumoso y'ikinyabiziga",
        d: "ibisubizo byose ni ukuri",
        correct: "c",
    },
    {
        question: "20.Iyo kuyobya umuhanda ari ngombwa bigaragazwa kuva aho uhera no kuburebure bwawo nâ€™icyapa gifite ubuso bwâ€™amabara akurikira:",
        a: "umukara",
        b: "umweru",
        c: "umutuku",
        d: "Nta gisubizo cy'ukuri kirimo",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
           let Certificate = "";

  if (score >= 12 ) {

    Certificate = ` <button onclick="window.location.href='entry.html'">Impamya Bumenyi</button>`;
  } else {
    
    Certificate = `<button onclick="location.reload()">Ongera Ugerageze</button>`;
  }

  quiz.innerHTML = `
    <h2>${score}/${quizData.length}</h2>
    ${Certificate}
  `;

        }
    }
}) 