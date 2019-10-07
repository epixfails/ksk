class Filter {
  constructor(complex, finishDates, rooms) {
    this.complex = complex || [];
    this.finishDates = finishDates || [];
    this.rooms = rooms || [];
    this.flatsList = [];
    this.ready = false;
    this.startFlatCounterRender = 0;
    this.currentPagination = 9;
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

    // if (option === 'ready') {
    //   this.complex = [];
    //   this.rooms = [];
    //   document
    //     .querySelector('.obj-filter__rooms-wrap')
    //     .querySelectorAll('input[type="checkbox"]')
    //     .forEach(function(sel) {
    //       sel.checked = false;
    //     });
    // } else {
    //   this.ready = false;
    //   document.querySelector('.obj-filter__build-apartments-btn').style = '';
    // }
  }

  renderFlatsList(noclear) {
    const wrapper = document.querySelector('.object__list');
    if (!noclear) {
      wrapper.innerHTML = '';
    }
    const listPreparedForRender = this.filterFlatsList();

    for (let i = this.startFlatCounterRender; i < this.currentPagination; i++) {
      if (listPreparedForRender[i]) {
        const priceFormatted =
          listPreparedForRender[i].priceFlat.slice(0, 1) +
          ' ' +
          listPreparedForRender[i].priceFlat.slice(1, 4) +
          ' ' +
          listPreparedForRender[i].priceFlat.slice(4);

        wrapper.innerHTML += `<div class="object-block__item product-card"><a href="${
          listPreparedForRender[i].link_flats
        }" target="_blank" class="product-card__link">
        <div class="product-card__img product-card__img--frame">
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
        <div class="product-card__object-status">
          <span>Сдается</span>
        </div>
        <div class="product-card__square">
          <span>Площадь</span>
        </div>
        <div class="product-card__square-value">
          <span>${listPreparedForRender[i].fullFlat} м<sup>2</sup></span>
        </div>
        <div class="product-card__footer">
          <span
            >${priceFormatted} &#8381;
            <span class="product-card__arrow">стрелка</span>
          </span>
        </div>
      </a></div>`;
      }
    }

    const loadMoreButton = document.querySelector('.load-more');

    if (listPreparedForRender.length - this.currentPagination > 0) {
      this.startFlatCounterRender = this.currentPagination;
      this.currentPagination = this.currentPagination + 9;

      loadMoreButton.style.display = 'block';
    } else {
      loadMoreButton.style.display = 'none';
    }
  }

  fetchFlatsList() {
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

  addEventOnSubmit() {
    // const readyFlatsButton = document.querySelector(
    //   '.obj-filter__build-apartments-btn'
    // );

    document
      .querySelector('.obj-filter__results-btn')
      .addEventListener('click', e => {
        e.preventDefault();
        this.startFlatCounterRender = 0;
        this.currentPagination = 9;

        this.renderFlatsList();
      });

    // readyFlatsButton.addEventListener('click', e => {
    //   e.preventDefault();
    //   $('.obj-filter__complex-select').val([]);
    //   $('.obj-filter__complex-select').trigger('change');
    //   $('.obj-filter__deadline-select').val([]);
    //   $('.obj-filter__deadline-select').trigger('change');

    //   this.setFilterOption('ready', true);
    //   this.startFlatCounterRender = 0;
    //   this.currentPagination = 9;
    //   readyFlatsButton.style.backgroundColor = 'rgba(255, 138, 0, 0.25)';
    //   readyFlatsButton.style.borderColor = '#fff';
    //   readyFlatsButton.style.color = '#fff';
    //   this.renderFlatsList();
    // });
  }

  filterFlatsList() {
    const filteredArray = this.flatsList.filter(flat => {
      const isStudioAndStudiosSelected =
        this.rooms.includes('s') && flat.studio;
      if (this.ready) {
        if (Number(flat.delivery) > 2019) {
          return false;
        }
      }

      if (this.rooms.length) {
        if (!this.rooms.includes(flat.roomsQuantity) && !flat.studio) {
          return false;
        }

        if (flat.studio && this.rooms.length && !this.rooms.includes('s')) {
          return false;
        }
      }

      if (this.finishDates.length) {
        if (!this.finishDates.includes(flat.delivery)) {
          return false;
        }
      }

      if (this.complex.length) {
        if (!this.complex.includes(flat.complex)) {
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
  if (document.querySelector('.obj-filter__complex-select')) {
    filterEntity.fetchFlatsList();

    $('.obj-filter__complex-select').on('change', function(e) {
      filterEntity.setFilterOption('complex', $(e.target).select2('val'));
    });

    $('.obj-filter__deadline-select').on('change', function(e) {
      filterEntity.setFilterOption('finishDates', $(e.target).select2('val'));
    });

    const roomsForm = document.querySelector('.obj-filter__rooms-wrap');

    const roomsCheckboxes = roomsForm.querySelectorAll(
      'input[type="checkbox"]'
    );

    const readyCheckbox = document.querySelector('#ready');

    readyCheckbox.addEventListener('change', function(e) {
      filterEntity.setFilterOption('ready', e.target.checked);
    });

    roomsCheckboxes.forEach(function(sel) {
      sel.addEventListener('change', function(e) {
        const newRoomsSelection = [];
        roomsCheckboxes.forEach(function(check) {
          if (check.checked) newRoomsSelection.push(check.value);
        });

        filterEntity.setFilterOption('rooms', newRoomsSelection);
      });
    });
  }
});
