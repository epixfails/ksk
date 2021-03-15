class Filter {
  constructor(complex, rooms) {
    this.complex = complex;
    this.rooms = rooms || '';
    this.flatsList = [];
    this.viewFlat = false;
    this.startFlatCounterRender = 0;
    this.currentPagination = 8;
    this.counterElement = document.querySelector('.obj-filter__results-text')
      ? document
          .querySelector('.obj-filter__results-text')
          .querySelector('span')
      : null;

    const loadMoreButton = document.querySelector('.load-more');
    if (loadMoreButton) {
      loadMoreButton.addEventListener('click', e => {
        e.preventDefault();
        this.renderFlatsList(true);
      });
    }
  }

  defineComplexName(str) {
    if (str === 'cd') {
      return 'ЖК Верхний';
    }
    if (str === 'p') {
      return 'ЖК Павловский';
    }

    if (str === 'pr') {
      return 'ЖК Премьер';
    }

    return 'МКР Центральный';
  }

  defineFlatType(str) {
    if (str === '1') {
      return '1-комнатная квартира';
    }
    if (str === '2') {
      return '2-комнатная квартира';
    }

    if (str === '3') {
      return '3-комнатная квартира';
    }

    return 'Студия';
  }

  parseJSONMessage(str) {
    let result;
    try {
      result = JSON.parse(str);
    } catch (e) {
      console.error('cannot parse json');
    }
    return result;
  }

  setFilterOption(option, value) {
    this[option] = value;
    console.log(option, value);
    const filteredArray = this.filterFlatsList();
    this.counterElement.innerHTML = filteredArray.length;
  }

  renderFlatsList(noclear) {
    const wrapper = document.querySelector('.object__list');
    if (!noclear) {
      wrapper.innerHTML = '';
    }
    const listPreparedForRender = this.filterFlatsList();

    for (let i = this.startFlatCounterRender; i < this.currentPagination; i++) {
      if (listPreparedForRender[i]) {
        const priceFormatted = Number(listPreparedForRender[i].priceFlat).toLocaleString('ru')

        wrapper.innerHTML += `<div class="object-block__item product-card"><a href="${
          listPreparedForRender[i].link_flats
        }" target="_blank" class="product-card__link">
        <div class="product-card__img product-card__img--frame">
        ${listPreparedForRender[i].sale ? `<div class="product-card__sale">скидка ${listPreparedForRender[i].sale}%</div>` : ''}
          <img
            src="${listPreparedForRender[i].imgLink}"
            alt="Изображение"
          />
        </div>
        <div
          class="product-card__title product-card__title--second-color"
        >
          <h3>${this.defineComplexName(listPreparedForRender[i].complex)}</h3>
        </div>
        <div class="product-card__room-value">
          <span>${
            listPreparedForRender[i].studio
              ? 'Студия'
              : this.defineFlatType(listPreparedForRender[i].roomsQuantity)
          }</span>
        </div>
        ${listPreparedForRender[i].complex === 'cd' ? `<div class="product-card__object-status" style="display: flex; justify-content:space-between;">
          <div><span style="color: #7b7878">Секция </span>${listPreparedForRender[i].section}</div>
          <div><span style="color: #7b7878">Артикул </span>${listPreparedForRender[i].id_flat}</div>
        </div>` : ''}
        <div class="square-info-wrapper">
          <div class="product-card__square">
            <div>ПЛОЩАДЬ</div>
            <div>${listPreparedForRender[i].fullFlat} м<sup>2</sup></div>
          </div>
          ${listPreparedForRender[i].view ? `<div class="product-card__square">
            <div>ТИП</div>
            <div>ВИДОВАЯ</div>
          </div>` : ''}
        </div>
        <div class="product-card__footer">
          <span
            >${priceFormatted} &#8381;
          </span>
          <span class="product-card__arrow">стрелка</span>
        </div>
      </a></div>`;
      }
    }

    const loadMoreButton = document.querySelector('.load-more');

    if (listPreparedForRender.length - this.currentPagination > 0) {
      this.startFlatCounterRender = this.currentPagination;
      this.currentPagination = this.currentPagination + 8;

      loadMoreButton.style.display = 'block';
    } else {
      loadMoreButton.style.display = 'none';
    }
  }

  fetchFlatsList() {
    console.log('FETCH FLATS LIST')
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './new_jsonFlats.json', false);
    xhr.send();

    if (xhr.status != 200) {
      console.error(xhr.status + ': ' + xhr.statusText);
    } else {
      const flatsObj = this.parseJSONMessage(xhr.responseText);
      console.log(flatsObj);
      const { one, two, three, studio } = flatsObj;

      this.flatsList = [
        ...one,
        ...two,
        ...three,
        ...studio.map(s => ({ ...s, studio: true })),
      ];

      this.counterElement.innerHTML = this.flatsList.length;

      this.addEventOnSubmit();

      const complex = window.location.search.split('=')[1];

      if (window.location.pathname.includes('poisk-kvartir') && !complex) {
        this.renderFlatsList();
      }
    }
  }

  addUrlParam(search, key, val){
    var newParam = key + '=' + val,
        params = '?' + newParam;

    // If the "search" string exists, then build params from it
    if (search) {
      // Try to replace an existance instance
      params = search.replace(new RegExp('([?&])' + key + '[^&]*'), '$1' + newParam);

      // If nothing was replaced, then add the new param to the end
      if (params === search) {
        params += '&' + newParam;
      }
    }

    return params;
  };

  addEventOnSubmit() {
    document
      .querySelector('.obj-filter__results-btn')
      .addEventListener('click', e => {
        e.preventDefault();
        this.startFlatCounterRender = 0;
        this.currentPagination = 8;
        document.querySelector('.object__list').style.justifyContent = 'flex-start';

        console.log('click', this.complex)

        const urlParams = new URLSearchParams(window.location.search);
        if(window.location.search){
          urlParams.delete('complex')
          urlParams.delete('rooms')
          urlParams.delete('view')
        }



        if(this.complex){
          const complexName = this.complex === 'pr' ? 'premier' : 'verhniy'
          urlParams.set('complex', complexName)
        }

        if(this.rooms){
          urlParams.set('rooms', this.rooms)
        }

        if(this.viewFlat){
          urlParams.set('view', '1')
        }

        window.location.search = urlParams;
      });

  }

  filterFlatsList() {
    const filteredArray = this.flatsList.filter(flat => {
      if (this.viewFlat) {
        console.log(flat.view)
        if (!flat.view) {
          return false;
        }
      }

      if (this.rooms) {
        if (!(this.rooms === flat.roomsQuantity) && !flat.studio) {
          return false;
        }

        if (flat.studio && this.rooms !== 's') {
          return false;
        }
      }

      if (this.complex) {
        if (this.complex !== flat.complex) {
          return false;
        }
      }

      return true;
    });

    return filteredArray;
  }
}

export const filterEntity = new Filter();

$(document).ready(function() {
  if (document.querySelector('.obj-filter__results')) {
    filterEntity.fetchFlatsList();

    // $('.obj-filter__complex-select').on('change', function(e) {
    //   filterEntity.setFilterOption('complex', $(e.target).select2('val'));
    // });

    const complexCheckboxes = document.querySelectorAll('.js-complex')

    complexCheckboxes.forEach(function(comp) {
      comp.addEventListener('change', function(e) {
        const newComplexSelection = e.target.checked ? e.target.value : '';
        complexCheckboxes.forEach(function(i) {
          i.value === newComplexSelection ? i.checked = true : i.checked = false
        });

        filterEntity.setFilterOption('complex', newComplexSelection);
      });
    });

    const roomsForm = document.querySelector('.obj-filter__rooms-wrap');

    const roomsCheckboxes = roomsForm.querySelectorAll(
      'input[type="checkbox"]'
    );

    const readyCheckbox = document.querySelector('#ready');

    readyCheckbox.addEventListener('change', function(e) {
      filterEntity.setFilterOption('viewFlat', e.target.checked);
    });

    roomsCheckboxes.forEach(function(sel) {
      sel.addEventListener('change', function(e) {
        const newRoomsSelection = e.target.checked ? e.target.value : '';
        roomsCheckboxes.forEach(function(i) {
          i.value === newRoomsSelection ? i.checked = true : i.checked = false
        })

        filterEntity.setFilterOption('rooms', newRoomsSelection);
        });
     });
  }
});




$(document).ready(function() {
  if (screen.width <=500) {
    $('html, body').animate({
          scrollTop: $("div.object__list").offset().top
    }, 1000);
  }
  });
