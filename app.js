
// Mobile nav toggle & services dropdown in mobile
const toggle = document.querySelector('.mobile-toggle');
const panel  = document.getElementById('mobile-nav');
if (toggle && panel){
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded')==='true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    panel.style.display = expanded ? 'none' : 'block';
    panel.setAttribute('aria-hidden', String(expanded));
  });
}
const svcParent = document.getElementById('mobile-services-parent');
const svcList   = document.getElementById('mobile-services-list');
if (svcParent && svcList){
  svcParent.addEventListener('click', (e) => {
    e.preventDefault();
    const open = svcList.getAttribute('data-open')==='true';
    svcList.style.display = open ? 'none' : 'block';
    svcList.setAttribute('data-open', String(!open));
  });
}
// Year
document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());


// ---- Contact form: local preview fallback (file://) ----
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;
  if (location.protocol === 'file:') {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const to = 'spacecowboy3d2y@gmail.com';
      const subj = 'New inquiry from Emtithal site';
      const lines = [
        'Name: ' + (fd.get('name') || ''),
        'Email: ' + (fd.get('email') || ''),
        'Phone: ' + (fd.get('phone') || ''),
        'Company: ' + (fd.get('company') || ''),
        'Service: ' + (fd.get('service') || ''),
        '',
        (fd.get('message') || '')
      ];
      const body = encodeURIComponent(lines.join('\n'));
      const href = `mailto:${to}?subject=${encodeURIComponent(subj)}&body=${body}`;
      window.location.href = href;
      // navigate to thank-you after a short delay
      setTimeout(() => { window.location.href = 'thank-you.html'; }, 800);
    });
  }
});
