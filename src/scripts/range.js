const addRangeInputHandler = () => {
  const range = document.querySelector('.range');
  const rangeValue = document.querySelector('.range__value');

  range.addEventListener('input', (event) => {
    rangeValue.textContent = `${event.target.value}%`;
  });
};

export default addRangeInputHandler;
