// Keep the page readable without JavaScript; only add abstract expansion.
document.querySelectorAll('.abstract').forEach((abstract, index) => {
  if (abstract.textContent.length < 180) return;
  abstract.id = `abstract-${index}`;
  const button = document.createElement('button');
  button.className = 'abstract-toggle';
  button.type = 'button';
  button.textContent = 'Show more';
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', abstract.id);
  button.addEventListener('click', () => {
    const expanded = abstract.classList.toggle('expanded');
    button.setAttribute('aria-expanded', String(expanded));
    button.textContent = expanded ? 'Show less' : 'Show more';
  });
  abstract.after(button);
});
