class Filter {
  constructor(complex, finishDates, rooms) {
    this.complex = complex || [];
    this.finishDates = finishDates || [];
    this.rooms = rooms || [];
    this.flatsList = {};
    this.counterElement = document
      .querySelector('.obj-filter__results-text')
      .querySelector('span');
  }

  defineComplexName(str) {
    if (str === 'cd') {
      return 'ЖК Чудная Долина';
    }
    if (str === 'p') {
      return 'ЖК Павловский';
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
    const filteredArray = this.filterFlatsList();
    this.counterElement.innerHTML = filteredArray.length;
  }

  renderFlatsList() {
    const wrapper = document.querySelector('.object__list');
    wrapper.innerHTML = '';
    const listPreparedForRender = this.filterFlatsList();

    for (let i = 0; i < listPreparedForRender.length; i++) {
      wrapper.innerHTML += `<div class="object-block__item product-card"><a href="${
        listPreparedForRender[i].link_flats
      }" class="product-card__link">
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
            >${listPreparedForRender[i].priceFlat} &#8381;
            <span class="product-card__arrow">стрелка</span>
          </span>
        </div>
      </a></div>`;
    }
  }

  fetchFlatsList() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './new_jsonFlats.json', false);
    xhr.send();

    if (xhr.status != 200) {
      alert(xhr.status + ': ' + xhr.statusText);
    } else {
      const flatsObj = this.parseJSONMessage(xhr.responseText);
      const { one, two, three, studio } = flatsObj;

      this.flatsList = [
        ...one,
        ...two,
        ...three,
        ...studio.map(s => ({ ...s, studio: true })),
      ];

      this.counterElement.innerHTML = this.flatsList.length;

      this.addEventOnSubmit();
    }
  }

  addEventOnSubmit() {
    document
      .querySelector('.obj-filter__results-btn')
      .addEventListener('click', e => {
        e.preventDefault();
        this.renderFlatsList();
      });
  }

  filterFlatsList() {
    const filteredArray = this.flatsList.filter(flat => {
      const isStudioAndStudiosSelected =
        this.rooms.includes('s') && flat.studio;
      if (this.rooms.length) {
        if (!this.rooms.includes(flat.roomsQuantity) && !flat.studio) {
          return false;
        }

        if (flat.studio && this.rooms.length && !this.rooms.includes('s')) {
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

if (window.location.pathname.includes('/objects')) {
  const filterEntity = new Filter();

  filterEntity.fetchFlatsList();

  $('.obj-filter__complex-select').on('change', function(e) {
    filterEntity.setFilterOption('complex', $(e.target).select2('val'));
  });

  $('.obj-filter__deadline-select').on('change', function(e) {
    filterEntity.setFilterOption('finishDates', $(e.target).select2('val'));
  });

  const roomsForm = document.querySelector('.obj-filter__rooms-wrap');

  const roomsCheckboxes = roomsForm.querySelectorAll('input[type="checkbox"]');

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
