var amigusCatalogo = [
    {
        nome: 'Lúcio, o Fauno',
        descr: 'Os Faunos são criaturas curiosas, não? Normalmente possuem pele avermelhada, cabelos encaracolados, barba curta, chifres na testa, pernas de cabra, um rostinho estranho e agradável.',
        img: 'img-fauno',
        tam: '36 x 17 x 10 cm',
        fio: 'Ne 6/5',
        preco: 'R$70,00',
        peso: '258g',
        cores: '',
        active: false
    },
    {
        nome: 'Nossa Senhora',
        descr: 'Ó Maria, Mãe de Deus e nossa Mãe santíssima, abençoai as nossas crianças, que vós são confiadas. Guardai-as com cuidado maternal, para que nenhuma delas se perca.',
        img: 'img-maria',
        tam: '22 x 9 x 9 cm',
        fio: 'Ne 6/5',
        preco: 'R$40,00',
        peso: '120g',
        cores: '',
        active: false
    },
    {
        nome: 'Duni, o Unicórnio',
        descr: 'Os Unicórnios, além de super fofos, são animais mitológicos que tem a forma de um cavalo, com um único chifre em espiral. Dizem por aí que eles se alimentam de nuvens e raios de sol, será mesmo?',
        img: 'img-unicornio',
        tam: '25 x 18 x 7 cm',
        fio: 'Ne 6/5',
        preco: 'R$50,00',
        peso: '193g',
        cores: '',
        active: false
    },
    {
        nome: 'Dona Luisa',
        descr: 'A Dona Luisa gosta muito de fazer crochê e tricô, mas sempre perde suas agulhas e novelos de lã pela casa... Que tal um amigurumi com compartimentos para guardar tudo isso? ',
        img: 'img-velhinha',
        tam: '36 x 15 x 11 cm',
        fio: 'Ne 6/5',
        preco: 'R$65,00',
        peso: '475g',
        cores: '',
        active: false
    },
    {
        nome: 'Henry, o Mago',
        descr: 'Alguns mundos por aí estão repletos de magia, lá podemos encontrar terríveis dragões, feitiçõs espetaculares, vassouras voadoras e até mesmo criaturas horripilantes. ',
        img: 'img-harry',
        tam: '27 x 14 x 7 cm',
        fio: 'Ne 6/5',
        preco: 'R$40,00',
        peso: '144g',
        cores: '',
        active: false
    },
    {
        nome: 'Tavo, o Polvo',
        descr: 'Os Polvos são moluscos marinhos com oito tentáculos que apresentam diversas ventosas, já ouvi falar que eles são os animais invertebrados mais inteligentes do nosso planeta.',
        img: 'img-polvo',
        tam: '18 x 10 x 5 cm',
        fio: 'Ne 6/5',
        preco: 'R$25,00',
        peso: '52g',
        cores: '',
        active: false
    },
];

//ID pai infoTecAmigu
function renderTamanho(valorTamanho) {
    var tamanhoAmigu = document.querySelector('#infoTecAmigu #tamanho-amigu');
    if (tamanhoAmigu.textContent != '') {
        tamanhoAmigu.removeChild(tamanhoAmigu.firstChild);
        tamanhoAmigu.insertAdjacentHTML("afterbegin", valorTamanho);
    } else {
        tamanhoAmigu.insertAdjacentHTML("afterbegin", valorTamanho);
    }
}
function renderFio(valorFio) {
    var fioAmigu = document.querySelector('#infoTecAmigu #fio-amigu');
    if (fioAmigu.textContent != '') {
        fioAmigu.removeChild(fioAmigu.firstChild);
        fioAmigu.insertAdjacentHTML("afterbegin", valorFio);
    } else {
        fioAmigu.insertAdjacentHTML("afterbegin", valorFio);
    }
}
function renderPreco(valorPreco) {
    var precoAmigu = document.querySelector('#infoTecAmigu #preco-amigu');
    if (precoAmigu.textContent != '') {
        precoAmigu.removeChild(precoAmigu.firstChild);
        precoAmigu.insertAdjacentHTML("afterbegin", valorPreco);
    } else {
        precoAmigu.insertAdjacentHTML("afterbegin", valorPreco);
    }
}
function renderPeso(valorPeso) {
    var pesoAmigu = document.querySelector('#infoTecAmigu #peso-amigu');
    if (pesoAmigu.textContent != '') {
        pesoAmigu.removeChild(pesoAmigu.firstChild);
        pesoAmigu.insertAdjacentHTML("afterbegin", valorPeso);
    } else {
        pesoAmigu.insertAdjacentHTML("afterbegin", valorPeso);
    }
}
//ID pai catalogo
function renderTxt(valorTxt) {
    var txtAmigu = document.querySelector('#catalogo #txt-amigu');
    if (txtAmigu.textContent != '') {
        txtAmigu.removeChild(txtAmigu.firstChild);
        txtAmigu.insertAdjacentHTML("afterbegin", valorTxt);
    } else {
        txtAmigu.insertAdjacentHTML("afterbegin", valorTxt);
    }
}
function renderNome(valorNome) {
    var nomeAmigu = document.querySelector('#catalogo #nome-amigu');
    if (nomeAmigu.textContent != '') {
        nomeAmigu.removeChild(nomeAmigu.firstChild);
        nomeAmigu.insertAdjacentHTML("afterbegin", valorNome);
    } else {
        nomeAmigu.insertAdjacentHTML("afterbegin", valorNome);
    }
}
//Imagem
function renderImg(valorImg) {
    var imgAmigu = document.querySelector('#catalogo #img-catalogo');
    imgAmigu.classList.remove('img-fauno');
    imgAmigu.classList.remove('img-velhinha');
    imgAmigu.classList.remove('img-harry');
    imgAmigu.classList.remove('img-maria');
    imgAmigu.classList.remove('img-unicornio');
    imgAmigu.classList.remove('img-polvo');
    imgAmigu.classList.add(valorImg);
}

function renderAmigu(nome, descr, img, tam, fio, preco, peso) {
    renderNome(nome);
    renderTxt(descr);
    renderImg(img);
    renderTamanho(tam);
    renderFio(fio);
    renderPreco(preco);
    renderPeso(peso);
}

function switchAmigu(amigu) {
    switch (amigu) {
        case 0:
            // alert('Amigu1');
            amigusCatalogo[amigu];
            renderAmigu(amigusCatalogo[amigu].nome, amigusCatalogo[amigu].descr, amigusCatalogo[amigu].img, amigusCatalogo[amigu].tam, amigusCatalogo[amigu].fio, amigusCatalogo[amigu].preco, amigusCatalogo[amigu].peso)
            break;
        case 1:
            // alert('Amigu2');
            renderAmigu(amigusCatalogo[amigu].nome, amigusCatalogo[amigu].descr, amigusCatalogo[amigu].img, amigusCatalogo[amigu].tam, amigusCatalogo[amigu].fio, amigusCatalogo[amigu].preco, amigusCatalogo[amigu].peso)
            break;
        case 2:
            // alert('Amigu3');
            renderAmigu(amigusCatalogo[amigu].nome, amigusCatalogo[amigu].descr, amigusCatalogo[amigu].img, amigusCatalogo[amigu].tam, amigusCatalogo[amigu].fio, amigusCatalogo[amigu].preco, amigusCatalogo[amigu].peso)
            break;
        case 3:
            // alert('Amigu4');
            renderAmigu(amigusCatalogo[amigu].nome, amigusCatalogo[amigu].descr, amigusCatalogo[amigu].img, amigusCatalogo[amigu].tam, amigusCatalogo[amigu].fio, amigusCatalogo[amigu].preco, amigusCatalogo[amigu].peso)
            break;
        case 4:
            // alert('Amigu5');
            renderAmigu(amigusCatalogo[amigu].nome, amigusCatalogo[amigu].descr, amigusCatalogo[amigu].img, amigusCatalogo[amigu].tam, amigusCatalogo[amigu].fio, amigusCatalogo[amigu].preco, amigusCatalogo[amigu].peso)
            break;
        case 5:
            // alert('Amigu6');
            renderAmigu(amigusCatalogo[amigu].nome, amigusCatalogo[amigu].descr, amigusCatalogo[amigu].img, amigusCatalogo[amigu].tam, amigusCatalogo[amigu].fio, amigusCatalogo[amigu].preco, amigusCatalogo[amigu].peso)
            break;
    }
}

function nextAmigu() {
    var imgAmigu = document.querySelector('#catalogo #img-catalogo');
    var amigu = imgAmigu.classList;
    if (amigu.contains('img-fauno')) {
        switchAmigu(1)
    } else if (amigu.contains('img-maria')) {
        switchAmigu(2)
    } else if (amigu.contains('img-unicornio')) {
        switchAmigu(3)
    } else if (amigu.contains('img-velhinha')) {
        switchAmigu(4)
    } else if (amigu.contains('img-harry')) {
        switchAmigu(5)
    } else if (amigu.contains('img-polvo')) {
        switchAmigu(0)
    }
}
function prevAmigu() {
    var imgAmigu = document.querySelector('#catalogo #img-catalogo');
    var amigu = imgAmigu.classList;
    if (amigu.contains('img-fauno')) {
        switchAmigu(5)
    } else if (amigu.contains('img-maria')) {
        switchAmigu(0)
    } else if (amigu.contains('img-unicornio')) {
        switchAmigu(1)
    } else if (amigu.contains('img-velhinha')) {
        switchAmigu(2)
    } else if (amigu.contains('img-harry')) {
        switchAmigu(3)
    } else if (amigu.contains('img-polvo')) {
        switchAmigu(4)
    }
}