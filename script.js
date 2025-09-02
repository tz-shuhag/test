// Insert current year automatically
const yr = document.getElementById('yr');
if (yr) {
yr.textContent = new Date().getFullYear();
}


// Optional: Skip link accessibility support
const skip = document.querySelector('a[href="#main"]');
if(skip){
skip.addEventListener('click', e => {
e.preventDefault();
document.getElementById('main').focus();
});
}
