let links = document.querySelectorAll('#lnks a');

links.forEach(link => {
    console.log(links);

    link.addEventListener('click', function(){
        links.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    })
})