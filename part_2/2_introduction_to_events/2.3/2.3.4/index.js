document.addEventListener('mouseover', (e) => {
  if (!e.target.dataset.tooltip) return;

  let el = e.target;
  let coordEl = el.getBoundingClientRect();
  let top;
  let left;
  const tooltip = document.createElement('div');

  tooltip.classList.add('tooltip');
  tooltip.innerHTML = el.dataset.tooltip;
  document.body.append(tooltip);

  top =
    coordEl.y - tooltip.clientHeight - 5 < tooltip.clientHeight
      ? (top = coordEl.y + coordEl.height + 5)
      : (top = coordEl.y - tooltip.clientHeight - 5);

  left =
    coordEl.x + el.clientWidth / 2 - tooltip.clientWidth / 2 <
    tooltip.clientWidth / 2
      ? coordEl.x
      : coordEl.x + el.clientWidth / 2 - tooltip.clientWidth / 2;

  tooltip.style.top = top + 'px';
  tooltip.style.left = left + 'px';
});

document.addEventListener('mouseout', (e) => {
  if (!e.target.dataset.tooltip) return;
  document.querySelector('.tooltip').remove();
});
