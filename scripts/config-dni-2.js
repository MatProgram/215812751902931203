function config() {

    let dni_elements = {
        numero: document.getElementById("dni-number") || {},
        surname: document.getElementById("dni-surname") || {},
        name: document.getElementById("dni-name") || {},
        sex: document.getElementById("dni-sex") || {},
        birth: document.getElementById("dni-birth") || {},
        issue: document.getElementById("dni-issue") || {},
        expiration: document.getElementById("dni-expiration") || {},
        tramite_num: document.getElementById("dni-tramite-num") || {},
        ejemplar: document.getElementById('dni-ejemplar') || {},
        image: document.getElementById('dni-image') || {},
        address: document.getElementById('dni-address') || {},
        mrz: document.getElementById('dni-mrz') || {},
        firma: document.getElementById('dni-firma')
    }
    
    dni_elements.surname.innerText = localStorage.getItem('dni_surname') || 'DIAZ'
    dni_elements.name.innerText = localStorage.getItem('dni_name') || 'RAMIRO SEBASTIAN'
    dni_elements.sex.innerText = localStorage.getItem('dni_sex') || 'A'
    dni_elements.birth.innerText = localStorage.getItem('dni_birthdate') || '24 JUN/ JUN 2009'
    dni_elements.issue.innerText = localStorage.getItem('dni_emission') || '29 JUN/ JUN 2015'
    dni_elements.expiration.innerText = localStorage.getItem('dni_expiration') || '24 JUN/ JUN 2026'
    dni_elements.tramite_num.innerText = localStorage.getItem('dni_tramite_num') || '0123456789012345'
    dni_elements.ejemplar.innerText = localStorage.getItem('dni_ejemplar') || 'A'
    dni_elements.numero.innerText = localStorage.getItem('dni_numero') || '49.439.339'
    dni_elements.image.src = localStorage.getItem('dni_image') || 'https://media.discordapp.net/attachments/1293342794215325717/1304558906600722464/uNa4D4e.png?ex=672fd4a8&is=672e8328&hm=b216dc44936d97af3eb1f60f1e816aa74ccb45ccd7fb1b686274991c54164ea1&=&format=webp&quality=lossless'
    dni_elements.firma.src = localStorage.getItem('dni_firma') || 'https://media.discordapp.net/attachments/1293342794215325717/1304565788652601495/kDQh4HH.png?ex=672fdb11&is=672e8991&hm=eed7c13cbccfba9df43dfde1a2d5325246c891c0a8231c8b075bfc95d1b3761a&=&format=webp&quality=lossless'
    dni_elements.address.innerHTML = '<font style="font-size: calc(7px * var(--dni-size-multiplier)); font-weight: 500; letter-spacing: 0;">DOMICILIO</font> ' + localStorage.getItem('dni_address') || 'Jhon Kennedy 468'
    dni_elements.mrz.innerText = localStorage.getItem('dni_mrz')
}
