const addSelectClickHandler = () => {
  const select = document.querySelector('.select');
  const selectButton = select.querySelector('.select__button');
  const options = select.querySelector('.options');

  selectButton.addEventListener('click', () => {
    if (!selectButton.classList.contains('select__button_active')) {
      openSelect();
    } else {
      closeSelect();
    }
  });

  showSelectedOption();

  function showSelectedOption() {
    options.addEventListener('click', (event) => {
      const option = event.target;
      if (option && option.classList.contains('options__item')) {
        const selected = option.innerText;
        const selectText = select.querySelector('.select__title');
        selectText.innerText = selected;
        closeSelect();
      }
    });
  }

  const openSelect = () => {
    selectButton.classList.add('select__button_active');
    options.classList.add('options_show');
    select.classList.add('select_active');
  };

  const closeSelect = () => {
    selectButton.classList.remove('select__button_active');
    options.classList.remove('options_show');
    select.classList.remove('select_active');
  };
};

export default addSelectClickHandler;
